
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Production = () => {
  const services = [
    {
      title: "Pre-Production Planning",
      description: "Strategic planning, location scouting, and creative development to ensure your vision comes to life."
    },
    {
      title: "On-Site Production",
      description: "Professional crew, equipment, and coordination for seamless filming."
    },
    {
      title: "Production Management",
      description: "End-to-end project management keeping everything on schedule and on budget."
    },
    {
      title: "Location Management",
      description: "Securing permits, coordinating logistics, and managing all on-location needs."
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Production</h1>
          <p className="text-xl text-stone-300 leading-relaxed">
            Full-service production from concept to completion. We handle every detail so you can focus on your story.
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Production?</h2>
          <p className="text-xl text-stone-300 mb-10">
            Let's discuss your project and bring your vision to life
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

export default Production;
