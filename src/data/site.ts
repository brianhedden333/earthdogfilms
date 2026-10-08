// Single source of truth for Home, Portfolio, Project, About and Contact.

export const site = {
  name: "Earth Dog Films",
  location: "Boulder, Colorado",
  logo: "/img/logo-mark.webp",
  reel: { vimeoId: "787378175", duration: "01:09", image: "reel" },
  heroVimeoId: "336916761",
  formspreeEndpoint: "https://formspree.io/f/mqabykrl",
  social: {
    instagram: "https://www.instagram.com/earthdogfilms/",
    facebook: "https://www.facebook.com/earthdogfilms/",
    google: "https://share.google/MGW9YHohcmZWKxR7Q",
  },
};

export const navLinks = [
  { label: "Portfolio", to: "/portfolio" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
];

export const categories = ["Campaign", "Brand Film", "Documentary", "Music & Dance"] as const;
export type Category = (typeof categories)[number];

export interface SubVideo {
  vimeoId: string;
  title: string;
  duration?: string;
  thumbnail?: string;
}

export interface Project {
  slug: string;
  title: string;
  category: Category;
  format: string;
  duration?: string;
  description: string;
  alt: string;
  vimeoId?: string; // "id" or "id/hash" for unlisted videos
  youtubeId?: string;
  thumbnail?: string;
  // Base name of locally optimised stills: /img/<image>-{800,1600}.webp plus a -1600.jpg fallback.
  image?: string;
  subVideos?: SubVideo[];
  externalUrl?: string;
  // Projects with a detail page at /portfolio/:slug. Others open in the lightbox.
  hasPage?: boolean;
  // Shown on the homepage "Latest projects" row, in array order.
  latest?: boolean;
  homeDescription?: string;
  detail?: {
    eyebrow: string;
    client: string;
    year: string;
    role?: string;
    brief?: string;
    approach?: string;
    whereItRan?: string;
    stills?: { src: string; alt: string }[];
  };
}

export const projects: Project[] = [
  {
    slug: "seligman-for-ag",
    title: "Seligman for AG",
    category: "Campaign",
    format: "Commercial",
    duration: "0:30",
    description:
      "A 30-second spot for David Seligman’s campaign for Colorado Attorney General in the 2026 Democratic primary.",
    homeDescription: "A 30-second spot for David Seligman’s 2026 campaign for Colorado Attorney General.",
    alt: "David Seligman in a campaign ad",
    vimeoId: "1202700031",
    thumbnail: "/lovable-uploads/seligman-thumb.jpg",
    image: "seligman-for-ag",
    hasPage: true,
    latest: true,
    detail: {
      eyebrow: "Campaign · Commercial",
      client: "David Seligman for Attorney General",
      year: "2026",
    },
  },
  {
    slug: "gonzales-for-senate",
    title: "Gonzales for Senate",
    category: "Campaign",
    format: "Social series",
    description: "Short, vertical, documentary-style promotional videos made for organic social media impact.",
    homeDescription: "Short, vertical, documentary-style videos made for organic social impact.",
    alt: "Julie Gonzales supporters marching with campaign signs",
    vimeoId: "1205342921",
    thumbnail: "/lovable-uploads/gonzales-thumb.jpg",
    image: "gonzales-for-senate",
    subVideos: [
      { vimeoId: "1209622639", title: "Gonzales for Senate - Vol. 3", duration: "0:34", thumbnail: "/img/gonzales-sub3.webp" },
      { vimeoId: "1205342921", title: "Gonzales for Senate - Vol. 1", duration: "0:49", thumbnail: "/img/gonzales-sub1.webp" },
      { vimeoId: "1203265891", title: "Gonzales for Senate - Vol. 2", duration: "0:30", thumbnail: "/img/gonzales-sub2.webp" },
    ],
    hasPage: true,
    latest: true,
  },
  {
    slug: "awaken-school",
    title: "Awaken School",
    category: "Brand Film",
    format: "Promo",
    duration: "1:45",
    description:
      "A promotional film for the Spiritual and Successful workshop with Rachael Jayne Groover in Loveland, Colorado.",
    homeDescription: "A promotional film for the Spiritual and Successful workshop in Loveland, Colorado.",
    alt: "Speaker addressing a cheering workshop audience",
    vimeoId: "1125623603",
    thumbnail: "/lovable-uploads/awaken-school-thumb.jpg",
    image: "awaken-school",
    hasPage: true,
    latest: true,
  },
  {
    slug: "fracking-the-system",
    image: "fracking-the-system",
    title: "Fracking the System",
    category: "Documentary",
    format: "Feature documentary",
    description: "An award-winning investigative documentary about the oil and gas industry in Colorado.",
    alt: "Still from the Fracking the System trailer",
    youtubeId: "T-azhfhG0H0",
    externalUrl: "https://www.frackingthesystem.com",
    hasPage: true,
  },
  {
    slug: "yes-on-7a",
    image: "yes-on-7a",
    title: "Yes on 7A",
    category: "Campaign",
    format: "Testimonials",
    duration: "1:32",
    description:
      "A sample of testimonial videos made for Strong Start Bright Future’s Yes on 7A campaign in Colorado’s Roaring Fork Valley.",
    alt: "Testimonial from the Yes on 7A campaign",
    vimeoId: "1122992265/e830dc73f5",
    thumbnail: "/lovable-uploads/yes-on-1a-thumb.png",
  },
  {
    slug: "quotethat",
    image: "quotethat",
    title: "QuoteThat",
    category: "Brand Film",
    format: "Web commercial",
    duration: "0:39",
    description: "A web commercial for a family-oriented mobile app founded in Boulder, Colorado.",
    alt: "Still from the QuoteThat web commercial",
    vimeoId: "251723265",
  },
  {
    slug: "transformative-solutions",
    image: "transformative-solutions",
    title: "Transformative Solutions",
    category: "Brand Film",
    format: "Promo",
    duration: "3:50",
    description:
      "An extended promotional video explaining the approach and dynamic offerings of a Boulder-based business coaching company.",
    alt: "Still from the Transformative Solutions promotional video",
    vimeoId: "270209806",
  },
  {
    slug: "california-center-for-sustainable-energy",
    image: "california-center-for-sustainable-energy",
    title: "California Center for Sustainable Energy",
    category: "Brand Film",
    format: "Explainer",
    duration: "1:32",
    description:
      "A short explainer video about the services provided by the sustainability non-profit based in San Diego, California.",
    alt: "Still from the California Center for Sustainable Energy explainer",
    vimeoId: "51964106",
  },
  {
    slug: "vmix-media",
    image: "vmix-media",
    title: "VMIX Media",
    category: "Brand Film",
    format: "Explainer",
    duration: "1:50",
    description: "An explainer video for a white-label video distribution startup based in Del Mar, California.",
    alt: "Still from the VMIX Media explainer",
    vimeoId: "252373163",
  },
  {
    slug: "the-patchwork-school",
    image: "the-patchwork-school",
    title: "The Patchwork School",
    category: "Brand Film",
    format: "Virtual tour",
    duration: "4:31",
    description: "A virtual tour for an innovative school based in Louisville, Colorado.",
    alt: "Still from The Patchwork School virtual tour",
    vimeoId: "363362257",
  },
  {
    slug: "towards-animism",
    image: "towards-animism",
    title: "Towards Animism",
    category: "Documentary",
    format: "Short documentary",
    duration: "3:28",
    description: "A short promotional documentary for land-based workshops by herbalist Kat Mackinnon.",
    alt: "Still from Towards Animism",
    youtubeId: "Zx8nrOw0xLI",
    thumbnail: "/lovable-uploads/towards-animism-thumb.png",
  },
  {
    slug: "earthaven-ecovillage",
    image: "earthaven-ecovillage",
    title: "Earthaven Ecovillage",
    category: "Documentary",
    format: "Short documentary",
    duration: "7:23",
    description: "An overview of a permaculture-based ecovillage outside of Asheville, North Carolina.",
    alt: "Still from the Earthaven Ecovillage film",
    youtubeId: "ybFE15LM1h8",
  },
  {
    slug: "elephant-collective",
    image: "elephant-collective",
    title: "Elephant Collective",
    category: "Documentary",
    format: "Short documentary",
    duration: "5:28",
    description: "A portrait of a musician incubation program in Boulder, Colorado.",
    alt: "Still from the Elephant Collective film",
    vimeoId: "379624699",
  },
  {
    slug: "advocates-for-injured-athletes",
    image: "advocates-for-injured-athletes",
    title: "Advocates for Injured Athletes",
    category: "Documentary",
    format: "Short documentary",
    duration: "5:11",
    description: "The origin story of a youth sports safety non-profit based in San Diego, California.",
    alt: "Still from the Advocates for Injured Athletes film",
    vimeoId: "28742880",
  },
  {
    slug: "the-blind-cafe",
    image: "the-blind-cafe",
    title: "The Blind Cafe",
    category: "Documentary",
    format: "Short documentary",
    duration: "1:56",
    description: "A unique dining experience in darkness.",
    alt: "Still from The Blind Cafe film",
    vimeoId: "363364357",
  },
  {
    slug: "the-linkery-ethan-and-steph",
    image: "the-linkery-ethan-and-steph",
    title: "The Linkery’s Ethan and Steph",
    category: "Documentary",
    format: "Short documentary",
    duration: "3:08",
    description: "The story of cask beer at a farm-to-table restaurant in San Diego, California.",
    alt: "Still from The Linkery’s Ethan and Steph",
    vimeoId: "17943030",
  },
  {
    slug: "the-linkery-max",
    image: "the-linkery-max",
    title: "The Linkery’s Max",
    category: "Documentary",
    format: "Short documentary",
    duration: "2:55",
    description:
      "A chef’s passion for house-made everything at a farm-to-table restaurant in San Diego, California.",
    alt: "Still from The Linkery’s Max",
    vimeoId: "17577920",
  },
  {
    slug: "the-linkery-ian",
    image: "the-linkery-ian",
    title: "The Linkery’s Ian",
    category: "Documentary",
    format: "Short documentary",
    duration: "2:51",
    description:
      "Hand-made bread and community connection at a farm-to-table restaurant in San Diego, California.",
    alt: "Still from The Linkery’s Ian",
    vimeoId: "17988223",
  },
  {
    slug: "zone-7-winter",
    image: "zone-7-winter",
    title: "Zone 7 Winter",
    category: "Documentary",
    format: "Short documentary",
    duration: "5:12",
    description: "A local food distribution company overcomes the challenges of winter in New Jersey.",
    alt: "Still from Zone 7 Winter",
    vimeoId: "19838162",
  },
  {
    slug: "zone-7-spring",
    image: "zone-7-spring",
    title: "Zone 7 Spring",
    category: "Documentary",
    format: "Short documentary",
    duration: "4:57",
    description: "A local food distribution company celebrates spring farming and renewal in New Jersey.",
    alt: "Still from Zone 7 Spring",
    vimeoId: "118621660",
  },
  {
    slug: "the-great-monarch-migration",
    image: "the-great-monarch-migration",
    title: "Jeff and Paige: The Great Monarch Migration",
    category: "Music & Dance",
    format: "Music video",
    duration: "5:47",
    description: "Official music video celebrating the wonder of the monarch butterfly migration.",
    alt: "Still from The Great Monarch Migration music video",
    vimeoId: "270158301",
  },
  {
    slug: "ayla-nereo-tightrope-walker",
    image: "ayla-nereo-tightrope-walker",
    title: "Ayla Nereo: Tightrope Walker at Red Rocks",
    category: "Music & Dance",
    format: "Promo",
    duration: "1:00",
    description: "Promotional video for Ayla Nereo’s performance at Red Rocks Amphitheatre.",
    alt: "Ayla Nereo performing at Red Rocks",
    vimeoId: "355230121",
  },
  {
    slug: "polish-ambassador-red-rocks",
    image: "polish-ambassador-red-rocks",
    title: "The Polish Ambassador ft. Ayla Nereo at Red Rocks",
    category: "Music & Dance",
    format: "Live performance",
    duration: "1:00",
    description: "Live performance footage of Polish Ambassador featuring Ayla Nereo at Red Rocks.",
    alt: "The Polish Ambassador and Ayla Nereo on stage at Red Rocks",
    vimeoId: "336685007",
  },
  {
    slug: "changing-of-the-light",
    image: "changing-of-the-light",
    title: "Changing of the Light",
    category: "Music & Dance",
    format: "Acroyoga",
    duration: "2:33",
    description: "A beautiful acroyoga performance capturing movement and connection.",
    alt: "Acroyoga performers in Changing of the Light",
    vimeoId: "625275624",
  },
  {
    slug: "jeacey-adams-hooping",
    image: "jeacey-adams-hooping",
    title: "Jeacey Adams Hooping in Paonia",
    category: "Music & Dance",
    format: "Flow arts",
    duration: "1:36",
    description: "Flow arts performance filmed in the scenic landscape of Paonia, Colorado.",
    alt: "Jeacey Adams hooping in Paonia, Colorado",
    vimeoId: "487005355",
  },
];

export const projectMeta = (p: Project) => (p.duration ? `${p.format} · ${p.duration}` : p.format);

export const projectThumbnail = (p: Pick<Project, "thumbnail" | "vimeoId" | "youtubeId">) => {
  if (p.thumbnail) return p.thumbnail;
  if (p.vimeoId) return `https://vumbnail.com/${p.vimeoId.split("/")[0]}.jpg`;
  if (p.youtubeId) return `https://img.youtube.com/vi/${p.youtubeId}/maxresdefault.jpg`;
  return undefined;
};

export const videoEmbedUrl = (v: { vimeoId?: string; youtubeId?: string }) => {
  if (v.vimeoId) {
    // Unlisted Vimeo videos are stored as "id/hash".
    const [id, hash] = v.vimeoId.split("/");
    return `https://player.vimeo.com/video/${id}?${hash ? `h=${hash}&` : ""}autoplay=1`;
  }
  if (v.youtubeId) return `https://www.youtube.com/embed/${v.youtubeId}?autoplay=1`;
  return undefined;
};

export const latestProjects = projects.filter((p) => p.latest);
export const projectPages = projects.filter((p) => p.hasPage);
export const getProject = (slug?: string) => projects.find((p) => p.slug === slug);

export interface Service {
  num: string;
  id: string; // anchor on /services
  title: string;
  desc: string;
  includes: { title: string; desc: string }[];
  // Optional link to matching work in the portfolio.
  work?: { label: string; category: Category };
}

export const services: Service[] = [
  {
    num: "01",
    id: "brand-films",
    title: "Commercial & Brand Films",
    desc: "Compelling brand stories and campaigns that connect purpose-driven organizations with their audiences.",
    includes: [
      { title: "Brand & Commercial Films", desc: "Cinematic promotional videos, testimonials, and brand films for businesses across the Boulder-Denver corridor and beyond." },
      { title: "Political Campaign Videos", desc: "Paid broadcast ads and organic social content for political campaigns. Fast turnaround, compliance-ready, and built to persuade." },
      { title: "Social Media Video", desc: "Short-form vertical and horizontal video optimized for Instagram, Facebook, YouTube, and TikTok. Authentic storytelling in the format your audience consumes." },
    ],
    work: { label: "See brand film work", category: "Brand Film" },
  },
  {
    num: "02",
    id: "documentary",
    title: "Documentary Production",
    desc: "Award-winning documentaries that inform, mobilize and create lasting impact on the issues that matter most.",
    includes: [
      { title: "Pre-Production Planning", desc: "Strategic planning, location scouting, and creative development to ensure your vision comes to life." },
      { title: "On-Site Production", desc: "Professional crew, equipment, and coordination for seamless filming." },
      { title: "Production Management", desc: "End-to-end project management keeping everything on schedule and on budget." },
      { title: "Location Management", desc: "Securing permits, coordinating logistics, and managing all on-location needs." },
    ],
    work: { label: "See documentary work", category: "Documentary" },
  },
  {
    num: "03",
    id: "post-production",
    title: "Post-Production",
    desc: "Expert editing, color grading and finishing that elevates your story to its fullest potential.",
    includes: [
      { title: "Video Editing", desc: "Thoughtful editing that shapes raw footage into compelling narratives." },
      { title: "Color Grading", desc: "Professional color correction and grading to enhance the visual tone and mood." },
      { title: "Sound Design & Mixing", desc: "Audio post-production including mixing, sound effects, and music selection." },
      { title: "Motion Graphics", desc: "Custom graphics, titles, and animation to enhance your story." },
    ],
  },
  {
    num: "04",
    id: "aerial-drone",
    title: "Aerial & Drone",
    desc: "Stunning aerial cinematography that adds breathtaking perspective and production value.",
    includes: [
      { title: "Aerial Cinematography", desc: "Stunning aerial shots that add scale and perspective to your story." },
      { title: "Location Surveys", desc: "Aerial reconnaissance and site surveys for planning and documentation." },
      { title: "Real Estate & Property", desc: "Showcase properties and landscapes from unique aerial perspectives." },
      { title: "Licensed FAA Pilots", desc: "Fully certified and insured commercial drone operations." },
    ],
  },
];

export const processSteps = [
  { num: "01", title: "Listen", desc: "We start with your mission, audience and goals, and the one thing the film has to make people feel." },
  { num: "02", title: "Shape", desc: "Story, script and shot plan, built around real people and the strongest version of your message." },
  { num: "03", title: "Shoot", desc: "A lean, collaborative crew on location, with aerial and drone work when the story calls for it." },
  { num: "04", title: "Finish", desc: "Edit, color and sound, plus cutdowns for every platform your audience is on." },
];

export const testimonials = {
  // Large pull quote on Home. `emphasis` is the phrase set in red italic.
  featured: {
    text: "Their high-level production quality, paired with a mission-driven approach, makes them stand out as an exceptional team to work with.",
    emphasis: "exceptional team",
    who: "Peder Rottiger",
  },
  cards: [
    {
      text: "I’ve known and worked with Brian for close to a decade, and I would highly recommend him for your next video project. He’s got a great creative vision and a knack for storytelling.",
      who: "Daniel Herman",
    },
    {
      text: "He elevated our project to levels I didn’t think possible.",
      who: "Daniel Smith, T.O.L.D.",
    },
  ],
  contact: {
    text: "If you want a creative partner who leads with integrity, clarity and genuine storytelling talent, Earth Dog Films is an easy recommendation.",
    who: "Peder Rottiger",
  },
};

export const clients = [
  { src: "/lovable-uploads/client-logo-seligman.png", alt: "Seligman for Attorney General" },
  { src: "/lovable-uploads/client-logo-gonzales.png", alt: "Julie Gonzales for Senate" },
  { src: "/lovable-uploads/client-logo-7a.png", alt: "Vote Yes on 7A" },
  { src: "/lovable-uploads/client-logo-blind-cafe.png", alt: "The Blind Cafe" },
  { src: "/lovable-uploads/client-logo-center-sustainable-energy.png", alt: "Center for Sustainable Energy" },
  { src: "/lovable-uploads/client-logo-earthaven-ecovillage.png", alt: "Earthaven Ecovillage" },
  { src: "/lovable-uploads/client-logo-patchwork-school.png", alt: "The Patchwork School" },
  { src: "/lovable-uploads/client-logo-sacred-sons.png", alt: "Sacred Sons" },
  { src: "/lovable-uploads/client-logo-transformative-solutions.png", alt: "Transformative Solutions" },
  { src: "/lovable-uploads/client-logo-relationship-school.png", alt: "The Relationship School" },
  { src: "/lovable-uploads/client-logo-quotethat.png", alt: "quoteThat" },
  { src: "/lovable-uploads/client-logo-ecpac.png", alt: "ECPAC Adams County" },
];

export const projectTypes = ["Campaign video", "Brand film", "Documentary", "Post-production", "Aerial & drone"];

export const budgetRanges = ["$5,000 – $10,000", "$10,000 – $20,000", "$20,000 – $35,000", "$35,000+", "Let’s discuss"];
