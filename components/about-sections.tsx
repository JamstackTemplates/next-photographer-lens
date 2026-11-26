import type { ReactNode } from 'react';
import { business } from '../content/business';
import { bagItems, milestones, team } from '../content/team';
import {
  ApertureIrisBackdrop,
  CuttingMatBackdrop,
  DarkroomOpticsBackdrop,
  DeckleEdgeBorder,
  ExposureRulerBorder,
  SprocketEdgeDivider,
  ViewfinderBackdrop,
} from './artwork/borders';
import { BulldogPeg, GreaseUnderline, MapPinIcon } from './artwork/icons';
import { CameraBagFlatLay, MaraPortraitPrint, TheoPortraitPrint } from './artwork/studio-art';
import { NegativeStrip } from './negative-strip';
import { SiteLink } from './site-link';

export function AboutHero({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  children: ReactNode;
}) {
  return (
    <header className="mat-board-surface relative overflow-x-clip">
      <ViewfinderBackdrop className="opacity-[0.05] dark:opacity-[0.075]" />
      <div className="wrap relative z-10 grid items-center gap-8 py-12 sm:py-16 md:grid-cols-[minmax(0,0.45fr)_minmax(0,0.55fr)] lg:gap-0 lg:py-20">
        <div className="window-mat mx-auto w-full max-w-sm p-3.5 md:mx-0 md:max-w-none">
          <MaraPortraitPrint />
        </div>

        <div className="relative z-10 md:pl-10">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-3 font-serif text-[clamp(2.8rem,6vw,5.2rem)] leading-[0.95] text-ink md:-ml-16">
            {title}
          </h1>
          <GreaseUnderline className="mt-3" />
          <div className="mt-5 max-w-[42ch] text-base leading-relaxed text-muted sm:text-lg">
            {children}
          </div>
        </div>
      </div>
      <ExposureRulerBorder label="STUDIO 4 · BATTERY PARK AVENUE · EST. 2016" />
    </header>
  );
}

export function StoryColumn({ children }: { children: ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-bg py-16 sm:py-20">
      <ApertureIrisBackdrop align="right" />
      <div className="wrap relative z-10">
        <div className="mx-auto max-w-[40rem] space-y-5 text-base leading-[1.75] text-ink/90 sm:text-lg">
          {children}
        </div>
      </div>
    </section>
  );
}

