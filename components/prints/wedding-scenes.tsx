import { Z } from './print-canvas';

/** Hero scene: Couple in silhouette on a rock overlook, 5 layered Blue Ridge ridges & fog bands. */
export function RidgeVowsScene() {
  return (
    <g>
      {/* Sky */}
      <rect x="14" y="14" width="572" height="372" fill={Z[8]} />
      <ellipse cx="445" cy="95" rx="180" ry="90" fill={Z[9]} opacity="0.85" />
      <path d="M14 140 Q180 110 340 132 T586 118 L586 14 L14 14 Z" fill={Z[7]} opacity="0.55" />

      {/* Ridge 1 — farthest (Zone VII) */}
      <path
        d="M14 188 C95 156, 175 162, 258 176 C348 190, 425 148, 510 164 L586 178 L586 386 L14 386 Z"
        fill={Z[7]}
      />
      {/* Fog band 1 */}
      <path
        d="M14 212 Q165 196 320 214 T586 202 L586 232 Q420 242 260 228 T14 238 Z"
        fill={Z[9]}
        opacity="0.72"
      />

      {/* Ridge 2 (Zone VI) */}
      <path
        d="M14 226 C115 202, 210 216, 308 198 C410 180, 495 208, 586 196 L586 386 L14 386 Z"
        fill={Z[6]}
      />
      {/* Fog band 2 */}
      <path
        d="M14 252 Q200 238 380 256 T586 244 L586 268 Q405 276 210 264 T14 274 Z"
        fill={Z[8]}
        opacity="0.65"
      />

      {/* Ridge 3 (Zone V) */}
      <path
        d="M14 260 C130 236, 225 264, 345 244 C445 228, 520 250, 586 238 L586 386 L14 386 Z"
        fill={Z[5]}
      />
      {/* Ridge 4 (Zone IV) */}
      <path
        d="M14 292 C108 272, 218 286, 315 270 C420 254, 515 282, 586 268 L586 386 L14 386 Z"
        fill={Z[4]}
      />
      {/* Ridge 5 (Zone III) */}
      <path
        d="M14 318 C135 298, 250 315, 370 296 C470 282, 535 304, 586 294 L586 386 L14 386 Z"
        fill={Z[3]}
      />

      {/* Foreground craggy rock overlook (Zone I & II) */}
      <path
        d="M14 342 L132 326 L248 334 L344 322 L428 338 L508 362 L586 386 L14 386 Z"
        fill={Z[2]}
      />
      <path
        d="M14 358 L146 338 L268 346 L354 334 L424 354 L494 386 L14 386 Z"
        fill={Z[1]}
      />

      {/* Couple in silhouette on the overlook (Zone 0) */}
      {/* Partner left (suit) */}
      <g fill={Z[0]}>
        <circle cx="294" cy="236" r="10.5" />
        <path d="M282 250 C282 246 306 246 308 254 L311 294 L305 336 L297 336 L294 298 L289 336 L281 336 L280 284 Z" />
        {/* Extended arm holding hands */}
        <path d="M304 260 L322 276 L318 281 L300 268 Z" />
      </g>

      {/* Partner right (dress & wind-swept veil) */}
      <g>
        {/* Translucent Zone IX veil streaming in the ridge wind */}
        <path
          d="M342 234 C368 228, 404 220, 444 234 C412 244, 386 254, 356 266 C348 256, 344 246, 342 234 Z"
          fill={Z[9]}
          opacity="0.72"
        />
        <path
          d="M343 238 C372 234, 398 232, 426 244 C396 250, 374 256, 352 264 Z"
          fill={Z[8]}
          opacity="0.55"
        />
        {/* Silhouette */}
        <g fill={Z[0]}>
          <circle cx="337" cy="240" r="10" />
          <path d="M327 254 C328 249 346 249 348 256 L352 282 L366 336 L316 336 L325 284 Z" />
          <path d="M328 262 L316 277 L320 281 L332 270 Z" />
        </g>
        {/* Rim highlight along dress hem & shoulders */}
        <path
          d="M347 255 L352 282 L365 334"
          fill="none"
          stroke={Z[8]}
          strokeWidth="1.4"
          opacity="0.7"
        />
      </g>
    </g>
  );
}

