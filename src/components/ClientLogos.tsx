
const ClientLogos = () => {
  const logos = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-stone-900 mb-4">Trusted by Organizations That Matter</h3>
          <p className="text-stone-600">We collaborate with mission-driven brands and changemakers</p>
        </div>
        
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
          {logos.map((number) => (
            <div key={number} className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center mx-auto">
                <span className="text-white font-bold text-lg">
                  {number}
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
