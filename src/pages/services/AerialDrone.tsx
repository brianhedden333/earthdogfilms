
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";

const AerialDrone = () => {
  const services = [
    {
      title: "Aerial Cinematography",
      description: "Stunning aerial shots that add scale and perspective to your story."
    },
    {
      title: "Location Surveys",
      description: "Aerial reconnaissance and site surveys for planning and documentation."
    },
    {
      title: "Real Estate & Property",
      description: "Showcase properties and landscapes from unique aerial perspectives."
    },
    {
      title: "Licensed FAA Pilots",
      description: "Fully certified and insured commercial drone operations."
    }
  ];

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Are your drone pilots FAA certified?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, all our drone pilots are FAA Part 107 certified and fully insured for commercial drone operations. We follow all regulations and safety protocols."
        }
      },
      {
        "@type": "Question",
        "name": "What types of aerial shots can you capture?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We can capture a wide range of aerial shots including sweeping landscape reveals, property and real estate footage, location surveys, tracking shots, and dramatic establishing shots that add scale and perspective to your story."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <SEO
        title="Aerial Drone Cinematography - Boulder, Colorado"
        description="Professional aerial drone cinematography in Boulder, Colorado. FAA certified pilots, stunning aerial shots, real estate footage, and location surveys for film and video production."
        canonical="/services/aerial-drone"
        structuredData={faqStructuredData}
      />
      <Navigation />
      <Breadcrumbs />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Aerial & Drone</h1>
          <p className="text-xl text-stone-300 leading-relaxed">
            Capture breathtaking perspectives from above with professional drone cinematography.
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Take Flight?</h2>
          <p className="text-xl text-stone-300 mb-10">
            Let's add stunning aerial footage to your project
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

export default AerialDrone;