/** Portrait: Profile with a long veil sweeping across the frame. */
export function VeilWindScene() {
  return (
    <g>
      <rect x="14" y="14" width="372" height="472" fill={Z[3]} />
      {/* Distant misty ridge backdrop */}
      <path d="M14 290 Q140 240 260 270 T386 250 L386 486 L14 486 Z" fill={Z[2]} />
      <path d="M14 360 Q180 330 386 368 L386 486 L14 486 Z" fill={Z[1]} />
      {/* Soft top sky glow */}
      <path d="M14 14 L386 14 L386 180 Q210 215 14 165 Z" fill={Z[5]} opacity="0.6" />

      {/* Sweeping veil layers */}
      <path
        d="M126 144 C195 108, 285 98, 386 132 L386 266 C300 242, 224 260, 146 310 C128 252, 122 194, 126 144 Z"
        fill={Z[8]}
        opacity="0.82"
      />
      <path
        d="M132 154 C205 130, 294 128, 386 172 L386 226 C296 206, 224 226, 146 272 Z"
        fill={Z[9]}
        opacity="0.72"
      />
      <path
        d="M140 176 C225 162, 305 182, 386 218"
        fill="none"
        stroke={Z[6]}
        strokeWidth="1.5"
        opacity="0.6"
      />

      {/* Subject in profile (left) */}
      <path
        d="M66 486 L74 304 C76 268 96 248 118 242 L116 220 C100 214 96 196 102 178 C108 156 128 142 146 146 C158 148 164 162 162 176 L170 190 L161 196 L163 206 L156 214 C154 224 146 230 138 232 L144 252 C164 268 176 312 184 486 Z"
        fill={Z[1]}
      />
      {/* Lit profile edge (Zone VII-VIII) */}
      <path
        d="M146 146 C158 148 164 162 162 176 L170 190 L161 196 L163 206 L156 214"
        fill="none"
        stroke={Z[8]}
        strokeWidth="2.5"
      />
      {/* Hair bun */}
      <circle cx="110" cy="176" r="24" fill={Z[0]} />
      {/* Dress shoulder highlight */}
      <path d="M126 262 C142 276 154 328 164 486 L184 486 C176 312 164 268 144 252 Z" fill={Z[7]} />
    </g>
  );
}

