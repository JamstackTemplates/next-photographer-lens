import type { ComponentType } from 'react';
import type { PrintOrientation, PrintSceneKey } from '../../content/galleries';
import { asset } from '../../lib/paths';
import { PrintCanvas } from './print-canvas';
import {
  ConfettiExitScene,
  FirstDanceScene,
  RidgeVowsScene,
  RingsHandsScene,
  TableDetailScene,
  ToastLaughScene,
  TrailWalkScene,
  VeilWindScene,
} from './wedding-scenes';
import {
  BlindShadowsScene,
  DogLeapScene,
  FamilyPorchScene,
  GrandmaLaughScene,
  HandsBookScene,
  WindowPortraitScene,
} from './portrait-scenes';
import {
  BarrelRowScene,
  BottleRimlightScene,
  CopperStillScene,
  KilnShelfScene,
  MugStillLifeScene,
  PotterHandsScene,
} from './commercial-scenes';

export interface PrintSceneEntry {
  orientation: PrintOrientation;
  Scene: ComponentType;
}

/** Registry of all 20 inline-SVG silver-gelatin prints referenced by content/galleries.ts. */
export const PRINT_REGISTRY: Record<PrintSceneKey, PrintSceneEntry> = {
  'ridge-vows': { orientation: 'landscape', Scene: RidgeVowsScene },
  'veil-wind': { orientation: 'portrait', Scene: VeilWindScene },
  'rings-hands': { orientation: 'square', Scene: RingsHandsScene },
  'trail-walk': { orientation: 'landscape', Scene: TrailWalkScene },
  'first-dance': { orientation: 'landscape', Scene: FirstDanceScene },
  'confetti-exit': { orientation: 'landscape', Scene: ConfettiExitScene },
  'toast-laugh': { orientation: 'portrait', Scene: ToastLaughScene },
  'table-detail': { orientation: 'square', Scene: TableDetailScene },
  'window-portrait': { orientation: 'portrait', Scene: WindowPortraitScene },
  'blind-shadows': { orientation: 'portrait', Scene: BlindShadowsScene },
  'hands-book': { orientation: 'square', Scene: HandsBookScene },
  'family-porch': { orientation: 'landscape', Scene: FamilyPorchScene },
  'dog-leap': { orientation: 'landscape', Scene: DogLeapScene },
  'grandma-laugh': { orientation: 'portrait', Scene: GrandmaLaughScene },
  'bottle-rimlight': { orientation: 'portrait', Scene: BottleRimlightScene },
  'copper-still': { orientation: 'portrait', Scene: CopperStillScene },
  'barrel-row': { orientation: 'landscape', Scene: BarrelRowScene },
  'potter-hands': { orientation: 'square', Scene: PotterHandsScene },
  'kiln-shelf': { orientation: 'landscape', Scene: KilnShelfScene },
  'mug-still-life': { orientation: 'square', Scene: MugStillLifeScene },
};

/** Generated silver-gelatin photographs for all 20 gallery scenes, served from public/prints/. */
const PHOTO_PRINTS: Record<PrintSceneKey, string> = {
  'ridge-vows': '/prints/ridge-vows.jpg',
  'veil-wind': '/prints/veil-wind.jpg',
  'rings-hands': '/prints/rings-hands.jpg',
  'trail-walk': '/prints/trail-walk.jpg',
  'first-dance': '/prints/first-dance.jpg',
  'confetti-exit': '/prints/confetti-exit.jpg',
  'toast-laugh': '/prints/toast-laugh.jpg',
  'table-detail': '/prints/table-detail.jpg',
  'window-portrait': '/prints/window-portrait.jpg',
  'blind-shadows': '/prints/blind-shadows.jpg',
  'hands-book': '/prints/hands-book.jpg',
  'family-porch': '/prints/family-porch.jpg',
  'dog-leap': '/prints/dog-leap.jpg',
  'grandma-laugh': '/prints/grandma-laugh.jpg',
  'bottle-rimlight': '/prints/bottle-rimlight.jpg',
  'copper-still': '/prints/copper-still.jpg',
  'barrel-row': '/prints/barrel-row.jpg',
  'potter-hands': '/prints/potter-hands.jpg',
  'kiln-shelf': '/prints/kiln-shelf.jpg',
  'mug-still-life': '/prints/mug-still-life.jpg',
};

const ORIENTATION_ASPECT: Record<PrintOrientation, string> = {
  landscape: 'aspect-[3/2]',
  portrait: 'aspect-[4/5]',
  square: 'aspect-square',
};

export function PrintFrame({
  scene,
  orientation,
  label,
  decorative = false,
  className = '',
}: {
  scene: PrintSceneKey;
  orientation?: PrintOrientation;
  label?: string;
  decorative?: boolean;
  className?: string;
}) {
  const entry = PRINT_REGISTRY[scene];
  const resolvedOrientation = orientation ?? entry.orientation;
  const photoPath = PHOTO_PRINTS[scene];

  if (photoPath) {
    return (
      <span
        className={`block w-full bg-zone-9 p-[3%] ${className}`}
      >
        <span
          className={`block w-full overflow-hidden border border-zone-0/35 bg-zone-1 ${ORIENTATION_ASPECT[resolvedOrientation]}`}
        >
          <img
            src={asset(photoPath)}
            alt={decorative ? '' : (label ?? '')}
            aria-hidden={decorative ? true : undefined}
            loading="lazy"
            className="block h-full w-full object-cover"
          />
        </span>
      </span>
    );
  }

  const Scene = entry.Scene;
  return (
    <PrintCanvas
      orientation={resolvedOrientation}
      label={label}
      decorative={decorative}
      className={className}
    >
      <Scene />
    </PrintCanvas>
  );
}
