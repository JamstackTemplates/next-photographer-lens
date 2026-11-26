import { asset } from '../../lib/paths';
import { Z } from '../prints/print-canvas';

/** About & Home art: Mara in silver-gelatin tones, half-length, looking down into a TLR viewfinder beside a north window. */
export function MaraPortraitPrint({ className = '' }: { className?: string }) {
  return (
    <span className={`block w-full bg-zone-9 p-[3%] ${className}`}>
      <span className="block aspect-[4/5] w-full overflow-hidden border border-zone-0/35 bg-zone-1">
        <img
          src={asset('/prints/mara-portrait.jpg')}
          alt="Mara Ellison looking down into a twin-lens reflex viewfinder beside the north studio window"
          loading="lazy"
          className="block h-full w-full object-cover object-top"
        />
      </span>
    </span>
  );
}

/** About Team art: Theo Vance silver-gelatin portrait with his 35mm rangefinder camera. */
export function TheoPortraitPrint({ className = '' }: { className?: string }) {
  return (
    <span className={`block w-full bg-zone-9 p-[3%] ${className}`}>
      <span className="block aspect-[4/5] w-full overflow-hidden border border-zone-0/35 bg-zone-1">
        <img
          src={asset('/prints/theo-portrait.jpg')}
          alt="Theo Vance with a 35mm rangefinder camera"
          loading="lazy"
          className="block h-full w-full object-cover object-top"
        />
      </span>
    </span>
  );
}

/**
 * About "In the bag" art: overhead flat-lay illustration of all 8 items in content/team.ts
 * with numbered leader callouts (1–8).
 */
