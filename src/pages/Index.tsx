
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
      <section className="py-20 bg-stone-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-6">Our Story in Motion</h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              See how we bring stories to life through our brand reel
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="aspect-video bg-stone-800 rounded-lg flex items-center justify-center group cursor-pointer hover:bg-stone-700 transition-colors duration-300">
              <div className="text-center">
                <div className="w-20 h-20 bg-amber-600 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-amber-500 transition-colors duration-300">
                  <Play className="w-8 h-8 text-white ml-1" />
                </div>
                <p className="text-white text-lg">Watch Our Brand Reel</p>
                <p className="text-stone-300 text-sm mt-2">60 seconds of cinematic storytelling</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-4">Stories That Resonate</h2>
            <p className="text-lg text-stone-600">What our collaborators say</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-none shadow-lg bg-white">
              <CardContent className="p-8">
                <p className="text-stone-700 italic mb-6 leading-relaxed">
                  "Earth Dog Films captured the heart of our mission in a way that moved our entire community. 
                  Their storytelling approach is both authentic and deeply compelling."
                </p>
                <div className="text-sm text-stone-500">
                  <p className="font-medium">Sarah Chen</p>
                  <p>Founder, Impact Collective</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg bg-white">
              <CardContent className="p-8">
                <p className="text-stone-700 italic mb-6 leading-relaxed">
                  "Working with Brian and his team felt like a true collaboration. They understood our 
                  story before we even finished telling it."
                </p>
                <div className="text-sm text-stone-500">
                  <p className="font-medium">Marcus Thompson</p>
                  <p>Director, Sustainable Futures</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <ClientLogos />

      {/* Call to Action */}
      <section className="py-20 bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">Ready to Tell Your Story?</h2>
          <p className="text-xl text-stone-300 mb-10 leading-relaxed">
            Let's create something meaningful together
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3">
              <Link to="/our-work">🎥 Watch Our Work</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-stone-400 text-stone-300 hover:bg-stone-800 px-8 py-3">
              <Link to="/contact">📩 Let's Tell Your Story</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
