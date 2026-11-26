import { validateHours, type OpeningHours } from '../lib/hours.ts';

export interface StudioAddress {
  /** Suite or studio number. */
  studio: string;
  /** Street number and name. */
  street: string;
  city: string;
  /** Two-letter state/region code. */
  region: string;
  postalCode: string;
  /** ISO 3166-1 alpha-2 country code. */
  country: string;
  /** Single-line formatted address for display and schema. */
  formatted: string;
}

export interface Business {
  /** Public display name; also update site.config.json's name when renaming. */
  name: string;
  /** Short headline for the home page. */
  tagline: string;
  /** Plain-text introduction used by the page and fallback metadata. */
  introduction: string;
  /** Public contact address, never a private notification destination. */
  email: string;
  /** Public telephone number; blank hides it. */
  phone: string;
  /** Physical studio address for consultations, print viewings and studio portraits. */
  address: StudioAddress;
  /** Walking directions from the nearby public landmark. */
  directions: string;
  /** Public landmark query used for the optional Google Map embed and links. */
  mapQuery: string;
  /** Primary geographic area served. */
  serviceArea: string;
  /** Travel availability note. */
  travelNote: string;
  /** Weekly studio hours; all seven weekdays in order, same-day intervals only. */
  hours: readonly OpeningHours[];
  /** Human-readable summary of closed days. */
  closedDaysNote: string;
  /** Contact copy; the hosted form supports name, email and message only. */
  enquiries: {
    /** Contact page heading. */
    title: string;
    /** Plain-language introduction; never promise a booking, hold or payment. */
    introduction: string;
    /** Explicit note near the form explaining that enquiries do not hold dates. */
    dateNote: string;
    /** Checklist of details visitors can include in their message. */
    usefulToInclude: readonly string[];
  };
}

export const business: Business = {
  name: 'Silver Frame Photography',
  tagline: 'Pictures that hold the light.',
  introduction:
    'Weddings, portraits and commercial work, photographed in the Blue Ridge and finished like darkroom prints.',
  email: 'studio@silverframephotography.com',
  phone: '+1 828-555-0117',
  address: {
    studio: 'Studio 4',
    street: '12 Battery Park Avenue',
    city: 'Asheville',
    region: 'NC',
    postalCode: '28801',
    country: 'US',
    formatted: 'Studio 4, 12 Battery Park Avenue, Asheville, NC 28801',
  },
  directions: 'Across Battery Park Avenue from the Grove Arcade, up the green stairwell',
  mapQuery: 'Grove Arcade, Asheville, NC',
  serviceArea: 'Asheville and Western North Carolina',
  travelNote: 'Travel is available on enquiry.',
  hours: [
    { day: 'Monday' },
    { day: 'Tuesday', opens: '10:00', closes: '18:00' },
    { day: 'Wednesday', opens: '10:00', closes: '18:00' },
    { day: 'Thursday', opens: '10:00', closes: '18:00' },
    { day: 'Friday', opens: '10:00', closes: '18:00' },
    { day: 'Saturday', opens: '10:00', closes: '14:00' },
    { day: 'Sunday' },
  ],
  closedDaysNote: 'Sun–Mon closed (weddings and shoots on location)',
  enquiries: {
    title: 'Send an enquiry',
    introduction:
      'Ask about a 2027 wedding date, a studio portrait session, or a commercial shoot in Asheville and the Blue Ridge.',
    dateNote:
      "Sending an enquiry doesn't hold a date. Mara will reply within two working days, and a date is held only once the studio confirms in writing.",
    usefulToInclude: [
      'What kind of shoot: wedding, elopement, portrait or commercial',
      "Your date or dates, and whether they're flexible",
      'The place or venue, and the town',
      "Who'll be in the frame: the couple and guest count, the family members, or the products",
      "The package you're considering, if any",
      'For commercial work, where the images will be used (web, print, packaging) and for how long',
    ],
  },
};

export function validateBusiness(data: Business = business): void {
  for (const key of ['name', 'tagline', 'introduction', 'email', 'directions', 'mapQuery', 'serviceArea'] as const) {
    if (!data[key].trim()) throw new Error(`business.${key}: required`);
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    throw new Error('business.email: valid public email required');
  }
  if (!data.address.formatted.trim() || !data.address.street.trim() || !data.address.city.trim()) {
    throw new Error('business.address: street, city and formatted address are required');
  }
  validateHours(data.hours);
  if (!data.enquiries.title.trim()) throw new Error('business.enquiries.title: required');
  if (!data.enquiries.introduction.trim()) throw new Error('business.enquiries.introduction: required');
  if (!data.enquiries.dateNote.trim()) throw new Error('business.enquiries.dateNote: required');
  if (!data.enquiries.usefulToInclude.length) {
    throw new Error('business.enquiries.usefulToInclude: include message guidance');
  }
  for (const [i, tip] of data.enquiries.usefulToInclude.entries()) {
    if (!tip.trim()) throw new Error(`business.enquiries.usefulToInclude[${i}]: empty tip`);
  }
}
