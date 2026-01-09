
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";

const Services = () => {
  const services = [
    {
      title: "Production",
      description: "Full-service production from concept to completion. We handle every detail so you can focus on your story.",
      path: "/services/production"
    },
    {
      title: "Cinematography",
      description: "Cinematic excellence in every frame. We bring visual artistry and technical precision to every project.",
      path: "/services/cinematography"
    },
    {
      title: "Post-Production",
      description: "Where the magic happens. We refine and polish your footage into a finished story that resonates.",
      path: "/services/post-production"
    },
    {
      title: "Directing",
      description: "Guiding your story from vision to reality with creative leadership and emotional intelligence.",
      path: "/services/directing"
    },
    {
      title: "Aerial & Drone",
      description: "Capture breathtaking perspectives from above with professional drone cinematography.",
      path: "/services/aerial-drone"
    },
    {
      title: "Consulting",
      description: "Expert guidance to help you navigate the filmmaking process and make strategic decisions.",
      path: "/services/consulting"
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      <SEO
        title="Video Production Services - Boulder, Colorado"
        description="Full-service video production in Boulder, Colorado. Services include production, cinematography, post-production, directing, aerial drone, and consulting for brands and documentaries."
        canonical="/services"
      />
      <Navigation />
      <Breadcrumbs />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Services</h1>
          <p className="text-xl text-stone-300 leading-relaxed">
            We offer full-service video production grounded in story, strategy, and emotional clarity.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-none shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 group cursor-pointer">
                <a href={service.path}>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-stone-900 mb-4 group-hover:text-red-600 transition-colors">{service.title}</h3>
                    <p className="text-stone-600 leading-relaxed mb-6">{service.description}</p>
                    <Button className="bg-red-600 hover:bg-red-700 text-white">
                      Learn More
                    </Button>
                  </CardContent>
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6">Our Process</h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              From concept to final cut, we collaborate closely with you at every step
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "We dive deep into your story, values, and goals" },
              { step: "02", title: "Strategy", description: "Together we craft a narrative approach that resonates" },
              { step: "03", title: "Production", description: "Professional filming with attention to every detail" },
              { step: "04", title: "Post-Production", description: "Thoughtful editing that brings your story to life" }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  {phase.step}
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-3">{phase.title}</h3>
                <p className="text-stone-600 leading-relaxed">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-stone-300 mb-10">
            Let's talk about how we can bring your story to life through film
          </p>
          <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">
            <a href="/contact">Start Your Project</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
