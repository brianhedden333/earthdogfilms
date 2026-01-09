
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";

const PostProduction = () => {
  const services = [
    {
      title: "Video Editing",
      description: "Thoughtful editing that shapes raw footage into compelling narratives."
    },
    {
      title: "Color Grading",
      description: "Professional color correction and grading to enhance the visual tone and mood."
    },
    {
      title: "Sound Design & Mixing",
      description: "Audio post-production including mixing, sound effects, and music selection."
    },
    {
      title: "Motion Graphics",
      description: "Custom graphics, titles, and animation to enhance your story."
    }
  ];

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is included in post-production services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our post-production services include video editing, color grading, sound design and mixing, and motion graphics. We refine raw footage into polished, compelling narratives."
        }
      },
      {
        "@type": "Question",
        "name": "How many revision rounds are included?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We typically include multiple revision rounds to ensure you're completely satisfied with the final product. The exact number depends on your project scope and is outlined in our proposal."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <SEO
        title="Post-Production Services - Video Editing Boulder, CO"
        description="Professional post-production services in Boulder, Colorado. Video editing, color grading, sound design, mixing, and motion graphics to bring your story to life."
        canonical="/services/post-production"
        structuredData={faqStructuredData}
      />
      <Navigation />
      <Breadcrumbs />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Post-Production</h1>
          <p className="text-xl text-stone-300 leading-relaxed">
            Where the magic happens. We refine and polish your footage into a finished story that resonates.
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Polish Your Project?</h2>
          <p className="text-xl text-stone-300 mb-10">
            Let's bring your footage to its full potential
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

export default PostProduction;
