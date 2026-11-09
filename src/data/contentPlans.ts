// Single source of truth for the /content page: prices, plans, links and the included/FAQ copy.
// Change a price here and it updates everywhere on the page (cards, form, meta description).
import type { Project } from "@/data/site";

export const formatPrice = (amount: number) => `$${amount.toLocaleString("en-US")}`;

export const contentPage = {
  // TODO(Brian): replace with your scheduling link (e.g. a Calendly URL). While it is "#book",
  // every "Book a 15-minute call" button scrolls to the inquiry form at the bottom of the page.
  bookingUrl: "#book",
  cta: "Book a 15-minute call",
};

// A plain line, or one with a bold lead-in (used for the "ready-to-post pieces" count).
export type Feature = string | { strong: string; rest: string };

export const featureKey = (f: Feature) => (typeof f === "string" ? f : f.strong + f.rest);

export interface Plan {
  id: string;
  name: string;
  monthly: number;
  features: Feature[];
  popular?: boolean;
}

export const plans: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    monthly: 1000,
    features: [
      "Half-day shoot",
      "4 vertical videos (15–30s)",
      "Each delivered with 2–3 hook variations",
      { strong: "8–12 ready-to-post pieces", rest: ", plus a clip library" },
      "One round of revisions per video",
    ],
  },
  {
    id: "core",
    name: "Core",
    monthly: 1800,
    features: [
      "Full-day shoot",
      "8 vertical videos (15–30s)",
      "Each delivered with 2–3 hook variations",
      { strong: "16–24 ready-to-post pieces", rest: ", plus a clip library" },
      "One round of revisions per video",
    ],
    popular: true,
  },
  {
    id: "signature",
    name: "Signature",
    monthly: 3000,
    features: [
      "Two shoot days",
      "8 vertical videos (15–30s), each with 2–3 hook variations",
      { strong: "16–24 ready-to-post pieces", rest: ", plus a clip library" },
      "A polished 30–60s hero spot every quarter",
      "One round of revisions per video",
    ],
  },
];

export const planTerms = "Three-month minimum, then month to month. Billed monthly in advance.";

export const contentDay = {
  id: "content-day",
  name: "Content Day",
  price: 1200,
  features: [
    "Half-day shoot",
    "4 vertical videos (15–30s)",
    "Each delivered with 2–3 hook variations",
    { strong: "8–12 ready-to-post pieces", rest: ", plus a clip library" },
  ] as Feature[],
  note: "Credited toward your first month if you start a plan within 30 days.",
};

export const postingAddOn = 300;

export const lowestMonthly = Math.min(...plans.map((p) => p.monthly));

export const included = [
  "Creative planning",
  "Directing",
  "Shooting",
  "Editing",
  "Color",
  "Sound",
  "Captions",
  "Multiple hook variations per video, for testing what performs",
  "A clip library of raw footage and b-roll for stories and quick posts",
  "Files sized for each platform",
  "Usage rights for organic and paid social",
];

export const notIncluded = [
  `Posting and community management (posting available as a ${formatPrice(postingAddOn)}/mo add-on)`,
  "Ad spend",
  "Broadcast/TV usage (quoted separately)",
  "On-camera talent (can be sourced for an added fee)",
];

export const contentSteps = [
  { num: "01", title: "Plan", desc: "We get to know your brand’s voice, look at what’s trending in your space, and map out a month of fun, engaging videos that will connect you with your audience." },
  { num: "02", title: "Shoot", desc: "One batched shoot day captures everything, so your team gives up a few hours and can get back to work while we handle the edit." },
  { num: "03", title: "Deliver", desc: "Edited vertical videos with multiple hooks, ready to post or test as ads, plus a library of clips for stories and quick posts." },
];

export const contentFaqs = [
  {
    q: "Do we need to provide anything?",
    a: "Your product, your brand style guide, access to your location or a space we agree on, and anyone you’d like on camera.",
  },
  {
    q: "How many revisions do we get?",
    a: "One round per video is included; additional rounds are billed hourly.",
  },
  {
    q: "Can we use the videos in ads?",
    a: "Yes. Usage covers organic and paid social. Broadcast or TV use is quoted separately.",
  },
  {
    q: "What happens after three months?",
    a: "The plan continues month to month, and you can cancel with 30 days’ notice.",
  },
];

// Short intro under the "Featured work" heading.
export const featuredIntro =
  "Vertical videos for Vitality Maestro, Michael’s holistic health program, which guides people through a 21-day reset for more energy, clarity, and vitality.";

// Videos in the "Featured work" grid, played with the same card and lightbox as the portfolio.
// Add more entries here as they're ready; the grid makes room for them.
export const featuredWork: Project[] = [
  {
    slug: "vitality-maestro-celery-juice",
    title: "Celery Juice",
    category: "Brand Film",
    format: "Social video",
    duration: "1:20",
    description: "Celery juice as part of a morning routine, filmed close and clean so the ingredients do the talking.",
    alt: "Michael drinking a jar of fresh celery juice",
    vimeoId: "1231840555/d27d178573",
    image: "vitality-maestro-drinking-celery-juice",
    vertical: true,
  },
  {
    slug: "vitality-maestro-papaya",
    title: "Papaya",
    category: "Brand Film",
    format: "Social video",
    duration: "1:05",
    description: "Michael breaks down papaya’s benefits for digestion, on camera in his kitchen.",
    alt: "Michael slicing a fresh papaya in his kitchen",
    vimeoId: "1168321596/dfdc577ce9",
    image: "vitality-maestro-papaya-kitchen",
    vertical: true,
  },
  {
    slug: "vitality-maestro-lemon-water",
    title: "Lemon Water",
    category: "Brand Film",
    format: "Social video",
    duration: "0:51",
    description: "Michael walks through his lemon water, with fresh lemons and a pinch of sea salt.",
    alt: "Michael at a kitchen counter with a glass of water, sea salt, and fresh lemons",
    vimeoId: "1231840554/0ffb2ee0d8",
    image: "vitality-maestro-lemon-water",
    vertical: true,
  },
  {
    slug: "vitality-maestro-coffee",
    title: "Coffee",
    category: "Brand Film",
    format: "Social video",
    duration: "1:24",
    description: "Michael takes a closer look at the everyday drip coffee maker.",
    alt: "Michael opening the lid of a drip coffee maker on a kitchen counter",
    vimeoId: "1231854032/d4d3057fa6",
    image: "vitality-maestro-coffee-maker",
    vertical: true,
  },
];
