import { Z } from './print-canvas';

/** Portrait: Mountain Rye bottle, rim-lit on slate against pitch black. */
export function BottleRimlightScene() {
  return (
    <g>
      <rect x="14" y="14" width="372" height="472" fill={Z[0]} />
      {/* Subtle studio backlight halo */}
      <ellipse cx="200" cy="248" rx="112" ry="164" fill={Z[2]} opacity="0.45" />

      {/* Bevelled slate plinth */}
      <polygon points="44,394 356,394 386,438 14,438" fill={Z[2]} />
      <rect x="14" y="438" width="372" height="48" fill={Z[1]} />
      <line x1="44" y1="394" x2="356" y2="394" stroke={Z[6]} strokeWidth="1.5" />

      {/* Soft reflection on slate */}
      <rect x="146" y="396" width="108" height="36" fill={Z[4]} opacity="0.22" />

      {/* Bottle silhouette */}
      <path
        d="M178 96 L222 96 L222 152 C222 174 256 186 256 218 L256 392 L144 392 L144 218 C144 186 178 174 178 152 Z"
        fill={Z[1]}
      />
      {/* Cork & neck band */}
      <rect x="180" y="76" width="40" height="22" rx="3" fill={Z[5]} />
      <rect x="176" y="96" width="48" height="14" fill={Z[3]} />

      {/* Liquid meniscus inside */}
      <rect x="148" y="218" width="104" height="168" fill={Z[2]} />
      <ellipse cx="200" cy="218" rx="52" ry="5" fill={Z[6]} opacity="0.5" />

      {/* Razor-sharp Zone IX rim light along both edges */}
      <path
        d="M178 106 L178 152 C178 174 146 186 146 218 L146 390"
        fill="none"
        stroke={Z[9]}
        strokeWidth="3.2"
      />
      <path
        d="M222 106 L222 152 C222 174 254 186 254 218 L254 390"
        fill="none"
        stroke={Z[8]}
        strokeWidth="2.4"
      />
      {/* Internal glass specular */}
      <rect x="156" y="228" width="6" height="142" fill={Z[7]} opacity="0.45" />

      {/* Minimalist typographic bottle label */}
      <rect x="158" y="246" width="84" height="96" fill={Z[8]} />
      <rect x="163" y="251" width="74" height="86" fill="none" stroke={Z[2]} strokeWidth="1" />
      <line x1="174" y1="276" x2="226" y2="276" stroke={Z[1]} strokeWidth="3" />
      <line x1="182" y1="290" x2="218" y2="290" stroke={Z[3]} strokeWidth="2" />
      <line x1="178" y1="318" x2="222" y2="318" stroke={Z[4]} strokeWidth="1.5" />
    </g>
  );
}

/** Portrait: The copper pot still at first run. */
export function CopperStillScene() {
  return (
    <g>
      <rect x="14" y="14" width="372" height="472" fill={Z[1]} />
      {/* Rising wisps of steam */}
      <path d="M108 178 C84 128 122 92 98 46 M298 154 C324 114 294 82 320 42" fill="none" stroke={Z[7]} strokeWidth="8" strokeLinecap="round" opacity="0.22" />

      {/* Swan-neck lyne arm */}
      <path
        d="M196 144 C196 72 256 64 298 92 L386 148 L386 174 L288 112 C256 94 226 102 226 144 Z"
        fill={Z[5]}
      />
      <path d="M204 136 C206 82 256 76 292 100 L386 158" fill="none" stroke={Z[8]} strokeWidth="3" />

      {/* Onion dome & neck */}
      <path
        d="M156 244 C156 184 176 156 186 138 L226 138 C236 156 256 184 256 244 Z"
        fill={Z[4]}
      />
      {/* Main copper belly */}
      <path
        d="M84 356 C84 274 134 236 206 236 C278 236 328 274 328 356 L316 486 L96 486 Z"
        fill={Z[3]}
      />
      {/* Specular copper sheen bands (Zone VII-IX) */}
      <path d="M124 352 C126 288 156 254 188 248 L174 486 L124 486 Z" fill={Z[6]} opacity="0.65" />
      <path d="M144 348 C146 296 164 266 182 256 L174 486 L154 486 Z" fill={Z[8]} opacity="0.7" />
      <path d="M180 236 L192 146 L204 146 L196 236 Z" fill={Z[7]} opacity="0.7" />

      {/* Riveted sight glass / manway */}
      <circle cx="236" cy="348" r="36" fill={Z[2]} stroke={Z[7]} strokeWidth="4" />
      <circle cx="236" cy="348" r="22" fill={Z[1]} stroke={Z[5]} strokeWidth="2" />
      <path d="M222 338 A18 18 0 0 1 248 336" fill="none" stroke={Z[9]} strokeWidth="2.5" />
    </g>
  );
}

