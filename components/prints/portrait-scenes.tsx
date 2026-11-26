import { Z } from './print-canvas';

/** Portrait: Face in profile lit from a tall north window, shadow side falling to Zone I. */
export function WindowPortraitScene() {
  return (
    <g>
      <rect x="14" y="14" width="372" height="472" fill={Z[0]} />
      {/* Tall north window pane on left */}
      <rect x="14" y="14" width="96" height="472" fill={Z[9]} />
      {/* Window muntins */}
      <rect x="14" y="168" width="96" height="10" fill={Z[2]} />
      <rect x="14" y="336" width="96" height="10" fill={Z[2]} />
      <rect x="104" y="14" width="12" height="472" fill={Z[1]} />

      {/* Soft falloff gradient band from window */}
      <rect x="116" y="14" width="96" height="472" fill={Z[1]} />

      {/* Subject shoulders & neck (Zone I-II) */}
      <path
        d="M158 486 L168 356 C174 326 208 312 246 312 L274 312 C320 318 356 352 374 486 Z"
        fill={Z[1]}
      />
      {/* Lit collar/shoulder edge */}
      <path d="M168 356 C174 326 208 312 246 312 L214 338 L194 486 L158 486 Z" fill={Z[5]} />

      {/* Head in crisp profile facing left toward the window */}
      <path
        d="M214 146 C256 142 296 172 296 220 C296 264 268 302 238 318 L194 314 L198 282 C186 280 176 270 176 258 L180 248 L172 238 L178 230 L164 216 L178 192 C178 164 192 148 214 146 Z"
        fill={Z[2]}
      />
      {/* Bright window-lit profile plane (Zone VII-VIII) */}
      <path
        d="M214 146 C192 148 178 164 178 192 L164 216 L178 230 L172 238 L180 248 L176 258 C176 270 186 280 198 282 L208 264 C202 236 208 186 226 154 Z"
        fill={Z[8]}
      />
      {/* Midtone cheek transition (Zone V) */}
      <path
        d="M226 154 C208 186 202 236 208 264 L228 274 C236 232 242 184 246 156 Z"
        fill={Z[5]}
        opacity="0.7"
      />
      {/* Eye & hair mass in deep Zone 0 */}
      <circle cx="192" cy="198" r="3.5" fill={Z[0]} />
      <path
        d="M218 142 C264 138 304 170 304 224 C304 264 286 296 266 312 C272 268 272 214 244 176 C234 162 224 152 218 142 Z"
        fill={Z[0]}
      />
    </g>
  );
}

/** Portrait: Venetian blind shadow study. */
export function BlindShadowsScene() {
  const slats = [48, 92, 136, 180, 224, 268, 312, 356, 400, 444];
  return (
    <g>
      <rect x="14" y="14" width="372" height="472" fill={Z[1]} />
      {/* Seated figure silhouette */}
      <path
        d="M84 486 C92 362 128 318 198 314 C268 318 308 362 318 486 Z"
        fill={Z[2]}
      />
      <ellipse cx="202" cy="216" rx="64" ry="78" fill={Z[3]} />
      <path d="M138 206 C140 152 174 132 206 132 C244 132 268 158 266 210 C252 182 226 168 196 170 C168 172 148 186 138 206 Z" fill={Z[0]} />

      {/* Diagonal Venetian blind light bars slicing across wall & face */}
      {slats.map((y, i) => (
        <polygon
          key={i}
          points={`14,${y} 386,${y - 26} 386,${y - 8} 14,${y + 18}`}
          fill={Z[8]}
          opacity={i >= 2 && i <= 6 ? 0.52 : 0.24}
        />
      ))}

      {/* Highlighted eyes & bridge of nose caught in a slat */}
      <ellipse cx="182" cy="212" rx="7" ry="4" fill={Z[0]} />
      <ellipse cx="222" cy="210" rx="7" ry="4" fill={Z[0]} />
      <path d="M198 206 L194 236 L208 238" fill="none" stroke={Z[1]} strokeWidth="2.5" />
      <path d="M186 258 Q202 264 218 256" fill="none" stroke={Z[1]} strokeWidth="2.5" />
    </g>
  );
}

