
import TestimonialCard from "@/components/TestimonialCard";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Absolutely amazing! The cake was gorgeous and tasted heavenly. Will definitely order again!",
      author: "Ritu S.",
      rating: 5
    },
    {
      id: 2,
      quote: "Thank you SK Cake for the perfect engagement cake. Everyone loved it.",
      author: "Deepak & Neha",
      rating: 5
    },
    {
      id: 3,
      quote: "Fresh, moist, and beautiful! Just like I wanted.",
      author: "Sameer M.",
      rating: 5
    },
    {
      id: 4,
      quote: "The cake was the highlight of our party! Everyone loved the design and flavor. SK Cake truly exceeded our expectations.",
      author: "Aarti R.",
      rating: 5
    },
    {
      id: 5,
      quote: "Best fondant work I've ever seen! The cake tasted as amazing as it looked. Will definitely order again.",
      author: "Reena M.",
      rating: 5
    },
    {
      id: 6,
      quote: "Ordered a birthday cake for my son and it was perfect. The design was exactly what I asked for and tasted delicious.",
      author: "Priya K.",
      rating: 5
    },
    {
      id: 7,
      quote: "The custom cake for my daughter's graduation was stunning. Thank you for making her day special!",
      author: "Rahul J.",
      rating: 4
    },
    {
      id: 8,
      quote: "My wedding cake was beyond beautiful. Working with SK Cake was a pleasure from start to finish.",
      author: "Anjali & Vikram",
      rating: 5
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-cake-pink/20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-playfair text-cake-brown mb-4">
              What Our Customers Say
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              We pride ourselves on making our customers happy
            </p>
          </div>
        </div>
      </section>

      {/* Overall Rating */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl shadow-lg max-w-4xl mx-auto p-8 text-center">
            <h2 className="text-3xl font-semibold font-playfair mb-4">Customer Satisfaction</h2>
            <div className="flex justify-center mb-4">
              {Array(5)
                .fill(null)
                .map((_, index) => (
                  <Star key={index} size={32} className="text-cake-gold fill-cake-gold mx-1" />
                ))}
            </div>
            <p className="text-xl font-semibold">4.9 out of 5</p>
            <p className="text-gray-600">Based on {testimonials.length} reviews</p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                quote={testimonial.quote}
                author={testimonial.author}
                rating={testimonial.rating}
                className="h-full"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Leave a Review */}
      <section className="py-16 bg-cake-cream/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold font-playfair text-cake-brown text-center mb-8">
              Share Your Experience
            </h2>
            <p className="text-center mb-10">
              Enjoyed our cakes? We'd love to hear about your experience! Leave us a review or share your photos on social media and tag us.
            </p>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">Review Us On</h3>
                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href="https://www.google.com/reviews"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-cake-pink/20 hover:bg-cake-pink/30 transition-colors rounded-lg px-6 py-4"
                  >
                    <span className="font-semibold">Google</span>
                  </a>
                  
                  <a
                    href="https://www.facebook.com/reviews"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-cake-pink/20 hover:bg-cake-pink/30 transition-colors rounded-lg px-6 py-4"
                  >
                    <span className="font-semibold">Facebook</span>
                  </a>
                  
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-cake-pink/20 hover:bg-cake-pink/30 transition-colors rounded-lg px-6 py-4"
                  >
                    <span className="font-semibold">Instagram</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Order CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold font-playfair text-cake-brown mb-6">
            Ready to Experience Our Cakes?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join our happy customers and order a custom cake for your next celebration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/gallery" className="btn-primary">
              Browse Our Gallery
            </a>
            <a href="/order" className="btn-accent">
              Order Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
