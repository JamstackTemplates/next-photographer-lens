export interface TeamMember {
  /** Unique URL-safe identifier. */
  id: string;
  /** Full name. */
  name: string;
  /** Studio role. */
  role: string;
  /** Short editorial biography. */
  bio: string;
  /** Decorative edge code shown below the pegged portrait. */
  edgeCode: string;
}

export interface Milestone {
  /** Year of the studio milestone. */
  year: string;
  /** Short milestone caption. */
  text: string;
  /** Decorative negative frame code. */
  edgeCode: string;
}

export interface BagItem {
  /** Unique URL-safe identifier. */
  id: string;
  /** Numbered callout index (1..8) matching the camera-bag flat-lay diagram. */
  number: number;
  /** Item name. */
  label: string;
  /** What the studio uses it for. */
  note: string;
}

export const team: readonly TeamMember[] = [
  {
    id: 'mara-ellison',
    name: 'Mara Ellison',
    role: 'Lead photographer',
    bio: 'Darkroom-trained, natural-light first, has photographed 140+ weddings.',
    edgeCode: '01A',
  },
  {
    id: 'theo-vance',
    name: 'Theo Vance',
    role: 'Second photographer & retoucher',
    bio: 'Former line cook; reads a reception like a dinner service.',
    edgeCode: '02A',
  },
];

export const milestones: readonly Milestone[] = [
  { year: '2012', text: 'First roll developed at a community darkroom', edgeCode: '01A' },
  { year: '2016', text: 'Full time', edgeCode: '02A' },
  { year: '2019', text: 'Studio opens on Battery Park Avenue', edgeCode: '03A' },
  { year: '2022', text: 'Theo joins', edgeCode: '04A' },
  { year: '2025', text: '140th wedding', edgeCode: '05A' },
];

export const bagItems: readonly BagItem[] = [
  { id: 'tlr', number: 1, label: 'Twin-lens reflex', note: 'For slow portraits' },
  { id: 'rangefinder', number: 2, label: '35mm rangefinder', note: 'For black-and-white rolls' },
  { id: 'mirrorless-pair', number: 3, label: 'Two mirrorless bodies', note: 'For wedding days' },
  { id: 'fifty', number: 4, label: '50mm f/1.4', note: 'Primary documentary lens' },
  { id: 'eighty-five', number: 5, label: '85mm f/1.8', note: 'Portraits and ceremony distance' },
  { id: 'meter', number: 6, label: 'Handheld light meter', note: 'Incident readings in window light' },
  { id: 'film-cans', number: 7, label: 'Four film canisters', note: 'HP5 and Portra' },
  { id: 'grease-pencil', number: 8, label: 'Grease pencil', note: 'For marking contact prints' },
];

const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export function validateTeam(
  members: readonly TeamMember[] = team,
  milestoneList: readonly Milestone[] = milestones,
  bagList: readonly BagItem[] = bagItems,
): void {
  const seenMembers = new Set<string>();
  for (const m of members) {
    if (!m.id || !SLUG_RE.test(m.id)) throw new Error(`team: invalid id "${m.id}"`);
    if (seenMembers.has(m.id)) throw new Error(`team: duplicate id "${m.id}"`);
    seenMembers.add(m.id);
    if (!m.name.trim() || !m.role.trim() || !m.bio.trim()) {
      throw new Error(`team[${m.id}]: name, role and bio are required`);
    }
  }

  for (const [i, ms] of milestoneList.entries()) {
    if (!/^\d{4}$/.test(ms.year) || !ms.text.trim()) {
      throw new Error(`milestones[${i}]: 4-digit year and text are required`);
    }
  }

  const seenBag = new Set<string>();
  for (const item of bagList) {
    if (!item.id || !SLUG_RE.test(item.id)) throw new Error(`bag: invalid id "${item.id}"`);
    if (seenBag.has(item.id)) throw new Error(`bag: duplicate id "${item.id}"`);
    seenBag.add(item.id);
    if (!item.label.trim() || !item.note.trim()) {
      throw new Error(`bag[${item.id}]: label and note are required`);
    }
  }
}
