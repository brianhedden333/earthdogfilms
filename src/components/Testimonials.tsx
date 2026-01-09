import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      text: "I've known and worked with Brian for close to a decade, and I would highly recommend him for your next video project! He's got a great creative vision and a knack for storytelling, whether that's a documentary or a brand video. I trust him both personally and professionally and look forward to many more years of working together.",
      author: "Daniel Herman",
      rating: 5
    },
    {
      text: "Working with Earth Dog Films brings a thoughtful, story-first approach to the process. What stands out most is how they focus not just on creating beautiful visuals, but on understanding the values, mission, and strategy behind the work. Production is handled with professionalism and grounded in collaboration that makes everything more efficient. Their level of craft consistently elevates the final product without ever losing the human element. If you want a creative partner who leads with integrity, clarity, and genuine storytelling talent, Earth Dog Films is an easy recommendation. Their high-level production quality, paired with a mission-driven approach, makes them stand out as an exceptional team to work with.",
      author: "Peder Rottiger",
      rating: 5
    },
    {
      text: "Brian was an absolute pleasure to work with. He turned up on time, fired up and full of great ideas for shots I hadn't thought of. He has a great eye for filming and he's an awesome guy to hang out with. He elevated our project to levels I didn't think possible and we will be working together again soon.",
      author: "Daniel Smith, T.O.L.D.",
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, index) => (
          <Star key={index} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
    );
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6">What Our Clients Say</h2>
        </div>

        <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-md">
              <CardContent className="p-8">
                {renderStars(testimonial.rating)}
                <p className="text-lg text-stone-700 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-stone-900">{testimonial.author}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