/** Square: Hands, rings and a borrowed pocket watch. */
export function RingsHandsScene() {
  return (
    <g>
      <rect x="14" y="14" width="412" height="412" fill={Z[2]} />
      {/* Soft radial light from upper left */}
      <ellipse cx="170" cy="155" rx="220" ry="200" fill={Z[4]} opacity="0.45" />

      {/* Sleeve cuffs */}
      <path d="M14 292 L124 224 L164 294 L14 388 Z" fill={Z[1]} />
      <path d="M114 230 L130 220 L170 290 L154 300 Z" fill={Z[8]} />
      <path d="M426 112 L316 186 L354 256 L426 212 Z" fill={Z[0]} />

      {/* Lower hand */}
      <path
        d="M128 242 C164 218, 214 202, 266 214 C298 222, 314 248, 294 274 C264 308, 198 318, 152 292 Z"
        fill={Z[6]}
      />
      {/* Upper hand resting gently */}
      <path
        d="M324 190 C282 176, 224 182, 186 204 C166 216, 168 238, 190 242 L254 238 C242 252, 218 260, 198 262 C192 274, 210 282, 240 278 C286 272, 326 248, 344 228 Z"
        fill={Z[7]}
      />
      {/* Finger separation lines */}
      <path d="M196 220 L264 214 M200 242 L268 236 M210 262 L274 256" stroke={Z[3]} strokeWidth="2" />

      {/* Wedding bands (gleaming Zone IX) */}
      <rect x="218" y="205" width="9" height="19" rx="3" transform="rotate(-12 222 214)" fill={Z[9]} stroke={Z[2]} strokeWidth="1" />
      <rect x="234" y="246" width="8" height="17" rx="3" transform="rotate(-8 238 254)" fill={Z[9]} stroke={Z[2]} strokeWidth="1" />

      {/* Borrowed pocket watch & chain */}
      <path
        d="M276 278 Q298 336 254 374 Q212 404 176 376"
        fill="none"
        stroke={Z[7]}
        strokeWidth="2.5"
        strokeDasharray="4 3"
      />
      <circle cx="294" cy="336" r="34" fill={Z[5]} stroke={Z[8]} strokeWidth="3" />
      <circle cx="294" cy="336" r="26" fill={Z[9]} />
      <circle cx="294" cy="336" r="2.5" fill={Z[0]} />
      <path d="M294 336 L294 318 M294 336 L308 342" stroke={Z[0]} strokeWidth="2.2" strokeLinecap="round" />
      <rect x="288" y="294" width="12" height="8" rx="2" fill={Z[7]} />
    </g>
  );
}

/** Landscape: Walking back down the rhododendron tunnel. */
export function TrailWalkScene() {
  return (
    <g>
      <rect x="14" y="14" width="572" height="372" fill={Z[1]} />
      {/* Bright clearing at end of tunnel */}
      <ellipse cx="305" cy="182" rx="108" ry="118" fill={Z[8]} />
      <ellipse cx="305" cy="186" rx="72" ry="86" fill={Z[9]} />

      {/* Dirt trail receding into light */}
      <path d="M120 386 L262 248 L348 248 L480 386 Z" fill={Z[6]} />
      <path d="M185 386 L278 248 L332 248 L418 386 Z" fill={Z[7]} />

      {/* Layered arched rhododendron canopy */}
      <path
        d="M14 14 L586 14 L586 386 L458 386 C474 260, 444 132, 365 96 C295 66, 224 88, 178 156 C140 214, 134 294, 146 386 L14 386 Z"
        fill={Z[2]}
      />
      {/* Leaf clusters framing left & right */}
      <g fill={Z[0]}>
        <ellipse cx="96" cy="94" rx="84" ry="44" transform="rotate(-18 96 94)" />
        <ellipse cx="512" cy="108" rx="88" ry="46" transform="rotate(22 512 108)" />
        <ellipse cx="64" cy="224" rx="74" ry="40" transform="rotate(14 64 224)" />
        <ellipse cx="534" cy="240" rx="78" ry="42" transform="rotate(-14 534 240)" />
        <ellipse cx="102" cy="342" rx="80" ry="38" />
        <ellipse cx="504" cy="348" rx="84" ry="38" />
      </g>
      {/* Dappled light leaves */}
      <g fill={Z[4]} opacity="0.7">
        <ellipse cx="182" cy="122" rx="34" ry="14" transform="rotate(-24 182 122)" />
        <ellipse cx="422" cy="134" rx="36" ry="14" transform="rotate(28 422 134)" />
        <ellipse cx="154" cy="202" rx="28" ry="12" transform="rotate(-10 154 202)" />
        <ellipse cx="448" cy="212" rx="30" ry="12" transform="rotate(12 448 212)" />
      </g>

      {/* Couple walking down the trail (backlit silhouettes) */}
      <g fill={Z[1]}>
        <circle cx="288" cy="214" r="7.5" />
        <path d="M279 224 L297 224 L299 266 L293 296 L288 296 L286 266 L282 296 L277 296 Z" />
        <circle cx="318" cy="217" r="7" />
        <path d="M310 227 L326 227 L336 296 L302 296 Z" />
        {/* Joined hands */}
        <path d="M296 244 L312 246" stroke={Z[1]} strokeWidth="3.5" strokeLinecap="round" />
      </g>
    </g>
  );
}

