
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Instagram, Facebook, ChevronDown } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show navbar when scrolling up, hide when scrolling down
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
        setIsOpen(false); // Close mobile menu when hiding navbar
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const servicesMenuItems = [
    { name: 'Production', path: '/services/production' },
    { name: 'Cinematography', path: '/services/cinematography' },
    { name: 'Post-Production', path: '/services/post-production' },
    { name: 'Directing', path: '/services/directing' },
    { name: 'Aerial & Drone', path: '/services/aerial-drone' },
    { name: 'Consulting', path: '/services/consulting' },
  ];

  const leftNavItems = [
    { name: 'Portfolio', path: '/portfolio' },
  ];

  const rightNavItems = [
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
  ];

  // Custom Google Icon Component
  const GoogleIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
  );

  const socialLinks = [
    { name: 'Google', icon: GoogleIcon, url: 'https://share.google/MGW9YHohcmZWKxR7Q' },
    { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/earthdogfilms/' },
    { name: 'Facebook', icon: Facebook, url: 'https://www.facebook.com/earthdogfilms/' },
  ];

  return (
    <nav className={`bg-black/20 backdrop-blur-md fixed w-full z-50 border-b border-white/10 transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          {/* Left: Social Media Icons */}
          <div className="hidden lg:flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-red-400 transition-colors"
                  aria-label={social.name}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>

          {/* Center: Navigation Items with Logo */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className={`text-white hover:text-red-400 transition-colors font-medium flex items-center gap-1 ${
                  location.pathname.startsWith('/services') ? 'text-red-400' : ''
                }`}
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-0 w-56 bg-stone-900 border border-white/10 rounded-lg shadow-xl overflow-hidden">
                  {servicesMenuItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={scrollToTop}
                      className="block px-6 py-3 text-white hover:bg-red-600 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {leftNavItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={scrollToTop}
                className={`text-white hover:text-red-400 transition-colors font-medium ${
                  location.pathname === item.path ? 'text-red-400' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}

            <Link to="/" className="mx-4 hover:opacity-80 transition-opacity">
              <img
                src="/lovable-uploads/earth-dog-films-logo.png"
                alt="Earth Dog Films Logo"
                className="h-12 w-12"
              />
            </Link>

            {rightNavItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={scrollToTop}
                className={`text-white hover:text-red-400 transition-colors font-medium ${
                  location.pathname === item.path ? 'text-red-400' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right: Contact Button */}
          <div className="hidden lg:block">
            <Button asChild className="bg-red-600 hover:bg-red-700 text-white">
              <Link to="/contact" onClick={scrollToTop}>Contact</Link>
            </Button>
          </div>

          {/* Mobile: Logo and Menu Button */}
          <div className="lg:hidden flex items-center justify-between w-full">
            <Link to="/" className="hover:opacity-80 transition-opacity">
              <img
                src="/lovable-uploads/earth-dog-films-logo.png"
                alt="Earth Dog Films Logo"
                className="h-10 w-10"
              />
            </Link>
            <button
              className="p-2 text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-white/10">
            {/* Services Expandable Menu */}
            <div>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="w-full flex items-center justify-between py-3 text-white hover:text-red-400 transition-colors"
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="pl-4 pb-2">
                  {servicesMenuItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className="block py-2 text-stone-300 hover:text-red-400 transition-colors"
                      onClick={() => {
                        setIsOpen(false);
                        setServicesOpen(false);
                        scrollToTop();
                      }}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {[...leftNavItems, ...rightNavItems].map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block py-3 text-white hover:text-red-400 transition-colors"
                onClick={() => {
                  setIsOpen(false);
                  scrollToTop();
                }}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild className="w-full mt-4 bg-red-600 hover:bg-red-700 text-white">
              <Link to="/contact" onClick={() => {
                setIsOpen(false);
                scrollToTop();
              }}>Contact</Link>
            </Button>
            <div className="flex items-center justify-center gap-6 mt-6 pt-4 border-t border-white/10">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-red-400 transition-colors"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
