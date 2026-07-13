
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowDown, Play } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ClientLogos from "@/components/ClientLogos";
import ServicesPreview from "@/components/ServicesPreview";
import LatestProjects from "@/components/LatestProjects";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Earth Dog Films?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Earth Dog Films is an award-winning video production company based in Boulder, Colorado, specializing in documentary marketing, brand films, and cinematic storytelling for mission-driven organizations, nonprofits, and changemakers across Colorado and nationally."
        }
      },
      {
        "@type": "Question",
        "name": "What types of video does Earth Dog Films produce?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Earth Dog Films produces documentary marketing videos, commercial brand films, political campaign ads, feature documentaries, promotional videos, music videos, aerial drone footage, and short-form social media content."
        }
      },
      {
        "@type": "Question",
        "name": "Where is Earth Dog Films located?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Earth Dog Films is based in Boulder, Colorado, and serves clients throughout the Denver metro area, statewide across Colorado, and nationally."
        }
      },
      {
        "@type": "Question",
        "name": "What makes Earth Dog Films different from other video production companies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Earth Dog Films takes a story-first approach, combining documentary depth with commercial polish. We specialize in working with purpose-driven brands, nonprofits, educators, and political campaigns to create emotionally resonant content that connects with audiences and drives real-world impact."
        }
      },
      {
        "@type": "Question",
        "name": "How do I hire Earth Dog Films for a video project?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can reach Earth Dog Films through the contact form at earthdogfilms.com/contact to discuss your project vision, timeline, and budget. We work with clients across Colorado and throughout the United States."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <SEO
        title="Earth Dog Films - Cinematic Storytelling for Brands and Movements"
        description="Earth Dog Films creates powerful, emotionally resonant video content for mission-driven brands, educators, and changemakers in Boulder, Colorado. Award-winning documentary and brand film production."
        canonical="/"
        structuredData={faqStructuredData}
      />
      <Navigation />
      <Hero />
      
      {/* Introduction Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg md:text-xl text-stone-700 leading-relaxed font-light">
            Earth Dog Films is an award-winning production company helping mission-driven brands, 
            educators, and changemakers connect with their audiences through powerful, emotionally 
            resonant video. From campaign films to founder stories, we bring your message to life 
            with depth, clarity, and heart.
          </p>
        </div>
      </section>

      <LatestProjects />

      {/* Brand Reel Section */}
      <section id="brand-reel" className="py-20 bg-stone-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6">Our Story in Motion</h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              See how we bring stories to life through our brand reel
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="aspect-video rounded-lg overflow-hidden">
              <iframe
                src="https://player.vimeo.com/video/787378175"
                className="w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
                title="Earth Dog Films Brand Reel"
              />
            </div>
          </div>
        </div>
      </section>

      <ServicesPreview />

      <ClientLogos />

      <Testimonials />

      {/* Call to Action */}
      <section className="py-20 bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Tell Your Story?</h2>
          <p className="text-xl text-stone-300 mb-10 leading-relaxed">
            Let's create something meaningful together
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">
              <Link to="/portfolio" onClick={scrollToTop}>Watch Our Work</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-stone-400 text-black bg-white hover:bg-gray-100 hover:text-black px-8 py-3">
              <Link to="/contact" onClick={scrollToTop}>Let's Tell Your Story</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
