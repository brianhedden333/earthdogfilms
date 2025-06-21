
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, ExternalLink } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const OurWork = () => {
  const commercialWork = [
    {
      title: "Mission-Driven Brand Story",
      client: "Impact Collective",
      description: "A founder's journey building sustainable solutions",
      thumbnail: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&h=450"
    },
    {
      title: "Testimonial Series",
      client: "Sustainable Futures",
      description: "Real voices sharing transformation stories",
      thumbnail: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&h=450"
    },
    {
      title: "Campaign Launch",
      client: "Change Makers Co",
      description: "Introducing a movement for social change",
      thumbnail: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=800&h=450"
    }
  ];

  const documentaryWork = [
    {
      title: "Voices of Change",
      description: "A short documentary on community activism",
      thumbnail: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&h=450"
    },
    {
      title: "The River's Story",
      description: "Environmental advocacy through personal narrative",
      thumbnail: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=800&h=450"
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-stone-900 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-serif mb-6">Our Work</h1>
          <p className="text-xl text-stone-300 max-w-3xl mx-auto leading-relaxed">
            We collaborate with organizations, businesses, and causes to tell stories that matter. 
            Our work lives at the intersection of authenticity and visual craft.
          </p>
        </div>
      </section>

      {/* Commercial & Brand Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-6">Commercial & Brand</h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto">
              We help purpose-led companies and entrepreneurs tell their stories—through brand films, 
              testimonials, and human-centered promotional content.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {commercialWork.map((project, index) => (
              <Card key={index} className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-none overflow-hidden">
                <div className="relative">
                  <img 
                    src={project.thumbnail} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center">
                      <Play className="w-6 h-6 text-white ml-1" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-serif text-stone-900 mb-2">{project.title}</h3>
                  <p className="text-amber-700 font-medium text-sm mb-3">{project.client}</p>
                  <p className="text-stone-600 leading-relaxed">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Documentary & Advocacy Section */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-6">Documentary & Advocacy</h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto">
              Our roots are in documentary. We produce short films and campaign videos that inform, 
              mobilize, and deepen impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {documentaryWork.map((project, index) => (
              <Card key={index} className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-none overflow-hidden">
                <div className="relative">
                  <img 
                    src={project.thumbnail} 
                    alt={project.title}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center">
                      <Play className="w-6 h-6 text-white ml-1" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-serif text-stone-900 mb-3">{project.title}</h3>
                  <p className="text-stone-600 leading-relaxed">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">Love What You See?</h2>
          <p className="text-xl text-stone-300 mb-10">
            Let's create something meaningful for your organization
          </p>
          <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3">
            <a href="/contact">Start Your Project</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurWork;
