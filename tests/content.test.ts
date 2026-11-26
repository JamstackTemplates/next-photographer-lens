import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import { business, validateBusiness } from '../content/business.ts';
import { diary, diaryUpdated, validateDiary } from '../content/diary.ts';
import {
  galleries,
  PRINT_SCENE_KEYS,
  validateGalleries,
  type Gallery,
} from '../content/galleries.ts';
import {
  addOns,
  packages,
  startingPriceForCategory,
  validatePackages,
  type Package,
} from '../content/packages.ts';
import { bagItems, milestones, team, validateTeam } from '../content/team.ts';
import { businessStructuredData, jsonLd } from '../lib/structured-data.ts';

test('all typed content collections pass validation', () => {
  assert.doesNotThrow(() => validateBusiness(business));
  assert.doesNotThrow(() => validateGalleries(galleries, PRINT_SCENE_KEYS));
  assert.doesNotThrow(() => validatePackages(packages, addOns));
  assert.doesNotThrow(() => validateDiary(diary, diaryUpdated));
  assert.doesNotThrow(() => validateTeam(team, milestones, bagItems));
});

test('gallery validation rejects duplicate IDs, unknown scenes, too few frames, unknown category, and bad featured count', () => {
  // Duplicate gallery ID
  assert.throws(
    () => validateGalleries([galleries[0], { ...galleries[1], id: galleries[0].id }, ...galleries.slice(2)]),
    new RegExp(galleries[0].id),
  );

  // Duplicate frame ID
  const dupFrameGalleries = galleries.map((g, i) =>
    i === 1
      ? { ...g, frames: [{ ...g.frames[0], id: galleries[0].frames[0].id }, ...g.frames.slice(1)] }
      : g,
  );
  assert.throws(
    () => validateGalleries(dupFrameGalleries),
    new RegExp(galleries[0].frames[0].id),
  );

  // Unknown scene
  const badSceneGalleries = galleries.map((g, i) =>
    i === 0
      ? { ...g, frames: [{ ...g.frames[0], scene: 'not-in-registry' as Gallery['frames'][number]['scene'] }, ...g.frames.slice(1)] }
      : g,
  );
  assert.throws(() => validateGalleries(badSceneGalleries), /not-in-registry/);

  // Fewer than 3 frames
  const shortGallery = galleries.map((g, i) => (i === 0 ? { ...g, frames: g.frames.slice(0, 2) } : g));
  assert.throws(() => validateGalleries(shortGallery), new RegExp(galleries[0].id));

  // Unknown category
  const badCat = galleries.map((g, i) =>
    i === 0 ? { ...g, category: 'events' as Gallery['category'] } : g,
  );
  assert.throws(() => validateGalleries(badCat), /events/);

  // Fewer than 3 featured
  const tooFewFeatured = galleries.map((g, i) => ({ ...g, featured: i < 2 }));
  assert.throws(() => validateGalleries(tooFewFeatured), /featured/);

  // More than 4 featured
  const tooManyFeatured = galleries.map(g => ({ ...g, featured: true }));
  assert.throws(() => validateGalleries(tooManyFeatured), /featured/);
});

test('package, add-on and bag validation rejects duplicate IDs, bad prices and multiple highlights per category', () => {
  // Duplicate package ID
  assert.throws(
    () => validatePackages([packages[0], { ...packages[1], id: packages[0].id }, ...packages.slice(2)], addOns),
    new RegExp(packages[0].id),
  );

  // Duplicate add-on ID
  assert.throws(
    () => validatePackages(packages, [addOns[0], { ...addOns[1], id: addOns[0].id }, ...addOns.slice(2)]),
    new RegExp(addOns[0].id),
  );

  // Duplicate bag ID
  assert.throws(
    () => validateTeam(team, milestones, [bagItems[0], { ...bagItems[1], id: bagItems[0].id }, ...bagItems.slice(2)]),
    new RegExp(bagItems[0].id),
  );

  // Multiple highlights in one category
  const twoHighlights = packages.map(p => (p.category === 'weddings' ? { ...p, highlight: true } : p));
  assert.throws(() => validatePackages(twoHighlights, addOns), /highlight/);

  // Non-positive or non-integer prices
  for (const badPrice of [0, -100, 199.5]) {
    const badPkgs = packages.map((p, i) => (i === 0 ? { ...p, priceFrom: badPrice } : p));
    assert.throws(() => validatePackages(badPkgs, addOns), new RegExp(packages[0].id));
  }

  // Unknown category on package
  const badPkgCat = packages.map((p, i) =>
    i === 0 ? { ...p, category: 'editorial' as Package['category'] } : p,
  );
  assert.throws(() => validatePackages(badPkgCat, addOns), /editorial/);
});

test('diary validation rejects missing months, out-of-order months and unknown status', () => {
  assert.throws(() => validateDiary(diary.slice(0, 11), diaryUpdated), /12 months/);

  const swapped = [diary[1], diary[0], ...diary.slice(2)];
  assert.throws(() => validateDiary(swapped, diaryUpdated), /2027-01/);

  const badStatus = diary.map((d, i) =>
    i === 4 ? { ...d, status: 'booked' as (typeof diary)[number]['status'] } : d,
  );
  assert.throws(() => validateDiary(badStatus, diaryUpdated), /2027-05/);
});

test('computed starting prices and ProfessionalService schema stay derived from content', () => {
  assert.equal(startingPriceForCategory('weddings'), 1850);
  assert.equal(startingPriceForCategory('portraits'), 295);
  assert.equal(startingPriceForCategory('commercial'), 1400);

  const schema = businessStructuredData();
  assert.equal(schema['@type'], 'ProfessionalService');
  assert.equal(schema.founder['@type'], 'Person');
  assert.equal(schema.founder.name, 'Mara Ellison');
  assert.equal(schema.founder.jobTitle, 'Photographer');
  assert.equal(schema.openingHoursSpecification.length, 5);
  assert.deepEqual(
    schema.makesOffer.map(o => o.price),
    packages.map(p => p.priceFrom),
  );
});

test('inline JSON-LD escapes closing script content without changing values', () => {
  const value = { name: '</script><script>alert(1)</script>', text: '< & >' };
  const encoded = jsonLd(value);
  assert.ok(!encoded.includes('<'), 'JSON-LD must escape <');
  assert.deepEqual(JSON.parse(encoded), value);
});

test('page copy avoids booking/deposit/reservation wording', () => {
  const forbidden = /\b(book now|reserve|deposit|secure your date|confirmed)\b/i;
  const pageFiles = [
    '../app/page.tsx',
    '../app/galleries/page.tsx',
    '../app/packages/page.tsx',
    '../app/about/page.tsx',
    '../app/contact/page.tsx',
    '../app/not-found.tsx',
  ];
  for (const rel of pageFiles) {
    const src = readFileSync(new URL(rel, import.meta.url), 'utf8');
    assert.ok(!forbidden.test(src), `${rel}: contains forbidden booking wording`);
  }
});