/** Square: A reader's hands holding an open hardcover book. */
export function HandsBookScene() {
  return (
    <g>
      <rect x="14" y="14" width="412" height="412" fill={Z[2]} />
      {/* Dark wool lap */}
      <path d="M14 260 Q220 220 426 260 L426 426 L14 426 Z" fill={Z[1]} />

      {/* Hardcover book boards */}
      <path d="M62 152 L218 172 L218 346 L52 318 Z" fill={Z[0]} />
      <path d="M378 152 L222 172 L222 346 L388 318 Z" fill={Z[0]} />

      {/* Curved open pages (Zone VIII-IX) */}
      <path d="M74 140 C128 124 180 138 218 166 L218 334 C178 308 126 296 66 308 Z" fill={Z[8]} />
      <path d="M366 140 C312 124 260 138 222 166 L222 334 C262 308 314 296 374 308 Z" fill={Z[9]} />
      {/* Gutter shadow */}
      <rect x="216" y="164" width="8" height="172" fill={Z[3]} />

      {/* Subtle text blocks on pages */}
      <g stroke={Z[5]} strokeWidth="2" opacity="0.55">
        {[172, 188, 204, 220, 236, 252, 268].map(y => (
          <line key={`l${y}`} x1="94" y1={y} x2="196" y2={y + 8} />
        ))}
        {[172, 188, 204, 220, 236, 252, 268].map(y => (
          <line key={`r${y}`} x1="244" y1={y + 8} x2="346" y2={y} />
        ))}
      </g>

      {/* Left & right thumbs/hands cradling the book */}
      <path d="M14 358 L72 288 C86 272 108 274 114 292 C118 308 98 326 84 342 L56 426 L14 426 Z" fill={Z[6]} />
      <path d="M426 358 L368 288 C354 272 332 274 326 292 C322 308 342 326 356 342 L384 426 L426 426 Z" fill={Z[7]} />
    </g>
  );
}

/** Landscape: Three generations on the porch steps. */
export function FamilyPorchScene() {
  return (
    <g>
      <rect x="14" y="14" width="572" height="372" fill={Z[7]} />
      {/* Horizontal clapboard siding */}
      {[42, 74, 106, 138, 170, 202].map(y => (
        <line key={y} x1="14" y1={y} x2="586" y2={y} stroke={Z[6]} strokeWidth="1.5" />
      ))}
      {/* Porch columns */}
      <rect x="52" y="14" width="38" height="252" fill={Z[9]} />
      <rect x="510" y="14" width="38" height="252" fill={Z[9]} />
      {/* Porch steps */}
      <rect x="14" y="256" width="572" height="36" fill={Z[5]} />
      <rect x="14" y="292" width="572" height="40" fill={Z[4]} />
      <rect x="14" y="332" width="572" height="54" fill={Z[3]} />

      {/* Back row: parents standing */}
      <g fill={Z[2]}>
        <circle cx="242" cy="142" r="20" />
        <path d="M208 172 C214 162 270 162 276 174 L282 268 L202 268 Z" />
        <circle cx="356" cy="148" r="19" />
        <path d="M324 176 C330 166 382 166 388 178 L394 268 L318 268 Z" />
      </g>

      {/* Middle row: grandparent seated at centre */}
      <g>
        <circle cx="300" cy="186" r="20" fill={Z[7]} stroke={Z[2]} strokeWidth="2" />
        <path d="M266 216 C272 206 328 206 334 218 L342 308 L258 308 Z" fill={Z[3]} />
      </g>

      {/* Front row: two kids seated on lower step */}
      <g fill={Z[1]}>
        <circle cx="212" cy="238" r="16" />
        <path d="M188 260 L236 260 L242 332 L182 332 Z" />
        <circle cx="388" cy="242" r="15" />
        <path d="M366 262 L410 262 L416 332 L360 332 Z" />
      </g>
      {/* Sunlight diagonal across steps */}
      <polygon points="14,386 240,256 380,256 170,386" fill={Z[9]} opacity="0.22" />
    </g>
  );
}