/** Landscape: Barrel row, warehouse B (one-point perspective). */
export function BarrelRowScene() {
  return (
    <g>
      <rect x="14" y="14" width="572" height="372" fill={Z[1]} />
      {/* Far clerestory window light */}
      <rect x="266" y="114" width="68" height="92" fill={Z[9]} />
      {/* Floor perspective lit by far window */}
      <polygon points="14,386 254,234 346,234 586,386" fill={Z[3]} />
      <polygon points="184,386 276,234 324,234 416,386" fill={Z[7]} opacity="0.65" />

      {/* Left barrel rick (receding ellipses) */}
      {[
        { cx: 92, cy: 132, rx: 56, ry: 64, fill: Z[4] },
        { cx: 92, cy: 274, rx: 56, ry: 64, fill: Z[3] },
        { cx: 184, cy: 158, rx: 40, ry: 46, fill: Z[3] },
        { cx: 184, cy: 256, rx: 40, ry: 46, fill: Z[2] },
        { cx: 240, cy: 176, rx: 24, ry: 28, fill: Z[2] },
        { cx: 240, cy: 238, rx: 24, ry: 28, fill: Z[1] },
      ].map((b, i) => (
        <g key={`l${i}`}>
          <ellipse cx={b.cx} cy={b.cy} rx={b.rx} ry={b.ry} fill={b.fill} stroke={Z[7]} strokeWidth="2" />
          <ellipse cx={b.cx} cy={b.cy} rx={b.rx * 0.72} ry={b.ry * 0.72} fill="none" stroke={Z[1]} strokeWidth="1.5" />
        </g>
      ))}

      {/* Right barrel rick */}
      {[
        { cx: 508, cy: 132, rx: 56, ry: 64, fill: Z[4] },
        { cx: 508, cy: 274, rx: 56, ry: 64, fill: Z[3] },
        { cx: 416, cy: 158, rx: 40, ry: 46, fill: Z[3] },
        { cx: 416, cy: 256, rx: 40, ry: 46, fill: Z[2] },
        { cx: 360, cy: 176, rx: 24, ry: 28, fill: Z[2] },
        { cx: 360, cy: 238, rx: 24, ry: 28, fill: Z[1] },
      ].map((b, i) => (
        <g key={`r${i}`}>
          <ellipse cx={b.cx} cy={b.cy} rx={b.rx} ry={b.ry} fill={b.fill} stroke={Z[7]} strokeWidth="2" />
          <ellipse cx={b.cx} cy={b.cy} rx={b.rx * 0.72} ry={b.ry * 0.72} fill="none" stroke={Z[1]} strokeWidth="1.5" />
        </g>
      ))}

      {/* Timber rick rails */}
      <line x1="14" y1="204" x2="262" y2="206" stroke={Z[0]} strokeWidth="6" />
      <line x1="586" y1="204" x2="338" y2="206" stroke={Z[0]} strokeWidth="6" />
    </g>
  );
}

/** Square: Hands cupping clay on a wheel with spiral throwing lines. */
export function PotterHandsScene() {
  return (
    <g>
      <rect x="14" y="14" width="412" height="412" fill={Z[2]} />
      {/* Splash pan & spinning wheel head */}
      <circle cx="220" cy="226" r="176" fill={Z[3]} stroke={Z[1]} strokeWidth="8" />
      <circle cx="220" cy="226" r="144" fill={Z[5]} />

      {/* Concentric wet clay spiral throwing lines */}
      {[124, 106, 88, 70].map((r, i) => (
        <circle
          key={r}
          cx="220"
          cy="226"
          r={r}
          fill="none"
          stroke={i % 2 === 0 ? Z[7] : Z[4]}
          strokeWidth="2"
          strokeDasharray="34 14"
        />
      ))}

      {/* Wet stoneware cylinder being centred */}
      <ellipse cx="220" cy="226" rx="58" ry="56" fill={Z[6]} />
      <ellipse cx="220" cy="226" rx="44" ry="42" fill={Z[4]} />
      <ellipse cx="220" cy="226" rx="30" ry="28" fill={Z[2]} />
      {/* Wet rim highlight */}
      <path d="M174 206 A48 48 0 0 1 258 196" fill="none" stroke={Z[9]} strokeWidth="3.5" strokeLinecap="round" />

      {/* Potter's left & right clay-slicked hands cupping the vessel */}
      <path
        d="M14 294 L118 228 C134 216 154 214 166 226 C178 240 166 268 156 280 L114 358 L14 374 Z"
        fill={Z[7]}
      />
      <path
        d="M426 286 L322 222 C306 212 286 214 274 228 C262 242 276 268 288 282 L334 356 L426 368 Z"
        fill={Z[8]}
      />
      {/* Finger contours */}
      <path d="M138 242 L166 250 M130 262 L158 268 M302 242 L274 250 M310 262 L282 268" stroke={Z[4]} strokeWidth="2.2" strokeLinecap="round" />
    </g>
  );
}

