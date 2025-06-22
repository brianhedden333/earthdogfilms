
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Earth Dog Films</h3>
            <p className="text-stone-400 leading-relaxed">
              Cinematic storytelling for brands and movements. 
              Creating emotionally resonant video content that matters.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Navigation</h4>
            <div className="space-y-2">
              <Link to="/our-work" className="block text-stone-400 hover:text-white transition-colors">Our Work</Link>
              <Link to="/about" className="block text-stone-400 hover:text-white transition-colors">About</Link>
              <Link to="/services" className="block text-stone-400 hover:text-white transition-colors">Services</Link>
              <Link to="/contact" className="block text-stone-400 hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
          
          <div>
            <Link to="/contact" className="text-lg font-medium hover:text-red-400 transition-colors">Connect</Link>
          </div>
        </div>
        
        <div className="border-t border-stone-700 mt-12 pt-8 text-center">
          <p className="text-stone-500">
            © 2024 Earth Dog Films. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
