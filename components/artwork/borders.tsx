import type { ReactNode } from 'react';

/**
 * Optical lens-barrel exposure & aperture ruler border between sections.
 * Displays hairline graduation ticks with focal/aperture marks and an amber index diamond.
 */
export function ExposureRulerBorder({
  label = '50mm f/1.4 · ISO 400 · NORTH LIGHT',
  dark = false,
  className = '',
}: {
  label?: string;
  dark?: boolean;
  className?: string;
}) {
  const ticks = Array.from({ length: 49 }, (_, i) => i);
  const textTone = dark ? 'text-darkroom-muted' : 'text-muted';
  const tickTone = dark ? 'bg-darkroom-line' : 'bg-line/80';
  const majorTone = dark ? 'bg-zone-6' : 'bg-ink/50';

  return (
    <div
      aria-hidden="true"
      className={`relative overflow-hidden border-y ${
        dark ? 'border-darkroom-line bg-darkroom' : 'border-line/70 bg-bg/80'
      } ${className}`}
    >
      <div className="wrap flex items-center justify-between gap-4 py-1.5">
        <span className={`font-edge text-[11px] tracking-[0.14em] uppercase ${textTone}`}>
          f/1.4 · 2 · 2.8 · 4 · 5.6 · 8 · 11 · 16
        </span>

        <div className="hidden flex-1 items-end justify-center gap-1.5 sm:flex">
          {ticks.map(i => {
            const isCenter = i === 24;
            const isMajor = i % 6 === 0;
            return (
              <span
                key={i}
                className={`block w-px ${
                  isCenter
                    ? 'h-3.5 bg-mark'
                    : isMajor
                      ? `h-2.5 ${majorTone}`
                      : `h-1.5 ${tickTone}`
                }`}
              />
            );
          })}
        </div>

        <span className={`font-edge text-[11px] tracking-[0.12em] uppercase ${textTone}`}>
          {label}
        </span>
      </div>
    </div>
  );
}

/**
 * Contact-sheet film margin divider with frame counters and stock rebate marks.
 */
export function ContactSheetBorder({
  stock = 'SILVER FRAME 400 · ARCHIVAL FIBRE',
  className = '',
}: {
  stock?: string;
  className?: string;
}) {
  const frames = ['01A', '02A', '03A', '04A', '05A', '06A', '07A', '08A'];
  return (
    <div
      aria-hidden="true"
      className={`border-y border-line/75 bg-raised/70 py-1.5 text-muted ${className}`}
    >
      <div className="wrap flex items-center justify-between gap-4 overflow-hidden font-edge text-[11px] tracking-[0.16em]">
        <span className="shrink-0 text-mark">▸ {stock}</span>
        <div className="hidden items-center gap-6 md:flex">
          {frames.map(code => (
            <span key={code} className="inline-flex items-center gap-1.5 opacity-70">
              <span className="inline-block h-1.5 w-1.5 rotate-45 border border-line" />
              {code}
            </span>
          ))}
        </div>
        <span className="shrink-0 opacity-75">ASHEVILLE · NC</span>
      </div>
    </div>
  );
}

/**
 * Hand-torn fibre-paper deckle edge SVG border transitioning into a darkroom band or mat surface.
 */
