'use client';

import { useCallback, useEffect, useRef, useState, type CSSProperties } from 'react';
import {
  CATEGORY_LABELS,
  GALLERY_CATEGORIES,
  galleries,
  type Gallery,
  type GalleryCategory,
  type GalleryFrame,
} from '../content/galleries';
import { BulldogPeg, LoupeIcon } from './artwork/icons';
import { DarkroomOpticsBackdrop, DeckleEdgeBorder, ExposureRulerBorder, SprocketEdgeDivider } from './artwork/borders';
import { PrintFrame } from './prints/registry';

type FilterValue = 'all' | GalleryCategory;

interface LightboxState {
  gallery: Gallery;
  frameIndex: number;
}

const WEDDING_TILTS = [-2.4, 1.9, -1.5, 2.3];

export function GalleriesView() {
  const [hydrated, setHydrated] = useState(false);
  const [active, setActive] = useState<FilterValue>('all');
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const syncFromHash = useCallback(() => {
    const hash = window.location.hash.replace(/^#/, '');
    if ((GALLERY_CATEGORIES as readonly string[]).includes(hash)) {
      setActive(hash as GalleryCategory);
      return;
    }
    // If hash points to a specific gallery ID, ensure it is visible
    if (hash && galleries.some(g => g.id === hash)) {
      setActive('all');
    }
  }, []);

  useEffect(() => {
    setHydrated(true);
    syncFromHash();
    window.addEventListener('hashchange', syncFromHash);
    return () => window.removeEventListener('hashchange', syncFromHash);
  }, [syncFromHash]);

  // Open native modal dialog when lightbox state becomes active
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (lightbox && !dialog.open) {
      dialog.showModal();
    } else if (!lightbox && dialog.open) {
      dialog.close();
    }
  }, [lightbox]);

  // Fallback light-dismiss for browsers without <dialog closedby="any">
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || 'closedBy' in HTMLDialogElement.prototype) return;

    const outside = (e: PointerEvent) => {
      const r = dialog.getBoundingClientRect();
      return e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom;
    };

    let pressedOutside = false;
    const onDown = (e: PointerEvent) => {
      pressedOutside = outside(e);
    };
    const onUp = (e: PointerEvent) => {
      if (pressedOutside && outside(e)) dialog.close();
    };
    dialog.addEventListener('pointerdown', onDown);
    dialog.addEventListener('pointerup', onUp);
    return () => {
      dialog.removeEventListener('pointerdown', onDown);
      dialog.removeEventListener('pointerup', onUp);
    };
  }, []);

  // Arrow-key stepping inside open lightbox
  useEffect(() => {
    if (!lightbox) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        setLightbox(curr =>
          curr
            ? { ...curr, frameIndex: (curr.frameIndex + 1) % curr.gallery.frames.length }
            : null,
        );
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setLightbox(curr =>
          curr
            ? {
                ...curr,
                frameIndex:
                  (curr.frameIndex - 1 + curr.gallery.frames.length) % curr.gallery.frames.length,
              }
            : null,
        );
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [lightbox]);

  function selectCategory(next: FilterValue) {
    setActive(next);
    const nextHash = next === 'all' ? '' : `#${next}`;
    const url = `${window.location.pathname}${window.location.search}${nextHash}`;
    window.history.replaceState(null, '', url);
  }

  function openFrame(gallery: Gallery, frameIndex: number) {
    setLightbox({ gallery, frameIndex });
  }

  const byCategory = (cat: GalleryCategory) => galleries.filter(g => g.category === cat);
  const currentFrame: GalleryFrame | null = lightbox
    ? lightbox.gallery.frames[lightbox.frameIndex]
    : null;

  return (
    <div>
      {/* Sticky negative-edge filter bar */}
      <div className="sticky top-[5.1rem] z-30 border-y border-darkroom-line bg-zone-0 text-darkroom-ink no-print">
        <div className="wrap flex flex-wrap items-center justify-between gap-3 py-2.5">
          <span aria-hidden="true" className="hidden font-edge text-[13px] text-mark sm:inline">
            SILVER FRAME 400 ▸ INDEX
          </span>

          <div role="group" aria-label="Filter galleries by category" className="flex flex-wrap items-center gap-1.5">
            {(['all', ...GALLERY_CATEGORIES] as const).map(value => {
              const label = value === 'all' ? 'All' : CATEGORY_LABELS[value];
              const isPressed = active === value;
              const baseClass = `min-h-9 px-3.5 py-1.5 font-narrow text-xs font-semibold tracking-[0.14em] uppercase transition-colors ${
                isPressed
                  ? 'bg-accent text-on-accent'
                  : 'border border-darkroom-line bg-transparent text-darkroom-ink hover:border-mark hover:text-mark'
              }`;

              if (!hydrated) {
                return (
                  <a
                    key={value}
                    href={value === 'all' ? '#weddings' : `#${value}`}
                    className={`${baseClass} inline-flex items-center no-underline`}
                  >
                    {label}
                  </a>
                );
              }

              return (
                <button
                  key={value}
                  type="button"
                  aria-pressed={isPressed}
                  onClick={() => selectCategory(value)}
                  className={baseClass}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 1. WEDDINGS — drying line in a darkroom band + label column on the right */}
      <section
        id="weddings"
        data-gallery-category="weddings"
        hidden={hydrated && active !== 'all' && active !== 'weddings'}
        className="darkroom-band relative overflow-hidden py-16 sm:py-20"
      >
        <DarkroomOpticsBackdrop />
        <div className="wrap relative z-10">
          <div className="mb-10 flex items-baseline justify-between gap-4 border-b border-darkroom-line pb-4">
            <div>
              <p className="font-narrow text-xs font-semibold tracking-[0.16em] text-mark uppercase">
                Room 01
              </p>
              <h2 className="mt-1 font-serif text-4xl text-darkroom-ink">Weddings</h2>
            </div>
            <span aria-hidden="true" className="edge-code text-darkroom-muted">
              DRYING LINE ▸ 14A–24A
            </span>
          </div>

          <div className="space-y-20">
            {byCategory('weddings').map(gallery => (
              <article
                key={gallery.id}
                id={gallery.id}
                className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_18rem]"
              >
                {/* Short drying line holding prints */}
                <div className="relative">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 top-3.5 h-px bg-zone-5/70"
                  />
                  <div className="grid gap-6 sm:grid-cols-2">
                    {gallery.frames.map((frame, i) => {
                      const style = {
                        '--tilt': `${WEDDING_TILTS[i % WEDDING_TILTS.length]}deg`,
                        '--sway-delay': `${i * 0.7}s`,
                      } as CSSProperties;
                      return (
                        <figure key={frame.id} className="drying-print" style={style}>
                          <div className="relative z-10 -mb-3 flex justify-center">
                            <BulldogPeg />
                          </div>
                          <button
                            type="button"
                            onClick={() => openFrame(gallery, i)}
                            className="block w-full bg-zone-9 p-2 text-left shadow-[0_18px_32px_-12px_rgba(0,0,0,0.85)] focus-visible:outline-mark"
                            aria-label={`Enlarge print: ${frame.caption}`}
                          >
                            <PrintFrame
                              scene={frame.scene}
                              orientation={frame.orientation}
                              label={frame.caption}
                            />
                          </button>
                          <figcaption className="mt-2.5 flex items-baseline justify-between gap-3 text-xs">
                            <span className="font-narrow text-darkroom-ink">{frame.caption}</span>
                            <span aria-hidden="true" className="edge-code shrink-0 text-mark">
                              {frame.edgeCode}
                            </span>
                          </figcaption>
                        </figure>
                      );
                    })}
                  </div>
                </div>

                {/* Gallery label column on right */}
                <div className="border-t border-darkroom-line pt-5 lg:sticky lg:top-36 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-7">
                  <p className="font-narrow text-xs tracking-[0.14em] text-mark uppercase">
                    {gallery.season}
                  </p>
                  <h3 className="mt-2 font-serif text-3xl leading-tight text-darkroom-ink">
                    {gallery.title}
                  </h3>
                  <p className="mt-2 font-narrow text-sm text-darkroom-muted">
                    {gallery.client} · {gallery.place}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-darkroom-ink/85">
                    {gallery.story}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 2. PORTRAITS — window-mat triptych on fibre paper + label column on the left */}
      <section
        id="portraits"
        data-gallery-category="portraits"
        hidden={hydrated && active !== 'all' && active !== 'portraits'}
        className="relative bg-bg"
      >
        <SprocketEdgeDivider />
        <div className="wrap py-16 sm:py-20">
          <div className="mb-10 flex items-baseline justify-between gap-4 border-b border-line pb-4">
            <div>
              <p className="eyebrow">Room 02</p>
              <h2 className="mt-1 font-serif text-4xl text-ink">Portraits</h2>
            </div>
            <span aria-hidden="true" className="edge-code text-muted">
              WINDOW MAT ▸ 06A–13A
            </span>
          </div>

          <div className="space-y-20">
            {byCategory('portraits').map(gallery => (
              <article
                key={gallery.id}
                id={gallery.id}
                className="grid items-start gap-10 lg:grid-cols-[17rem_minmax(0,1fr)]"
              >
                {/* Label column on left */}
                <div className="border-b border-line pb-5 lg:sticky lg:top-36 lg:border-r lg:border-b-0 lg:pr-7 lg:pb-0">
                  <p className="eyebrow">{gallery.season}</p>
                  <h3 className="mt-2 font-serif text-3xl leading-tight text-ink">
                    {gallery.title}
                  </h3>
                  <p className="mt-2 font-narrow text-sm text-muted">
                    {gallery.client} · {gallery.place}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted">{gallery.story}</p>
                </div>

                {/* Window-mat triptych row */}
                <div className="grid items-end gap-6 sm:grid-cols-3">
                  {gallery.frames.map((frame, i) => (
                    <figure key={frame.id}>
                      <button
                        type="button"
                        onClick={() => openFrame(gallery, i)}
                        className="window-mat group block w-full p-4 text-left transition-transform duration-200 hover:-translate-y-1 sm:p-5"
                        aria-label={`Enlarge print: ${frame.caption}`}
                      >
                        <div className="window-mat-inner bg-raised p-1.5">
                          <PrintFrame
                            scene={frame.scene}
                            orientation={frame.orientation}
                            label={frame.caption}
                          />
                        </div>
                      </button>
                      <figcaption className="mt-2.5 flex items-baseline justify-between gap-2 text-xs">
                        <span className="font-narrow text-ink">{frame.caption}</span>
                        <span aria-hidden="true" className="edge-code shrink-0 text-muted">
                          {frame.edgeCode}
                        </span>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. COMMERCIAL — illuminated light-table panel, asymmetric layout with loupe */}
      <section
        id="commercial"
        data-gallery-category="commercial"
        hidden={hydrated && active !== 'all' && active !== 'commercial'}
        className="mat-board-surface relative"
      >
        <ExposureRulerBorder label="COMMERCIAL · LIGHT TABLE PROOFING" />
        <div className="wrap py-16 sm:py-20">
          <div className="mb-10 flex items-baseline justify-between gap-4 border-b border-line pb-4">
            <div>
              <p className="eyebrow">Room 03</p>
              <h2 className="mt-1 font-serif text-4xl text-ink">Commercial</h2>
            </div>
            <span aria-hidden="true" className="edge-code text-muted">
              LIGHT TABLE ▸ 31A–38A
            </span>
          </div>

          <div className="space-y-16">
            {byCategory('commercial').map(gallery => (
              <article key={gallery.id} id={gallery.id}>
                {/* Lit light-table panel */}
                <div className="lighttable-surface relative border border-line p-5 sm:p-8 lg:p-10">
                  <div className="grid items-center gap-6 md:grid-cols-12">
                    {gallery.frames.map((frame, i) => {
                      const colSpan =
                        i === 0 ? 'md:col-span-5' : i === 1 ? 'md:col-span-4 md:mt-8' : 'md:col-span-3 md:-mt-4';
                      return (
                        <figure key={frame.id} className={`relative ${colSpan}`}>
                          <button
                            type="button"
                            onClick={() => openFrame(gallery, i)}
                            className="group relative block w-full border border-line/80 bg-zone-9 p-2 text-left shadow-md transition-transform duration-200 hover:-translate-y-1"
                            aria-label={`Enlarge print: ${frame.caption}`}
                          >
                            <PrintFrame
                              scene={frame.scene}
                              orientation={frame.orientation}
                              label={frame.caption}
                            />
                            {i === 0 ? (
                              <span
                                aria-hidden="true"
                                className="absolute -right-3 -bottom-3 flex h-11 w-11 items-center justify-center rounded-full border border-line bg-raised text-ink shadow-md"
                              >
                                <LoupeIcon size={22} />
                              </span>
                            ) : null}
                          </button>
                          <figcaption className="mt-2.5 flex items-baseline justify-between gap-2 text-xs">
                            <span className="font-narrow text-ink">{frame.caption}</span>
                            <span aria-hidden="true" className="edge-code shrink-0 text-muted">
                              {frame.edgeCode}
                            </span>
                          </figcaption>
                        </figure>
                      );
                    })}
                  </div>
                </div>

                {/* Label below light table */}
                <div className="mt-5 grid gap-4 md:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)]">
                  <div>
                    <p className="eyebrow">{gallery.season}</p>
                    <h3 className="mt-1 font-serif text-3xl text-ink">{gallery.title}</h3>
                    <p className="mt-1 font-narrow text-sm text-muted">
                      {gallery.client} · {gallery.place}
                    </p>
                  </div>
                  <p className="max-w-[54ch] text-sm leading-relaxed text-muted md:pt-5">
                    {gallery.story}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Native modal <dialog> lightbox — no role="dialog", no aria-modal, no manual Esc/focus trap */}
      <dialog
        ref={dialogRef}
        className="print-dialog"
        aria-labelledby="lightbox-caption"
        onClose={() => setLightbox(null)}
        {...({ closedby: 'any' } as Record<string, string>)}
      >
        {lightbox && currentFrame ? (
          <div className="flex flex-col p-4 sm:p-6">
            <div className="mb-4 flex items-center justify-between gap-4 border-b border-darkroom-line pb-3">
              <div className="flex flex-wrap items-baseline gap-3">
                <span aria-hidden="true" className="edge-code text-mark">
                  {currentFrame.edgeCode}
                </span>
                <span className="font-narrow text-xs tracking-[0.12em] text-darkroom-muted uppercase">
                  {lightbox.gallery.title} ({lightbox.frameIndex + 1} / {lightbox.gallery.frames.length})
                </span>
              </div>
              <form method="dialog">
                <button
                  type="submit"
                  className="min-h-10 border border-darkroom-line px-3.5 py-1.5 font-narrow text-xs font-semibold tracking-[0.12em] text-darkroom-ink uppercase hover:border-mark hover:text-mark"
                >
                  Close
                </button>
              </form>
            </div>

            <div className="mx-auto w-full max-w-3xl bg-zone-9 p-2 sm:p-3">
              <PrintFrame
                scene={currentFrame.scene}
                orientation={currentFrame.orientation}
                label={currentFrame.caption}
              />
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
              <h1 id="lightbox-caption" className="font-serif text-xl text-darkroom-ink sm:text-2xl">
                {currentFrame.caption}
              </h1>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() =>
                    setLightbox(curr =>
                      curr
                        ? {
                            ...curr,
                            frameIndex:
                              (curr.frameIndex - 1 + curr.gallery.frames.length) %
                              curr.gallery.frames.length,
                          }
                        : null,
                    )
                  }
                  className="min-h-10 border border-darkroom-line px-3.5 py-1.5 font-narrow text-xs font-semibold tracking-[0.12em] text-darkroom-ink uppercase hover:border-mark hover:text-mark"
                >
                  Previous
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setLightbox(curr =>
                      curr
                        ? {
                            ...curr,
                            frameIndex: (curr.frameIndex + 1) % curr.gallery.frames.length,
                          }
                        : null,
                    )
                  }
                  className="min-h-10 border border-darkroom-line px-3.5 py-1.5 font-narrow text-xs font-semibold tracking-[0.12em] text-darkroom-ink uppercase hover:border-mark hover:text-mark"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </dialog>
    </div>
  );
}
