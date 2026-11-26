import { GALLERY_CATEGORIES, type GalleryCategory } from './galleries.ts';

export const PACKAGE_AVAILABILITY = ['open', 'limited', 'paused'] as const;
export type PackageAvailability = (typeof PACKAGE_AVAILABILITY)[number];

export const ADDON_UNITS = ['each', 'hour', 'roll'] as const;
export type AddOnUnit = (typeof ADDON_UNITS)[number];

export interface Package {
  /** URL-safe unique identifier. */
  id: string;
  /** Category: weddings, portraits or commercial. */
  category: GalleryCategory;
  /** Display name of the package. */
  name: string;
  /** Starting price in whole US dollars (> 0). Displayed as "from $X". */
  priceFrom: number;
  /** Coverage length (e.g. "8 hours"). */
  coverage: string;
  /** Number of photographers included (1 or 2). */
  photographers: 1 | 2;
  /** Approximate number of finished images delivered. */
  images: string;
  /** Typical turnaround time in weeks. */
  delivery: string;
  /** Included deliverables and planning items. */
  includes: readonly string[];
  /** Current availability label for enquiries. */
  availability: PackageAvailability;
  /** Optional featured highlight (at most one per category). */
  highlight?: boolean;
}

export interface AddOn {
  /** URL-safe unique identifier. */
  id: string;
  /** Display name. */
  name: string;
  /** Price in whole US dollars (> 0). */
  price: number;
  /** Billing unit: each, hour or roll. */
  unit: AddOnUnit;
  /** Short note on when or how the add-on applies. */
  note: string;
}

export const packages: readonly Package[] = [
  {
    id: 'elopement',
    category: 'weddings',
    name: 'Elopement',
    priceFrom: 1850,
    coverage: '3 hours',
    photographers: 1,
    images: '~250',
    delivery: '4 weeks',
    includes: ['Location scouting call', 'Online gallery', 'Print release'],
    availability: 'open',
  },
  {
    id: 'full-day',
    category: 'weddings',
    name: 'Full day',
    priceFrom: 4200,
    coverage: '8 hours',
    photographers: 2,
    images: '~700',
    delivery: '6 weeks',
    includes: ['Engagement session', 'Timeline planning', 'Online gallery', 'Print release'],
    availability: 'limited',
    highlight: true,
  },
  {
    id: 'silver-album',
    category: 'weddings',
    name: 'The Silver Album',
    priceFrom: 5600,
    coverage: '9 hours',
    photographers: 2,
    images: '~800',
    delivery: '8 weeks',
    includes: [
      'Everything in Full day',
      '12×12 linen album with 30 spreads',
      'Two parent albums',
    ],
    availability: 'limited',
  },
  {
    id: 'studio-portrait',
    category: 'portraits',
    name: 'Studio portrait',
    priceFrom: 295,
    coverage: '45 minutes',
    photographers: 1,
    images: '15',
    delivery: '2 weeks',
    includes: ['North-window studio', 'Two outfits', 'Online gallery'],
    availability: 'open',
    highlight: true,
  },
  {
    id: 'family-session',
    category: 'portraits',
    name: 'Family on location',
    priceFrom: 480,
    coverage: '90 minutes',
    photographers: 1,
    images: '40',
    delivery: '3 weeks',
    includes: ['Home or park in Asheville', 'Online gallery', 'One 8×10 fibre print'],
    availability: 'open',
  },
  {
    id: 'commercial-half-day',
    category: 'commercial',
    name: 'Half day',
    priceFrom: 1400,
    coverage: '4 hours',
    photographers: 1,
    images: '~60',
    delivery: '2 weeks',
    includes: ['Shot list planning', 'Web licence for one year', 'Retouching of 10 heroes'],
    availability: 'open',
    highlight: true,
  },
  {
    id: 'commercial-full-day',
    category: 'commercial',
    name: 'Full day',
    priceFrom: 2500,
    coverage: '8 hours',
    photographers: 1,
    images: '~120',
    delivery: '3 weeks',
    includes: ['Shot list planning', 'Web and print licence for two years', 'Retouching of 25 heroes'],
    availability: 'open',
  },
];

