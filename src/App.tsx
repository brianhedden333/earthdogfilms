
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Index from "./pages/Index";
import Portfolio from "./pages/Portfolio";
import Project from "./pages/Project";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import BoulderVideoProduction from "./pages/BoulderVideoProduction";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// New pages start at the top; hash links (e.g. /#s-services) are handled by the page itself.
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
};

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:slug" element={<Project />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            {/* The old per-service pages are now sections of /services. */}
            <Route path="/services/production" element={<Navigate to="/services#documentary" replace />} />
            <Route path="/services/post-production" element={<Navigate to="/services#post-production" replace />} />
            <Route path="/services/aerial-drone" element={<Navigate to="/services#aerial-drone" replace />} />
            <Route path="/services/*" element={<Navigate to="/services" replace />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/boulder-video-production" element={<BoulderVideoProduction />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
