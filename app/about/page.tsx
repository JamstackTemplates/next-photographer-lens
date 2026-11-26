import type { Metadata } from 'next';
import {
  AboutHero,
  InTheBagSection,
  MilestonesStrip,
  PrinciplesZigZag,
  StoryColumn,
  StudioVisitSection,
  TeamLineSection,
} from '../../components/about-sections';
import { absoluteUrl } from '../../lib/paths';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Meet Mara Ellison and Theo Vance of Silver Frame Photography—darkroom-trained photographers beside the Grove Arcade in Asheville.',
  alternates: { canonical: absoluteUrl('/about/') },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero
        eyebrow="The studio"
        title={
          <>
            Behind the <em className="italic">camera</em>
          </>
        }
      >
        <p>
          Two photographers, a north-facing bay on Battery Park Avenue, and a habit of judging
          every frame as if it will end up printed on fibre paper.
        </p>
      </AboutHero>

      <StoryColumn>
        <p className="story-dropcap">
          Mara learned to expose and print black-and-white film in a community darkroom in 2012,
          spending winter evenings watching mountain landscapes emerge under an amber safelight.
          That slow discipline—measuring the light before raising the camera, waiting for a gesture
          to settle—still shapes every wedding, portrait and commercial job we take on.
        </p>
        <p>
          She began photographing full time in 2016 and opened Studio 4 across from the Grove
          Arcade three years later. In 2022, Theo Vance joined as second photographer and retoucher,
          bringing ten years of kitchen pacing to busy wedding receptions and still-house shoots.
        </p>
      </StoryColumn>

      <PrinciplesZigZag
        eyebrow="How we work"
        heading="Three studio habits"
        principles={[
          {
            numeral: '01',
            title: 'Natural light first',
            body: 'We read windows, ridge shade and open doorways before we ever reach for artificial light, keeping skin tones and rooms honest to the hour you were there.',
          },
          {
            numeral: '02',
            title: 'Few posed group lists',
            body: 'We keep formal family groupings brisk and unhurried so you spend the day with the people you invited, not staring into a lens.',
          },
          {
            numeral: '03',
            title: 'Every gallery edited by hand',
            body: 'No outsourced batch presets. Each frame is toned individually for shadow detail, highlight roll-off and print longevity.',
          },
        ]}
      />

      <InTheBagSection
        eyebrow="In the bag"
        heading="What comes to a shoot"
        intro="A compact kit built for quiet shutters, fast primes and the occasional roll of 35mm film."
      />

      <TeamLineSection eyebrow="The team" heading="Mara Ellison & Theo Vance" />

      <MilestonesStrip eyebrow="Studio roll" heading="From first roll to 140th wedding" />

      <StudioVisitSection
        eyebrow="Visit the studio"
        heading="Consultations, print viewings and studio portraits"
        ctaLabel="Enquire about a studio visit"
      />
    </>
  );
}
