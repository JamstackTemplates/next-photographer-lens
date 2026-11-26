import type { CSSProperties, ReactNode } from 'react';
import { business } from '../content/business';
import { DIARY_STATUS_LABELS, diary, diaryUpdated, MONTH_SHORT_NAMES } from '../content/diary';
import { galleries, type GalleryCategory, type PrintSceneKey } from '../content/galleries';
import { formatUsd, packages, startingPriceForCategory } from '../content/packages';
import {
  ApertureIrisBackdrop,
  ContactSheetBorder,
  CuttingMatBackdrop,
  DarkroomOpticsBackdrop,
  DeckleEdgeBorder,
  EaselFrame,
  ExposureRulerBorder,
  GalleryPin,
  SprocketEdgeDivider,
  ViewfinderBackdrop,
} from './artwork/borders';
import { BulldogPeg, WindowMatCorner } from './artwork/icons';
import { DevelopingTraySvg, ZoneScaleBar } from './artwork/motifs';
import { MaraPortraitPrint } from './artwork/studio-art';
import { NegativeStrip } from './negative-strip';
import { PrintFrame } from './prints/registry';
import { SiteLink } from './site-link';
import { asset } from '../lib/paths';

type ChildrenProps = { children: ReactNode };

/* --------------------------------------------------------------------------
   1. Hero — two-column split on fibre paper with dual-theme fine-art hero print
   -------------------------------------------------------------------------- */
