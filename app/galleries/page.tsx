import type { Metadata } from 'next';
import { LightTableArt } from '../../components/artwork/motifs';
import { GalleriesView } from '../../components/galleries-view';
import { ClosingBand } from '../../components/home-sections';
import { PageHead } from '../../components/page-head';
import { absoluteUrl } from '../../lib/paths';

export const metadata: Metadata = {
  title: 'Galleries',
  description:
    'Wedding, portrait and commercial photography galleries from Silver Frame Photography in Asheville, NC.',
  alternates: { canonical: absoluteUrl('/galleries/') },
};

export default function GalleriesPage() {
  return (
    <>
      <PageHead
        eyebrow="Selected work"
        title={
          <>
            Gal<em className="italic">leries</em>
          </>
        }
        edgeCode="20 FRAMES"
        artwork={<LightTableArt />}
      >
        <p>
          Six complete stories across weddings, portraits and commercial commissions. Select any
          print to inspect it at full scale.
        </p>
      </PageHead>

      <GalleriesView />

      <ClosingBand
        heading="Picture your own day on the line."
        ctaLabel="Enquire about your date"
        note="Tell us what you're planning and when—we reply within two working days."
      />
    </>
  );
}
