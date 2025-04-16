
import { Award, Cake, Heart, Star } from "lucide-react";

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-cake-pink/20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-playfair text-cake-brown mb-4">
              The Heart Behind SK Cake
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Welcome to our sweet journey of passion, creativity, and deliciousness.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="cake-divider">
                <span>
                  <Cake className="text-cake-gold" />
                </span>
              </div>
              <h2 className="text-3xl font-semibold font-playfair text-cake-brown mb-6">
                Our Sweet Journey
              </h2>
              <p className="mb-4">
                Welcome to <strong>SK Cake</strong>, where every cake is a story, and every flavor tells a tale. 
                Founded with a passion for baking and decorating, our home-based bakery is known for its unique 
                designs, attention to detail, and the magic we bring to your special occasions.
              </p>
              <p className="mb-4">
                With years of passion for baking and decorating, we believe in crafting cakes that not only look stunning but taste divine. 
                Whether it's a whimsical birthday cake or an elegant wedding tier, we create edible memories you'll cherish.
              </p>
              <p>
                What started as a hobby has blossomed into a business built on love, creativity, and the joy of seeing 
                our customers' faces light up when they see their dream cakes come to life.
              </p>
              <div className="cake-divider">
                <span>
                  <Cake className="text-cake-gold" />
                </span>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600326145552-327f74b9c189?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Baker working on a cake"
                className="rounded-lg shadow-xl mx-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-3 rounded-lg shadow-lg">
                <Star className="text-cake-gold" size={32} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-cake-cream/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-cake-pink/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Heart className="text-cake-gold" size={24} />
              </div>
              <h3 className="text-2xl font-semibold font-playfair text-cake-brown mb-4">
                Our Mission
              </h3>
              <p>
                To bring joy to every celebration with cakes that are as delightful to taste as they are to see. 
                We strive to create not just desserts but memories that last a lifetime, one cake at a time.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-cake-pink/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Award className="text-cake-gold" size={24} />
              </div>
              <h3 className="text-2xl font-semibold font-playfair text-cake-brown mb-4">
                Our Vision
              </h3>
              <p>
                To be the go-to custom cake destination in Delhi, known for exceptional creativity, unparalleled taste, 
                and customer service that makes everyone feel special and valued.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Our Baking Process</h2>
          <p className="section-subtitle">From consultation to delivery, we ensure perfection at every step</p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-cake-pink/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-cake-gold">1</span>
              </div>
              <h3 className="font-playfair font-semibold mb-2">Consultation</h3>
              <p className="text-sm">We discuss your vision, preferences, and requirements</p>
            </div>
            
            <div className="text-center">
              <div className="bg-cake-pink/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-cake-gold">2</span>
              </div>
              <h3 className="font-playfair font-semibold mb-2">Design</h3>
              <p className="text-sm">We create a custom design based on your ideas</p>
            </div>
            
            <div className="text-center">
              <div className="bg-cake-pink/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-cake-gold">3</span>
              </div>
              <h3 className="font-playfair font-semibold mb-2">Baking</h3>
              <p className="text-sm">We freshly bake your cake using premium ingredients</p>
            </div>
            
            <div className="text-center">
              <div className="bg-cake-pink/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-cake-gold">4</span>
              </div>
              <h3 className="font-playfair font-semibold mb-2">Delivery</h3>
              <p className="text-sm">We carefully deliver your cake to your specified location</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team/Baker */}
      <section className="py-16 bg-cake-pink/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-semibold font-playfair text-cake-brown mb-6">
              Meet the Baker
            </h2>
            <div className="mb-8">
              <img 
                src="https://images.unsplash.com/photo-1592755219588-d4ff92a0d4de?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400&q=80" 
                alt="Baker" 
                className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold font-playfair">SK Cake Founder</h3>
              <p className="text-sm text-cake-brown/70">Head Baker & Designer</p>
            </div>
            <p className="mb-4">
              With a degree in culinary arts and over 10 years of baking experience, our head baker has turned a lifelong 
              passion into a thriving business. Combining artistic vision with exceptional baking skills, each creation is 
              a masterpiece of flavor and design.
            </p>
            <p>
              "Baking is more than following recipes—it's about creating joy and memories through food. When someone takes 
              that first bite and smiles, that's what makes every early morning and late night worth it."
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