export function DeckleEdgeBorder({
  fillClass = 'fill-darkroom',
  flip = false,
  className = '',
}: {
  fillClass?: string;
  flip?: boolean;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none w-full overflow-hidden leading-none ${
        flip ? 'rotate-180' : ''
      } ${className}`}
    >
      <svg
        viewBox="0 0 1440 24"
        preserveAspectRatio="none"
        className={`block h-3.5 w-full sm:h-5 ${fillClass}`}
      >
        <path d="M0 24 L0 14 L38 11 L72 15 L118 9 L164 14 L212 10 L256 15 L308 8 L354 13 L402 10 L452 16 L504 9 L558 14 L612 11 L664 15 L718 8 L774 14 L828 10 L884 15 L936 9 L988 14 L1042 10 L1098 15 L1154 9 L1210 14 L1264 10 L1320 15 L1378 9 L1440 13 L1440 24 Z" />
      </svg>
    </div>
  );
}

/**
 * Repeating 35mm sprocket perforation trim border for darkroom bands.
 */
export function SprocketEdgeDivider({ className = '' }: { className?: string }) {
  return <div aria-hidden="true" className={`sprocket-rail-subtle w-full ${className}`} />;
}

/**
 * Subtle ground-glass medium-format viewfinder background decoration:
 * hairline rule-of-thirds, central split-prism focusing circle, and corner registration marks.
 */
export function ViewfinderBackdrop({ className = '' }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1200 720"
      preserveAspectRatio="xMidYMid slice"
      className={`pointer-events-none absolute inset-0 h-full w-full text-ink opacity-[0.065] dark:opacity-[0.095] ${className}`}
      fill="none"
    >
      {/* Rule of thirds hairlines */}
      <line x1="400" y1="0" x2="400" y2="720" stroke="currentColor" strokeWidth="1" strokeDasharray="4 8" />
      <line x1="800" y1="0" x2="800" y2="720" stroke="currentColor" strokeWidth="1" strokeDasharray="4 8" />
      <line x1="0" y1="240" x2="1200" y2="240" stroke="currentColor" strokeWidth="1" strokeDasharray="4 8" />
      <line x1="0" y1="480" x2="1200" y2="480" stroke="currentColor" strokeWidth="1" strokeDasharray="4 8" />

      {/* Central split-prism focusing ring */}
      <circle cx="600" cy="360" r="140" stroke="currentColor" strokeWidth="1" />
      <circle cx="600" cy="360" r="46" stroke="currentColor" strokeWidth="1" strokeDasharray="6 6" />
      <line x1="554" y1="360" x2="646" y2="360" stroke="currentColor" strokeWidth="1" />
      <line x1="600" y1="205" x2="600" y2="235" stroke="currentColor" strokeWidth="1.2" />
      <line x1="600" y1="485" x2="600" y2="515" stroke="currentColor" strokeWidth="1.2" />

      {/* Corner registration brackets */}
      <path d="M48 92 V48 H92" stroke="currentColor" strokeWidth="1.5" />
      <path d="M1152 92 V48 H1108" stroke="currentColor" strokeWidth="1.5" />
      <path d="M48 628 V672 H92" stroke="currentColor" strokeWidth="1.5" />
      <path d="M1152 628 V672 H1108" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

/**
 * Large-scale geometric 8-blade mechanical lens aperture iris watermark for editorial sections.
 */
export function ApertureIrisBackdrop({
  align = 'right',
  className = '',
}: {
  align?: 'left' | 'right' | 'center';
  className?: string;
}) {
  const cx = align === 'left' ? 180 : align === 'center' ? 600 : 1040;
  const blades = [0, 45, 90, 135, 180, 225, 270, 315];

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1200 640"
      preserveAspectRatio="xMidYMid slice"
      className={`pointer-events-none absolute inset-0 h-full w-full text-ink opacity-[0.055] dark:opacity-[0.08] ${className}`}
      fill="none"
    >
      <g transform={`translate(${cx}, 320)`}>
        <circle r="290" stroke="currentColor" strokeWidth="1" />
        <circle r="245" stroke="currentColor" strokeWidth="1" strokeDasharray="4 8" />
        <circle r="118" stroke="currentColor" strokeWidth="1.2" />
        {blades.map(angle => (
          <line
            key={angle}
            x1="0"
            y1="-118"
            x2="245"
            y2="-118"
            stroke="currentColor"
            strokeWidth="1"
            transform={`rotate(${angle})`}
          />
        ))}
      </g>
    </svg>
  );
}

/**
 * Print-room cutting-mat & archival print format guide (8x10, 11x14 crop marks + 45° bevel lines).
 */
export function CuttingMatBackdrop({ className = '' }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1200 600"
      preserveAspectRatio="xMidYMid slice"
      className={`pointer-events-none absolute inset-0 h-full w-full text-ink opacity-[0.06] dark:opacity-[0.08] ${className}`}
      fill="none"
    >
      {/* 45-degree mat-cutter guide diagonals at corners */}
      <line x1="0" y1="160" x2="160" y2="0" stroke="currentColor" strokeWidth="1" strokeDasharray="4 6" />
      <line x1="1200" y1="440" x2="1040" y2="600" stroke="currentColor" strokeWidth="1" strokeDasharray="4 6" />

      {/* Registration target crosshairs */}
      <g stroke="currentColor" strokeWidth="1.2">
        <circle cx="56" cy="544" r="9" />
        <line x1="40" y1="544" x2="72" y2="544" />
        <line x1="56" y1="528" x2="56" y2="560" />

        <circle cx="1144" cy="56" r="9" />
        <line x1="1128" y1="56" x2="1160" y2="56" />
        <line x1="1144" y1="40" x2="1144" y2="72" />
      </g>

      {/* Subtle archival print proportion corner ticks */}
      <path d="M96 112 V88 H120" stroke="currentColor" strokeWidth="1.2" />
      <path d="M1104 488 V512 H1080" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

/**
 * Atmospheric concentric lens-ring & optical registration decoration for darkroom bands.
 */
export function DarkroomOpticsBackdrop({ className = '' }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1200 600"
      preserveAspectRatio="xMidYMid slice"
      className={`pointer-events-none absolute inset-0 h-full w-full text-mark opacity-[0.11] ${className}`}
      fill="none"
    >
      <circle cx="1060" cy="120" r="220" stroke="currentColor" strokeWidth="1" />
      <circle cx="1060" cy="120" r="310" stroke="currentColor" strokeWidth="1" strokeDasharray="3 9" />
      <circle cx="120" cy="520" r="190" stroke="currentColor" strokeWidth="1" strokeDasharray="5 10" />
      {/* Optical registration crosshairs */}
      <g stroke="currentColor" strokeWidth="1.2">
        <circle cx="72" cy="72" r="10" />
        <line x1="54" y1="72" x2="90" y2="72" />
        <line x1="72" y1="54" x2="72" y2="90" />
        <circle cx="1128" cy="528" r="10" />
        <line x1="1110" y1="528" x2="1146" y2="528" />
        <line x1="1128" y1="510" x2="1128" y2="546" />
      </g>
    </svg>
  );
}

/**
 * Framed darkroom enlarging easel corner-blade accent wrapper for featured content blocks.
 */
export function EaselFrame({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      <span aria-hidden="true" className="pointer-events-none absolute -top-2 -left-2 h-5 w-5 border-t-2 border-l-2 border-mark/75" />
      <span aria-hidden="true" className="pointer-events-none absolute -top-2 -right-2 h-5 w-5 border-t-2 border-r-2 border-line" />
      <span aria-hidden="true" className="pointer-events-none absolute -bottom-2 -left-2 h-5 w-5 border-b-2 border-l-2 border-line" />
      <span aria-hidden="true" className="pointer-events-none absolute -right-2 -bottom-2 h-5 w-5 border-r-2 border-b-2 border-mark/75" />
      {children}
    </div>
  );
}

/**
 * Small brushed-steel gallery mounting pin for wall placards.
 */
export function GalleryPin({ className = '' }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none inline-block h-3.5 w-3.5 rounded-full border border-ink/40 shadow-[0_2px_4px_rgba(14,13,12,0.45)] ${className}`}
      style={{
        background: 'radial-gradient(circle at 35% 30%, #F4F1EA 0%, #A7A39B 55%, #55524D 100%)',
      }}
    />
  );
}
