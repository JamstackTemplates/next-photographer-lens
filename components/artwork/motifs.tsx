import { useId } from 'react';
import { asset } from '../../lib/paths';
import { Z } from '../prints/print-canvas';
import { BulldogPeg } from './icons';

const ZONES = [
  { numeral: '0', hex: Z[0], light: true },
  { numeral: 'I', hex: Z[1], light: true },
  { numeral: 'II', hex: Z[2], light: true },
  { numeral: 'III', hex: Z[3], light: true },
  { numeral: 'IV', hex: Z[4], light: true },
  { numeral: 'V', hex: Z[5], light: false },
  { numeral: 'VI', hex: Z[6], light: false },
  { numeral: 'VII', hex: Z[7], light: false },
  { numeral: 'VIII', hex: Z[8], light: false },
  { numeral: 'IX', hex: Z[9], light: false },
] as const;

/** Ten-step Zone System scale bar (0–IX), used as section divider and footer top edge. */
export function ZoneScaleBar({ className = '' }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`grid grid-cols-10 overflow-hidden border-y border-line/60 ${className}`}
    >
      {ZONES.map(zone => (
        <div
          key={zone.numeral}
          style={{ backgroundColor: zone.hex, color: zone.light ? Z[8] : Z[1] }}
          className="flex h-6 items-center justify-center font-edge text-[11px] tracking-wider"
        >
          {zone.numeral}
        </div>
      ))}
    </div>
  );
}

/**
 * Developing tray seen from above (Developer, Stop, Fix, Wash),
 * showing the real silver-gelatin ridge print emerging across 4 progressive chemical bath stages.
 */
