
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-serif mb-6">Storytelling with Soul</h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-stone-700 leading-relaxed mb-8">
              Earth Dog Films is a boutique video production company founded by filmmaker Brian Hedden. 
              With over a decade of experience in documentary and branded storytelling, we create 
              cinematic content that reflects your values—and resonates with your audience.
            </p>
            
            <p className="text-lg text-stone-600 leading-relaxed mb-8">
              Whether you're launching a mission-driven brand, capturing the spirit of a movement, 
              or sharing a client's transformation, we're here to tell it with honesty, care, and craft.
            </p>
          </div>

          {/* Founder Section */}
          <Card className="mt-16 border-none shadow-lg bg-white">
            <CardContent className="p-12">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-1">
                  <div className="w-48 h-48 rounded-full mx-auto mb-6 overflow-hidden">
                    <img 
                      src="/lovable-uploads/53fcafd1-f8cf-48f7-b59c-ffe240a967e7.png" 
                      alt="Brian Hedden, Founder & Filmmaker at Earth Dog Films"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-serif text-stone-900 mb-4">Brian Hedden</h3>
                  <p className="text-amber-700 font-medium mb-4">Founder & Filmmaker</p>
                  <p className="text-stone-600 leading-relaxed mb-4">
                    Brian's journey began in documentary filmmaking, where he learned that the most 
                    powerful stories emerge from authentic human connection. This foundation shapes 
                    every project at Earth Dog Films.
                  </p>
                  <p className="text-stone-600 leading-relaxed">
                    When he's not behind the camera, Brian can be found exploring the mountains 
                    with his rescue dog—the inspiration behind the company name.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-6">Our Values</h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              The principles that guide every story we tell
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg bg-white text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl">🎬</span>
                </div>
                <h3 className="text-xl font-serif text-stone-900 mb-4">Story First</h3>
                <p className="text-stone-600 leading-relaxed">
                  Every frame serves the narrative. We believe in the power of authentic 
                  storytelling to create lasting impact.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-serif text-stone-900 mb-4">True Partnership</h3>
                <p className="text-stone-600 leading-relaxed">
                  We work alongside our clients as collaborators, not just vendors. 
                  Your vision becomes our shared mission.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl">💫</span>
                </div>
                <h3 className="text-xl font-serif text-stone-900 mb-4">Meaningful Impact</h3>
                <p className="text-stone-600 leading-relaxed">
                  We partner with organizations that are making a positive difference 
                  in the world, amplifying their message through film.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">Ready to Work Together?</h2>
          <p className="text-xl text-stone-300 mb-10">
            Let's explore how we can bring your story to life
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg rounded-md transition-colors duration-300"
          >
            Start the Conversation
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