export function PrinciplesZigZag({
  eyebrow,
  heading,
  principles,
}: {
  eyebrow: string;
  heading: string;
  principles: readonly { numeral: string; title: string; body: string }[];
}) {
  return (
    <section className="mat-board-surface relative">
      <ExposureRulerBorder label="HOW WE WORK · THREE STUDIO HABITS" />
      <div className="wrap py-16 sm:py-20">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-2 font-serif text-[clamp(2rem,4vw,3.25rem)] text-ink">{heading}</h2>

        <ol className="mt-12 space-y-12">
          {principles.map((item, i) => (
            <li
              key={item.numeral}
              className={`grid items-baseline gap-4 border-t border-line pt-6 md:grid-cols-[7rem_minmax(0,32rem)] ${
                i === 1 ? 'md:ml-auto md:max-w-[40rem]' : i === 2 ? 'md:ml-24' : ''
              }`}
            >
              <span
                aria-hidden="true"
                className="font-serif text-6xl leading-none italic text-accent-ink sm:text-7xl"
              >
                {item.numeral}
              </span>
              <div>
                <h3 className="font-serif text-2xl text-ink sm:text-3xl">{item.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-muted">{item.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function InTheBagSection({
  eyebrow,
  heading,
  intro,
}: {
  eyebrow: string;
  heading: string;
  intro: string;
}) {
  return (
    <section className="relative overflow-hidden bg-bg py-16 sm:py-20">
      <CuttingMatBackdrop />
      <div className="wrap relative z-10">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-2 font-serif text-[clamp(2rem,4vw,3.25rem)] text-ink">{heading}</h2>
        <p className="mt-2 max-w-[50ch] text-base text-muted">{intro}</p>

        <div className="mt-10 grid items-start gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
          <div className="text-ink">
            <CameraBagFlatLay />
          </div>

          <ol className="divide-y divide-line/70 border-y border-line">
            {bagItems.map(item => (
              <li key={item.id} className="flex items-baseline gap-4 py-3.5">
                <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-on-accent">
                  {item.number}
                </span>
                <div>
                  <span className="font-serif text-lg text-ink">{item.label}</span>
                  <span className="ml-2 text-sm text-muted">— {item.note}</span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export function TeamLineSection({
  eyebrow,
  heading,
}: {
  eyebrow: string;
  heading: string;
}) {
  return (
    <section className="darkroom-band relative overflow-hidden">
      <DeckleEdgeBorder fillClass="fill-bg" flip />
      <DarkroomOpticsBackdrop />
      <div className="wrap relative z-10 py-14 sm:py-20">
        <p className="font-narrow text-xs font-semibold tracking-[0.16em] text-mark uppercase">
          {eyebrow}
        </p>
        <h2 className="mt-2 font-serif text-[clamp(2rem,4vw,3.25rem)] text-darkroom-ink">
          {heading}
        </h2>

        <div className="relative mt-10">
          <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-3.5 h-px bg-zone-5/70" />
          <div className="grid gap-10 sm:grid-cols-2 lg:max-w-4xl">
            {team.map((member, idx) => (
              <article
                key={member.id}
                className="drying-print"
                style={{ '--tilt': idx === 0 ? '-1.8deg' : '2deg' } as React.CSSProperties}
              >
                <div className="relative z-10 -mb-3 flex justify-center">
                  <BulldogPeg />
                </div>
                <div className="bg-zone-9 p-2.5 shadow-2xl">
                  {member.id === 'mara-ellison' ? <MaraPortraitPrint /> : <TheoPortraitPrint />}
                </div>
                <div className="mt-4 flex items-baseline justify-between gap-2">
                  <div>
                    <h3 className="font-serif text-2xl text-darkroom-ink">{member.name}</h3>
                    <p className="font-narrow text-xs tracking-[0.12em] text-mark uppercase">
                      {member.role}
                    </p>
                  </div>
                  <span aria-hidden="true" className="edge-code text-darkroom-muted">
                    {member.edgeCode}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-darkroom-muted">{member.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
      <SprocketEdgeDivider />
    </section>
  );
}

export function MilestonesStrip({
  eyebrow,
  heading,
}: {
  eyebrow: string;
  heading: string;
}) {
  return (
    <section className="bg-surface py-16 sm:py-20">
      <div className="wrap">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-2 mb-8 font-serif text-[clamp(2rem,4vw,3.1rem)] text-ink">{heading}</h2>

        <NegativeStrip edgeLabel="MILESTONES ▸ 2012–2025">
          {milestones.map(ms => (
            <div
              key={ms.year}
              className="flex w-52 shrink-0 flex-col justify-between border border-zone-3 bg-zone-1 p-4"
            >
              <span aria-hidden="true" className="font-edge text-[13px] text-mark">
                {ms.edgeCode}
              </span>
              <p className="mt-3 font-serif text-4xl text-darkroom-ink">{ms.year}</p>
              <p className="mt-2 text-xs leading-relaxed text-darkroom-muted">{ms.text}</p>
            </div>
          ))}
        </NegativeStrip>
      </div>
    </section>
  );
}

export function StudioVisitSection({
  eyebrow,
  heading,
  ctaLabel,
}: {
  eyebrow: string;
  heading: string;
  ctaLabel: string;
}) {
  return (
    <section className="bg-bg py-16 sm:py-20">
      <div className="wrap grid items-center gap-8 border-t border-line pt-12 md:grid-cols-[minmax(0,1fr)_auto]">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="mt-2 font-serif text-3xl text-ink sm:text-4xl">{heading}</h2>
          <p className="mt-4 flex items-start gap-2.5 text-base text-ink">
            <MapPinIcon size={20} className="mt-1 shrink-0 text-mark" />
            <span>
              {business.address.formatted}
              <span className="mt-1 block text-sm text-muted">{business.directions}</span>
            </span>
          </p>
          <p className="mt-3 text-sm text-muted">
            Studio hours: Tue–Fri 10:00–18:00 · Sat 10:00–14:00 · {business.closedDaysNote}
          </p>
        </div>
        <div>
          <SiteLink href="/contact/" className="button">
            {ctaLabel}
          </SiteLink>
        </div>
      </div>
    </section>
  );
}
