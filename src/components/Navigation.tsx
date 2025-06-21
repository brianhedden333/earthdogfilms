
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Our Work', path: '/our-work' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-sm fixed w-full z-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img 
              src="/lovable-uploads/82b1cca1-818a-4a01-8231-815d385e98af.png" 
              alt="Earth Dog Films Logo" 
              className="h-10 w-10"
            />
            <span className="text-2xl font-serif text-stone-900">Earth Dog Films</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-stone-700 hover:text-amber-700 transition-colors font-light ${
                  location.pathname === item.path ? 'text-amber-700' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white">
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-stone-200">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block py-3 text-stone-700 hover:text-amber-700 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild className="w-full mt-4 bg-amber-600 hover:bg-amber-700 text-white">
              <Link to="/contact" onClick={() => setIsOpen(false)}>Get Started</Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
