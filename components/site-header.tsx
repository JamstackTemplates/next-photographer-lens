import { DarkModeToggle } from 'jamstacks';
import { SiteLink } from './site-link';

const NAV_ITEMS = [
  { href: '/galleries/', label: 'Galleries' },
  { href: '/packages/', label: 'Packages' },
  { href: '/about/', label: 'About' },
  { href: '/contact/', label: 'Contact' },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-bg/95 backdrop-blur-sm">
      {/* 35mm negative sprocket strip along the top edge */}
      <div className="sprocket-rail" aria-hidden="true" />

      <div className="wrap flex min-h-[4.5rem] items-center justify-between gap-4 py-2">
        {/* Wordmark: Silver Frame with italic Frame */}
        <SiteLink
          href="/"
          className="font-serif text-2xl leading-none tracking-tight text-ink no-underline hover:no-underline sm:text-[1.65rem]"
        >
          Silver <em className="italic">Frame</em>
        </SiteLink>

        {/* Desktop navigation: narrow Mona Sans small caps */}
        <nav aria-label="Main" className="hidden items-center gap-7 md:flex">
          {NAV_ITEMS.map(item => (
            <SiteLink
              key={item.href}
              href={item.href}
              markCurrent="page"
              className="relative py-1.5 font-narrow text-[0.85rem] font-semibold tracking-[0.14em] text-ink/80 uppercase no-underline transition-colors hover:text-accent-ink hover:underline aria-[current=page]:text-accent-ink aria-[current=page]:underline aria-[current=page]:decoration-mark aria-[current=page]:decoration-2 aria-[current=page]:underline-offset-[0.45rem]"
            >
              {item.label}
            </SiteLink>
          ))}
        </nav>

        {/* Right actions: compact Enquire button + theme toggle + mobile disclosure envelope */}
        <div className="flex items-center gap-2.5">
          <SiteLink
            href="/contact/"
            className="button min-h-10 px-3.5 py-2 text-xs font-semibold tracking-[0.08em] uppercase sm:px-4 sm:text-[0.82rem]"
          >
            Enquire
          </SiteLink>
          <DarkModeToggle />

          {/* Mobile print-envelope disclosure menu (works without JS) */}
          <details className="relative md:hidden">
            <summary className="flex min-h-10 list-none items-center gap-1.5 rounded-ui border border-line bg-raised px-3 py-2 font-narrow text-xs font-semibold tracking-[0.12em] text-ink uppercase [&::-webkit-details-marker]:hidden">
              <span>Menu</span>
            </summary>
            <nav
              aria-label="Mobile"
              className="absolute right-0 mt-2 w-56 border border-line border-t-2 border-t-mark bg-raised p-4 shadow-xl"
            >
              <p className="mb-2 border-b border-line/60 pb-2 font-edge text-xs text-muted">
                SILVER FRAME 400
              </p>
              <ul className="grid gap-1">
                <li>
                  <SiteLink
                    href="/"
                    markCurrent="page"
                    className="block py-2 font-narrow text-sm font-semibold tracking-[0.12em] text-ink uppercase no-underline aria-[current=page]:border-l-2 aria-[current=page]:border-mark aria-[current=page]:pl-2.5 aria-[current=page]:text-accent-ink"
                  >
                    Home
                  </SiteLink>
                </li>
                {NAV_ITEMS.map(item => (
                  <li key={item.href}>
                    <SiteLink
                      href={item.href}
                      markCurrent="page"
                      className="block py-2 font-narrow text-sm font-semibold tracking-[0.12em] text-ink uppercase no-underline aria-[current=page]:border-l-2 aria-[current=page]:border-mark aria-[current=page]:pl-2.5 aria-[current=page]:text-accent-ink"
                    >
                      {item.label}
                    </SiteLink>
                  </li>
                ))}
              </ul>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
