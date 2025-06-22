
const ClientLogos = () => {
  const logos = [
    { src: "/lovable-uploads/56f74e86-9505-439d-a65e-df6d9388eb19.png", alt: "Arden Kaywin Vocal Studio" },
    { src: "/lovable-uploads/8770b1f8-a217-487c-aa0f-a80d7df6e493.png", alt: "The Blind Cafe" },
    { src: "/lovable-uploads/962b1621-f56e-4745-8ab1-e2923f4c0d91.png", alt: "Center for Sustainable Energy California" },
    { src: "/lovable-uploads/c40569ab-eddc-4f65-9c51-f30c9300004c.png", alt: "Earthaven Ecovillage" },
    { src: "/lovable-uploads/3139cffa-0f7b-4e6a-883d-d8f371ed80b2.png", alt: "Jeff & Paige" },
    { src: "/lovable-uploads/ad5884c8-74fc-4210-bc57-15ee651d96c4.png", alt: "The Patchwork School" },
    { src: "/lovable-uploads/3d9d70fb-ac3c-4827-849f-3740dd910fe1.png", alt: "Sacred Sons" },
    { src: "/lovable-uploads/1bdc76b6-368e-4b01-8aea-de543a2aec93.png", alt: "Transformative Solutions" },
    { src: "/lovable-uploads/8a3b22d1-602c-4647-b109-973c9cd9d0fe.png", alt: "The Relationship School" },
    { src: "/lovable-uploads/a1a46ffc-9434-44e1-a32b-ee125c92400a.png", alt: "VMIX" },
    // Placeholder for additional logos to make 12 total
    { src: "/placeholder.svg", alt: "Partner 11" },
    { src: "/placeholder.svg", alt: "Partner 12" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-stone-900 mb-4">Trusted by Organizations That Matter</h3>
          <p className="text-stone-600">We collaborate with mission-driven brands and changemakers</p>
        </div>
        
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
          {logos.map((logo, index) => (
            <div key={index} className="text-center">
              <div className="h-16 flex items-center justify-center mx-auto">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-12 w-auto object-contain"
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