/** Landscape: Biscuit, refusing to sit (joyful dog mid-leap). */
export function DogLeapScene() {
  return (
    <g>
      <rect x="14" y="14" width="572" height="372" fill={Z[8]} />
      {/* Yard grass & porch horizon */}
      <rect x="14" y="242" width="572" height="144" fill={Z[5]} />
      <path d="M14 242 Q290 226 586 246 L586 268 L14 268 Z" fill={Z[6]} />
      {/* Porch railing in background */}
      <line x1="14" y1="158" x2="586" y2="158" stroke={Z[6]} strokeWidth="6" />
      {[80, 140, 200, 260, 320, 380, 440, 500].map(x => (
        <line key={x} x1={x} y1="158" x2={x} y2="242" stroke={Z[6]} strokeWidth="4" />
      ))}

      {/* Shadow on lawn proving Biscuit is airborne */}
      <ellipse cx="308" cy="336" rx="92" ry="14" fill={Z[2]} opacity="0.48" />

      {/* Mid-air leaping dog (Zone 0-2) */}
      <g transform="rotate(-12 300 220)">
        {/* Tail */}
        <path d="M196 206 C168 186 154 166 164 156" fill="none" stroke={Z[1]} strokeWidth="10" strokeLinecap="round" />
        {/* Torso */}
        <ellipse cx="294" cy="214" rx="82" ry="34" fill={Z[1]} />
        {/* Chest patch */}
        <ellipse cx="348" cy="222" rx="28" ry="20" fill={Z[8]} />
        {/* Head & flopping ear */}
        <circle cx="384" cy="186" r="28" fill={Z[1]} />
        <ellipse cx="408" cy="192" rx="18" ry="11" fill={Z[2]} />
        <ellipse cx="364" cy="176" rx="16" ry="24" transform="rotate(28 364 176)" fill={Z[0]} />
        {/* Outstretched legs */}
        <path d="M350 232 L404 264 M332 238 L374 282" stroke={Z[1]} strokeWidth="14" strokeLinecap="round" />
        <path d="M236 228 L184 266 M252 234 L208 282" stroke={Z[1]} strokeWidth="14" strokeLinecap="round" />
      </g>
    </g>
  );
}

/** Portrait: Grandma June's laugh. */
export function GrandmaLaughScene() {
  return (
    <g>
      <rect x="14" y="14" width="372" height="472" fill={Z[2]} />
      {/* Soft lit porch background */}
      <rect x="14" y="14" width="142" height="472" fill={Z[4]} opacity="0.5" />

      {/* Knit cardigan shoulders */}
      <path d="M44 486 C58 364 114 328 200 326 C286 328 342 364 356 486 Z" fill={Z[3]} />
      <path d="M144 334 L200 416 L256 334" fill="none" stroke={Z[6]} strokeWidth="4" />

      {/* Silver swept hair */}
      <path
        d="M112 224 C106 146 148 106 202 106 C256 106 296 148 290 224 C274 186 248 164 202 164 C156 164 128 186 112 224 Z"
        fill={Z[8]}
      />
      <ellipse cx="202" cy="116" rx="44" ry="22" fill={Z[9]} />

      {/* Face */}
      <ellipse cx="202" cy="232" rx="68" ry="82" fill={Z[6]} />
      <path d="M136 224 C144 172 174 154 202 154 L202 314 C166 312 138 276 136 224 Z" fill={Z[7]} />

      {/* Round spectacles with bright window reflection */}
      <g fill="none" stroke={Z[1]} strokeWidth="3.2">
        <circle cx="172" cy="222" r="22" />
        <circle cx="232" cy="222" r="22" />
        <line x1="194" y1="222" x2="210" y2="222" />
      </g>
      <path d="M160 212 L172 208 M220 212 L232 208" stroke={Z[9]} strokeWidth="3.5" strokeLinecap="round" />

      {/* Joyful crinkles & broad laugh */}
      <path d="M162 224 Q172 216 182 224 M222 224 Q232 216 242 224" fill="none" stroke={Z[1]} strokeWidth="2.8" strokeLinecap="round" />
      <path d="M172 266 Q202 292 232 266 Z" fill={Z[1]} />
      <path d="M178 268 Q202 276 226 268" fill="none" stroke={Z[9]} strokeWidth="3.5" />
    </g>
  );
}
