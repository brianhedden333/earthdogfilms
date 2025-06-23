import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    videoType: "",
    budget: "",
    timeline: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://formspree.io/f/mqabykrl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          'video-type': formData.videoType,
          budget: formData.budget,
          timeline: formData.timeline,
          message: formData.message
        })
      });

      if (response.ok) {
        toast.success("Thank you for your message! We'll be in touch within 24 hours.");
        setFormData({
          name: "",
          email: "",
          videoType: "",
          budget: "",
          timeline: "",
          message: ""
        });
      } else {
        toast.error("There was an error sending your message. Please try again.");
      }
    } catch (error) {
      toast.error("There was an error sending your message. Please try again.");
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Let's Tell Your Story</h1>
          <p className="text-xl text-stone-300 leading-relaxed">
            Ready to bring your story to life? Whether you're planning a campaign, launching a brand, 
            or advocating for change, we'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <Card className="border-none shadow-lg bg-white">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-stone-700 font-medium mb-2">Name *</label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className="border-stone-300 focus:border-red-600"
                      />
                    </div>

                    <div>
                      <label className="block text-stone-700 font-medium mb-2">Email *</label>
                      <Input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="border-stone-300 focus:border-red-600"
                      />
                    </div>

                    <div>
                      <label className="block text-stone-700 font-medium mb-2">What kind of video do you need?</label>
                      <Select value={formData.videoType} onValueChange={(value) => handleInputChange("videoType", value)}>
                        <SelectTrigger className="border-stone-300 focus:border-red-600">
                          <SelectValue placeholder="Select video type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="brand-film">Brand Film</SelectItem>
                          <SelectItem value="testimonials">Testimonials</SelectItem>
                          <SelectItem value="campaign">Campaign Video</SelectItem>
                          <SelectItem value="documentary">Documentary Short</SelectItem>
                          <SelectItem value="ongoing">Ongoing Collaboration</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-stone-700 font-medium mb-2">Budget Range (Optional)</label>
                      <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                        <SelectTrigger className="border-stone-300 focus:border-red-600">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                          <SelectItem value="10k-20k">$10,000 - $20,000</SelectItem>
                          <SelectItem value="20k-35k">$20,000 - $35,000</SelectItem>
                          <SelectItem value="35k+">$35,000+</SelectItem>
                          <SelectItem value="discuss">Let's discuss</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-stone-700 font-medium mb-2">Timeline (Optional)</label>
                      <Select value={formData.timeline} onValueChange={(value) => handleInputChange("timeline", value)}>
                        <SelectTrigger className="border-stone-300 focus:border-red-600">
                          <SelectValue placeholder="When do you need this completed?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="asap">ASAP</SelectItem>
                          <SelectItem value="1-month">Within 1 month</SelectItem>
                          <SelectItem value="2-3-months">2-3 months</SelectItem>
                          <SelectItem value="3-6-months">3-6 months</SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-stone-700 font-medium mb-2">Tell us about your project</label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Share your vision, goals, or any questions you have..."
                        className="border-stone-300 focus:border-red-600 h-32"
                      />
                    </div>

                    <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white py-3">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-stone-900 mb-6">Get in Touch</h2>
                <p className="text-stone-600 leading-relaxed mb-8">
                  We typically respond within 24 hours. For urgent projects or questions, 
                  feel free to reach out directly via email or phone.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-stone-900 mb-1">Email</h3>
                    <p className="text-stone-600">brian [at] brianhedden . com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-stone-900 mb-1">Phone</h3>
                    <p className="text-stone-600">(303) 503-9925</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-stone-900 mb-1">Location</h3>
                    <p className="text-stone-600">Based in Boulder, Colorado, working worldwide</p>
                  </div>
                </div>
              </div>

              <Card className="border-none shadow-lg bg-red-50 mt-12">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-stone-900 mb-3">What Happens Next?</h3>
                  <div className="space-y-3 text-sm text-stone-600">
                    <div className="flex items-start">
                      <span className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-xs mr-3 mt-0.5">1</span>
                      <p>We'll review your project details and respond within 24 hours</p>
                    </div>
                    <div className="flex items-start">
                      <span className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-xs mr-3 mt-0.5">2</span>
                      <p>Schedule a discovery call to discuss your vision and goals</p>
                    </div>
                    <div className="flex items-start">
                      <span className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-xs mr-3 mt-0.5">3</span>
                      <p>Receive a custom proposal tailored to your project</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
