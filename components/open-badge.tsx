'use client';

import { useEffect, useState } from 'react';
import { studioStatus, type OpeningHours, type StudioStatus } from '../lib/hours';
import { site } from '../lib/site';

/** Neutral static output ("Studio hours, Eastern Time"); browser refreshes in America/New_York every minute. */
export function OpenBadge({
  hours,
  variant = 'inline',
}: {
  hours: readonly OpeningHours[];
  variant?: 'inline' | 'door-sign';
}) {
  const [status, setStatus] = useState<StudioStatus | null>(null);

  useEffect(() => {
    const update = () => setStatus(studioStatus(hours, site.timeZone));
    update();
    const timer = setInterval(update, 60_000);
    return () => clearInterval(timer);
  }, [hours]);

  const text = status ? status.label : 'Studio hours, Eastern Time';

  if (variant === 'door-sign') {
    const isOpen = status?.open ?? false;
    return (
      <div className="inline-flex flex-wrap items-center gap-3 border border-line bg-darkroom px-4 py-2.5 text-darkroom-ink">
        <span
          aria-hidden="true"
          className={`inline-block h-2.5 w-2.5 rounded-full ${
            status === null ? 'bg-zone-5' : isOpen ? 'bg-[#7db878]' : 'bg-mark'
          }`}
        />
        <span className="font-narrow text-xs font-semibold tracking-[0.14em] uppercase text-darkroom-muted">
          {status === null ? 'Studio' : isOpen ? 'Free · Open' : 'In use · Closed'}
        </span>
        <span className="text-sm font-medium text-darkroom-ink">{text}</span>
      </div>
    );
  }

  return (
    <span className="inline-flex items-center gap-2">
      <span
        aria-hidden="true"
        className={`inline-block h-2 w-2 rounded-full ${
          status === null ? 'bg-zone-5' : status.open ? 'bg-[#7db878]' : 'bg-mark'
        }`}
      />
      <span>{text}</span>
    </span>
  );
}
