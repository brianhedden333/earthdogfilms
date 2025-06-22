
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowDown, Play } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ClientLogos from "@/components/ClientLogos";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navigation />
      <Hero />
      
      {/* Introduction Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg md:text-xl text-stone-700 leading-relaxed font-light">
            Earth Dog Films is a story-first production company helping mission-driven brands, 
            educators, and changemakers connect with their audiences through powerful, emotionally 
            resonant video. From campaign films to founder stories, we bring your message to life 
            with depth, clarity, and heart.
          </p>
        </div>
      </section>

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
                src="https://player.vimeo.com/video/336916761"
                className="w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
                title="Earth Dog Films Brand Reel"
              />
            </div>
          </div>
        </div>
      </section>

      <ClientLogos />

      {/* Call to Action */}
      <section className="py-20 bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Tell Your Story?</h2>
          <p className="text-xl text-stone-300 mb-10 leading-relaxed">
            Let's create something meaningful together
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">
              <Link to="/our-work">Watch Our Work</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-stone-400 text-black bg-white hover:bg-gray-100 hover:text-black px-8 py-3">
              <Link to="/contact">Let's Tell Your Story</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
