export const GALLERY_CATEGORIES = ['weddings', 'portraits', 'commercial'] as const;
export type GalleryCategory = (typeof GALLERY_CATEGORIES)[number];

export const PRINT_ORIENTATIONS = ['landscape', 'portrait', 'square'] as const;
export type PrintOrientation = (typeof PRINT_ORIENTATIONS)[number];

/** Every scene key available in the inline SVG print-scene registry (components/prints/registry.tsx). */
export const PRINT_SCENE_KEYS = [
  'ridge-vows',
  'veil-wind',
  'rings-hands',
  'trail-walk',
  'first-dance',
  'confetti-exit',
  'toast-laugh',
  'table-detail',
  'window-portrait',
  'blind-shadows',
  'hands-book',
  'family-porch',
  'dog-leap',
  'grandma-laugh',
  'bottle-rimlight',
  'copper-still',
  'barrel-row',
  'potter-hands',
  'kiln-shelf',
  'mug-still-life',
] as const;

export type PrintSceneKey = (typeof PRINT_SCENE_KEYS)[number];

export interface GalleryFrame {
  /** Unique frame identifier across all galleries. */
  id: string;
  /** Key in the print-scene registry. */
  scene: PrintSceneKey;
  /** Aspect ratio of the drawn print. */
  orientation: PrintOrientation;
  /** Visible caption and accessible image name. */
  caption: string;
  /** Decorative 35mm film edge frame code (e.g. "14A"). */
  edgeCode: string;
}

export interface Gallery {
  /** URL-safe unique slug, also used as an anchor ID. */
  id: string;
  /** One of weddings, portraits or commercial. */
  category: GalleryCategory;
  /** Editorial title for the gallery. */
  title: string;
  /** Fictitious client name or brand. */
  client: string;
  /** Location of the shoot. */
  place: string;
  /** Month and year or season label. */
  season: string;
  /** Short 2–3 sentence story behind the shoot. */
  story: string;
  /** Whether this gallery appears on the Home drying line (3–4 featured galleries total). */
  featured: boolean;
  /** Ordered prints in this gallery (minimum 3). */
  frames: readonly GalleryFrame[];
}

export const CATEGORY_LABELS: Record<GalleryCategory, string> = {
  weddings: 'Weddings',
  portraits: 'Portraits',
  commercial: 'Commercial',
};

