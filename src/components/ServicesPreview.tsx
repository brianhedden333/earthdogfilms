import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Film, Video, Scissors, Plane } from "lucide-react";

const ServicesPreview = () => {
  const services = [
    {
      title: "Documentary Production",
      description: "Award-winning documentaries that inform, mobilize, and create lasting impact on the issues that matter most.",
      icon: Film,
      path: "/services/production",
      color: "text-red-600"
    },
    {
      title: "Commercial & Brand Films",
      description: "Compelling brand stories and campaigns that connect purpose-driven organizations with their audiences.",
      icon: Video,
      path: "/services/production",
      color: "text-red-600"
    },
    {
      title: "Post-Production",
      description: "Expert editing, color grading, and finishing that elevates your story to its fullest potential.",
      icon: Scissors,
      path: "/services/post-production",
      color: "text-red-600"
    },
    {
      title: "Aerial & Drone",
      description: "Stunning aerial cinematography that adds breathtaking perspective and production value to your project.",
      icon: Plane,
      path: "/services/aerial-drone",
      color: "text-red-600"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6">Our Services</h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            From concept to completion, we bring expertise to every project
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link
                key={index}
                to={service.path}
                onClick={scrollToTop}
                className="group"
              >
                <Card className="h-full border-none shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <div className="mb-6 flex justify-center">
                      <div className="p-4 bg-red-50 rounded-full">
                        <Icon className={`w-8 h-8 ${service.color}`} />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-stone-900 mb-3">{service.title}</h3>
                    <p className="text-stone-600 leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
