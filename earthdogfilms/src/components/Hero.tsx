
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const scrollToBrandReel = () => {
    const brandReelSection = document.getElementById('brand-reel');
    if (brandReelSection) {
      brandReelSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <iframe
          src="https://player.vimeo.com/video/336916761?autoplay=1&loop=1&muted=1&background=1&controls=0"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover"
          style={{ 
            width: '100vw',
            height: '56.25vw', // 16:9 aspect ratio
            minHeight: '100vh',
            minWidth: '177.78vh', // 16:9 aspect ratio
          }}
          allow="autoplay; fullscreen"
          title="Earth Dog Films Hero Video"
        />
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center px-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white mb-8 leading-tight">
          Cinematic storytelling
          <span className="block text-red-500">for brands and movements</span>
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-stone-200 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
          We create powerful, emotionally resonant video content that connects 
          mission-driven organizations with their audiences
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <Button 
            onClick={scrollToBrandReel}
            size="lg" 
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg"
          >
            Watch Our Reel
          </Button>
          <Button asChild variant="outline" size="lg" className="border-white text-black bg-white hover:bg-gray-100 hover:text-black px-8 py-4 text-lg">
            <Link to="/contact">Let's Tell Your Story</Link>
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
