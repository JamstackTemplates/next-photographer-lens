# Silver Frame Photography (`next-photographer-lens`)

A self-contained static Next.js website for **Silver Frame Photography**—an editorial, darkroom-inspired photography studio theme built around silver-gelatin prints on a drying line, 35mm negative strips, gallery wall placards, and a Jamstacks hosted enquiry form.

All sample names, galleries, prices and studio details are fictitious. Local development requires Node 24 or later and npm.

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Image-first home page: matted hero print, Three Rooms index, drying line, four developing trays, starting points, 2027 negative-strip diary, About teaser and `ProfessionalService` JSON-LD |
| `/galleries/` | Wedding (drying line), Portrait (window-mat triptych) and Commercial (light table) galleries with progressive category filter and native `<dialog>` enlarged print viewer |
| `/packages/` | Starting prices in USD as gallery placards, portrait labels, commercial chemical-label rate cards, add-ons negative strip and FAQ print envelopes |
| `/about/` | Mara Ellison & Theo Vance story, three working principles, overhead camera-bag flat lay, pegged team portraits, milestones strip and studio visit details |
| `/contact/` | Hosted Jamstacks enquiry form (when configured) or visible email fallback, message checklist, live studio hours door sign (`America/New_York`) and keyless Google Map |
| `/404.html` | Fogged-print static 404 page |

## Make it yours (file ownership)

| File | Owns |
| --- | --- |
| `content/business.ts` | Studio name, email, phone, address, Grove Arcade directions, map query, hours and enquiry guidance |
| `content/galleries.ts` | Six galleries, featured flags (3–4 featured), and 20 frames referencing `components/prints/registry.tsx` |
| `content/packages.ts` | Wedding, portrait and commercial packages (`priceFrom`, availability, highlight) and add-ons; Home "Three rooms" prices and JSON-LD `makesOffer` derive from here |
| `content/diary.ts` | Twelve 2027 diary months (`open` / `few-left` / `full`) and static `diaryUpdated` label |
| `content/team.ts` | Team bios, milestones and numbered camera-bag flat-lay items |
| `app/**/page.tsx` | Page-specific headings, prose, labels and calls to action in page order |
| `site.config.json` | Public site name, meta description, domain, `timeZone` (`America/New_York`) and Jamstacks `siteId`/`cdnUrl` |
| `app/tailwind.input.css` | Print-room (light) and safelight (dark) colour tokens, Zone 0–IX print scale, textures and motion rules |
| `lib/structured-data.ts` | `ProfessionalService` JSON-LD derived from `content/business.ts` and `content/packages.ts` |

### Common owner edits

- **Update 2027 diary availability:** edit `diary` statuses and `diaryUpdated` in `content/diary.ts`.
- **Update starting prices or availability:** edit `packages` or `addOns` in `content/packages.ts`. Home's "Three rooms", "Starting points", `/packages/` and schema `makesOffer` all update automatically on rebuild.
- **Add or feature a gallery:** edit `galleries` in `content/galleries.ts` (3–4 galleries may be `featured: true`, and each frame's `scene` must exist in `components/prints/registry.tsx`).
- **Edit page headlines or FAQs:** edit the corresponding `app/**/page.tsx` file directly.

## Self-hosted fonts & licences

Fonts are bundled locally via Fontsource (no third-party font CDN requests):

- **DM Serif Display** (`@fontsource/dm-serif-display`, regular & italic) — SIL Open Font License 1.1
- **Mona Sans Variable** (`@fontsource-variable/mona-sans`, weight & width axes) — SIL Open Font License 1.1
- **Doto Variable** (`@fontsource-variable/doto`, decorative film edge codes only) — SIL Open Font License 1.1

## Local preview & checks

```sh
npm ci
npm run check
npm run dev
```

To test a project-path export and static server:

```sh
PAGES_BASE_PATH=/preview PAGES_BASE_URL=https://owner.github.io/preview npm run build
npm start -- --base /preview --port 3000
```

## Public configuration & Contact contract

- `site.config.json` holds only public configuration (`name`, `description`, `domain`, `timeZone`, `jamstacks.siteId`, `jamstacks.cdnUrl`). Never store secrets there.
- When `JAMSTACKS_SITE` (or `site.config.json`'s `jamstacks.siteId`) is set, `/contact/` renders `<jamstacks-support-form>` and loads one `{cdn}/sites/{siteId}/embed.js` bootstrap. Without an ID, `/contact/` shows the visible email fallback with no embed request.
- `SiteLink` enforces full-document navigation to and from `/contact/` so the hosted runtime always bootstraps cleanly.
- All wording describes enquiries only—dates are held only once the studio confirms in writing.

## Gallery publishing assets

`jamstacks/` is removable gallery-only metadata. Normal builds, tests and GitHub Pages deployments never import it. To regenerate gallery captures and verify the manifest:

```sh
node /home/mythz/src/mythz/jamstacks.net/tools/template-screenshots/capture.mjs \
  --template /path/to/next-photographer-lens --modes light,dark --executable /usr/bin/chromium
node --test jamstacks/config.test.mjs
```
