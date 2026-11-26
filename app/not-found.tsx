import { FoggedPrintArt } from '../components/artwork/motifs';
import { SiteLink } from '../components/site-link';

export default function NotFound() {
  return (
    <section className="wrap py-16 sm:py-24">
      <div className="grid items-center gap-10 md:grid-cols-[minmax(0,0.5fr)_minmax(0,0.5fr)]">
        <FoggedPrintArt />
        <div>
          <p className="eyebrow">404 · Fogged frame</p>
          <h1 className="mt-3 font-serif text-[clamp(2.5rem,5.5vw,4.25rem)] leading-[0.98] text-ink">
            This frame didn&apos;t <em className="italic">develop.</em>
          </h1>
          <p className="mt-5 max-w-[40ch] text-base leading-relaxed text-muted">
            The page you followed isn&apos;t on the drying line. Head back to the front room or
            browse the galleries instead.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-5">
            <SiteLink href="/" className="button">
              Return home
            </SiteLink>
            <SiteLink
              href="/galleries/"
              className="text-link font-narrow text-sm font-semibold tracking-[0.12em] uppercase"
            >
              See the galleries
            </SiteLink>
          </div>
        </div>
      </div>
    </section>
  );
}
