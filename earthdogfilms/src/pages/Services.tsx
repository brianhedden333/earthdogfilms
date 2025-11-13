
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Services = () => {
  const services = [
    {
      title: "Brand Films",
      description: "Founder stories, origin narratives, and value-driven content that communicates who you are—and why you matter.",
      features: ["Founder interviews", "Company culture videos", "Mission-driven narratives", "Brand storytelling"]
    },
    {
      title: "Testimonials & Case Studies",
      description: "Real voices, real impact. We help your community tell your story for you.",
      features: ["Client testimonials", "Impact stories", "Case study videos", "Community voices"]
    },
    {
      title: "Campaign & Awareness Videos",
      description: "Video content for political, educational, or advocacy campaigns—designed to inform, inspire, and activate.",
      features: ["Political campaigns", "Educational content", "Advocacy films", "Social awareness videos"]
    },
    {
      title: "Documentary Shorts",
      description: "Meaningful stories, beautifully told. We partner with nonprofits, social movements, and educators to produce short-form documentary work.",
      features: ["Short documentaries", "Social issue films", "Educational documentaries", "Nonprofit storytelling"]
    },
    {
      title: "Ongoing Collaborations",
      description: "Looking to tell stories across a season or campaign? We offer flexible packages for ongoing content creation and strategic storytelling.",
      features: ["Content series", "Seasonal campaigns", "Multi-part narratives", "Long-term partnerships"]
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      <Navigation />
      
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
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-none shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-stone-900 mb-4">{service.title}</h3>
                      <p className="text-stone-600 leading-relaxed mb-6">{service.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-stone-500">
                        <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
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
