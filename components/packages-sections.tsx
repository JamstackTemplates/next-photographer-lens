import type { ReactNode } from 'react';
import {
  addOns,
  availabilityLabel,
  formatAddOnUnit,
  formatUsd,
  packages,
} from '../content/packages';
import {
  ApertureIrisBackdrop,
  CuttingMatBackdrop,
  DarkroomOpticsBackdrop,
  DeckleEdgeBorder,
  ExposureRulerBorder,
  GalleryPin,
  SprocketEdgeDivider,
} from './artwork/borders';
import { BulldogPeg, GreaseCircle, WindowMatCorner } from './artwork/icons';
import { NegativeStrip } from './negative-strip';
import { PrintFrame } from './prints/registry';

export function WeddingPlacards({
  eyebrow,
  heading,
  note,
}: {
  eyebrow: string;
  heading: string;
  note: string;
}) {
  const items = packages.filter(p => p.category === 'weddings');
  const heights = ['lg:mt-4', 'lg:mt-0', 'lg:mt-9'];

  return (
    <section id="weddings" className="mat-board-surface relative overflow-hidden py-16 sm:py-20">
      <CuttingMatBackdrop />
      <div className="wrap relative z-10">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-2 font-serif text-[clamp(2rem,4vw,3.25rem)] text-ink">{heading}</h2>
        <p className="mt-2 max-w-[52ch] text-base text-muted">{note}</p>

        <div className="mt-12 grid gap-7 lg:grid-cols-3 lg:items-start">
          {items.map((pkg, i) => (
            <article
              key={pkg.id}
              data-package-id={pkg.id}
              className={`window-mat relative p-7 pt-9 ${heights[i] ?? ''}`}
            >
              <GalleryPin className="absolute -top-2 left-1/2 -translate-x-1/2" />
              <WindowMatCorner className="absolute top-3 left-3 text-line" />
              <WindowMatCorner className="absolute right-3 bottom-3 rotate-180 text-line" />

              {pkg.highlight ? (
                <div className="mb-4 inline-flex items-center gap-2 border border-mark/70 bg-bg px-3 py-1 font-narrow text-xs font-semibold tracking-[0.12em] text-accent-ink uppercase">
                  Most asked about
                </div>
              ) : null}

              <div className="flex items-start justify-between gap-3">
                <h3 className="font-serif text-3xl text-ink">{pkg.name}</h3>
                <span className="shrink-0 border border-line px-2.5 py-0.5 font-narrow text-[11px] font-semibold tracking-[0.1em] text-muted uppercase">
                  {availabilityLabel(pkg.availability)}
                </span>
              </div>

              <div className="mt-5 pb-5 border-b border-line/70">
                <span className="relative inline-block">
                  {pkg.highlight ? <GreaseCircle /> : null}
                  <span className="font-narrow text-xs tracking-[0.12em] text-muted uppercase">from </span>
                  <span className="font-serif text-4xl text-ink">{formatUsd(pkg.priceFrom)}</span>
                  <span className="ml-1.5 font-narrow text-xs text-muted">USD</span>
                </span>
              </div>

              <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                <div>
                  <dt className="font-narrow text-xs tracking-[0.1em] text-muted uppercase">Coverage</dt>
                  <dd className="text-ink">{pkg.coverage}</dd>
                </div>
                <div>
                  <dt className="font-narrow text-xs tracking-[0.1em] text-muted uppercase">Photographers</dt>
                  <dd className="text-ink">{pkg.photographers}</dd>
                </div>
                <div>
                  <dt className="font-narrow text-xs tracking-[0.1em] text-muted uppercase">Finished images</dt>
                  <dd className="text-ink">{pkg.images}</dd>
                </div>
                <div>
                  <dt className="font-narrow text-xs tracking-[0.1em] text-muted uppercase">Delivery</dt>
                  <dd className="text-ink">{pkg.delivery}</dd>
                </div>
              </dl>

              <ul className="mt-5 space-y-2 border-t border-line/60 pt-4 text-sm text-muted">
                {pkg.includes.map(line => (
                  <li key={line} className="flex items-start gap-2.5">
                    <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-mark" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PortraitLabels({
  eyebrow,
  heading,
}: {
  eyebrow: string;
  heading: string;
}) {
  const items = packages.filter(p => p.category === 'portraits');

  return (
    <section id="portraits" className="bg-bg py-16 sm:py-20">
      <div className="wrap grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_15rem]">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="mt-2 font-serif text-[clamp(2rem,4vw,3.25rem)] text-ink">{heading}</h2>

          <div className="mt-8 space-y-6">
            {items.map(pkg => (
              <article
                key={pkg.id}
                data-package-id={pkg.id}
                className="window-mat grid gap-6 p-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center sm:p-8"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-serif text-3xl text-ink">{pkg.name}</h3>
                    <span className="border border-line px-2.5 py-0.5 font-narrow text-[11px] font-semibold tracking-[0.1em] text-muted uppercase">
                      {availabilityLabel(pkg.availability)}
                    </span>
                  </div>
                  <p className="mt-2 font-narrow text-sm text-muted">
                    {pkg.coverage} · {pkg.images} finished images · Delivery in {pkg.delivery}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-1.5 text-sm text-muted">
                    {pkg.includes.map(item => (
                      <li key={item} className="flex items-center gap-2">
                        <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-mark" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-line/70 pt-4 sm:border-t-0 sm:border-l sm:pt-0 sm:pl-7 sm:text-right">
                  <span className="block font-narrow text-xs tracking-[0.12em] text-muted uppercase">
                    from
                  </span>
                  <span className="font-serif text-4xl text-ink">{formatUsd(pkg.priceFrom)}</span>
                  <span className="block font-narrow text-xs text-muted">USD</span>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Small pegged window-portrait print beside the labels */}
        <div aria-hidden="true" className="relative mx-auto hidden w-56 rotate-2 pt-4 lg:block">
          <div className="absolute inset-x-0 top-4 h-px bg-line" />
          <div className="relative z-10 -mb-3 flex justify-center">
            <BulldogPeg />
          </div>
          <div className="border border-line bg-raised p-2 shadow-lg">
            <PrintFrame scene="window-portrait" orientation="portrait" decorative />
            <span className="mt-1.5 block font-edge text-[13px] text-muted">06A</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CommercialRateCard({
  eyebrow,
  heading,
  note,
}: {
  eyebrow: string;
  heading: string;
  note: string;
}) {
  const items = packages.filter(p => p.category === 'commercial');

  return (
    <section id="commercial" className="mat-board-surface relative">
      <ExposureRulerBorder label="COMMERCIAL LICENSING · HALF & FULL DAY" />
      <div className="wrap py-16 sm:py-20">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-2 font-serif text-[clamp(2rem,4vw,3.25rem)] text-ink">{heading}</h2>
        <p className="mt-2 max-w-[54ch] text-base text-muted">{note}</p>

        {/* Two-column darkroom chemical-label rate card */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {items.map(pkg => (
            <article
              key={pkg.id}
              data-package-id={pkg.id}
              className="border-2 border-ink/80 bg-raised p-6 sm:p-8"
            >
              <div className="flex items-baseline justify-between gap-4 border-b-2 border-ink/80 pb-4">
                <div>
                  <p className="font-edge text-[13px] text-mark">COMMERCIAL RATE CARD</p>
                  <h3 className="mt-1 font-serif text-3xl text-ink">{pkg.name}</h3>
                </div>
                <div className="text-right">
                  <span className="block font-narrow text-xs tracking-[0.12em] text-muted uppercase">
                    from
                  </span>
                  <span className="font-serif text-3xl text-ink">{formatUsd(pkg.priceFrom)}</span>
                </div>
              </div>

              <dl className="divide-y divide-line/70 text-sm">
                <div className="flex justify-between gap-4 py-3">
                  <dt className="font-narrow tracking-[0.1em] text-muted uppercase">Coverage</dt>
                  <dd className="font-medium text-ink">{pkg.coverage}</dd>
                </div>
                <div className="flex justify-between gap-4 py-3">
                  <dt className="font-narrow tracking-[0.1em] text-muted uppercase">Images</dt>
                  <dd className="font-medium text-ink">{pkg.images}</dd>
                </div>
                <div className="flex justify-between gap-4 py-3">
                  <dt className="font-narrow tracking-[0.1em] text-muted uppercase">Delivery</dt>
                  <dd className="font-medium text-ink">{pkg.delivery}</dd>
                </div>
                <div className="flex justify-between gap-4 py-3">
                  <dt className="font-narrow tracking-[0.1em] text-muted uppercase">Availability</dt>
                  <dd className="font-medium text-ink">{availabilityLabel(pkg.availability)}</dd>
                </div>
              </dl>

              <div className="mt-4 border-t border-line pt-4">
                <p className="font-narrow text-xs font-semibold tracking-[0.12em] text-muted uppercase">
                  Included &amp; licensing
                </p>
                <ul className="mt-2 space-y-1.5 text-sm text-muted">
                  {pkg.includes.map(line => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AddOnsStrip({
  eyebrow,
  heading,
}: {
  eyebrow: string;
  heading: string;
}) {
  return (
    <section id="add-ons" className="darkroom-band relative overflow-hidden">
      <DeckleEdgeBorder fillClass="fill-surface" flip />
      <DarkroomOpticsBackdrop />
      <div className="wrap relative z-10 py-14 sm:py-18">
        <p className="font-narrow text-xs font-semibold tracking-[0.16em] text-mark uppercase">
          {eyebrow}
        </p>
        <h2 className="mt-2 mb-8 font-serif text-[clamp(2rem,4vw,3.1rem)] text-darkroom-ink">
          {heading}
        </h2>

        {/* Negative strip on desktop, vertical list on mobile */}
        <div className="hidden md:block">
          <NegativeStrip edgeLabel="ADD-ONS ▸ SILVER FRAME 400">
            {addOns.map((item, i) => (
              <div
                key={item.id}
                className="flex w-56 shrink-0 flex-col justify-between border border-zone-3 bg-zone-1 p-4"
              >
                <div>
                  <span aria-hidden="true" className="font-edge text-[13px] text-mark">
                    {String(i + 1).padStart(2, '0')}A
                  </span>
                  <h3 className="mt-2 font-serif text-xl text-darkroom-ink">{item.name}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-darkroom-muted">{item.note}</p>
                </div>
                <p className="mt-4 border-t border-darkroom-line pt-3 font-serif text-2xl text-darkroom-ink">
                  from {formatUsd(item.price)}
                  <span className="font-narrow text-xs text-darkroom-muted">
                    {formatAddOnUnit(item.unit)}
                  </span>
                </p>
              </div>
            ))}
          </NegativeStrip>
        </div>

        <ul className="divide-y divide-darkroom-line border-y border-darkroom-line md:hidden">
          {addOns.map((item, i) => (
            <li key={item.id} className="flex items-baseline justify-between gap-4 py-4">
              <div>
                <span aria-hidden="true" className="font-edge text-[13px] text-mark">
                  {String(i + 1).padStart(2, '0')}A{' '}
                </span>
                <span className="font-serif text-xl text-darkroom-ink">{item.name}</span>
                <p className="mt-1 text-xs text-darkroom-muted">{item.note}</p>
              </div>
              <span className="shrink-0 font-serif text-xl text-darkroom-ink">
                from {formatUsd(item.price)}
                <span className="font-narrow text-xs text-darkroom-muted">
                  {formatAddOnUnit(item.unit)}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </div>
      <SprocketEdgeDivider />
    </section>
  );
}

export function PackagesFaq({
  heading,
  items,
}: {
  heading: string;
  items: readonly { question: string; answer: ReactNode }[];
}) {
  return (
    <section aria-labelledby="faq-heading" className="relative overflow-hidden bg-bg py-16 sm:py-20">
      <ApertureIrisBackdrop align="right" />
      <div className="wrap relative z-10 max-w-4xl">
        <p className="eyebrow">Questions</p>
        <h2 id="faq-heading" className="mt-2 font-serif text-[clamp(2rem,4vw,3.1rem)] text-ink">
          {heading}
        </h2>

        <div className="envelope-faq mt-8 space-y-3">
          {items.map(item => (
            <details key={item.question}>
              <summary>{item.question}</summary>
              <div className="border-t border-line/50 px-6 py-4 text-sm leading-relaxed text-muted sm:px-9 sm:text-base">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
