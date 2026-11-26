export const DIARY_STATUSES = ['open', 'few-left', 'full'] as const;
export type DiaryStatus = (typeof DIARY_STATUSES)[number];

export interface DiaryEntry {
  /** YYYY-MM from 2027-01 through 2027-12 in order. */
  month: string;
  /** Availability status for the month. */
  status: DiaryStatus;
  /** Optional short note shown beneath the frame. */
  note?: string;
}

/** Static "Updated" date set by the studio owner. Never computed from the build clock. */
export const diaryUpdated = 'November 2026';

export const diary: readonly DiaryEntry[] = [
  { month: '2027-01', status: 'open', note: 'Studio portraits only' },
  { month: '2027-02', status: 'open' },
  { month: '2027-03', status: 'open' },
  { month: '2027-04', status: 'few-left' },
  { month: '2027-05', status: 'full' },
  { month: '2027-06', status: 'few-left', note: 'Weekdays only' },
  { month: '2027-07', status: 'open' },
  { month: '2027-08', status: 'open' },
  { month: '2027-09', status: 'few-left' },
  { month: '2027-10', status: 'full' },
  { month: '2027-11', status: 'few-left' },
  { month: '2027-12', status: 'open', note: 'Elopements and family sessions' },
];

export const MONTH_SHORT_NAMES = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
] as const;

export const DIARY_STATUS_LABELS: Record<DiaryStatus, string> = {
  open: 'Open',
  'few-left': 'Few left',
  full: 'Full',
};

const EXPECTED_MONTHS = Array.from({ length: 12 }, (_, i) => `2027-${String(i + 1).padStart(2, '0')}`);

export function validateDiary(
  entries: readonly DiaryEntry[] = diary,
  updated: string = diaryUpdated,
): void {
  if (!updated.trim()) {
    throw new Error('diaryUpdated: required static date string');
  }
  if (entries.length !== 12) {
    throw new Error(`diary: expected 12 months (2027-01 to 2027-12), found ${entries.length}`);
  }
  const statusSet = new Set<string>(DIARY_STATUSES);
  const seen = new Set<string>();
  for (let i = 0; i < EXPECTED_MONTHS.length; i++) {
    const expected = EXPECTED_MONTHS[i];
    const entry = entries[i];
    if (seen.has(entry.month)) {
      throw new Error(`diary: duplicate month "${entry.month}"`);
    }
    seen.add(entry.month);
    if (entry.month !== expected) {
      throw new Error(`diary[${i}]: expected "${expected}" in order, found "${entry.month}"`);
    }
    if (!statusSet.has(entry.status)) {
      throw new Error(`diary[${entry.month}]: unknown status "${entry.status}"`);
    }
  }
}
