import type { ReactNode } from 'react';
import { ExposureRulerBorder, ViewfinderBackdrop } from './artwork/borders';
import { GreaseUnderline } from './artwork/icons';

/**
 * Asymmetric inner-page header: large DM Serif title at left with a grease-pencil
 * underline, viewfinder ground-glass backdrop, optical ruler border, and the page's
 * bespoke motif artwork at right overlapping the mat edge.
 */
export function PageHead({
  eyebrow,
  title,
  children,
  id,
  artwork,
  edgeCode,
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
  id?: string;
  /** Bespoke SVG motif art positioned at right, overlapping the mat edge. */
  artwork?: ReactNode;
  /** Optional decorative 35mm edge code. */
  edgeCode?: string;
}) {
  return (
    <header className="mat-board-surface relative overflow-x-clip">
      <ViewfinderBackdrop className="opacity-[0.045] dark:opacity-[0.07]" />
      <div className="wrap relative z-10 grid items-end gap-8 pt-[clamp(2.5rem,5vw,4.5rem)] pb-[clamp(2rem,4vw,3.25rem)] md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
        <div>
          <div className="flex items-center gap-4">
            <p className="eyebrow">{eyebrow}</p>
            {edgeCode ? (
              <span aria-hidden="true" className="edge-code text-muted/80">
                ▸ {edgeCode}
              </span>
            ) : null}
          </div>
          <h1
            id={id}
            className="mt-3 max-w-[14ch] font-serif text-[clamp(2.75rem,6vw,4.8rem)] leading-[0.98] text-ink"
          >
            {title}
          </h1>
          <GreaseUnderline className="mt-3" />
          {children ? (
            <div className="mt-5 max-w-[44ch] text-[clamp(1.02rem,1.5vw,1.15rem)] leading-relaxed text-muted">
              {children}
            </div>
          ) : null}
        </div>

        {artwork ? (
          <div className="relative md:-mb-12 md:justify-self-end md:w-full md:max-w-[23rem]">
            {artwork}
          </div>
        ) : null}
      </div>
      <ExposureRulerBorder label={edgeCode ? `SILVER FRAME 400 · ${edgeCode}` : 'SILVER FRAME 400'} />
    </header>
  );
}
