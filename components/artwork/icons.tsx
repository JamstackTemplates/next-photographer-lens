import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const base = (size = 24): SVGProps<SVGSVGElement> => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
});

export function BulldogPegIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <circle cx="12" cy="5.5" r="2.5" fill="var(--zone-6)" />
      <path d="M9.5 8 L7 19 H17 L14.5 8 Z" fill="var(--zone-7)" />
      <line x1="7" y1="15.5" x2="17" y2="15.5" />
    </svg>
  );
}

export function FilmCanisterIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <rect x="6" y="6" width="10" height="14" rx="1.5" fill="var(--zone-7)" />
      <rect x="8.5" y="3" width="5" height="3" rx="0.5" fill="var(--zone-5)" />
      <path d="M16 10 H20 L18.5 16 H16" fill="var(--zone-8)" />
    </svg>
  );
}

export function TlrIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <rect x="6" y="4" width="12" height="16" rx="1.5" fill="var(--zone-7)" />
      <circle cx="12" cy="9.5" r="2.3" fill="var(--zone-3)" />
      <circle cx="12" cy="15.5" r="2.5" fill="var(--zone-2)" />
      <path d="M8 4 L9.5 2 H14.5 L16 4" />
    </svg>
  );
}

export function LoupeIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <ellipse cx="12" cy="6" rx="5.5" ry="2.5" fill="var(--zone-8)" />
      <path d="M6.5 6 L4.5 18 C4.5 19.8 7.8 21 12 21 C16.2 21 19.5 19.8 19.5 18 L17.5 6" fill="var(--zone-6)" fillOpacity="0.35" />
      <ellipse cx="12" cy="18" rx="7.5" ry="2.5" />
    </svg>
  );
}

export function LightMeterIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <rect x="6.5" y="5" width="11" height="16" rx="2" fill="var(--zone-7)" />
      <path d="M9 5 A3 3 0 0 1 15 5" fill="var(--zone-9)" />
      <circle cx="12" cy="13.5" r="3.2" fill="var(--zone-9)" />
      <path d="M12 13.5 L13.8 11.8" />
    </svg>
  );
}

export function TongsIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <path d="M4 19 L17 6 C18.5 4.5 20.5 6.5 19 8 L7 20" />
      <circle cx="5.5" cy="19.5" r="1.5" fill="var(--zone-6)" />
      <circle cx="8.5" cy="19.5" r="1.5" fill="var(--zone-6)" />
    </svg>
  );
}

export function EnvelopeIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <rect x="3" y="5.5" width="18" height="13" rx="1.5" fill="var(--zone-8)" fillOpacity="0.4" />
      <path d="M3.5 6.5 L12 13 L20.5 6.5" />
    </svg>
  );
}

export function PhoneIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <path
        d="M5.5 4.5 H9 L10.5 8.5 L8.5 10 C9.6 12.2 11.8 14.4 14 15.5 L15.5 13.5 L19.5 15 V18.5 C19.5 19.3 18.8 20 18 20 C10.5 19.6 4.4 13.5 4 6 C4 5.2 4.7 4.5 5.5 4.5 Z"
        fill="var(--zone-7)"
        fillOpacity="0.35"
      />
    </svg>
  );
}

export function MapPinIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <path d="M12 21 C12 21 18 14.8 18 10 A6 6 0 1 0 6 10 C6 14.8 12 21 12 21 Z" fill="var(--zone-7)" fillOpacity="0.35" />
      <circle cx="12" cy="10" r="2.2" fill="var(--mark)" stroke="none" />
    </svg>
  );
}

export function ClockIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <circle cx="12" cy="12" r="8.5" fill="var(--zone-8)" fillOpacity="0.35" />
      <path d="M12 7.5 V12 L15.2 13.8" />
    </svg>
  );
}

export function GreasePencilIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <path d="M4 20 L6.5 14.5 L16.5 4.5 L19.5 7.5 L9.5 17.5 Z" fill="var(--mark)" fillOpacity="0.35" />
      <path d="M14.5 6.5 L17.5 9.5" />
    </svg>
  );
}

/** Steel bulldog clip pegging a print to the drying line. */
export function BulldogPeg({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 44"
      width="32"
      height="40"
      aria-hidden="true"
      className={`peg-svg block ${className}`}
    >
      {/* Top finger handle with hanging hole */}
      <path
        d="M11 16 L13 4 C13.3 2.5 15 1.5 18 1.5 C21 1.5 22.7 2.5 23 4 L25 16 Z"
        fill="#A7A39B"
        stroke="#0E0D0C"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="18" cy="7.5" r="2.4" fill="#161514" stroke="#0E0D0C" strokeWidth="1" />
      {/* Wire hinge */}
      <rect x="8" y="14" width="20" height="4" rx="2" fill="#DEDAD1" stroke="#0E0D0C" strokeWidth="1.3" />
      {/* Steel jaw gripping top of print */}
      <path
        d="M6 18 H30 L32 37 C32 38.8 30.8 40 29 40 H7 C5.2 40 4 38.8 4 37 Z"
        fill="#C4C0B7"
        stroke="#0E0D0C"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Jaw grip ridges */}
      <line x1="8" y1="33" x2="28" y2="33" stroke="#55524D" strokeWidth="1.4" />
      <line x1="8" y1="36.5" x2="28" y2="36.5" stroke="#55524D" strokeWidth="1.4" />
      {/* Metallic specular streak */}
      <line x1="11" y1="21" x2="11" y2="30" stroke="#F4F1EA" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
    </svg>
  );
}

/** Hand-drawn grease-pencil L-corner crop marks in the accent mark colour. */
export function GreaseCropMarks({ className = '' }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 ${className}`}>
      <svg className="absolute -top-2.5 -left-2.5 h-8 w-8 text-mark" viewBox="0 0 36 36" fill="none">
        <path d="M4 28 C4.5 18 3.8 11 5 5.2 C11.5 4.2 19 4.8 29 4" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <svg className="absolute -right-2.5 -bottom-2.5 h-8 w-8 text-mark" viewBox="0 0 36 36" fill="none">
        <path d="M32 8 C31.4 18 32 25 30.8 30.8 C24.5 31.8 17 31 7 32" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

/** Short irregular grease-pencil underline for PageHead accent words. */
export function GreaseUnderline({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 180 14"
      fill="none"
      aria-hidden="true"
      className={`block h-3 w-36 text-mark ${className}`}
    >
      <path
        d="M3 9.5 C42 4.5, 96 4.2, 176 7.5"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <path
        d="M12 11.5 C58 8.2, 114 7.8, 162 9.8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  );
}

/** Grease-pencil hand-drawn circle around highlighted package price. */
export function GreaseCircle({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 180 76"
      fill="none"
      aria-hidden="true"
      className={`pointer-events-none absolute -inset-x-4 -inset-y-2.5 h-[calc(100%+1.25rem)] w-[calc(100%+2rem)] text-mark ${className}`}
      preserveAspectRatio="none"
    >
      <path
        d="M22 16 C56 3, 134 4, 162 22 C178 34, 174 58, 146 66 C106 76, 36 74, 14 56 C2 44, 6 22, 34 12"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Bevelled window-mat corner ornament for gallery placards. */
export function WindowMatCorner({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 28 28" width="22" height="22" fill="none" aria-hidden="true" className={className}>
      <path d="M1 27 V1 H27" stroke="currentColor" strokeWidth="1.4" opacity="0.7" />
      <path d="M7 27 V7 H27" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <line x1="1" y1="1" x2="7" y2="7" stroke="currentColor" strokeWidth="1" opacity="0.55" />
    </svg>
  );
}
