import { useId, type ReactNode } from 'react';
import type { PrintOrientation } from '../../content/galleries';

/** Ten Zone System silver-gelatin print tones, shared across light and dark modes. */
export const Z = {
  0: '#0E0D0C',
  1: '#2A2826',
  2: '#3E3B38',
  3: '#55524D',
  4: '#6E6A64',
  5: '#8A867F',
  6: '#A7A39B',
  7: '#C4C0B7',
  8: '#DEDAD1',
  9: '#F4F1EA',
} as const;

export const PRINT_DIMENSIONS: Record<PrintOrientation, { width: number; height: number; inset: number }> = {
  landscape: { width: 600, height: 400, inset: 14 },
  portrait: { width: 400, height: 500, inset: 14 },
  square: { width: 440, height: 440, inset: 14 },
};

interface PrintCanvasProps {
  orientation: PrintOrientation;
  label?: string;
  decorative?: boolean;
  className?: string;
  children: ReactNode;
}

/**
 * Shared silver-gelatin print wrapper: thin fibre-white paper border, crisp inner rabbet,
 * subtle feTurbulence film-grain overlay, and accessible role/label.
 */
export function PrintCanvas({
  orientation,
  label,
  decorative = false,
  className = '',
  children,
}: PrintCanvasProps) {
  const uid = useId().replace(/:/g, '');
  const grainId = `grain-${uid}`;
  const clipId = `clip-${uid}`;
  const { width, height, inset } = PRINT_DIMENSIONS[orientation];
  const innerW = width - inset * 2;
  const innerH = height - inset * 2;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={`block h-auto w-full select-none ${className}`}
      role={decorative ? undefined : 'img'}
      aria-label={decorative ? undefined : label}
      aria-hidden={decorative ? true : undefined}
    >
      <defs>
        <filter id={grainId} x="0%" y="0%" width="100%" height="100%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.82"
            numOctaves="2"
            seed="7"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <clipPath id={clipId}>
          <rect x={inset} y={inset} width={innerW} height={innerH} />
        </clipPath>
      </defs>

      {/* Thin fibre-white paper border */}
      <rect x="0" y="0" width={width} height={height} fill={Z[9]} />

      {/* Tonal scene clipped to inner print rabbet */}
      <g clipPath={`url(#${clipId})`}>
        {children}
        {/* Subtle silver-gelatin film grain */}
        <rect
          x={inset}
          y={inset}
          width={innerW}
          height={innerH}
          filter={`url(#${grainId})`}
          opacity="0.11"
          style={{ mixBlendMode: 'overlay' }}
        />
      </g>

      {/* Crisp darkroom easel rabbet line */}
      <rect
        x={inset}
        y={inset}
        width={innerW}
        height={innerH}
        fill="none"
        stroke={Z[0]}
        strokeOpacity="0.35"
        strokeWidth="1.25"
      />
    </svg>
  );
}
