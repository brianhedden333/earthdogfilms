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
      "4 vertical videos (15–60s)",
      "Each delivered in 2–3 hook variations and two lengths (15s and 30s)",
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
      "8 vertical videos (15–60s)",
      "Each delivered in 2–3 hook variations and two lengths",
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
      "8 vertical videos, each in 2–3 hook variations and two lengths",
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
    "4 vertical videos",
    { strong: "Delivered as 8–12 ready-to-post pieces", rest: ", plus a clip library" },
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
  { num: "01", title: "Plan", desc: "We map out the month’s videos around your products, launches, and season." },
  { num: "02", title: "Shoot", desc: "One batched shoot day captures everything, so your team gives up a few hours, not weeks." },
  { num: "03", title: "Deliver", desc: "Edited vertical videos in multiple hooks and lengths, ready to post or test as ads, plus a library of clips for stories and quick posts." },
];

export const contentFaqs = [
  {
    q: "Who do you work with?",
    a: "Food, family, and household product brands, plus other consumer brands that want video that looks like a commercial rather than a phone clip.",
  },
  {
    q: "Are four videos a month enough?",
    a: "Each video comes in several hooks and lengths, so four videos become eight to twelve pieces, plus a clip library for everything in between. And for ads, a few strong videos you can test usually do more than a high volume of quick posts. If you want more original videos, Core includes eight.",
  },
  {
    q: "Do we need to provide anything?",
    a: "Product, access to your location or a space we agree on, and anyone you’d like on camera.",
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

// Videos in the "Featured work" grid, played with the same card and lightbox as the portfolio.
// Add 2–3 more entries here as they're ready; the grid makes room for them.
export const featuredWork: Project[] = [
  {
    slug: "nude-foods-market-spec",
    title: "Spec spot — Nude Foods Market",
    category: "Brand Film",
    format: "Commercial",
    duration: "1:05",
    description: "A spec commercial made for Nude Foods Market to show what a monthly plan can look like. Not a client commission.",
    // TODO(Brian): stand-in video and still ("Michael Vitality - Papaya"). Swap vimeoId, image, alt and
    // duration for the Nude Foods Market spot before this page goes live.
    alt: "A man scooping seeds from a halved papaya in a kitchen",
    vimeoId: "1168321596/dfdc577ce9",
    image: "michael-vitality-papaya",
    vertical: true,
  },
];
