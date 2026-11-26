import type { ReactNode } from 'react';

/**
 * 35mm negative strip container with top & bottom sprocket perforations and edge-print code.
 * Scrolls horizontally on narrow screens while keeping sprocket rails visible.
 */
export function NegativeStrip({
  edgeLabel = 'SILVER FRAME 400 ▸ 14A',
  fullGridOnDesktop = false,
  children,
  className = '',
}: {
  edgeLabel?: string;
  fullGridOnDesktop?: boolean;
  children: ReactNode;
  className?: string;
}) {
  const sprockets = Array.from({ length: 28 }, (_, i) => i);

  return (
    <div className={`overflow-x-auto pb-2 ${className}`}>
      <div
        className={`border-y border-darkroom-line bg-zone-0 px-3 py-2 text-darkroom-ink ${
          fullGridOnDesktop ? 'min-w-max lg:min-w-0' : 'min-w-max'
        }`}
      >
        {/* Top sprocket row + edge code */}
        <div aria-hidden="true" className="mb-2 flex items-center justify-between gap-6 overflow-hidden">
          <div className="flex gap-3">
            {sprockets.map(i => (
              <span key={`t${i}`} className="inline-block h-2.5 w-3.5 shrink-0 rounded-[2px] bg-bg/85" />
            ))}
          </div>
          <span className="shrink-0 font-edge text-[13px] tracking-widest text-mark/90">
            {edgeLabel}
          </span>
        </div>

        {/* Film frames */}
        <div
          className={
            fullGridOnDesktop
              ? 'flex items-stretch gap-2 lg:grid lg:grid-cols-12 lg:gap-1.5'
              : 'flex items-stretch gap-2.5'
          }
        >
          {children}
        </div>

        {/* Bottom sprocket row */}
        <div aria-hidden="true" className="mt-2 flex items-center justify-between gap-6 overflow-hidden">
          <span className="shrink-0 font-edge text-[13px] tracking-widest text-darkroom-muted">
            SAFETY FILM ▸ {edgeLabel}
          </span>
          <div className="flex gap-3">
            {sprockets.map(i => (
              <span key={`b${i}`} className="inline-block h-2.5 w-3.5 shrink-0 rounded-[2px] bg-bg/85" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