export function CameraBagFlatLay({ className = '' }: { className?: string }) {
  const badge = (x: number, y: number, n: number) => (
    <g key={n}>
      <circle cx={x} cy={y} r="13" fill="var(--accent)" />
      <text
        x={x}
        y={y + 4.5}
        textAnchor="middle"
        fill="#FFFFFF"
        fontSize="13"
        fontWeight="700"
        fontFamily="var(--font-sans)"
      >
        {n}
      </text>
    </g>
  );

  return (
    <svg
      viewBox="0 0 680 440"
      className={`block h-auto w-full ${className}`}
      role="img"
      aria-label="Overhead flat-lay drawing of the studio camera bag contents, numbered 1 to 8"
    >
      {/* Canvas mat worktable */}
      <rect x="8" y="8" width="664" height="424" rx="4" fill="var(--raised)" stroke="var(--line)" strokeWidth="1.5" />
      <rect x="20" y="20" width="640" height="400" fill="none" stroke="var(--line)" strokeWidth="1" strokeDasharray="4 4" opacity="0.6" />

      {/* 1. Twin-lens reflex (top-left) */}
      <g transform="translate(52, 48)">
        <rect x="0" y="0" width="94" height="124" rx="5" fill={Z[2]} stroke="currentColor" strokeWidth="1.5" />
        <rect x="10" y="10" width="74" height="104" rx="2" fill={Z[1]} />
        <circle cx="47" cy="40" r="20" fill={Z[4]} stroke={Z[8]} strokeWidth="2" />
        <circle cx="47" cy="40" r="11" fill={Z[0]} />
        <circle cx="47" cy="88" r="22" fill={Z[4]} stroke={Z[8]} strokeWidth="2" />
        <circle cx="47" cy="88" r="13" fill={Z[0]} />
        <rect x="94" y="28" width="10" height="24" rx="2" fill={Z[6]} stroke="currentColor" strokeWidth="1.2" />
      </g>
      <line x1="158" y1="62" x2="178" y2="52" stroke="var(--mark)" strokeWidth="1.5" />
      {badge(190, 48, 1)}

      {/* 2. 35mm rangefinder (top-centre) */}
      <g transform="translate(230, 56)">
        <rect x="0" y="14" width="144" height="72" rx="6" fill={Z[7]} stroke="currentColor" strokeWidth="1.5" />
        <rect x="0" y="34" width="144" height="44" fill={Z[2]} />
        <circle cx="78" cy="54" r="26" fill={Z[5]} stroke={Z[9]} strokeWidth="2" />
        <circle cx="78" cy="54" r="15" fill={Z[0]} />
        <rect x="16" y="20" width="22" height="10" fill={Z[1]} />
        <circle cx="122" cy="24" r="5" fill={Z[3]} />
        <rect x="18" y="4" width="24" height="10" rx="2" fill={Z[6]} stroke="currentColor" strokeWidth="1.2" />
      </g>
      <line x1="374" y1="64" x2="394" y2="52" stroke="var(--mark)" strokeWidth="1.5" />
      {badge(406, 48, 2)}

      {/* 3. Two mirrorless bodies (top-right) */}
      <g transform="translate(454, 46)">
        <rect x="0" y="16" width="144" height="76" rx="6" fill={Z[1]} stroke="currentColor" strokeWidth="1.5" />
        <path d="M44 16 L54 4 H90 L100 16 Z" fill={Z[2]} stroke="currentColor" strokeWidth="1.4" />
        <circle cx="72" cy="54" r="24" fill={Z[3]} stroke={Z[7]} strokeWidth="2" />
        <circle cx="72" cy="54" r="15" fill={Z[0]} />
        {/* Second body offset below */}
        <rect x="24" y="106" width="144" height="76" rx="6" fill={Z[2]} stroke="currentColor" strokeWidth="1.5" />
        <path d="M68 106 L78 94 H114 L124 106 Z" fill={Z[3]} stroke="currentColor" strokeWidth="1.4" />
        <circle cx="96" cy="144" r="24" fill={Z[4]} stroke={Z[8]} strokeWidth="2" />
        <circle cx="96" cy="144" r="15" fill={Z[0]} />
      </g>
      <line x1="612" y1="70" x2="628" y2="56" stroke="var(--mark)" strokeWidth="1.5" />
      {badge(636, 48, 3)}

      {/* 4. 50mm f/1.4 lens (bottom-left) */}
      <g transform="translate(56, 224)">
        <circle cx="52" cy="52" r="46" fill={Z[2]} stroke="currentColor" strokeWidth="1.5" />
        <circle cx="52" cy="52" r="34" fill={Z[4]} stroke={Z[8]} strokeWidth="1.5" />
        <circle cx="52" cy="52" r="22" fill={Z[0]} />
        <path d="M42 42 A14 14 0 0 1 62 40" fill="none" stroke={Z[9]} strokeWidth="2.5" strokeLinecap="round" />
      </g>
      <line x1="146" y1="242" x2="164" y2="230" stroke="var(--mark)" strokeWidth="1.5" />
      {badge(174, 222, 4)}

      {/* 5. 85mm f/1.8 lens (bottom-mid-left) */}
      <g transform="translate(184, 266)">
        <rect x="0" y="8" width="118" height="84" rx="6" fill={Z[2]} stroke="currentColor" strokeWidth="1.5" />
        <rect x="18" y="8" width="26" height="84" fill={Z[1]} />
        <rect x="66" y="8" width="18" height="84" fill={Z[4]} />
        <line x1="0" y1="50" x2="118" y2="50" stroke={Z[6]} strokeWidth="1" opacity="0.5" />
      </g>
      <line x1="252" y1="266" x2="262" y2="246" stroke="var(--mark)" strokeWidth="1.5" />
      {badge(268, 234, 5)}

      {/* 6. Handheld light meter (centre) */}
      <g transform="translate(338, 198)">
        <rect x="0" y="24" width="76" height="128" rx="10" fill={Z[2]} stroke="currentColor" strokeWidth="1.5" />
        <path d="M16 24 A22 22 0 0 1 60 24 Z" fill={Z[9]} stroke="currentColor" strokeWidth="1.5" />
        <circle cx="38" cy="76" r="22" fill={Z[8]} stroke={Z[1]} strokeWidth="1.5" />
        <line x1="38" y1="76" x2="48" y2="62" stroke="var(--mark)" strokeWidth="2.4" strokeLinecap="round" />
        <rect x="18" y="114" width="40" height="20" rx="2" fill={Z[6]} />
      </g>
      <line x1="416" y1="214" x2="432" y2="202" stroke="var(--mark)" strokeWidth="1.5" />
      {badge(442, 194, 6)}

      {/* 7. Four film canisters (HP5, Portra) (bottom-right) */}
      <g transform="translate(454, 256)">
        {[0, 44, 88, 132].map((dx, i) => (
          <g key={dx} transform={`translate(${dx}, ${i % 2 === 0 ? 0 : 12})`}>
            <rect x="0" y="10" width="32" height="58" rx="3" fill={i < 2 ? Z[1] : Z[6]} stroke="currentColor" strokeWidth="1.4" />
            <rect x="8" y="2" width="16" height="8" rx="1" fill={Z[4]} stroke="currentColor" strokeWidth="1.2" />
            <rect x="4" y="26" width="24" height="22" fill={i < 2 ? Z[8] : Z[9]} />
          </g>
        ))}
      </g>
      <line x1="604" y1="266" x2="622" y2="254" stroke="var(--mark)" strokeWidth="1.5" />
      {badge(632, 246, 7)}

      {/* 8. Grease pencil (bottom-right) */}
      <g transform="translate(336, 376) rotate(-4)">
        <polygon points="0,12 24,4 228,4 228,20 24,20" fill="var(--mark)" stroke="currentColor" strokeWidth="1.4" />
        <polygon points="0,12 24,4 24,20" fill={Z[8]} stroke="currentColor" strokeWidth="1.2" />
        <polygon points="0,12 8,9 8,15" fill="var(--mark)" />
        <line x1="44" y1="4" x2="44" y2="20" stroke="currentColor" strokeWidth="1.2" />
      </g>
      <line x1="576" y1="378" x2="594" y2="366" stroke="var(--mark)" strokeWidth="1.5" />
      {badge(606, 360, 8)}
    </svg>
  );
}