export const galleries: readonly Gallery[] = [
  {
    id: 'craggy-overlook-elopement',
    category: 'weddings',
    title: 'Vows above the cloud line',
    client: 'Ana & Jules',
    place: 'Craggy Gardens overlook, Blue Ridge Parkway',
    season: 'October 2025',
    story:
      'Ana and Jules met us at the trailhead before sunrise with two thermoses of coffee and a borrowed pocket watch. The cloud deck broke just long enough for their vows on the stone overlook, leaving five silver ridges stepping down into the valley.',
    featured: true,
    frames: [
      {
        id: 'craggy-ridge-vows',
        scene: 'ridge-vows',
        orientation: 'landscape',
        caption: 'Vows at the overlook as the fog lifted',
        edgeCode: '14A',
      },
      {
        id: 'craggy-veil-wind',
        scene: 'veil-wind',
        orientation: 'portrait',
        caption: "Ana's veil caught in the ridge wind",
        edgeCode: '15A',
      },
      {
        id: 'craggy-rings-hands',
        scene: 'rings-hands',
        orientation: 'square',
        caption: 'Hands, rings and a borrowed watch',
        edgeCode: '16A',
      },
      {
        id: 'craggy-trail-walk',
        scene: 'trail-walk',
        orientation: 'landscape',
        caption: 'Walking back down the rhododendron tunnel',
        edgeCode: '17A',
      },
    ],
  },
  {
    id: 'river-arts-loft-wedding',
    category: 'weddings',
    title: 'A loft full of string lights',
    client: 'Priya & Sam',
    place: 'Warehouse loft, River Arts District',
    season: 'June 2025',
    story:
      'Ninety guests gathered in a brick warehouse loft above the French Broad River as summer rain tapped the skylights. Theo worked the back tables while Mara stayed close to the dance floor under low catenary bulbs.',
    featured: true,
    frames: [
      {
        id: 'loft-first-dance',
        scene: 'first-dance',
        orientation: 'landscape',
        caption: 'First dance under the string lights',
        edgeCode: '21A',
      },
      {
        id: 'loft-confetti-exit',
        scene: 'confetti-exit',
        orientation: 'landscape',
        caption: 'The confetti exit down the loading ramp',
        edgeCode: '22A',
      },
      {
        id: 'loft-toast-laugh',
        scene: 'toast-laugh',
        orientation: 'portrait',
        caption: "Sam's brother, mid-toast",
        edgeCode: '23A',
      },
      {
        id: 'loft-table-detail',
        scene: 'table-detail',
        orientation: 'square',
        caption: 'Place cards on reclaimed oak',
        edgeCode: '24A',
      },
    ],
  },
  {
    id: 'window-light-portraits',
    category: 'portraits',
    title: 'Window light, north side',
    client: 'Studio sessions',
    place: 'Battery Park Avenue studio',
    season: '2025',
    story:
      'Our north-facing bay on Battery Park Avenue gives steady, directional light from ten until late afternoon. No strobes—just a black wool drape, a wooden stool and forty-five unhurried minutes.',
    featured: true,
    frames: [
      {
        id: 'studio-window-portrait',
        scene: 'window-portrait',
        orientation: 'portrait',
        caption: 'Profile in the north window',
        edgeCode: '06A',
      },
      {
        id: 'studio-blind-shadows',
        scene: 'blind-shadows',
        orientation: 'portrait',
        caption: 'Venetian blind shadow study',
        edgeCode: '07A',
      },
      {
        id: 'studio-hands-book',
        scene: 'hands-book',
        orientation: 'square',
        caption: "A reader's hands",
        edgeCode: '08A',
      },
    ],
  },
  {
    id: 'hollis-porch-family',
    category: 'portraits',
    title: 'Saturday on the porch',
    client: 'The Hollis family',
    place: 'Montford porch',
    season: 'April 2025',
    story:
      'Three generations gathered on a painted porch in Montford before the dogwoods dropped their petals. We kept everyone moving between the steps, the yard and the kitchen doorway while Biscuit refused every command to sit.',
    featured: false,
    frames: [
      {
        id: 'hollis-family-porch',
        scene: 'family-porch',
        orientation: 'landscape',
        caption: 'Three generations on the porch steps',
        edgeCode: '11A',
      },
      {
        id: 'hollis-dog-leap',
        scene: 'dog-leap',
        orientation: 'landscape',
        caption: 'Biscuit, refusing to sit',
        edgeCode: '12A',
      },
      {
        id: 'hollis-grandma-laugh',
        scene: 'grandma-laugh',
        orientation: 'portrait',
        caption: "Grandma June's laugh",
        edgeCode: '13A',
      },
    ],
  },
  {
    id: 'low-gap-distilling',
    category: 'commercial',
    title: 'Copper, oak and rim light',
    client: 'Low Gap Distilling',
    place: 'Swannanoa still house',
    season: 'March 2025',
    story:
      'A full-day story and bottle shoot for Low Gap Distilling during their spring rye run. We worked with a single hard edge light against charred oak and slate to separate glass, copper and steam.',
    featured: true,
    frames: [
      {
        id: 'lowgap-bottle-rimlight',
        scene: 'bottle-rimlight',
        orientation: 'portrait',
        caption: 'Mountain Rye, rim-lit on slate',
        edgeCode: '31A',
      },
      {
        id: 'lowgap-copper-still',
        scene: 'copper-still',
        orientation: 'portrait',
        caption: 'The copper pot still at first run',
        edgeCode: '32A',
      },
      {
        id: 'lowgap-barrel-row',
        scene: 'barrel-row',
        orientation: 'landscape',
        caption: 'Barrel row, warehouse B',
        edgeCode: '33A',
      },
    ],
  },
  {
    id: 'wedge-and-wheel-ceramics',
    category: 'commercial',
    title: 'Hands in the clay',
    client: 'Wedge & Wheel Ceramics',
    place: 'River Arts District',
    season: 'August 2025',
    story:
      'Half a day beside the kick wheel and reduction kiln for Wedge & Wheel’s autumn catalogue. We photographed the throwing process in open garage light, then set up a clean slate table for the Ridge mug line.',
    featured: false,
    frames: [
      {
        id: 'wedge-potter-hands',
        scene: 'potter-hands',
        orientation: 'square',
        caption: 'Centring at the wheel',
        edgeCode: '36A',
      },
      {
        id: 'wedge-kiln-shelf',
        scene: 'kiln-shelf',
        orientation: 'landscape',
        caption: 'A kiln shelf of ash-glazed cups',
        edgeCode: '37A',
      },
      {
        id: 'wedge-mug-still-life',
        scene: 'mug-still-life',
        orientation: 'square',
        caption: 'Catalogue still: the Ridge mug',
        edgeCode: '38A',
      },
    ],
  },
];

