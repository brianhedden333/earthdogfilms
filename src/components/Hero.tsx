
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const Hero = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== 'https://player.vimeo.com') return;
      try {
        const data = typeof event.data === 'string' ? JSON.parse(event.data) : event.data;
        if (data.event === 'ready') {
          iframeRef.current?.contentWindow?.postMessage(
            JSON.stringify({ method: 'addEventListener', value: 'play' }),
            'https://player.vimeo.com'
          );
        }
        if (data.event === 'play') {
          setVideoLoaded(true);
          window.removeEventListener('message', handleMessage);
        }
      } catch {}
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  const scrollToBrandReel = () => {
    const brandReelSection = document.getElementById('brand-reel');
    if (brandReelSection) {
      brandReelSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video (bottom layer) */}
      <div className="absolute inset-0 w-full h-full">
        <iframe
          ref={iframeRef}
          src="https://player.vimeo.com/video/336916761?autoplay=1&loop=1&muted=1&background=1&controls=0"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover"
          style={{
            width: '100vw',
            height: '56.25vw',
            minHeight: '100vh',
            minWidth: '177.78vh',
          }}
          allow="autoplay; fullscreen"
          title="Earth Dog Films Hero Video"
        />
      </div>

      {/* Poster image — sits above video, fades out to reveal it */}
      <div
        className="absolute inset-0 w-full h-full transition-opacity duration-1000 pointer-events-none"
        style={{ opacity: videoLoaded ? 0 : 1 }}
      >
        <picture>
          <source srcSet="/lovable-uploads/hero-poster.webp" type="image/webp" />
          <img
            src="/lovable-uploads/hero-poster.png"
            alt=""
            className="w-full h-full object-cover"
            fetchPriority="high"
          />
        </picture>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Logo - Positioned Higher */}
      <div className="absolute inset-0 flex items-start justify-center pt-32 md:pt-40 lg:pt-48 z-10">
        <img
          src="/lovable-uploads/earth-dog-films-logo.png"
          alt="Earth Dog Films Logo"
          className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain"
        />
      </div>

      {/* Content at Bottom */}
      <div className="absolute bottom-12 left-0 right-0 z-10 text-center px-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          Cinematic storytelling
          <span className="block text-red-500">for brands and movements</span>
        </h1>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
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
    </section>
  );
};

export default Hero;
