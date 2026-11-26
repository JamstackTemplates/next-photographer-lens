import type { Metadata } from 'next';
import { WindowMatCornerArt } from '../../components/artwork/motifs';
import { ClosingBand } from '../../components/home-sections';
import { PageHead } from '../../components/page-head';
import {
  AddOnsStrip,
  CommercialRateCard,
  PackagesFaq,
  PortraitLabels,
  WeddingPlacards,
} from '../../components/packages-sections';
import { absoluteUrl } from '../../lib/paths';

export const metadata: Metadata = {
  title: 'Packages',
  description:
    'Starting prices for weddings, elopements, studio portraits, commercial day rates and darkroom print add-ons.',
  alternates: { canonical: absoluteUrl('/packages/') },
};

export default function PackagesPage() {
  return (
    <>
      <PageHead
        eyebrow="Pricing & inclusions"
        title={
          <>
            Pack<em className="italic">ages</em>
          </>
        }
        edgeCode="2027 RATES"
        artwork={<WindowMatCornerArt />}
      >
        <p>
          Every figure below is a starting price in USD. Sending an enquiry never locks in a date—a
          date is held only after written confirmation from the studio.
        </p>
      </PageHead>

      <WeddingPlacards
        eyebrow="Weddings & elopements"
        heading="Wedding packages"
        note="Photographed across Asheville and the Blue Ridge Parkway, edited by hand with full print release."
      />

      <PortraitLabels eyebrow="Studio & location" heading="Portrait sessions" />

      <CommercialRateCard
        eyebrow="Makers, distillers & hospitality"
        heading="Commercial day rates"
        note="Structured around half-day and full-day production with clear image licensing."
      />

      <AddOnsStrip eyebrow="Darkroom & extras" heading="Add-ons price list" />

      <PackagesFaq
        heading="Before you enquire"
        items={[
          {
            question: 'How is a date held?',
            answer:
              'Sending an enquiry starts the conversation and lets us check the 2027 diary, but it does not hold a date. Mara replies within two working days, and a date is held only once the studio sends written confirmation.',
          },
          {
            question: 'Do you travel outside Asheville?',
            answer:
              'Yes. All Western North Carolina venues within an hour of Battery Park Avenue are included. Travel farther afield in the Southeast or beyond is available on enquiry, with mileage or lodging quoted plainly up front.',
          },
          {
            question: 'How long does delivery take?',
            answer:
              'Studio portraits and commercial half days are delivered within 2 weeks, family sessions and commercial full days within 3 weeks, elopements in 4 weeks, and full-day weddings in 6 to 8 weeks. Rush 7-day editing is available as an add-on.',
          },
          {
            question: 'How does commercial image licensing work?',
            answer:
              'Half-day rates include a one-year web licence; full-day rates include a two-year web and print licence. Packaging, billboard or extended regional usage can be scoped in your enquiry brief.',
          },
          {
            question: 'How should we care for fibre-base prints?',
            answer:
              'Our 8×10 and 11×14 prints are hand-printed on archival fibre-base paper and selenium-toned for permanence. Frame them behind UV-filtering glass away from direct midday sun, and handle unframed sheets by the edges with clean, dry hands.',
          },
        ]}
      />

      <ClosingBand
        heading="Ask about a date or a tailored shoot."
        ctaLabel="Enquire about your date"
        note="Share which package feels closest and we will follow up with a written proposal."
      />
    </>
  );
}
