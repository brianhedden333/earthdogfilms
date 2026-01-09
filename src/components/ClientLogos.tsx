
const ClientLogos = () => {
  const logos = [
    { src: "/lovable-uploads/client-logo-arden-kaywin.png", alt: "Arden Kaywin Vocal Studio" },
    { src: "/lovable-uploads/client-logo-blind-cafe.png", alt: "The Blind Cafe" },
    { src: "/lovable-uploads/client-logo-center-sustainable-energy.png", alt: "Center for Sustainable Energy California" },
    { src: "/lovable-uploads/client-logo-earthaven-ecovillage.png", alt: "Earthaven Ecovillage" },
    { src: "/lovable-uploads/client-logo-jeff-paige.png", alt: "Jeff & Paige" },
    { src: "/lovable-uploads/client-logo-patchwork-school.png", alt: "The Patchwork School" },
    { src: "/lovable-uploads/client-logo-sacred-sons.png", alt: "Sacred Sons" },
    { src: "/lovable-uploads/client-logo-transformative-solutions.png", alt: "Transformative Solutions" },
    { src: "/lovable-uploads/client-logo-relationship-school.png", alt: "The Relationship School" },
    { src: "/lovable-uploads/client-logo-vmix.png", alt: "VMIX" },
    { src: "/lovable-uploads/client-logo-quotethat.png", alt: "quoteThat!" },
    { src: "/lovable-uploads/client-logo-ecpac.png", alt: "ECPAC Early Childhood Partnership of Adams County" }
  ];

  return (
    <section className="py-24 bg-stone-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-stone-900 mb-4">Trusted by Organizations That Make a Difference</h3>
          <p className="text-stone-600">We collaborate with mission-driven brands and changemakers</p>
        </div>
        
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
          {logos.map((logo, index) => (
            <div key={index} className="text-center">
              <div className="h-24 flex items-center justify-center mx-auto">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-18 w-auto object-contain"
                  loading="lazy"
                  width={120}
                  height={80}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
