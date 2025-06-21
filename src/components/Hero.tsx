
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-stone-900 via-stone-800 to-amber-900">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center px-6">
        <h1 className="text-5xl md:text-7xl font-serif text-white mb-8 leading-tight">
          Cinematic storytelling
          <span className="block text-amber-400">for brands and movements</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-stone-200 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
          We create powerful, emotionally resonant video content that connects 
          mission-driven organizations with their audiences
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg">
            <Link to="/our-work">🎥 Watch Our Reel</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-stone-900 px-8 py-4 text-lg">
            <Link to="/contact">📩 Let's Tell Your Story</Link>
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ArrowDown className="w-6 h-6" />
      </div>
    </section>
  );
};

export default Hero;
