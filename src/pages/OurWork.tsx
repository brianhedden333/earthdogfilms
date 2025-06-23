
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import VideoLightbox from "@/components/VideoLightbox";

const OurWork = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<{
    vimeoId?: string;
    youtubeId?: string;
    title: string;
  } | null>(null);

  const commercialWork = [
    {
      title: "QuoteThat",
      description: "A humorous commercial for a mobile app business based in Boulder, Colorado",
      vimeoId: "251723265"
    },
    {
      title: "Transformative Solutions",
      description: "A promotional video for a business coaching company based in Colorado.",
      vimeoId: "270209806"
    },
    {
      title: "California Center for Sustainable Energy",
      description: "An informative video about a sustainability non-profit based in San Diego, California.",
      vimeoId: "51964106"
    },
    {
      title: "VMIX Media",
      description: "An explainer video for a white-label video distribution startup based in Del Mar, California.",
      vimeoId: "252373163"
    },
    {
      title: "Patchwork School",
      description: "A website video for an innovative school based in Louisville, Colorado.",
      vimeoId: "363362257"
    },
    {
      title: "Sacred Sons",
      description: "A promotional video for a men's community and personal transformation course.",
      vimeoId: "344372805"
    }
  ];

  const documentaryMarketingWork = [
    {
      title: "Elephant Collective",
      description: "A portrait of an musician incubation program in Boulder, Colorado.",
      vimeoId: "379624699"
    },
    {
      title: "Earthaven Ecovillage",
      description: "An overview of a permaculure-based ecovillage outside of Asheville, North Carolina.",
      youtubeId: "ybFE15LM1h8"
    },
    {
      title: "Advocates for Injured Athletes",
      description: "The origin story of a youth sports safety non-profit based in San Diego, California.",
      vimeoId: "28742880"
    },
    {
      title: "The Blind Cafe",
      description: "A unique dining experience in darkness.",
      vimeoId: "363364357"
    },
    {
      title: "The Linkery's Ethan and Steph",
      description: "The story of cask beer at a farm-to-table restaurant in San Diego, California.",
      vimeoId: "17943030"
    },
    {
      title: "The Linkery's Max",
      description: "A chef's passion for house-made everything at a farm-to-table restaurant in San Diego, California.",
      vimeoId: "17577920"
    },
    {
      title: "The Linkery's Ian",
      description: "Hand-made bread and community connection at a farm-to-table restaurant in San Diego, California",
      vimeoId: "17988223"
    },
    {
      title: "Zone 7 Winter",
      description: "A local food distribution company overcomes the challenges of winter in New Jersey.",
      vimeoId: "19838162"
    },
    {
      title: "Zone 7 Spring",
      description: "A local food distribution company celebrates spring farming and renewal in New Jersey.",
      vimeoId: "118621660"
    }
  ];

  const documentaryWork = [
    {
      title: "Fracking the System: Colorado's Oil and Gas Wars",
      description: <p> When a mega-fracking site gets moved from a White neighborhood to a BIPOC neighborhood, a mother fights to try and stop it. She joins the state-wide effort to change the law, but the powerful oil and gas industry fights back with lawsuits, harassment, sabotage, and $50 million. 
        
        <br> Watch the film here:  
 <a href="https://www.frackingthesystem.com">FrackingTheSystem.com</a> </br> </p>,
      youtubeId: "T-azhfhG0H0"
    }
  ];

  const getVideoThumbnail = (vimeoId?: string, youtubeId?: string) => {
    if (vimeoId) {
      return `https://vumbnail.com/${vimeoId}.jpg`;
    }
    if (youtubeId) {
      return `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;
    }
    return "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&h=450";
  };

  const handleVideoClick = (project: { title: string; vimeoId?: string; youtubeId?: string }) => {
    setSelectedVideo({
      vimeoId: project.vimeoId,
      youtubeId: project.youtubeId,
      title: project.title
    });
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-stone-900 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-sans mb-6">Our Work</h1>
          <p className="text-xl text-stone-300 max-w-3xl mx-auto leading-relaxed">
            We collaborate with organizations, businesses, and causes to tell stories that matter. 
            Our work lives at the intersection of authenticity and visual craft.
          </p>
        </div>
      </section>

      {/* Commercial & Brand Films Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-sans text-stone-900 mb-6">Commercial & Brand Films</h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto">
              We help purpose-led companies and entrepreneurs tell their stories—through brand films, 
              testimonials, and human-centered promotional content.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {commercialWork.map((project, index) => (
              <Card key={index} className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-none overflow-hidden">
                <div onClick={() => handleVideoClick(project)}>
                  <div className="relative">
                    <img 
                      src={getVideoThumbnail(project.vimeoId)} 
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                        <Play className="w-6 h-6 text-white ml-1" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-sans text-stone-900 mb-3">{project.title}</h3>
                    <p className="text-stone-600 leading-relaxed">{project.description}</p>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Documentary Marketing Section */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-sans text-stone-900 mb-6">Documentary Marketing</h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto">
              Marketing content that brings documentary stories to life and connects with audiences 
              through authentic storytelling.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {documentaryMarketingWork.map((project, index) => (
              <Card key={index} className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-none overflow-hidden">
                <div onClick={() => handleVideoClick(project)}>
                  <div className="relative">
                    <img 
                      src={getVideoThumbnail(project.vimeoId, project.youtubeId)} 
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                        <Play className="w-6 h-6 text-white ml-1" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-sans text-stone-900 mb-3">{project.title}</h3>
                    <p className="text-stone-600 leading-relaxed">{project.description}</p>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Documentary Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-sans text-stone-900 mb-6">Documentary</h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto">
              Our roots are in documentary. We produce films that inform, 
              mobilize, and deepen impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {documentaryWork.map((project, index) => (
              <Card key={index} className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-none overflow-hidden">
                <div onClick={() => handleVideoClick(project)}>
                  <div className="relative">
                    <img 
                      src={getVideoThumbnail(undefined, project.youtubeId)} 
                      alt={project.title}
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                        <Play className="w-6 h-6 text-white ml-1" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-sans text-stone-900 mb-3">{project.title}</h3>
                    <p className="text-stone-600 leading-relaxed">{project.description}</p>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-sans mb-6">Love What You See?</h2>
          <p className="text-xl text-stone-300 mb-10">
            Let's create something meaningful for your organization
          </p>
          <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">
            <Link to="/contact">Start Your Project</Link>
          </Button>
        </div>
      </section>

      <VideoLightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        vimeoId={selectedVideo?.vimeoId}
        youtubeId={selectedVideo?.youtubeId}
        title={selectedVideo?.title || ""}
      />

      <Footer />
    </div>
  );
};

export default OurWork;
