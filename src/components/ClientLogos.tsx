
const ClientLogos = () => {
  const clients = [
    "Impact Collective",
    "Sustainable Futures",
    "Mission Partners",
    "Change Makers Co",
    "Purpose Brands",
    "Social Impact Lab"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-serif text-stone-900 mb-4">Trusted by Organizations That Matter</h3>
          <p className="text-stone-600">We collaborate with mission-driven brands and changemakers</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <div key={index} className="text-center">
              <div className="h-16 flex items-center justify-center">
                <span className="text-stone-500 font-light text-sm tracking-wide uppercase">
                  {client}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