/** Landscape: First dance under catenary string lights with Zone IX bokeh dots. */
export function FirstDanceScene() {
  const bulbs = [
    [72, 82, 7], [134, 102, 8], [198, 114, 9], [266, 120, 8], [334, 118, 9],
    [402, 110, 8], [468, 96, 7], [530, 78, 7],
    [104, 134, 6], [176, 152, 7], [250, 162, 7], [326, 162, 8], [404, 152, 7], [482, 136, 6],
  ];

  return (
    <g>
      <rect x="14" y="14" width="572" height="372" fill={Z[1]} />
      {/* Warehouse brick loft arched windows */}
      <g fill={Z[2]}>
        <path d="M56 320 L56 128 A52 52 0 0 1 160 128 L160 320 Z" />
        <path d="M248 320 L248 128 A52 52 0 0 1 352 128 L352 320 Z" />
        <path d="M440 320 L440 128 A52 52 0 0 1 544 128 L544 320 Z" />
      </g>
      {/* Reflective loft dance floor */}
      <rect x="14" y="318" width="572" height="68" fill={Z[2]} />
      <ellipse cx="300" cy="348" rx="160" ry="22" fill={Z[4]} opacity="0.4" />

      {/* Catenary wires */}
      <path d="M14 58 Q300 148 586 56" fill="none" stroke={Z[4]} strokeWidth="1.5" />
      <path d="M14 106 Q300 190 586 108" fill="none" stroke={Z[3]} strokeWidth="1.25" />

      {/* Bokeh halos & crisp bulbs in Zone IX */}
      {bulbs.map(([cx, cy, r], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r={r * 2.4} fill={Z[8]} opacity="0.16" />
          <circle cx={cx} cy={cy} r={r * 1.4} fill={Z[8]} opacity="0.34" />
          <circle cx={cx} cy={cy} r={r * 0.65} fill={Z[9]} />
        </g>
      ))}

      {/* Guests watching in shadow at edges */}
      <g fill={Z[0]} opacity="0.72">
        <circle cx="88" cy="264" r="14" />
        <path d="M62 346 C64 292 112 292 116 346 Z" />
        <circle cx="516" cy="268" r="14" />
        <path d="M490 346 C494 294 542 294 544 346 Z" />
      </g>

      {/* Dancing couple at centre */}
      <g>
        {/* Gown catching overhead string-light glow */}
        <path
          d="M294 228 C312 232 326 266 344 344 L268 344 C276 286 280 250 294 228 Z"
          fill={Z[7]}
        />
        <path
          d="M298 232 C312 240 322 278 334 344 L298 344 Z"
          fill={Z[8]}
          opacity="0.75"
        />
        {/* Partner embracing */}
        <g fill={Z[0]}>
          <circle cx="276" cy="194" r="13" />
          <path d="M258 212 C262 206 292 208 296 220 L294 282 L286 344 L274 344 L272 290 L264 344 L254 344 L254 268 Z" />
          <circle cx="304" cy="204" r="12" />
          <path d="M290 218 C294 214 314 216 318 228 L314 256 L290 254 Z" />
        </g>
        {/* Rim light on shoulders */}
        <path d="M262 212 Q278 206 294 214" fill="none" stroke={Z[9]} strokeWidth="1.6" opacity="0.75" />
      </g>
    </g>
  );
}

