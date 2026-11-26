import type { Metadata } from 'next';
import { EaselFrame, ExposureRulerBorder } from '../../components/artwork/borders';
import {
  ClockIcon,
  EnvelopeIcon,
  GreasePencilIcon,
  MapPinIcon,
  PhoneIcon,
} from '../../components/artwork/icons';
import { PeggedEnvelopeArt } from '../../components/artwork/motifs';
import { CopyEmail } from '../../components/copy-email';
import { GoogleMap } from '../../components/google-map';
import { JamstacksSupportForm } from '../../components/jamstacks-support-form';
import { OpenBadge } from '../../components/open-badge';
import { PageHead } from '../../components/page-head';
import { TimeZoneNote } from '../../components/time-zone-note';
import { business } from '../../content/business';
import { mapDirectionsUrl, mapSearchUrl } from '../../lib/maps';
import { absoluteUrl } from '../../lib/paths';
import { site } from '../../lib/site';

export const metadata: Metadata = {
  title: 'Contact',
  description: business.enquiries.introduction,
  alternates: { canonical: absoluteUrl('/contact/') },
};

export default function ContactPage() {
  const hosted = Boolean(site.jamstacksSite && site.jamstacksEmbedUrl);

  return (
    <>
      <PageHead
        eyebrow="Enquiries"
        title={
          <>
            Send an <em className="italic">enquiry</em>
          </>
        }
        edgeCode="REPLY IN 2 DAYS"
        artwork={<PeggedEnvelopeArt />}
      >
        <p>{business.enquiries.introduction}</p>
      </PageHead>

      {/* Form (wide window mat) + Checklist (narrow gallery label) */}
      <section className="bg-bg py-14 sm:py-18">
        <div className="wrap grid items-start gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)]">
          {/* Hosted Jamstacks form or email fallback framed as a print in a window mat */}
          <EaselFrame>
            <div aria-label="Enquiry form" className="window-mat p-6 sm:p-9">
              {hosted ? (
                <JamstacksSupportForm
                  siteId={site.jamstacksSite}
                  embedUrl={site.jamstacksEmbedUrl}
                  email={business.email}
                />
              ) : (
                <div>
                  <p className="eyebrow">Direct email</p>
                  <h2 className="mt-2 font-serif text-3xl text-ink">Write to the studio directly</h2>
                  <p className="mt-3 text-base leading-relaxed text-muted">
                    The online enquiry form is not connected on this preview. Send your note straight
                    to{' '}
                    <a className="text-link font-medium" href={`mailto:${business.email}`}>
                      {business.email}
                    </a>{' '}
                    and Mara will reply within two working days.
                  </p>
                </div>
              )}

              <p className="mt-6 border-t border-line/70 pt-4 text-sm leading-relaxed text-muted">
                {business.enquiries.dateNote}
              </p>
            </div>
          </EaselFrame>

          {/* Narrow gallery label: checklist + always-visible email & phone */}
          <aside aria-label="Message checklist and direct contact" className="space-y-8">
            <div className="border-l-2 border-mark pl-6">
              <div className="flex items-center gap-2 text-ink">
                <GreasePencilIcon size={20} className="text-mark" />
                <h2 className="font-serif text-2xl text-ink">What to put in your message</h2>
              </div>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
                {business.enquiries.usefulToInclude.map(tip => (
                  <li key={tip} className="flex items-start gap-2.5">
                    <span aria-hidden="true" className="mt-0.5 font-bold text-mark">
                      ✓
                    </span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-line pt-6">
              <p className="eyebrow">Direct contact</p>
              <p className="mt-3 flex items-center gap-2.5 text-lg font-medium text-ink">
                <EnvelopeIcon size={20} className="shrink-0 text-mark" />
                <a className="text-link wrap-anywhere" href={`mailto:${business.email}`}>
                  {business.email}
                </a>
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-3">
                <CopyEmail email={business.email} />
              </div>

              {business.phone ? (
                <p className="mt-5 flex items-center gap-2.5 text-lg text-ink">
                  <PhoneIcon size={20} className="shrink-0 text-mark" />
                  <a
                    className="text-link"
                    href={`tel:${business.phone.replace(/[^\d+]/g, '')}`}
                  >
                    {business.phone}
                  </a>
                </p>
              ) : null}
            </div>
          </aside>
        </div>
      </section>

      {/* Studio hours (door sign) + Address, directions & optional Google Map */}
      <section className="mat-board-surface relative">
        <ExposureRulerBorder label="GROVE ARCADE · BATTERY PARK AVENUE · EASTERN TIME" />
        <div className="wrap grid gap-10 py-14 sm:py-18 lg:grid-cols-[minmax(0,0.45fr)_minmax(0,0.55fr)]">
          {/* Studio hours + darkroom door sign */}
          <div className="space-y-6">
            <div className="flex items-center gap-2.5">
              <ClockIcon size={20} className="text-mark" />
              <h2 className="font-serif text-3xl text-ink">Studio hours</h2>
            </div>

            <OpenBadge hours={business.hours} variant="door-sign" />

            <dl className="divide-y divide-line/70 border-y border-line text-sm">
              <div className="flex justify-between gap-4 py-3">
                <dt className="font-narrow font-semibold tracking-[0.08em] text-muted uppercase">
                  Tuesday – Friday
                </dt>
                <dd className="text-ink">10:00 – 18:00</dd>
              </div>
              <div className="flex justify-between gap-4 py-3">
                <dt className="font-narrow font-semibold tracking-[0.08em] text-muted uppercase">
                  Saturday
                </dt>
                <dd className="text-ink">10:00 – 14:00</dd>
              </div>
              <div className="flex justify-between gap-4 py-3">
                <dt className="font-narrow font-semibold tracking-[0.08em] text-muted uppercase">
                  Sunday – Monday
                </dt>
                <dd className="text-muted">Closed (weddings &amp; shoots on location)</dd>
              </div>
            </dl>
            <TimeZoneNote />

            <div className="border-t border-line/70 pt-5">
              <p className="eyebrow">Find the studio</p>
              <p className="mt-2.5 flex items-start gap-2.5 text-base text-ink">
                <MapPinIcon size={20} className="mt-0.5 shrink-0 text-mark" />
                <span>
                  {business.name}
                  <br />
                  {business.address.formatted}
                </span>
              </p>
              <p className="mt-2 text-sm text-muted">{business.directions}.</p>
              <p className="mt-2 text-sm text-muted">
                Serving {business.serviceArea}. {business.travelNote}
              </p>
              <p className="mt-4 flex flex-wrap gap-5 font-narrow text-xs font-semibold tracking-[0.12em] uppercase">
                <a
                  href={mapSearchUrl(business.mapQuery)}
                  target="_blank"
                  rel="noreferrer"
                  className="text-link"
                >
                  Open in Google Maps
                </a>
                <a
                  href={mapDirectionsUrl(business.mapQuery)}
                  target="_blank"
                  rel="noreferrer"
                  className="text-link"
                >
                  Get directions
                </a>
              </p>
            </div>
          </div>

          {/* Optional keyless Google Map querying Grove Arcade, Asheville, NC */}
          <div className="window-mat p-3">
            <GoogleMap
              address={business.mapQuery}
              title="Map showing Grove Arcade beside Silver Frame Photography in Asheville, NC"
            />
          </div>
        </div>
      </section>
    </>
  );
}
