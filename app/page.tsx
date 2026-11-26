import type { Metadata } from 'next';
import {
  BehindTheCamera,
  ClosingBand,
  DiaryStrip,
  FromShutterToPrint,
  HomeHero,
  OnTheLine,
  StartingPoints,
  ThreeRooms,
} from '../components/home-sections';
import { absoluteUrl } from '../lib/paths';
import { businessStructuredData, jsonLd } from '../lib/structured-data';

export const metadata: Metadata = {
  alternates: { canonical: absoluteUrl('/') },
};

export default function HomePage() {
  return (
    <>
      {/* 1. Hero (fibre paper) */}
      <HomeHero>
        <HomeHero.Heading>
          Pictures that hold the <em className="italic">light.</em>
        </HomeHero.Heading>
        <HomeHero.Lead>
          Weddings, portraits and commercial work, photographed in the Blue Ridge and finished like
          darkroom prints.
        </HomeHero.Lead>
        <HomeHero.Actions>
          <HomeHero.PrimaryAction>Enquire about your date</HomeHero.PrimaryAction>
          <HomeHero.SecondaryAction>See the galleries</HomeHero.SecondaryAction>
        </HomeHero.Actions>
      </HomeHero>

      {/* 2. Three rooms (mat surface) */}
      <ThreeRooms
        eyebrow="Three rooms"
        heading="What we photograph"
        rooms={[
          {
            numeral: '01',
            category: 'weddings',
            name: 'Weddings & elopements',
            pitch: 'Full days and ridge-top elopements across the Blue Ridge, photographed calmly with natural light first.',
            scene: 'ridge-vows',
            sceneAlt: 'Couple exchanging vows on a misty Blue Ridge overlook',
          },
          {
            numeral: '02',
            category: 'portraits',
            name: 'Portraits',
            pitch: 'Unhurried sessions beside our north window on Battery Park Avenue, or on your own front porch.',
            scene: 'window-portrait',
            sceneAlt: 'Side-lit studio portrait beside a tall north window',
          },
          {
            numeral: '03',
            category: 'commercial',
            name: 'Commercial & makers',
            pitch: 'Honest product, still-house and workshop stories for distillers, potters, restaurants and small brands.',
            scene: 'bottle-rimlight',
            sceneAlt: 'Rim-lit rye whiskey bottle on a dark slate plinth',
          },
        ]}
      />

      {/* 3. On the line (darkroom band) */}
      <OnTheLine
        eyebrow="On the line"
        heading="Recent work drying in the darkroom"
        intro="Four recent commissions pegged in print order—select any frame to see the full gallery."
      />

      {/* 4. From shutter to print (fibre paper) */}
      <FromShutterToPrint
        eyebrow="From shutter to print"
        heading="How a commission unfolds"
        steps={[
          {
            code: '01',
            bath: 'Developer',
            title: 'Enquire',
            copy: 'Send your date, place and a few lines about who will be in the frame.',
            turnaround: 'Reply within 2 working days',
            stage: 1,
          },
          {
            code: '02',
            bath: 'Stop bath',
            title: 'Plan',
            copy: 'We scout the light, walk through the running order and agree on a calm pace.',
            turnaround: 'Planning call 2–6 weeks out',
            stage: 2,
          },
          {
            code: '03',
            bath: 'Fixer',
            title: 'Photograph',
            copy: 'Natural light first, quiet direction when needed, and room for the real moments.',
            turnaround: 'The day itself',
            stage: 3,
          },
          {
            code: '04',
            bath: 'Wash',
            title: 'Deliver',
            copy: 'Every gallery is edited by hand for tonal depth, ready for screen and fibre paper.',
            turnaround: 'Gallery in 2–8 weeks',
            stage: 4,
          },
        ]}
      />

      {/* 5. Starting points (mat surface) */}
      <StartingPoints
        eyebrow="Starting points"
        heading="Clear prices on the wall"
        packageIds={['elopement', 'studio-portrait', 'commercial-half-day']}
        ctaLabel="See all packages & add-ons"
      />

      {/* 6. The 2027 diary (darkroom band) */}
      <DiaryStrip
        eyebrow="The 2027 diary"
        heading="Open months for weddings and commissions"
        confirmationNote="Dates are only held once the studio confirms in writing."
      />

      {/* 7. Behind the camera (fibre paper) */}
      <BehindTheCamera
        eyebrow="Behind the camera"
        quote="A good photograph should still feel steady thirty years from now, like silver resting in cotton paper."
        linkLabel="Meet Mara & Theo"
      >
        <p>
          Mara Ellison learned in a community darkroom in 2012 and has photographed full time in
          Western North Carolina since 2016. Second photographer Theo Vance joined the studio in
          2022, bringing a line cook’s instinct for reading a crowded room.
        </p>
        <p>
          We work from Studio 4 across Battery Park Avenue from the Grove Arcade—close to the
          trails, the River Arts District and a steady north window.
        </p>
      </BehindTheCamera>

      {/* 8. Closing band (fibre paper with Zone scale divider) */}
      <ClosingBand
        heading="Tell us the date, the place and who'll be in the frame."
        ctaLabel="Enquire about your date"
        note="Ask about a 2027 wedding date, a north-window portrait or a commercial shoot."
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(businessStructuredData()) }}
      />
    </>
  );
}