/** Landscape: Confetti exit down the loading ramp. */
export function ConfettiExitScene() {
  const confetti = [
    [130, 88, 12], [184, 62, 42], [238, 108, -20], [292, 74, 15], [348, 96, 60],
    [412, 68, -32], [462, 114, 24], [156, 152, 48], [218, 144, -14], [276, 132, 32],
    [332, 148, -40], [388, 136, 18], [446, 162, 55], [204, 198, 22], [312, 186, -25],
    [372, 202, 38], [254, 172, -12], [418, 188, 14],
  ];

  return (
    <g>
      <rect x="14" y="14" width="572" height="372" fill={Z[2]} />
      {/* Open loading bay doors & night sky */}
      <rect x="150" y="34" width="300" height="236" fill={Z[4]} />
      {/* Perspective ramp floor */}
      <path d="M14 386 L150 270 L450 270 L586 386 Z" fill={Z[6]} />
      <path d="M96 386 L204 270 L396 270 L504 386 Z" fill={Z[7]} />
      {/* Ramp railings */}
      <path d="M14 268 L150 218 M586 268 L450 218" stroke={Z[8]} strokeWidth="3" />

      {/* Cheering guests lining both sides */}
      <g fill={Z[1]}>
        <circle cx="88" cy="196" r="16" />
        <path d="M54 344 L64 218 L114 218 L124 344 Z" />
        <path d="M104 224 L144 166" stroke={Z[1]} strokeWidth="10" strokeLinecap="round" />
        <circle cx="514" cy="194" r="16" />
        <path d="M478 344 L488 218 L538 218 L548 344 Z" />
        <path d="M496 224 L454 164" stroke={Z[1]} strokeWidth="10" strokeLinecap="round" />
      </g>

      {/* Running couple laughing at centre */}
      <g fill={Z[0]}>
        <circle cx="272" cy="194" r="13" />
        <path d="M254 214 L288 214 L292 278 L280 338 L268 338 L268 286 L252 336 L242 332 Z" />
        <circle cx="326" cy="198" r="12.5" />
        <path d="M310 216 L340 216 L358 336 L296 336 Z" fill={Z[8]} />
        <path d="M310 216 L340 216 L336 254 L312 254 Z" fill={Z[0]} />
      </g>

      {/* Floating Zone VIII-IX paper confetti */}
      {confetti.map(([x, y, rot], i) => (
        <rect
          key={i}
          x={x}
          y={y}
          width={i % 2 === 0 ? 11 : 8}
          height={i % 2 === 0 ? 6 : 8}
          transform={`rotate(${rot} ${x} ${y})`}
          fill={i % 3 === 0 ? Z[9] : Z[8]}
        />
      ))}
    </g>
  );
}

/** Portrait: Sam's brother, mid-toast. */
export function ToastLaughScene() {
  return (
    <g>
      <rect x="14" y="14" width="372" height="472" fill={Z[1]} />
      {/* Soft bokeh lights behind */}
      <circle cx="88" cy="96" r="24" fill={Z[4]} opacity="0.35" />
      <circle cx="326" cy="82" r="18" fill={Z[5]} opacity="0.3" />
      <circle cx="342" cy="154" r="12" fill={Z[6]} opacity="0.28" />

      {/* Suit shoulders & lapel */}
      <path
        d="M52 486 L74 328 C82 296 122 282 164 278 L236 278 C278 282 312 302 326 340 L348 486 Z"
        fill={Z[0]}
      />
      {/* Crisp white shirt V & tie */}
      <path d="M168 278 L200 356 L232 278 Z" fill={Z[8]} />
      <path d="M195 292 L205 292 L208 352 L200 364 L192 352 Z" fill={Z[2]} />

      {/* Head tilted back laughing */}
      <ellipse cx="196" cy="196" rx="46" ry="56" transform="rotate(-10 196 196)" fill={Z[5]} />
      {/* Strong directional side light on cheek & forehead */}
      <path
        d="M196 140 C228 144 246 172 242 206 C238 234 218 250 198 250 C212 224 214 176 196 140 Z"
        fill={Z[7]}
      />
      {/* Hair */}
      <path
        d="M148 188 C144 150 174 128 214 136 C232 140 242 152 242 164 C222 156 184 160 162 184 Z"
        fill={Z[0]}
      />
      {/* Laughing mouth & eyes */}
      <path d="M174 186 Q184 180 192 186 M210 184 Q220 178 228 184" fill="none" stroke={Z[1]} strokeWidth="3" strokeLinecap="round" />
      <path d="M182 214 Q202 232 222 212 Z" fill={Z[1]} />
      <path d="M186 216 Q202 222 218 215" fill="none" stroke={Z[9]} strokeWidth="3" />

      {/* Raised arm & champagne flute */}
      <path d="M294 332 L322 242 L292 234 L268 318 Z" fill={Z[0]} />
      <circle cx="308" cy="232" r="16" fill={Z[6]} />
      {/* Flute glass */}
      <path d="M296 118 L322 118 L314 196 L304 196 Z" fill={Z[8]} opacity="0.65" />
      <path d="M298 118 L302 196 M320 118 L315 196" stroke={Z[9]} strokeWidth="1.6" />
      <line x1="309" y1="196" x2="309" y2="236" stroke={Z[9]} strokeWidth="2" />
      <ellipse cx="309" cy="146" rx="10" ry="3" fill={Z[9]} opacity="0.85" />
    </g>
  );
}

