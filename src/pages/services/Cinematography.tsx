
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";

const Cinematography = () => {
  const services = [
    {
      title: "Visual Storytelling",
      description: "Crafting compelling visual narratives that connect with your audience emotionally."
    },
    {
      title: "Camera Operation",
      description: "Expert camera work with professional cinema cameras and lenses."
    },
    {
      title: "Lighting Design",
      description: "Creating mood and atmosphere through thoughtful lighting techniques."
    },
    {
      title: "Composition & Framing",
      description: "Artistic framing and composition that elevates your story."
    }
  ];

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What equipment do you use for cinematography?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We use professional cinema cameras and high-quality lenses to capture stunning visuals. Our equipment selection is tailored to each project's specific needs and creative vision."
        }
      },
      {
        "@type": "Question",
        "name": "What makes your cinematography different?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We combine visual storytelling expertise with technical precision. Every frame is carefully composed to serve the narrative, using thoughtful lighting design and artistic framing to create emotional impact."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <SEO
        title="Cinematography Services - Professional Video Boulder, CO"
        description="Expert cinematography services in Boulder, Colorado. Visual storytelling, professional camera operation, lighting design, and artistic composition for brand films and documentaries."
        canonical="/services/cinematography"
        structuredData={faqStructuredData}
      />
      <Navigation />
      <Breadcrumbs />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Cinematography</h1>
          <p className="text-xl text-stone-300 leading-relaxed">
            Cinematic excellence in every frame. We bring visual artistry and technical precision to every project.
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
                  <h3 className="text-2xl font-bold text-stone-900 mb-4">{service.title}</h3>
                  <p className="text-stone-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Cinematic Excellence?</h2>
          <p className="text-xl text-stone-300 mb-10">
            Let's create stunning visuals for your project
          </p>
          <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">
            <Link to="/contact">Get Started</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cinematography;
