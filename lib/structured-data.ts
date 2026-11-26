import { business } from '../content/business.ts';
import { packages } from '../content/packages.ts';
import { absoluteUrl } from './paths.ts';

/**
 * Schema.org ProfessionalService derived from content/business.ts and content/packages.ts.
 */
export function businessStructuredData() {
  const url = absoluteUrl('/');
  const openingHoursSpecification = business.hours
    .filter((entry): entry is { day: typeof entry.day; opens: string; closes: string } =>
      Boolean(entry.opens && entry.closes),
    )
    .map(entry => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: `https://schema.org/${entry.day}`,
      opens: entry.opens,
      closes: entry.closes,
    }));

  const makesOffer = packages.map(pkg => ({
    '@type': 'Offer',
    name: `${pkg.name} (${pkg.category})`,
    priceCurrency: 'USD',
    price: pkg.priceFrom,
    itemOffered: {
      '@type': 'Service',
      name: pkg.name,
      description: `${pkg.coverage}, ${pkg.images} images, delivery in ${pkg.delivery}.`,
    },
  }));

  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: business.name,
    description: business.introduction,
    email: business.email,
    ...(business.phone ? { telephone: business.phone } : {}),
    ...(url ? { url } : {}),
    founder: {
      '@type': 'Person',
      name: 'Mara Ellison',
      jobTitle: 'Photographer',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${business.address.studio}, ${business.address.street}`,
      addressLocality: business.address.city,
      addressRegion: business.address.region,
      postalCode: business.address.postalCode,
      addressCountry: business.address.country,
    },
    areaServed: business.serviceArea,
    openingHoursSpecification,
    makesOffer,
  };
}

/** Prevent content containing a closing script tag from escaping JSON-LD. */
export function jsonLd(value: unknown): string {
  return JSON.stringify(value).replace(/</g, '\\u003c');
}
