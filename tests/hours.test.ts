import assert from 'node:assert/strict';
import { test } from 'node:test';
import { business } from '../content/business.ts';
import { DAYS, openingLabel, studioStatus, validateHours, type OpeningHours } from '../lib/hours.ts';

const genericHours: OpeningHours[] = DAYS.map(day =>
  day === 'Monday' ? { day } : { day, opens: '09:00', closes: '17:00' },
);
const at = (date: string, zone = 'America/New_York') => openingLabel(genericHours, zone, new Date(date));
const studioAt = (date: string, zone = 'America/New_York') =>
  studioStatus(business.hours, zone, new Date(date));

test('opening inclusive, closing exclusive; business zone wins over visitor zone', () => {
  assert.equal(at('2026-11-17T13:59:00Z'), 'Closed · opens today at 09:00');
  assert.equal(at('2026-11-17T14:00:00Z'), 'Open now · until 17:00');
  assert.equal(at('2026-11-17T22:00:00Z'), 'Closed · opens Wednesday at 09:00');
  assert.equal(at('2026-11-17T14:00:00Z', 'Asia/Tokyo'), 'Closed · opens Wednesday at 09:00');
});

test('Silver Frame studio hours: Tue/Fri/Sat boundaries and Sun–Mon closed with next opening Tuesday', () => {
  // Tuesday 2026-11-17 (EST, UTC-5): 09:59 closed, 10:00 open
  const tueBefore = studioAt('2026-11-17T14:59:00Z');
  assert.equal(tueBefore.open, false);
  assert.equal(tueBefore.label, 'Opens today at 10:00 am');

  const tueOpen = studioAt('2026-11-17T15:00:00Z');
  assert.equal(tueOpen.open, true);
  assert.equal(tueOpen.label, 'Studio open now · until 6:00 pm');

  // Friday 2026-11-20 (EST, UTC-5): 17:59 open, 18:00 closed
  const friLastMin = studioAt('2026-11-20T22:59:00Z');
  assert.equal(friLastMin.open, true);
  assert.equal(friLastMin.label, 'Studio open now · until 6:00 pm');

  const friClosed = studioAt('2026-11-20T23:00:00Z');
  assert.equal(friClosed.open, false);
  assert.equal(friClosed.label, 'Opens Saturday at 10:00 am');

  // Saturday 2026-11-21 (EST, UTC-5): 13:59 open, 14:00 closed (next opening Tuesday)
  const satLastMin = studioAt('2026-11-21T18:59:00Z');
  assert.equal(satLastMin.open, true);
  assert.equal(satLastMin.label, 'Studio open now · until 2:00 pm');

  const satClosed = studioAt('2026-11-21T19:00:00Z');
  assert.equal(satClosed.open, false);
  assert.equal(satClosed.nextDay, 'Tuesday');
  assert.equal(satClosed.label, 'Opens Tuesday at 10:00 am');

  // Sunday 2026-11-22 & Monday 2026-11-23: closed with next opening Tuesday
  const sun = studioAt('2026-11-22T17:00:00Z');
  assert.equal(sun.open, false);
  assert.equal(sun.nextDay, 'Tuesday');
  assert.match(sun.label, /Closed today — weddings on location/);
  assert.match(sun.label, /Tuesday at 10:00 am/);

  const mon = studioAt('2026-11-23T17:00:00Z');
  assert.equal(mon.open, false);
  assert.equal(mon.nextDay, 'Tuesday');
  assert.match(mon.label, /Closed today — weddings on location/);
  assert.match(mon.label, /Tuesday at 10:00 am/);
});

test('2026 DST changeovers in America/New_York (8 March & 1 November) preserve local service times', () => {
  // 8 March 2026: Spring forward (EST UTC-5 -> EDT UTC-4 at 02:00)
  assert.equal(at('2026-03-08T12:59:00Z'), 'Closed · opens today at 09:00');
  assert.equal(at('2026-03-08T13:00:00Z'), 'Open now · until 17:00');
  // Studio is closed Sunday 8 March; Tuesday 10 March is EDT (UTC-4): 10:00 EDT = 14:00Z
  assert.equal(studioAt('2026-03-08T16:00:00Z').nextDay, 'Tuesday');
  assert.equal(studioAt('2026-03-10T13:59:00Z').open, false);
  assert.equal(studioAt('2026-03-10T14:00:00Z').open, true);

  // 1 November 2026: Fall back (EDT UTC-4 -> EST UTC-5 at 02:00)
  assert.equal(at('2026-11-01T13:59:00Z'), 'Closed · opens today at 09:00');
  assert.equal(at('2026-11-01T14:00:00Z'), 'Open now · until 17:00');
  // Studio is closed Sunday 1 November; Tuesday 3 November is EST (UTC-5): 10:00 EST = 15:00Z
  assert.equal(studioAt('2026-11-01T16:00:00Z').nextDay, 'Tuesday');
  assert.equal(studioAt('2026-11-03T14:59:00Z').open, false);
  assert.equal(studioAt('2026-11-03T15:00:00Z').open, true);

  // Missing/invalid zones stay neutral
  assert.equal(studioAt('2026-11-17T15:00:00Z', '').label, 'Studio hours, Eastern Time');
  assert.equal(studioAt('2026-11-17T15:00:00Z', 'Mars/Base').label, 'Studio hours, Eastern Time');
});

test('invalid/incomplete/overnight intervals name the weekday to fix', () => {
  assert.doesNotThrow(() => validateHours(business.hours));
  for (const opens of ['24:00', '9:00', '18:00']) {
    assert.throws(
      () => validateHours(genericHours.map(x => (x.day === 'Tuesday' ? { ...x, opens } : x))),
      /Tuesday/,
    );
  }
  assert.throws(() => validateHours(genericHours.slice(1)), /Monday/);
  assert.throws(
    () => validateHours(genericHours.map(x => (x.day === 'Tuesday' ? { ...x, closes: undefined } : x))),
    /Tuesday/,
  );
});