const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export function validateGalleries(
  list: readonly Gallery[] = galleries,
  validScenes: readonly string[] = PRINT_SCENE_KEYS,
): void {
  const sceneSet = new Set(validScenes);
  const categorySet = new Set<string>(GALLERY_CATEGORIES);
  const orientationSet = new Set<string>(PRINT_ORIENTATIONS);
  const seenGalleryIds = new Set<string>();
  const seenFrameIds = new Set<string>();
  let featuredCount = 0;

  for (const gallery of list) {
    if (!gallery.id || !SLUG_RE.test(gallery.id)) {
      throw new Error(`galleries: invalid URL-safe gallery id "${gallery.id}"`);
    }
    if (seenGalleryIds.has(gallery.id)) {
      throw new Error(`galleries: duplicate gallery id "${gallery.id}"`);
    }
    seenGalleryIds.add(gallery.id);

    if (!categorySet.has(gallery.category)) {
      throw new Error(`galleries[${gallery.id}]: unknown category "${gallery.category}"`);
    }
    for (const field of ['title', 'client', 'place', 'season', 'story'] as const) {
      if (!gallery[field].trim()) {
        throw new Error(`galleries[${gallery.id}].${field}: required`);
      }
    }
    if (gallery.featured) featuredCount++;
    if (gallery.frames.length < 3) {
      throw new Error(`galleries[${gallery.id}]: expected at least 3 frames, found ${gallery.frames.length}`);
    }

    for (const frame of gallery.frames) {
      if (!frame.id || !SLUG_RE.test(frame.id)) {
        throw new Error(`galleries[${gallery.id}]: invalid frame id "${frame.id}"`);
      }
      if (seenFrameIds.has(frame.id)) {
        throw new Error(`galleries[${gallery.id}]: duplicate frame id "${frame.id}"`);
      }
      seenFrameIds.add(frame.id);

      if (!sceneSet.has(frame.scene)) {
        throw new Error(`galleries[${gallery.id}].frames[${frame.id}]: unknown scene "${frame.scene}"`);
      }
      if (!orientationSet.has(frame.orientation)) {
        throw new Error(`galleries[${gallery.id}].frames[${frame.id}]: unknown orientation "${frame.orientation}"`);
      }
      if (!frame.caption.trim()) {
        throw new Error(`galleries[${gallery.id}].frames[${frame.id}].caption: required`);
      }
      if (!frame.edgeCode.trim()) {
        throw new Error(`galleries[${gallery.id}].frames[${frame.id}].edgeCode: required`);
      }
    }
  }

  if (featuredCount < 3 || featuredCount > 4) {
    throw new Error(`galleries: expected 3–4 featured galleries, found ${featuredCount}`);
  }
}