/** Square: Place cards on reclaimed oak. */
export function TableDetailScene() {
  return (
    <g>
      <rect x="14" y="14" width="412" height="412" fill={Z[3]} />
      {/* Reclaimed oak planks */}
      <line x1="14" y1="126" x2="426" y2="126" stroke={Z[1]} strokeWidth="2.5" />
      <line x1="14" y1="264" x2="426" y2="264" stroke={Z[1]} strokeWidth="2.5" />
      <path d="M40 66 Q180 56 360 72 M30 198 Q220 184 400 206 M50 338 Q210 326 390 344" fill="none" stroke={Z[2]} strokeWidth="2" opacity="0.55" />

      {/* Folded linen napkin */}
      <rect x="92" y="128" width="218" height="248" transform="rotate(-4 201 252)" fill={Z[6]} />
      <rect x="104" y="140" width="194" height="224" transform="rotate(-4 201 252)" fill={Z[7]} />

      {/* Crisp deckle-edge place card */}
      <rect x="134" y="182" width="154" height="92" transform="rotate(3 211 228)" fill={Z[9]} stroke={Z[4]} strokeWidth="1" />
      {/* Calligraphy flourish lines */}
      <path d="M164 222 C182 212, 198 232, 218 220 C236 210, 248 226, 260 220" fill="none" stroke={Z[1]} strokeWidth="2.2" strokeLinecap="round" />
      <line x1="184" y1="244" x2="240" y2="246" stroke={Z[4]} strokeWidth="1.4" />

      {/* Olive/eucalyptus sprig */}
      <path d="M126 176 Q172 152 232 162" fill="none" stroke={Z[1]} strokeWidth="2" />
      <ellipse cx="154" cy="158" rx="14" ry="6" transform="rotate(-24 154 158)" fill={Z[2]} />
      <ellipse cx="186" cy="150" rx="14" ry="6" transform="rotate(14 186 150)" fill={Z[2]} />
      <ellipse cx="216" cy="158" rx="13" ry="5.5" transform="rotate(-12 216 158)" fill={Z[2]} />

      {/* Wine glass top rim & reflection */}
      <circle cx="348" cy="112" r="52" fill={Z[2]} opacity="0.45" />
      <circle cx="348" cy="112" r="48" fill="none" stroke={Z[9]} strokeWidth="2.2" />
      <path d="M316 86 A44 44 0 0 1 378 84" fill="none" stroke={Z[9]} strokeWidth="3" opacity="0.7" />

      {/* Taper candle glow at top-left */}
      <circle cx="72" cy="76" r="36" fill={Z[8]} opacity="0.22" />
      <circle cx="72" cy="76" r="14" fill={Z[9]} opacity="0.85" />
    </g>
  );
}
