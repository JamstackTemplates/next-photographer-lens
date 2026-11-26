/** Weekly opening-hours model. Time zone stays in site.config.json. */
export const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] as const;
export type Day = (typeof DAYS)[number];

export interface OpeningHours {
  /** Every weekday occurs exactly once. */
  day: Day;
  /** Inclusive local HH:MM; omit both times for a closed day. */
  opens?: string;
  /** Exclusive local HH:MM; overnight intervals are deliberately unsupported. */
  closes?: string;
}

export interface StudioStatus {
  /** True when the studio is currently within today's opening interval. */
  open: boolean;
  /** Human-readable status sentence. */
  label: string;
  /** Next opening day when closed (e.g. "today", "Tuesday"). */
  nextDay?: string;
}

const clock = /^([01]\d|2[0-3]):[0-5]\d$/;
const minutes = (value: string) => Number(value.slice(0, 2)) * 60 + Number(value.slice(3));

export function formatClock12(hhmm: string): string {
  const h = Number(hhmm.slice(0, 2));
  const m = hhmm.slice(3);
  const period = h >= 12 ? 'pm' : 'am';
  const hour12 = h % 12 === 0 ? 12 : h % 12;
  return `${hour12}:${m} ${period}`;
}

export function validateHours(hours: readonly OpeningHours[]): void {
  for (const day of DAYS) {
    const matches = hours.filter(entry => entry.day === day);
    if (matches.length !== 1) throw new Error(`hours: ${day} must occur exactly once`);
    const { opens, closes } = matches[0];
    if (opens === undefined && closes === undefined) continue;
    if (!opens || !closes || !clock.test(opens) || !clock.test(closes) || minutes(opens) >= minutes(closes)) {
      throw new Error(`hours: ${day} needs HH:MM opening before closing; overnight service is unsupported`);
    }
  }
  if (hours.length !== 7) throw new Error('hours: expected seven weekdays');
}

function localTimeParts(timeZone: string, now: Date): { index: number; current: number } | null {
  if (!timeZone) return null;
  let parts: Intl.DateTimeFormatPart[];
  try {
    parts = new Intl.DateTimeFormat('en-US', {
      timeZone,
      weekday: 'long',
      hour: 'numeric',
      minute: 'numeric',
      hourCycle: 'h23',
    }).formatToParts(now);
  } catch {
    return null;
  }
  const part = (type: string) => parts.find(entry => entry.type === type)?.value ?? '';
  const index = DAYS.indexOf(part('weekday') as Day);
  if (index < 0) return null;
  return { index, current: Number(part('hour')) * 60 + Number(part('minute')) };
}

/** Browser callers supply the clock; build/static views never compute current availability. */
export function openingLabel(hours: readonly OpeningHours[], timeZone: string, now = new Date()): string {
  const fallback = 'See opening hours';
  if (!timeZone) return fallback;
  validateHours(hours);
  const local = localTimeParts(timeZone, now);
  if (!local) return fallback;
  const today = hours.find(entry => entry.day === DAYS[local.index])!;
  if (today.opens && today.closes && local.current >= minutes(today.opens) && local.current < minutes(today.closes)) {
    return `Open now · until ${today.closes}`;
  }
  for (let offset = 0; offset <= 7; offset++) {
    const day = DAYS[(local.index + offset) % 7];
    const entry = hours.find(value => value.day === day)!;
    if (entry.opens && (offset > 0 || local.current < minutes(entry.opens))) {
      return `Closed · opens ${offset === 0 ? 'today' : day} at ${entry.opens}`;
    }
  }
  return 'Closed · see opening hours';
}

/** Studio-specific live status for Contact and footer badges. */
export function studioStatus(hours: readonly OpeningHours[], timeZone: string, now = new Date()): StudioStatus {
  const fallback: StudioStatus = { open: false, label: 'Studio hours, Eastern Time' };
  if (!timeZone) return fallback;
  validateHours(hours);
  const local = localTimeParts(timeZone, now);
  if (!local) return fallback;

  const today = hours.find(entry => entry.day === DAYS[local.index])!;
  if (today.opens && today.closes && local.current >= minutes(today.opens) && local.current < minutes(today.closes)) {
    return { open: true, label: `Studio open now · until ${formatClock12(today.closes)}` };
  }

  for (let offset = 0; offset <= 7; offset++) {
    const day = DAYS[(local.index + offset) % 7];
    const entry = hours.find(value => value.day === day)!;
    if (entry.opens && (offset > 0 || local.current < minutes(entry.opens))) {
      const nextDay = offset === 0 ? 'today' : day;
      const openTime = formatClock12(entry.opens);
      if (!today.opens) {
        return {
          open: false,
          nextDay,
          label: `Closed today — weddings on location · opens ${nextDay} at ${openTime}`,
        };
      }
      return {
        open: false,
        nextDay,
        label: `Opens ${nextDay} at ${openTime}`,
      };
    }
  }

  return { open: false, label: 'Closed today — weddings on location' };
}
