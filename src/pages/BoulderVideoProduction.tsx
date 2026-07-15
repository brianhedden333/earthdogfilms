import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";

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

  return (
    <div className="min-h-screen bg-stone-50">
      <SEO
        title="Boulder Video Production Company | Earth Dog Films"
        description="Earth Dog Films is a Boulder, Colorado video production company specializing in documentary marketing, brand films, political campaign videos, and cinematic storytelling. Serving Boulder, Denver, and Colorado statewide."
        canonical="/boulder-video-production"
        structuredData={structuredData}
      />
      <Navigation />
      <Breadcrumbs />

      {/* Hero */}
      <section className="pt-24 pb-16 bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Boulder Video Production</h1>
          <p className="text-xl text-stone-300 max-w-3xl mx-auto leading-relaxed">
            Earth Dog Films is a Boulder-based video production company crafting cinematic,
            documentary-style content for mission-driven brands, nonprofits, and political campaigns
            across Colorado and the United States.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8">
              <Link to="/contact">Start Your Project</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-black bg-white hover:bg-gray-100 px-8">
              <Link to="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6 text-center">
            Video Production in Boulder, CO
          </h2>
          <div className="prose prose-lg mx-auto text-stone-700 leading-relaxed space-y-4">
            <p>
              For over a decade, Earth Dog Films has been producing premium video content for
              organizations that have something meaningful to say. Based in Boulder, Colorado,
              we specialize in the kind of story-first filmmaking that resonates — documentary
              marketing videos, cinematic brand films, political campaign ads, and social media
              content that actually moves people.
            </p>
            <p>
              Our work spans nonprofits, advocacy campaigns, educational institutions, businesses,
              and political candidates across the Boulder-Denver metro and beyond. Whether you need
              a 30-second broadcast spot or a 90-minute feature documentary, we bring the same
              depth of craft to every frame.
            </p>
            <p>
              Our feature documentary <em>Fracking the System: Colorado's Oil and Gas Wars</em> —
              which follows a grassroots environmental justice fight in Colorado — is a testament
              to the kind of impact well-produced video can have. It's screened nationally and
              continues to drive conversation and action.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              Boulder Video Production Services
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Full-service production from concept to delivery — in Boulder, Denver, and across Colorado.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div key={i} className="bg-white rounded-lg p-8 shadow-sm">
                <h3 className="text-xl font-bold text-stone-900 mb-3">{service.title}</h3>
                <p className="text-stone-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why EDF */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-10 text-center">
            Why Choose Earth Dog Films for Boulder Video Production?
          </h2>
          <div className="space-y-6 text-stone-700 leading-relaxed text-lg">
            <p>
              <strong>Story first, always.</strong> Most video production companies in Boulder focus
              on equipment and deliverables. We focus on story. Every project starts with understanding
              your audience, your message, and what emotional response you want to create. The gear
              follows.
            </p>
            <p>
              <strong>Documentary depth, commercial polish.</strong> Our roots are in documentary
              filmmaking — which means we know how to find the authentic moments that make audiences
              lean in. We bring that sensibility to brand films, campaign ads, and nonprofit videos,
              combined with the technical polish your project deserves.
            </p>
            <p>
              <strong>A decade of Colorado experience.</strong> We've shot across Boulder, Denver,
              the Front Range, and throughout Colorado — mountains, cities, grassroots campaigns,
              ecovillages, schools, courthouses, and everything in between. We know this state
              and the kinds of organizations doing meaningful work here.
            </p>
            <p>
              <strong>Mission-aligned partnerships.</strong> We're not interested in producing
              content we don't believe in. Our clients tend to be organizations fighting for
              something — environmental justice, education, community, democracy. That alignment
              shows up in the work.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-12 text-center">
            Boulder Video Production — Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            {[
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
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-lg p-8 shadow-sm">
                <h3 className="text-lg font-bold text-stone-900 mb-3">{item.q}</h3>
                <p className="text-stone-600 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Work with a Boulder Video Production Company?
          </h2>
          <p className="text-xl text-stone-300 mb-10 leading-relaxed">
            Let's talk about your project. We work with organizations across Boulder, Denver,
            and Colorado who are ready to tell their story right.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8">
              <Link to="/contact">Get in Touch</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-black bg-white hover:bg-gray-100 px-8">
              <Link to="/portfolio">See Our Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BoulderVideoProduction;