/** Landscape: A kiln shelf of ash-glazed cups. */
export function KilnShelfScene() {
  const cups = [96, 198, 300, 402, 504];
  return (
    <g>
      <rect x="14" y="14" width="572" height="372" fill={Z[1]} />
      {/* Firebrick kiln interior */}
      {[86, 158, 230].map(y => (
        <line key={y} x1="14" y1={y} x2="586" y2={y} stroke={Z[2]} strokeWidth="2" />
      ))}
      {/* Refractory kiln shelf */}
      <rect x="34" y="268" width="532" height="24" fill={Z[6]} />
      <rect x="34" y="292" width="532" height="10" fill={Z[3]} />
      {/* Kiln stilts */}
      <rect x="74" y="302" width="28" height="84" fill={Z[4]} />
      <rect x="498" y="302" width="28" height="84" fill={Z[4]} />

      {/* Row of five ash-glazed cups */}
      {cups.map((cx, i) => (
        <g key={cx}>
          <path
            d={`M${cx - 32} 166 L${cx + 32} 166 L${cx + 26} 266 L${cx - 26} 266 Z`}
            fill={i % 2 === 0 ? Z[5] : Z[4]}
          />
          {/* Ash glaze drip shoulder */}
          <path
            d={`M${cx - 32} 166 L${cx + 32} 166 L${cx + 30} 214 Q${cx + 12} 228 ${cx} 210 Q${cx - 14} 232 ${cx - 30} 208 Z`}
            fill={Z[8]}
          />
          {/* Rim highlight */}
          <ellipse cx={cx} cy="166" rx="32" ry="6" fill={Z[9]} stroke={Z[3]} strokeWidth="1.2" />
          <ellipse cx={cx} cy="166" rx="25" ry="3.5" fill={Z[2]} />
        </g>
      ))}
    </g>
  );
}

/** Square: Catalogue still — the Ridge mug. */
export function MugStillLifeScene() {
  return (
    <g>
      <rect x="14" y="14" width="412" height="412" fill={Z[7]} />
      {/* Seamless backdrop sweep */}
      <rect x="14" y="292" width="412" height="134" fill={Z[6]} />

      {/* Long crisp studio shadow to the right */}
      <polygon points="154,322 276,322 414,376 230,376" fill={Z[3]} opacity="0.55" />

      {/* Mug handle */}
      <path
        d="M278 176 C322 176 326 266 276 274"
        fill="none"
        stroke={Z[3]}
        strokeWidth="16"
        strokeLinecap="round"
      />
      <path
        d="M282 176 C318 178 320 260 278 270"
        fill="none"
        stroke={Z[7]}
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Stoneware mug body */}
      <path d="M138 144 L286 144 L278 318 C276 330 148 330 146 318 Z" fill={Z[4]} />
      {/* Left side directional light */}
      <path d="M138 144 L204 144 L202 326 C168 326 148 322 146 318 Z" fill={Z[8]} />
      {/* Raw clay unglazed foot */}
      <path d="M146 286 L278 286 L278 318 C276 330 148 330 146 318 Z" fill={Z[2]} />
      {/* Carved horizontal ridge bands */}
      {[184, 212, 240, 266].map(y => (
        <path key={y} d={`M142 ${y} Q212 ${y + 8} 282 ${y}`} fill="none" stroke={Z[3]} strokeWidth="2.2" opacity="0.65" />
      ))}
      {/* Mug rim */}
      <ellipse cx="212" cy="144" rx="74" ry="15" fill={Z[9]} stroke={Z[3]} strokeWidth="1.5" />
      <ellipse cx="212" cy="144" rx="64" ry="10" fill={Z[2]} />
    </g>
  );
}
