
import { Link } from "react-router-dom";
import { ChevronRight, Star, Calendar, Cake, Award, Clock, Heart } from "lucide-react";
import CakeCard from "@/components/CakeCard";
import TestimonialCard from "@/components/TestimonialCard";

const Index = () => {
  // Sample cake images (using placeholder images for now)
  const cakeImages = [
    {
      title: "Birthday Cake",
      image: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      category: "Birthday"
    },
    {
      title: "Wedding Cake",
      image: "https://images.unsplash.com/photo-1535254973040-607b474d7321?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      category: "Wedding"
    },
    {
      title: "Anniversary Cake",
      image: "https://images.unsplash.com/photo-1563778084459-859099e48677?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      category: "Anniversary"
    },
    {
      title: "Cupcakes",
      image: "https://images.unsplash.com/photo-1603532648955-039310d9ed75?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      category: "Cupcakes"
    }
  ];

  const specialties = [
    { name: "Birthday Cakes", icon: Cake },
    { name: "Wedding Cakes", icon: Heart },
    { name: "Anniversary Cakes", icon: Calendar },
    { name: "Graduation Cakes", icon: Award },
    { name: "Cupcakes & Mini Treats", icon: Cake }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-cake-pink/20 to-white/0"></div>
        <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1557308536-ee471ef2c390?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cake-brown leading-tight mb-6">
                Celebrate Every Moment with a Slice of Perfection
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Beautifully designed, handcrafted cakes made with love at SK Cake.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/gallery" className="btn-primary">
                  View Our Cakes
                </Link>
                <Link to="/order" className="btn-accent">
                  Order Now
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Featured Cake" 
                  className="rounded-lg shadow-2xl mx-auto max-w-md object-cover"
                />
                <div className="absolute -bottom-8 -left-8 bg-white p-4 rounded-lg shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1563778084459-859099e48677?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" 
                    alt="Cake Detail" 
                    className="rounded-lg w-24 h-24 object-cover"
                  />
                </div>
                <div className="absolute -top-8 -right-8 bg-white p-4 rounded-lg shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" 
                    alt="Cake Detail" 
                    className="rounded-lg w-24 h-24 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Specialties */}
      <section className="section-padding bg-cake-light">
        <div className="container mx-auto">
          <h2 className="section-title">Cakes for Every Occasion</h2>
          <p className="section-subtitle">Whether you're celebrating a birthday, wedding, or any special moment, we have the perfect cake for you.</p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {specialties.map((specialty, index) => (
              <div 
                key={specialty.name} 
                className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="bg-cake-pink/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <specialty.icon className="text-cake-gold w-8 h-8" />
                </div>
                <h3 className="font-playfair font-semibold">{specialty.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cakes */}
      <section className="section-padding">
        <div className="container mx-auto">
          <h2 className="section-title">Our Beautiful Creations</h2>
          <p className="section-subtitle">Take a look at some of our most loved cake designs</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {cakeImages.map((cake, index) => (
              <CakeCard 
                key={index}
                title={cake.title}
                image={cake.image}
                category={cake.category}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/gallery" className="btn-primary">
              View Full Gallery
              <ChevronRight className="inline ml-2" size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-cake-cream/50">
        <div className="container mx-auto">
          <h2 className="section-title">Why Choose SK Cake</h2>
          <p className="section-subtitle">We put our heart and soul into every cake we create</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
            <div className="bg-white rounded-lg p-6 text-center flex flex-col items-center shadow-md hover:shadow-lg transition-shadow duration-300">
              <Heart className="text-cake-gold mb-4" size={32} />
              <h3 className="font-playfair font-semibold mb-2">Made with love & passion</h3>
              <p className="text-sm">Every cake we create is made with utmost care and attention to detail.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center flex flex-col items-center shadow-md hover:shadow-lg transition-shadow duration-300">
              <Cake className="text-cake-gold mb-4" size={32} />
              <h3 className="font-playfair font-semibold mb-2">100% fresh ingredients</h3>
              <p className="text-sm">We use only the finest and freshest ingredients for superior taste and quality.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center flex flex-col items-center shadow-md hover:shadow-lg transition-shadow duration-300">
              <Award className="text-cake-gold mb-4" size={32} />
              <h3 className="font-playfair font-semibold mb-2">Custom designs just for you</h3>
              <p className="text-sm">We create personalized designs to match your vision and occasion.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center flex flex-col items-center shadow-md hover:shadow-lg transition-shadow duration-300">
              <Clock className="text-cake-gold mb-4" size={32} />
              <h3 className="font-playfair font-semibold mb-2">On-time delivery</h3>
              <p className="text-sm">We ensure your cake arrives fresh and on time for your special day.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center flex flex-col items-center shadow-md hover:shadow-lg transition-shadow duration-300">
              <Star className="text-cake-gold mb-4" size={32} />
              <h3 className="font-playfair font-semibold mb-2">Hygienic baking practices</h3>
              <p className="text-sm">We maintain the highest standards of cleanliness and food safety.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="section-padding">
        <div className="container mx-auto">
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">We pride ourselves on making our customers happy</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TestimonialCard 
              quote="The cake was the highlight of our party! Everyone loved the design and flavor. SK Cake truly exceeded our expectations."
              author="Aarti R."
            />
            <TestimonialCard 
              quote="Best fondant work I've ever seen! The cake tasted as amazing as it looked. Will definitely order again."
              author="Reena M."
            />
          </div>
          
          <div className="text-center mt-12">
            <Link to="/testimonials" className="btn-secondary">
              Read More Reviews
              <ChevronRight className="inline ml-2" size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-cake-pink/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair text-cake-brown mb-6">
            Looking for a custom cake?
          </h2>
          <p className="text-xl mb-8">
            Let's bake your dream dessert!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              Contact Us
            </Link>
            <Link to="/order" className="btn-accent">
              Order Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