export const addOns: readonly AddOn[] = [
  {
    id: 'second-shooter',
    name: 'Second photographer',
    price: 600,
    unit: 'each',
    note: 'Theo, for elopements and portrait events',
  },
  {
    id: 'extra-hour',
    name: 'Extra hour of coverage',
    price: 350,
    unit: 'hour',
    note: 'Weddings only',
  },
  {
    id: 'film-roll',
    name: '35mm black-and-white roll',
    price: 120,
    unit: 'roll',
    note: 'Developed in our darkroom and scanned',
  },
  {
    id: 'fibre-print',
    name: '11×14 fibre-base print',
    price: 180,
    unit: 'each',
    note: 'Hand-printed and selenium-toned',
  },
  {
    id: 'rush-edit',
    name: 'Rush delivery',
    price: 250,
    unit: 'each',
    note: 'Gallery delivered in 7 days',
  },
];

export function formatUsd(amount: number): string {
  return `$${amount.toLocaleString('en-US')}`;
}

export function formatAddOnUnit(unit: AddOnUnit): string {
  return unit === 'each' ? '' : ` / ${unit}`;
}

export function availabilityLabel(availability: PackageAvailability): string {
  switch (availability) {
    case 'open':
      return 'Open for 2027';
    case 'limited':
      return 'Limited dates';
    case 'paused':
      return 'Enquiries paused';
  }
}

/** Computed minimum starting price for a category from the packages list. */
export function startingPriceForCategory(
  category: GalleryCategory,
  list: readonly Package[] = packages,
): number {
  const matching = list.filter(pkg => pkg.category === category);
  if (!matching.length) {
    throw new Error(`packages: no packages found for category "${category}"`);
  }
  return Math.min(...matching.map(pkg => pkg.priceFrom));
}

const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export function validatePackages(
  pkgList: readonly Package[] = packages,
  addOnList: readonly AddOn[] = addOns,
): void {
  const categorySet = new Set<string>(GALLERY_CATEGORIES);
  const availabilitySet = new Set<string>(PACKAGE_AVAILABILITY);
  const unitSet = new Set<string>(ADDON_UNITS);
  const seenPkgIds = new Set<string>();
  const highlightByCategory = new Map<string, string>();

  for (const pkg of pkgList) {
    if (!pkg.id || !SLUG_RE.test(pkg.id)) {
      throw new Error(`packages: invalid URL-safe package id "${pkg.id}"`);
    }
    if (seenPkgIds.has(pkg.id)) {
      throw new Error(`packages: duplicate package id "${pkg.id}"`);
    }
    seenPkgIds.add(pkg.id);

    if (!categorySet.has(pkg.category)) {
      throw new Error(`packages[${pkg.id}]: unknown category "${pkg.category}"`);
    }
    if (!availabilitySet.has(pkg.availability)) {
      throw new Error(`packages[${pkg.id}]: unknown availability "${pkg.availability}"`);
    }
    if (!Number.isInteger(pkg.priceFrom) || pkg.priceFrom <= 0) {
      throw new Error(`packages[${pkg.id}]: priceFrom must be a positive whole USD integer`);
    }
    if (pkg.photographers !== 1 && pkg.photographers !== 2) {
      throw new Error(`packages[${pkg.id}]: photographers must be 1 or 2`);
    }
    for (const field of ['name', 'coverage', 'images', 'delivery'] as const) {
      if (!pkg[field].trim()) throw new Error(`packages[${pkg.id}].${field}: required`);
    }
    if (!pkg.includes.length) {
      throw new Error(`packages[${pkg.id}].includes: at least one included item required`);
    }
    if (pkg.highlight) {
      const existing = highlightByCategory.get(pkg.category);
      if (existing) {
        throw new Error(
          `packages[${pkg.id}]: category "${pkg.category}" already has highlight "${existing}"`,
        );
      }
      highlightByCategory.set(pkg.category, pkg.id);
    }
  }

  const seenAddOnIds = new Set<string>();
  for (const addOn of addOnList) {
    if (!addOn.id || !SLUG_RE.test(addOn.id)) {
      throw new Error(`addOns: invalid URL-safe add-on id "${addOn.id}"`);
    }
    if (seenAddOnIds.has(addOn.id)) {
      throw new Error(`addOns: duplicate add-on id "${addOn.id}"`);
    }
    seenAddOnIds.add(addOn.id);

    if (!Number.isInteger(addOn.price) || addOn.price <= 0) {
      throw new Error(`addOns[${addOn.id}]: price must be a positive whole USD integer`);
    }
    if (!unitSet.has(addOn.unit)) {
      throw new Error(`addOns[${addOn.id}]: unknown unit "${addOn.unit}"`);
    }
    if (!addOn.name.trim() || !addOn.note.trim()) {
      throw new Error(`addOns[${addOn.id}]: name and note are required`);
    }
  }
}
