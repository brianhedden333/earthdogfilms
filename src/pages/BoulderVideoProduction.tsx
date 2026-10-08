import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTABand from "@/components/CTABand";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";

const eyebrow = "text-[13px] uppercase tracking-[0.12em] text-brand-text";
const h2 = "m-0 max-w-[900px] font-display text-[clamp(40px,4.4vw,60px)] font-normal leading-[1.05]";

const BoulderVideoProduction = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://earthdogfilms.com/#business",
        "name": "Earth Dog Films",
        "description": "Boulder video production company specializing in documentary-style brand films, political campaign videos, and cinematic storytelling for mission-driven organizations across Colorado.",
        "url": "https://earthdogfilms.com",
        "telephone": "",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Boulder",
          "addressRegion": "CO",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "40.0150",
          "longitude": "-105.2705"
        },
        "areaServed": [
          { "@type": "City", "name": "Boulder" },
          { "@type": "City", "name": "Denver" },
          { "@type": "State", "name": "Colorado" },
          { "@type": "Country", "name": "United States" }
        ],
        "priceRange": "$$",
        "image": "https://earthdogfilms.com/lovable-uploads/edf-logo-2025.png",
        "sameAs": [
          "https://www.instagram.com/earthdogfilms",
          "https://www.facebook.com/earthdogfilms"
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What video production services does Earth Dog Films offer in Boulder, Colorado?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Earth Dog Films offers full-service video production in Boulder, Colorado, including documentary marketing videos, brand films, political campaign commercials, aerial drone cinematography, social media content, post-production editing, and video consulting. We serve clients throughout Boulder, Denver, and the Front Range."
            }
          },
          {
            "@type": "Question",
            "name": "How much does video production cost in Boulder, CO?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Video production costs in Boulder vary widely depending on scope, length, and complexity. A short brand video or social media piece may start around $2,000–$5,000, while a full documentary marketing campaign or political ad can range from $5,000–$25,000+. Earth Dog Films works with clients to find the right scope for their budget and goals."
            }
          },
          {
            "@type": "Question",
            "name": "Does Earth Dog Films work with nonprofits and mission-driven organizations?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Earth Dog Films specializes in video production for nonprofits, advocacy organizations, educators, and mission-driven brands. Our documentary-style approach is especially effective for organizations with a compelling story to tell. Past clients include environmental nonprofits, education campaigns, and political campaigns across Colorado."
            }
          },
          {
            "@type": "Question",
            "name": "Can Earth Dog Films produce political campaign videos in Colorado?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Earth Dog Films has produced political campaign videos for Colorado Democratic Primary candidates, including paid broadcast and social media ads. We understand the fast timelines and compliance requirements of political video production."
            }
          },
          {
            "@type": "Question",
            "name": "Does Earth Dog Films serve clients outside of Boulder?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. While we're based in Boulder, we regularly work with clients in Denver, across Colorado, and throughout the United States. We have produced videos in San Diego, New Jersey, North Carolina, and many other locations."
            }
          },
          {
            "@type": "Question",
            "name": "What makes Earth Dog Films different from other Boulder video production companies?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Earth Dog Films takes a story-first, documentary approach to all video work — from 30-second ads to feature films. With over a decade of experience directing, shooting, and editing, we bring depth and authenticity that typical commercial video companies don't offer. Our feature documentary Fracking the System has screened nationally and demonstrates our commitment to high-impact storytelling."
            }
          }
        ]
      }
    ]
  };

  const services = [
    {
      title: "Documentary Marketing",
      description: "Short-form documentary videos that tell your organization's story and drive real audience connection. Ideal for nonprofits, advocacy groups, and mission-driven brands."
    },
    {
      title: "Brand & Commercial Films",
      description: "Cinematic promotional videos, testimonials, and brand films for businesses across the Boulder-Denver corridor and beyond."
    },
    {
      title: "Political Campaign Videos",
      description: "Paid broadcast ads and organic social content for political campaigns. Fast turnaround, compliance-ready, and built to persuade."
    },
    {
      title: "Aerial Drone Cinematography",
      description: "FAA-compliant drone footage capturing Colorado's landscapes, urban environments, and events from breathtaking perspectives."
    },
    {
      title: "Social Media Video",
      description: "Short-form vertical and horizontal video optimized for Instagram, Facebook, YouTube, and TikTok. Authentic storytelling in the format your audience consumes."
    },
    {
      title: "Post-Production & Editing",
      description: "Professional editing, color grading, sound design, and motion graphics to elevate raw footage into polished, broadcast-ready content."
    }
  ];

  const faqs = [
    {
      q: "What video production services does Earth Dog Films offer in Boulder?",
      a: "We offer documentary marketing, brand films, political campaign commercials, aerial drone cinematography, social media content, post-production editing, and video consulting. We serve clients throughout Boulder, Denver, and the Front Range."
    },
    {
      q: "How much does video production cost in Boulder, CO?",
      a: "Costs vary by scope. A short brand video or social media piece may start around $2,000–$5,000; a documentary marketing campaign or political ad can range from $5,000–$25,000+. We work with clients to find the right scope for their budget and goals."
    },
    {
      q: "Does Earth Dog Films work with nonprofits?",
      a: "Yes — it's a core part of what we do. Our documentary-style approach is especially effective for organizations with a compelling story. Past clients include environmental nonprofits, education campaigns, and advocacy organizations across Colorado."
    },
    {
      q: "Can you produce political campaign videos in Colorado?",
      a: "Yes. We've produced paid broadcast and social media ads for Colorado Democratic Primary candidates. We understand the fast timelines and compliance requirements of political video production."
    },
    {
      q: "Do you work outside of Boulder?",
      a: "Absolutely. We regularly work in Denver, across Colorado, and throughout the U.S. We've shot in San Diego, New Jersey, North Carolina, Asheville, Paonia, and many other locations."
    }
  ];

  return (
    <div className="w-full bg-paper font-sans leading-[normal] text-ink">
      <SEO
        title="Boulder Video Production Company | Earth Dog Films"
        description="Earth Dog Films is a Boulder, Colorado video production company specializing in documentary marketing, brand films, political campaign videos, and cinematic storytelling. Serving Boulder, Denver, and Colorado statewide."
        canonical="/boulder-video-production"
        structuredData={structuredData}
      />
      <Header />
      <Breadcrumbs />

      <main>
        <section className="px-[6vw] pb-[72px] pt-16 min-[761px]:pb-24 min-[761px]:pt-[104px]">
          <div className={`load-fade mb-6 [--load-delay:0s] ${eyebrow}`}>Boulder, Colorado</div>
          <h1 className="m-0 max-w-[1200px] font-display text-[clamp(52px,7vw,112px)] font-normal leading-[0.98] tracking-[-0.02em]"><span className="load-line"><span className="load-up">
            Boulder Video <em className="text-brand">Production</em>
          </span></span></h1>
          <p className="load-fade m-0 mt-8 max-w-[720px] text-xl leading-[1.55] text-ink-3">
            Earth Dog Films is a Boulder-based video production company crafting cinematic,
            documentary-style content for mission-driven brands, nonprofits, and political campaigns
            across Colorado and the United States.
          </p>
          <div className="load-fade mt-10 flex flex-wrap gap-4 [--load-delay:0.55s]">
            <Link
              to="/contact"
              className="inline-flex min-h-[44px] items-center rounded-full bg-brand px-8 py-4 text-base font-medium text-white transition-colors hover:bg-brand-text"
            >
              Start your project
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex min-h-[44px] items-center rounded-full border border-[#908E86] px-8 py-4 text-base transition-colors hover:border-ink"
            >
              View our work
            </Link>
          </div>
        </section>

        <section className="grid grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] gap-12 border-t border-line px-[6vw] py-[88px] min-[761px]:gap-16 min-[761px]:py-[120px]">
          <Reveal>
            <h2 className={h2}>Video Production in Boulder, CO</h2>
          </Reveal>
          <Reveal delay={150} className="flex max-w-[760px] flex-col gap-5 text-lg leading-[1.7] text-ink-2 min-[761px]:col-span-2">
            <p className="m-0">
              For over a decade, Earth Dog Films has been producing premium video content for
              organizations that have something meaningful to say. Based in Boulder, Colorado,
              we specialize in the kind of story-first filmmaking that resonates — documentary
              marketing videos, cinematic brand films, political campaign ads, and social media
              content that actually moves people.
            </p>
            <p className="m-0">
              Our work spans nonprofits, advocacy campaigns, educational institutions, businesses,
              and political candidates across the Boulder-Denver metro and beyond. Whether you need
              a 30-second broadcast spot or a 90-minute feature documentary, we bring the same
              depth of craft to every frame.
            </p>
            <p className="m-0">
              Our feature documentary <em>Fracking the System: Colorado's Oil and Gas Wars</em> —
              which follows a grassroots environmental justice fight in Colorado — is a testament
              to the kind of impact well-produced video can have. It's screened nationally and
              continues to drive conversation and action.
            </p>
          </Reveal>
        </section>

        <section className="bg-paper-2 px-[6vw] py-[88px] min-[761px]:py-[120px]">
          <Reveal>
            <h2 className={h2}>Boulder Video Production Services</h2>
          </Reveal>
          <p className="m-0 mt-5 max-w-[620px] text-xl leading-[1.55] text-ink-3">
            Full-service production from concept to delivery — in Boulder, Denver, and across Colorado.
          </p>
          <div className="mt-12 grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-x-10 gap-y-12 min-[761px]:mt-14">
            {services.map((service, i) => (
              <Reveal key={service.title} delay={(i % 3) * 110} className="border-t-2 border-ink pt-6">
                <div className="text-[13px] text-brand-text">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="m-0 mb-2.5 mt-3 font-display text-[32px] font-normal leading-[1.15]">{service.title}</h3>
                <p className="m-0 text-base leading-[1.6] text-ink-3">{service.description}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] gap-12 px-[6vw] py-[88px] min-[761px]:gap-16 min-[761px]:py-[120px]">
          <Reveal>
            <h2 className={h2}>Why Choose Earth Dog Films for Boulder Video Production?</h2>
          </Reveal>
          <Reveal delay={150} className="flex max-w-[760px] flex-col gap-6 text-lg leading-[1.7] text-ink-2 min-[761px]:col-span-2">
            <p className="m-0">
              <strong className="font-semibold text-ink">Story first, always.</strong> Most video production companies in Boulder focus
              on equipment and deliverables. We focus on story. Every project starts with understanding
              your audience, your message, and what emotional response you want to create. The gear
              follows.
            </p>
            <p className="m-0">
              <strong className="font-semibold text-ink">Documentary depth, commercial polish.</strong> Our roots are in documentary
              filmmaking — which means we know how to find the authentic moments that make audiences
              lean in. We bring that sensibility to brand films, campaign ads, and nonprofit videos,
              combined with the technical polish your project deserves.
            </p>
            <p className="m-0">
              <strong className="font-semibold text-ink">A decade of Colorado experience.</strong> We've shot across Boulder, Denver,
              the Front Range, and throughout Colorado — mountains, cities, grassroots campaigns,
              ecovillages, schools, courthouses, and everything in between. We know this state
              and the kinds of organizations doing meaningful work here.
            </p>
            <p className="m-0">
              <strong className="font-semibold text-ink">Mission-aligned partnerships.</strong> We're not interested in producing
              content we don't believe in. Our clients tend to be organizations fighting for
              something — environmental justice, education, community, democracy. That alignment
              shows up in the work.
            </p>
          </Reveal>
        </section>

        <section className="bg-paper-2 px-[6vw] py-[88px] min-[761px]:py-[120px]">
          <Reveal>
            <h2 className={h2}>Boulder Video Production — Frequently Asked Questions</h2>
          </Reveal>
          <div className="mt-12 min-[761px]:mt-14">
            {faqs.map((item) => (
              <Reveal
                key={item.q}
                className="grid grid-cols-1 gap-x-16 gap-y-3 border-t border-line-2 py-8 min-[761px]:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]"
              >
                <h3 className="m-0 font-display text-[28px] font-normal leading-[1.2]">{item.q}</h3>
                <p className="m-0 text-[17px] leading-[1.65] text-ink-2">{item.a}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <Reveal>
        <CTABand
          layout="center"
          title="Ready to Work with a Boulder Video Production Company?"
          text="Let's talk about your project. We work with organizations across Boulder, Denver, and Colorado who are ready to tell their story right."
          cta="Get in touch"
          secondary={{ label: "See our portfolio", to: "/portfolio" }}
        />
        </Reveal>
      </main>

      <Footer />
    </div>
  );
};

export default BoulderVideoProduction;
