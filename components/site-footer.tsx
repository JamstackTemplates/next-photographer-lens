import { business } from '../content/business';
import { DarkroomOpticsBackdrop } from './artwork/borders';
import { ZoneScaleBar } from './artwork/motifs';
import { OpenBadge } from './open-badge';
import { SiteLink } from './site-link';

export function SiteFooter() {
  return (
    <footer className="darkroom-band relative mt-16 overflow-hidden border-t border-darkroom-line">
      {/* Zone System 0–IX scale bar along top edge */}
      <ZoneScaleBar />
      <DarkroomOpticsBackdrop className="opacity-[0.08]" />

      <div className="wrap relative z-10 pt-14 pb-10">
        {/* Three narrow gallery-label columns */}
        <div className="grid gap-10 border-b border-darkroom-line pb-12 md:grid-cols-3">
          {/* Column 1: Studio & address */}
          <div className="space-y-2.5 text-sm">
            <p className="font-narrow text-xs font-semibold tracking-[0.14em] text-darkroom-muted uppercase">
              Studio
            </p>
            <p className="text-darkroom-ink">{business.name}</p>
            <p className="text-darkroom-muted">
              {business.address.studio}, {business.address.street}
              <br />
              {business.address.city}, {business.address.region} {business.address.postalCode}
            </p>
            <p className="text-xs text-darkroom-muted">{business.directions}</p>
          </div>

          {/* Column 2: Hours & live status */}
          <div className="space-y-2.5 text-sm">
            <p className="font-narrow text-xs font-semibold tracking-[0.14em] text-darkroom-muted uppercase">
              Studio hours
            </p>
            <dl className="grid grid-cols-[auto_1fr] gap-x-5 gap-y-1 text-darkroom-ink">
              <dt className="text-darkroom-muted">Tue–Fri</dt>
              <dd>10:00–18:00</dd>
              <dt className="text-darkroom-muted">Sat</dt>
              <dd>10:00–14:00</dd>
              <dt className="text-darkroom-muted">Sun–Mon</dt>
              <dd className="text-darkroom-muted">Closed (on location)</dd>
            </dl>
            <p className="pt-1 text-xs text-darkroom-ink">
              <OpenBadge hours={business.hours} />
            </p>
          </div>

          {/* Column 3: Contact & links */}
          <div className="space-y-2.5 text-sm">
            <p className="font-narrow text-xs font-semibold tracking-[0.14em] text-darkroom-muted uppercase">
              Enquiries
            </p>
            <p>
              <a
                href={`mailto:${business.email}`}
                className="text-darkroom-ink underline decoration-mark/70 underline-offset-4 hover:text-mark"
              >
                {business.email}
              </a>
            </p>
            {business.phone ? (
              <p>
                <a
                  href={`tel:${business.phone.replace(/[^\d+]/g, '')}`}
                  className="text-darkroom-muted hover:text-darkroom-ink"
                >
                  {business.phone}
                </a>
              </p>
            ) : null}
            <p className="pt-2 flex flex-wrap gap-x-4 gap-y-1 font-narrow text-xs tracking-[0.12em] uppercase text-darkroom-muted">
              <SiteLink href="/galleries/" className="hover:text-darkroom-ink">Galleries</SiteLink>
              <SiteLink href="/packages/" className="hover:text-darkroom-ink">Packages</SiteLink>
              <SiteLink href="/about/" className="hover:text-darkroom-ink">About</SiteLink>
              <SiteLink href="/contact/" className="hover:text-darkroom-ink">Contact</SiteLink>
            </p>
          </div>
        </div>

        {/* Oversized wordmark set in Zone II on the darkroom band */}
        <p
          aria-hidden="true"
          className="mt-8 select-none font-serif text-[clamp(3.2rem,11vw,8.5rem)] leading-[0.9] tracking-tight text-zone-2"
        >
          Silver <em className="italic">Frame</em>
        </p>

        {/* Edge-print credit line */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-darkroom-line/70 pt-5 font-edge text-[13px] text-darkroom-muted">
          <span>SILVER FRAME 400 ▸ ASHEVILLE NC ▸ {business.serviceArea.toUpperCase()}</span>
          <span title="Made with love by jamstacks.net">
            with <span role="img" aria-label="love">❤️</span>{' '}
            <a className="text-darkroom-ink no-underline hover:underline" href="https://jamstacks.net">
              jamstacks.net
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