function HomeHeroRoot({ children }: ChildrenProps) {
  const heroAlt =
    'Hand-printed silver-gelatin wedding photograph of a couple holding hands on a misty Blue Ridge overlook, mounted in a bevelled window mat and pegged to a darkroom drying wire';

  return (
    <section className="relative overflow-x-clip bg-bg pt-3 pb-12 sm:pt-5 lg:pt-6 lg:pb-14">
      <ViewfinderBackdrop />

      <div className="wrap relative z-10 grid items-center gap-5 lg:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)] lg:gap-0">
        {/* Right on desktop, top on mobile: dual-theme generated fine-art hero print in archival window mat */}
        <div className="relative order-1 lg:order-2 lg:pl-8">
          <div className="relative mx-auto max-w-xl pt-4 lg:ml-auto lg:max-w-none">
            {/* Subtle drying wire */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-x-8 top-7 h-px bg-line/70"
            />
            <div className="relative z-10 -mb-3 flex justify-center">
              <BulldogPeg />
            </div>
            <div className="window-mat relative p-4 sm:p-6 lg:p-7">
              <WindowMatCorner className="absolute top-2.5 left-2.5 text-mark/70" />
              <WindowMatCorner className="absolute top-2.5 right-2.5 rotate-90 text-mark/70" />
              <WindowMatCorner className="absolute bottom-2.5 left-2.5 -rotate-90 text-mark/70" />
              <WindowMatCorner className="absolute right-2.5 bottom-2.5 rotate-180 text-mark/70" />
              <div className="window-mat-inner aspect-[4/3] w-full overflow-hidden border border-line/60 bg-zone-1">
                <img
                  src={asset('/hero-light.jpg')}
                  alt={heroAlt}
                  width={1600}
                  height={1200}
                  fetchPriority="high"
                  className="hero-img-light h-full w-full object-cover"
                />
                <img
                  src={asset('/hero-dark.jpg')}
                  alt={heroAlt}
                  width={1600}
                  height={1200}
                  fetchPriority="high"
                  className="hero-img-dark h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="mt-2.5 flex items-center justify-between gap-2 px-1 text-muted">
              <span aria-hidden="true" className="edge-code whitespace-nowrap text-[11px] sm:text-[13px]">
                14A ▸ SILVER FRAME 400
              </span>
              <span className="whitespace-nowrap font-narrow text-[11px] tracking-[0.12em] uppercase sm:text-xs">
                Craggy Gardens · Blue Ridge Parkway
              </span>
            </div>
          </div>
        </div>

        {/* Left on desktop, bottom on mobile: oversized heading overlapping hero edge */}
        <div className="relative z-20 order-2 lg:order-1 lg:-mr-14 lg:py-6">
          <p className="eyebrow hidden sm:block">Asheville · Western North Carolina</p>
          {children}

          {/* Small pegged thumbnail of bottle-rimlight tilted off bottom-left on desktop */}
          <div
            aria-hidden="true"
            className="mt-8 hidden w-32 -rotate-3 border border-line bg-raised p-1.5 shadow-md lg:block"
          >
            <PrintFrame scene="bottle-rimlight" decorative />
            <span className="mt-1 block font-edge text-[13px] text-muted">31A</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroHeading({ children }: ChildrenProps) {
  return (
    <h1 className="mt-2 font-serif text-[clamp(2.6rem,5.8vw,6rem)] leading-[0.93] tracking-tight text-ink">
      {children}
    </h1>
  );
}

function HeroLead({ children }: ChildrenProps) {
  return (
    <p className="mt-4 max-w-[38ch] text-base leading-relaxed text-muted sm:mt-6 sm:text-lg">
      {children}
    </p>
  );
}

function HeroActions({ children }: ChildrenProps) {
  return (
    <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5">
      {children}
    </div>
  );
}

function HeroPrimaryAction({ children }: ChildrenProps) {
  return (
    <SiteLink href="/contact/" className="button w-full sm:w-auto">
      {children}
    </SiteLink>
  );
}

function HeroSecondaryAction({ children }: ChildrenProps) {
  return (
    <SiteLink
      href="/galleries/"
      className="text-link inline-flex min-h-11 items-center justify-center font-narrow text-sm font-semibold tracking-[0.12em] uppercase sm:justify-start"
    >
      {children}
    </SiteLink>
  );
}

export const HomeHero = Object.assign(HomeHeroRoot, {
  Heading: HeroHeading,
  Lead: HeroLead,
  Actions: HeroActions,
  PrimaryAction: HeroPrimaryAction,
  SecondaryAction: HeroSecondaryAction,
});

/* --------------------------------------------------------------------------
   2. Three rooms — editorial list on mat surface (computed starting prices)
   -------------------------------------------------------------------------- */
export interface RoomItem {
  numeral: string;
  category: GalleryCategory;
  name: string;
  pitch: string;
  scene: PrintSceneKey;
  sceneAlt: string;
}

export function ThreeRooms({
  eyebrow,
  heading,
  rooms,
}: {
  eyebrow: string;
  heading: string;
  rooms: readonly RoomItem[];
}) {
  return (
    <section className="mat-board-surface relative overflow-hidden">
      <ExposureRulerBorder label="THREE ROOMS · PLATE INDEX 01–03" />
      <CuttingMatBackdrop />
      <div className="wrap relative z-10 py-16 sm:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4 pb-8">
          <div>
            <p className="eyebrow">{eyebrow}</p>
            <h2 className="mt-2 font-serif text-[clamp(2rem,4vw,3.25rem)] leading-tight text-ink">
              {heading}
            </h2>
          </div>
          <SiteLink href="/galleries/" className="text-link font-narrow text-sm font-semibold tracking-[0.12em] uppercase">
            View all galleries
          </SiteLink>
        </div>

        <ol className="divide-y divide-line border-t border-b border-line">
          {rooms.map((room, i) => {
            const minPrice = startingPriceForCategory(room.category);
            const roman = ['I', 'II', 'III'][i] ?? String(i + 1);
            return (
              <li key={room.category}>
                <SiteLink
                  href={`/galleries/#${room.category}`}
                  className="group -mx-4 grid items-center gap-5 px-4 py-7 no-underline transition-colors hover:bg-raised/60 hover:no-underline sm:grid-cols-[5.5rem_minmax(0,1fr)_auto_6.5rem] sm:gap-8 sm:py-8"
                >
                  <div className="flex flex-col">
                    <span
                      aria-hidden="true"
                      className="font-serif text-5xl leading-none text-transparent transition-colors sm:text-6xl"
                      style={{ WebkitTextStroke: '1.25px var(--line)' }}
                    >
                      {room.numeral}
                    </span>
                    <span aria-hidden="true" className="mt-1 font-edge text-[11px] tracking-[0.14em] text-mark">
                      PLATE {roman}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif text-2xl text-ink transition-colors group-hover:text-accent-ink sm:text-3xl">
                      {room.name}
                    </h3>
                    <p className="mt-1.5 max-w-[46ch] text-sm text-muted sm:text-base">{room.pitch}</p>
                  </div>

                  <div className="sm:text-right">
                    <span className="block font-narrow text-xs tracking-[0.12em] text-muted uppercase">
                      Packages
                    </span>
                    <span className="font-serif text-xl text-ink sm:text-2xl">
                      from {formatUsd(minPrice)}
                    </span>
                    <span className="mt-0.5 block font-narrow text-[11px] tracking-[0.12em] text-mark uppercase opacity-80 transition-transform group-hover:translate-x-1">
                      Enter room →
                    </span>
                  </div>

                  <div className="w-24 justify-self-start border border-line bg-raised p-1 shadow-sm transition-all duration-200 group-hover:-translate-y-1.5 group-hover:shadow-md sm:w-28 sm:justify-self-end">
                    <PrintFrame scene={room.scene} orientation="square" label={room.sceneAlt} />
                  </div>
                </SiteLink>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------------------
   3. On the line — signature drying-line darkroom band
   -------------------------------------------------------------------------- */
const TILTS = [-2.6, 2.1, -1.8, 2.7];

export function OnTheLine({
  eyebrow,
  heading,
  intro,
}: {
  eyebrow: string;
  heading: string;
  intro: string;
}) {
  const featured = galleries.filter(g => g.featured);

  return (
    <section className="darkroom-band relative overflow-x-clip">
      <DeckleEdgeBorder fillClass="fill-surface" flip />
      <DarkroomOpticsBackdrop />
      <div className="wrap relative z-10 mt-10 mb-10 flex flex-wrap items-end justify-between gap-4 sm:mt-16">
        <div>
          <p className="font-narrow text-xs font-semibold tracking-[0.16em] text-mark uppercase">
            {eyebrow}
          </p>
          <h2 className="mt-2 font-serif text-[clamp(2.1rem,4.4vw,3.5rem)] leading-tight text-darkroom-ink">
            {heading}
          </h2>
        </div>
        <p className="max-w-[40ch] text-sm text-darkroom-muted sm:text-base">{intro}</p>
      </div>

      {/* Drying wire spanning the full darkroom band */}
      <div className="relative">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-3.5 h-px bg-zone-5/70"
        />

        <div className="wrap">
          <ul className="flex snap-x snap-mandatory gap-6 overflow-x-auto pt-0 pb-6 lg:grid lg:grid-cols-4 lg:gap-7 lg:overflow-visible">
            {featured.map((gallery, index) => {
              const leadFrame = gallery.frames[0];
              const tilt = TILTS[index % TILTS.length];
              const style = {
                '--tilt': `${tilt}deg`,
                '--sway-delay': `${index * 0.9}s`,
              } as CSSProperties;

              return (
                <li
                  key={gallery.id}
                  className="w-[74vw] max-w-[18.5rem] shrink-0 snap-center lg:w-auto lg:max-w-none"
                >
                  <SiteLink
                    href={`/galleries/#${gallery.id}`}
                    className="drying-print group block no-underline hover:no-underline focus-visible:outline-mark"
                    style={style}
                  >
                    <div className="relative z-10 -mb-3 flex justify-center">
                      <BulldogPeg />
                    </div>
                    <div className="bg-zone-9 p-2 shadow-[0_22px_36px_-14px_rgba(0,0,0,0.85)]">
                      <PrintFrame
                        scene={leadFrame.scene}
                        orientation={leadFrame.orientation}
                        label={`${gallery.title} — ${leadFrame.caption}`}
                      />
                    </div>
                    <div className="mt-4 flex items-baseline justify-between gap-3 px-0.5">
                      <div>
                        <p className="font-serif text-lg leading-snug text-darkroom-ink group-hover:text-mark">
                          {gallery.title}
                        </p>
                        <p className="mt-0.5 font-narrow text-xs tracking-[0.06em] text-darkroom-muted">
                          {gallery.place}
                        </p>
                      </div>
                      <span aria-hidden="true" className="edge-code shrink-0 text-mark">
                        {leadFrame.edgeCode}
                      </span>
                    </div>
                  </SiteLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <SprocketEdgeDivider className="mt-12 sm:mt-16" />
    </section>
  );
}

/* --------------------------------------------------------------------------
   4. From shutter to print — 4 developing trays stepping diagonally
   -------------------------------------------------------------------------- */
export interface ProcessStep {
  code: string;
  bath: string;
  title: string;
  copy: string;
  turnaround: string;
  stage: 1 | 2 | 3 | 4;
}

export function FromShutterToPrint({
  eyebrow,
  heading,
  steps,
}: {
  eyebrow: string;
  heading: string;
  steps: readonly ProcessStep[];
}) {
  const offsets = ['lg:mt-0', 'lg:mt-8', 'lg:mt-16', 'lg:mt-24'];

  return (
    <section className="relative overflow-hidden bg-bg py-16 sm:py-24">
      <ApertureIrisBackdrop align="right" />
      <div className="wrap relative z-10">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-2 font-serif text-[clamp(2rem,4vw,3.25rem)] leading-tight text-ink">
          {heading}
        </h2>

        <ol className="relative mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:items-start lg:gap-6">
          {steps.map((step, index) => (
            <li key={step.code} className={`relative ${offsets[index] ?? ''}`}>
              <div className="text-ink">
                <DevelopingTraySvg stage={step.stage} bathLabel={step.bath} />
              </div>
              <div className="mt-4 border-t border-line pt-4">
                <div className="flex items-center justify-between gap-2">
                  <span aria-hidden="true" className="edge-code text-mark">
                    BATH {step.code}
                  </span>
                  <span className="border border-line/80 bg-raised px-2 py-0.5 font-narrow text-[11px] font-semibold tracking-[0.12em] text-muted uppercase">
                    {step.bath}
                  </span>
                </div>
                <h3 className="mt-2.5 font-serif text-2xl text-ink">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{step.copy}</p>
                <p className="mt-3 font-narrow text-xs font-semibold tracking-[0.1em] text-accent-ink uppercase">
                  {step.turnaround}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------------------
   5. Starting points — three staggered gallery wall labels (placards)
   -------------------------------------------------------------------------- */
export function StartingPoints({
  eyebrow,
  heading,
  packageIds,
  ctaLabel,
}: {
  eyebrow: string;
  heading: string;
  packageIds: readonly string[];
  ctaLabel: string;
}) {
  const selected = packageIds
    .map(id => packages.find(p => p.id === id))
    .filter((p): p is (typeof packages)[number] => Boolean(p));

  const stagger = ['md:mt-0', 'md:mt-8', 'md:mt-3'];

  return (
    <section className="mat-board-surface relative overflow-hidden">
      <ExposureRulerBorder label="STARTING POINTS · GALLERY WALL LABELS" />
      <CuttingMatBackdrop />
      <div className="wrap relative z-10 py-16 sm:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">{eyebrow}</p>
            <h2 className="mt-2 font-serif text-[clamp(2rem,4vw,3.25rem)] leading-tight text-ink">
              {heading}
            </h2>
          </div>
          <SiteLink href="/packages/" className="text-link font-narrow text-sm font-semibold tracking-[0.12em] uppercase">
            {ctaLabel}
          </SiteLink>
        </div>

        <div className="mt-12 grid gap-7 md:grid-cols-3 md:items-start lg:gap-8">
          {selected.map((pkg, i) => (
            <article
              key={pkg.id}
              className={`window-mat relative p-7 pt-9 transition-transform duration-200 hover:-translate-y-1 ${stagger[i] ?? ''}`}
            >
              <GalleryPin className="absolute -top-2 left-1/2 -translate-x-1/2" />
              <WindowMatCorner className="absolute top-3 left-3 text-line" />
              <WindowMatCorner className="absolute right-3 bottom-3 rotate-180 text-line" />

              <div className="flex items-center justify-between gap-2">
                <p className="eyebrow">{pkg.category}</p>
                <span aria-hidden="true" className="font-edge text-[11px] text-muted">
                  0{i + 1}A
                </span>
              </div>
              <h3 className="mt-2 font-serif text-3xl text-ink">{pkg.name}</h3>

              <p className="mt-4 border-b border-line/70 pb-4">
                <span className="font-narrow text-xs tracking-[0.12em] text-muted uppercase">from </span>
                <span className="font-serif text-4xl text-ink">{formatUsd(pkg.priceFrom)}</span>
                <span className="ml-2 font-narrow text-xs text-muted">USD</span>
              </p>

              <p className="mt-3 font-narrow text-xs tracking-[0.06em] text-muted">
                {pkg.coverage} · {pkg.images} images · {pkg.delivery}
              </p>

              <ul className="mt-4 space-y-2 text-sm text-muted">
                {pkg.includes.slice(0, 2).map(item => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-mark" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 border-t border-line/50 pt-4">
                <SiteLink
                  href={`/packages/#${pkg.category}`}
                  className="text-link font-narrow text-xs font-semibold tracking-[0.12em] uppercase"
                >
                  See {pkg.category} details
                </SiteLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------------------
   6. The 2027 diary — 12 months on a 35mm negative strip
   -------------------------------------------------------------------------- */
export function DiaryStrip({
  eyebrow,
  heading,
  confirmationNote,
}: {
  eyebrow: string;
  heading: string;
  confirmationNote: string;
}) {
  return (
    <section className="darkroom-band relative overflow-hidden">
      <DeckleEdgeBorder fillClass="fill-surface" flip />
      <DarkroomOpticsBackdrop />
      <div className="wrap relative z-10 py-14 sm:py-20">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-narrow text-xs font-semibold tracking-[0.16em] text-mark uppercase">
              {eyebrow}
            </p>
            <h2 className="mt-2 font-serif text-[clamp(2.1rem,4.2vw,3.3rem)] leading-tight text-darkroom-ink">
              {heading}
            </h2>
          </div>

          {/* Exposure legend */}
          <div className="flex flex-wrap items-center gap-5 text-xs text-darkroom-muted">
            <span className="inline-flex items-center gap-2">
              <span aria-hidden="true" className="inline-block h-3.5 w-3.5 border border-zone-6 bg-zone-8/20" />
              Open
            </span>
            <span className="inline-flex items-center gap-2">
              <span
                aria-hidden="true"
                className="inline-block h-3.5 w-3.5 border border-zone-6"
                style={{ background: 'linear-gradient(135deg, #2A2826 50%, rgba(222,218,209,0.22) 50%)' }}
              />
              Few left
            </span>
            <span className="inline-flex items-center gap-2">
              <span aria-hidden="true" className="inline-block h-3.5 w-3.5 border border-zone-5 bg-zone-0" />
              Full
            </span>
            <span className="font-narrow tracking-[0.08em] uppercase text-darkroom-ink">
              Updated {diaryUpdated}
            </span>
          </div>
        </div>

        <NegativeStrip edgeLabel="2027 DIARY ▸ SILVER FRAME 400" fullGridOnDesktop>
          {diary.map((entry, idx) => {
            const num = String(idx + 1).padStart(2, '0');
            const monthName = MONTH_SHORT_NAMES[idx];
            const isFull = entry.status === 'full';
            const isFew = entry.status === 'few-left';

            return (
              <div
                key={entry.month}
                data-diary-month={entry.month}
                data-diary-status={entry.status}
                className="flex w-28 shrink-0 flex-col justify-between border border-zone-3 p-2.5 lg:w-auto lg:min-w-0"
                style={{
                  background: isFull
                    ? '#0E0D0C'
                    : isFew
                      ? 'linear-gradient(145deg, #1E1C1A 48%, #34312E 48%)'
                      : '#2A2826',
                }}
              >
                <div className="flex items-baseline justify-between gap-1">
                  <span aria-hidden="true" className="font-edge text-[13px] text-mark">
                    {num}
                  </span>
                  <span className="font-serif text-base text-darkroom-ink xl:text-lg">{monthName}</span>
                </div>

                <div className="mt-4">
                  <span
                    className={`inline-block font-narrow text-[11px] font-semibold tracking-[0.08em] uppercase ${
                      isFull ? 'text-darkroom-muted' : isFew ? 'text-mark' : 'text-zone-9'
                    }`}
                  >
                    {DIARY_STATUS_LABELS[entry.status]}
                  </span>
                  {entry.note ? (
                    <p className="mt-1 text-[10px] leading-snug text-darkroom-muted">{entry.note}</p>
                  ) : null}
                </div>
              </div>
            );
          })}
        </NegativeStrip>

        <p className="mt-5 text-sm text-darkroom-muted">{confirmationNote}</p>
      </div>
      <SprocketEdgeDivider />
    </section>
  );
}

/* --------------------------------------------------------------------------
   7. Behind the camera — asymmetric About teaser
   -------------------------------------------------------------------------- */
export function BehindTheCamera({
  eyebrow,
  quote,
  children,
  linkLabel,
}: {
  eyebrow: string;
  quote: string;
  children: ReactNode;
  linkLabel: string;
}) {
  return (
    <section className="relative overflow-hidden bg-bg py-16 sm:py-24">
      <ApertureIrisBackdrop align="left" />
      <div className="wrap relative z-10 grid items-center gap-10 md:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] lg:gap-16">
        <EaselFrame className="mx-auto w-full max-w-sm md:mx-0">
          <div className="window-mat p-3.5">
            <MaraPortraitPrint />
            <div className="mt-2.5 flex justify-between text-xs text-muted">
              <span className="font-narrow tracking-[0.08em] uppercase">Mara Ellison</span>
              <span aria-hidden="true" className="edge-code">01A</span>
            </div>
          </div>
        </EaselFrame>

        <div className="relative">
          <div className="flex flex-wrap items-center gap-3">
            <p className="eyebrow">{eyebrow}</p>
            <span className="border border-line/80 bg-raised px-2.5 py-0.5 font-edge text-[11px] tracking-[0.12em] text-mark uppercase">
              EST. 2016 · 140+ WEDDINGS
            </span>
          </div>
          <blockquote className="mt-4 font-serif text-[clamp(1.85rem,3.6vw,2.9rem)] leading-[1.15] italic text-ink">
            “{quote}”
          </blockquote>
          <div className="mt-6 max-w-[46ch] space-y-4 text-base leading-relaxed text-muted">
            {children}
          </div>
          <div className="mt-7">
            <SiteLink
              href="/about/"
              className="text-link font-narrow text-sm font-semibold tracking-[0.12em] uppercase"
            >
              {linkLabel}
            </SiteLink>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------------------
   8. Closing band — Zone scale bar divider + CTA + pegged corner print
   -------------------------------------------------------------------------- */
export function ClosingBand({
  heading,
  ctaLabel,
  note,
}: {
  heading: string;
  ctaLabel: string;
  note?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-bg pt-2 pb-16 sm:pb-24">
      <ZoneScaleBar />
      <ContactSheetBorder stock="ENQUIRY COLOPHON · SILVER FRAME 400" className="mb-14 sm:mb-18" />
      <ViewfinderBackdrop className="opacity-[0.04] dark:opacity-[0.065]" />
      <div className="wrap relative z-10 grid items-center gap-10 md:grid-cols-[minmax(0,1fr)_13.5rem]">
        <div>
          <h2 className="max-w-[20ch] font-serif text-[clamp(2.25rem,4.8vw,3.85rem)] leading-[1.03] text-ink">
            {heading}
          </h2>
          {note ? <p className="mt-4 max-w-[48ch] text-base text-muted">{note}</p> : null}
          <div className="mt-7 flex flex-wrap items-center gap-6">
            <SiteLink href="/contact/" className="button">
              {ctaLabel}
            </SiteLink>
            <a
              href={`mailto:${business.email}`}
              className="text-link font-narrow text-sm font-semibold tracking-[0.04em]"
            >
              {business.email}
            </a>
          </div>
        </div>

        <div aria-hidden="true" className="relative hidden rotate-3 justify-self-end md:block">
          <div className="relative z-10 -mb-3 flex justify-center">
            <BulldogPeg />
          </div>
          <div className="border border-line bg-raised p-2 shadow-lg">
            <PrintFrame scene="rings-hands" orientation="square" decorative />
            <span className="mt-1 block font-edge text-[11px] text-muted">16A</span>
          </div>
        </div>
      </div>
    </section>
  );
}