export function DevelopingTraySvg({
  stage,
  bathLabel,
}: {
  stage: 1 | 2 | 3 | 4;
  bathLabel: string;
}) {
  const stageFilter =
    stage === 1
      ? 'opacity-[0.16] brightness-[1.45] contrast-[0.65] blur-[0.8px]'
      : stage === 2
        ? 'opacity-[0.48] brightness-[1.2] contrast-[0.82]'
        : stage === 3
          ? 'opacity-[0.82] brightness-[1.05] contrast-[0.96]'
          : 'opacity-100 brightness-100 contrast-[1.06]';

  const tilt = stage % 2 === 0 ? 'rotate-[2deg]' : '-rotate-[2deg]';

  return (
    <div
      className="relative aspect-[4/3] w-full rounded-[10px] border border-line bg-zone-8 p-3 shadow-[inset_0_2px_10px_rgba(14,13,12,0.16)] dark:border-darkroom-line dark:bg-zone-2"
      role="img"
      aria-label={`${bathLabel} darkroom developing tray, stage ${stage} of 4`}
    >
      {/* Inner recessed liquid bath */}
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[6px] border border-line/70 bg-zone-7/80 p-3.5 shadow-[inset_0_4px_14px_rgba(14,13,12,0.22)] dark:border-darkroom-line dark:bg-zone-1/90">
        {/* Emerging silver-gelatin print submerged in liquid */}
        <div
          className={`relative w-[84%] bg-zone-9 p-1.5 shadow-[0_6px_14px_rgba(14,13,12,0.25)] transition-transform ${tilt}`}
        >
          <div className="aspect-[3/2] w-full overflow-hidden bg-zone-9">
            <img
              src={asset('/prints/ridge-vows.jpg')}
              alt=""
              aria-hidden="true"
              loading="lazy"
              className={`block h-full w-full object-cover ${stageFilter}`}
            />
          </div>
        </div>

        {/* Liquid sheen & subtle darkroom bath ripple overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, rgba(255,255,255,0.24) 0%, transparent 40%, transparent 70%, rgba(255,255,255,0.14) 100%)',
          }}
        />
      </div>
    </div>
  );
}

/** Galleries PageHead art: glowing light table with 35mm contact strips, slide mounts & darkroom loupe. */
export function LightTableArt({ className = '' }: { className?: string }) {
  return (
    <div className={`window-mat p-2.5 ${className}`}>
      <div className="aspect-[4/3] w-full overflow-hidden border border-line/70 bg-zone-1">
        <img
          src={asset('/prints/galleries-lighttable.jpg')}
          alt="Illuminated photography light table with black-and-white 35mm contact strips, slide mounts, brass magnifying loupe and amber grease pencil"
          className="block h-full w-full object-cover"
        />
      </div>
    </div>
  );
}

/** Packages PageHead art: archival linen album, bevelled window mats, steel rule and grease pencil. */
export function WindowMatCornerArt({ className = '' }: { className?: string }) {
  return (
    <div className={`window-mat p-2.5 ${className}`}>
      <div className="aspect-[4/3] w-full overflow-hidden border border-line/70 bg-zone-1">
        <img
          src={asset('/prints/packages-hero.jpg')}
          alt="Archival linen wedding album beside bevelled museum window mats framing a Blue Ridge print, steel straightedge ruler and grease pencil"
          className="block h-full w-full object-cover"
        />
      </div>
    </div>
  );
}

/** Wax seal outline: a softly irregular disc so it reads as pressed wax, not a coin. */
const SEAL_PATH = (() => {
  const points = Array.from({ length: 32 }, (_, i) => {
    const angle = (i / 32) * Math.PI * 2;
    const radius = 16.5 + 0.9 * Math.sin(i * 2.1) + 0.5 * Math.cos(i * 3.7);
    return `${(170 + radius * Math.cos(angle)).toFixed(1)} ${(130 + radius * Math.sin(angle)).toFixed(1)}`;
  });
  return `M${points.join(' L')} Z`;
})();

/** Six aperture blades embossed into the seal. */
const IRIS_PATH = Array.from({ length: 6 }, (_, i) => {
  const a = (i / 6) * Math.PI * 2;
  const b = a + Math.PI / 3 + 0.5;
  return `M${(170 + 7.5 * Math.cos(a)).toFixed(1)} ${(130 + 7.5 * Math.sin(a)).toFixed(1)} L${(170 + 3.2 * Math.cos(b)).toFixed(1)} ${(130 + 3.2 * Math.sin(b)).toFixed(1)}`;
}).join(' ');

/** Spring clothes peg gripping the envelope; the wire passes through its spring. */
function EnvelopePeg({ x, tilt }: { x: number; tilt: number }) {
  return (
    <g transform={`translate(${x} 6) rotate(${tilt} 0 23)`}>
      <rect x="-7" y="0" width="14" height="52" rx="3" fill={Z[6]} stroke={Z[0]} strokeWidth="1.3" />
      <line x1="0" y1="2" x2="0" y2="50" stroke={Z[4]} strokeWidth="1" />
      <line x1="-7" y1="10" x2="7" y2="10" stroke={Z[4]} strokeWidth="0.8" />
      <rect x="-9" y="20" width="18" height="6" rx="1.5" fill={Z[3]} stroke={Z[0]} strokeWidth="1" />
      <circle cx="-9" cy="23" r="2.2" fill={Z[5]} stroke={Z[0]} strokeWidth="0.9" />
    </g>
  );
}

/** Contact PageHead art: sealed fibre-print envelope pegged to a sagging studio wire. */
export function PeggedEnvelopeArt({ className = '' }: { className?: string }) {
  // Paper is always light, so outlines and the stamp use fixed darkroom tones in both themes.
  const outline = Z[1];
  const amber = '#B8641F';
  return (
    <svg
      viewBox="0 0 340 222"
      className={`block h-auto w-full ${className}`}
      role="img"
      aria-label="Sealed envelope of photographs, stamped please do not bend, pegged to a studio drying wire"
    >
      {/* Sagging drying wire */}
      <path d="M0 18 Q170 42 340 18" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />

      {/* Cast shadow */}
      <rect x="45" y="50" width="260" height="158" rx="3" fill="#000" opacity="0.14" />

      {/* Envelope back with side and bottom flaps */}
      <rect x="40" y="44" width="260" height="158" rx="3" fill={Z[8]} stroke={outline} strokeWidth="1.5" />
      <path d="M40 44 L150 126 L40 202 Z" fill={Z[7]} opacity="0.5" />
      <path d="M300 44 L190 126 L300 202 Z" fill={Z[7]} opacity="0.5" />
      <path
        d="M41 201 L170 112 L299 201"
        fill={Z[8]}
        stroke={outline}
        strokeWidth="1"
        strokeLinejoin="round"
        opacity="0.9"
      />

      {/* Top flap and its soft shadow */}
      <path d="M42 48 L170 136 L298 48" fill="none" stroke="#000" strokeWidth="3" opacity="0.1" />
      <path d="M40 44 L170 132 L300 44 Z" fill={Z[9]} stroke={outline} strokeWidth="1.4" strokeLinejoin="round" />

      {/* Rubber stamp */}
      <g transform="rotate(-7 96 176)" fill={amber} opacity="0.85">
        <rect x="58" y="162" width="78" height="28" rx="2" fill="none" stroke={amber} strokeWidth="1.4" />
        <rect x="61" y="165" width="72" height="22" rx="1" fill="none" stroke={amber} strokeWidth="0.6" />
        <text
          x="97"
          y="175.5"
          textAnchor="middle"
          fontFamily="var(--font-sans)"
          fontWeight="700"
          fontSize="7.6"
          letterSpacing="0.8"
        >
          PHOTOGRAPHS
        </text>
        <text
          x="97"
          y="184"
          textAnchor="middle"
          fontFamily="var(--font-sans)"
          fontWeight="600"
          fontSize="5"
          letterSpacing="0.6"
        >
          PLEASE DO NOT BEND
        </text>
      </g>

      {/* Edge code */}
      <text
        x="282"
        y="194"
        textAnchor="end"
        fontFamily="var(--font-edge)"
        fontSize="7.5"
        fill={Z[3]}
        letterSpacing="1"
      >
        SF 400 · 8×10 FB
      </text>

      {/* Wax seal with embossed aperture */}
      <circle cx="171.5" cy="132.5" r="17" fill="#000" opacity="0.16" />
      <path d={SEAL_PATH} fill={amber} />
      <circle cx="170" cy="130" r="11" fill="none" stroke="#000" strokeOpacity="0.22" strokeWidth="1.4" />
      <circle cx="170" cy="130" r="7.5" fill="none" stroke="#fff" strokeOpacity="0.5" strokeWidth="1" />
      <path d={IRIS_PATH} fill="none" stroke="#fff" strokeOpacity="0.55" strokeWidth="1" />
      <path
        d="M158 122 A15 15 0 0 1 166 116"
        fill="none"
        stroke="#fff"
        strokeOpacity="0.45"
        strokeWidth="1.6"
        strokeLinecap="round"
      />

      <EnvelopePeg x={84} tilt={-3} />
      <EnvelopePeg x={256} tilt={3} />
    </svg>
  );
}

/** 404 art: Fogged print hanging on the line with a faint ridge ghost and amber light leak. */
export function FoggedPrintArt({ className = '' }: { className?: string }) {
  const uid = useId().replace(/:/g, '');
  const leakId = `leak-${uid}`;
  return (
    <div className={`relative mx-auto max-w-md pt-6 ${className}`}>
      {/* Drying wire */}
      <div aria-hidden="true" className="absolute inset-x-0 top-6 h-px bg-line" />
      <div className="relative mx-auto w-72 sm:w-80">
        <div className="relative z-10 -mb-3 flex justify-center">
          <BulldogPeg />
        </div>
        <div className="rotate-[-2.5deg] shadow-xl">
          <svg
            viewBox="0 0 420 310"
            className="block h-auto w-full"
            role="img"
            aria-label="Fogged darkroom print with a faint ghost of mountain ridges and an amber light leak"
          >
            <defs>
              <linearGradient id={leakId} x1="1" y1="0" x2="0.45" y2="0.7">
                <stop offset="0%" stopColor="#E3A04A" stopOpacity="0.68" />
                <stop offset="45%" stopColor="#B8641F" stopOpacity="0.28" />
                <stop offset="100%" stopColor="#DEDAD1" stopOpacity="0" />
              </linearGradient>
            </defs>
            {/* Paper border */}
            <rect x="0" y="0" width="420" height="310" fill={Z[9]} />
            {/* Fogged Zone VIII emulsion */}
            <rect x="16" y="16" width="388" height="278" fill={Z[8]} stroke={Z[4]} strokeWidth="1" />
            {/* Faint underdeveloped ghost of the ridges */}
            <path d="M16 196 Q128 164 236 184 T404 172 L404 294 L16 294 Z" fill={Z[7]} opacity="0.52" />
            <path d="M16 238 Q160 218 404 234 L404 294 L16 294 Z" fill={Z[6]} opacity="0.34" />
            {/* Amber light leak along right edge */}
            <rect x="16" y="16" width="388" height="278" fill={`url(#${leakId})`} />
            {/* Diagonal grease-pencil cross-out */}
            <path d="M332 42 L374 84 M374 42 L332 84" stroke="var(--mark)" strokeWidth="2.4" strokeLinecap="round" opacity="0.7" />
          </svg>
        </div>
      </div>
    </div>
  );
}
