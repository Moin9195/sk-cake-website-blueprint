
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";

const Services = () => {
  const cakeCategories = [
    {
      name: "Custom Cakes",
      description: "Designed to fit your theme, from unicorns to superheroes",
      image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: [
        "Personalized designs based on your ideas",
        "Various flavors to choose from",
        "Customizable size and servings",
        "Special dietary options available",
        "Character and theme cakes"
      ]
    },
    {
      name: "Wedding Cakes",
      description: "Elegant multi-tier masterpieces",
      image: "https://images.unsplash.com/photo-1535254973040-607b474d7321?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: [
        "Multiple tiers and options",
        "Classic and modern designs",
        "Consultation and tasting sessions",
        "Delivery to venue",
        "Cake stand rental available"
      ]
    },
    {
      name: "Birthday Cakes",
      description: "For all ages and themes",
      image: "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: [
        "Age-specific designs",
        "Photo cakes available",
        "Themed character cakes",
        "Number and letter shaped cakes",
        "Custom flavor combinations"
      ]
    },
    {
      name: "Cupcakes & Treats",
      description: "Perfect for party favors or sweet tables",
      image: "https://images.unsplash.com/photo-1603532648955-039310d9ed75?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: [
        "Mini cupcakes and standard sizes",
        "Customized toppings and decorations",
        "Gift boxes and packaging available",
        "Color-coordinated designs",
        "Bulk orders for events"
      ]
    },
    {
      name: "Eggless & Vegan Options",
      description: "Everyone deserves a treat!",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: [
        "100% eggless recipes",
        "Dairy-free options",
        "Gluten-free available upon request",
        "Reduced sugar options",
        "No compromise on taste and texture"
      ]
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-cake-pink/20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-playfair text-cake-brown mb-4">
              What We Offer
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              We specialize in a wide variety of cakes to match your celebration style
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {cakeCategories.map((category, index) => (
              <div 
                key={category.name} 
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 !== 0 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                <div className={`${index % 2 !== 0 ? 'lg:col-start-2' : ''}`}>
                  <h2 className="text-3xl font-semibold font-playfair text-cake-brown mb-4">
                    {category.name}
                  </h2>
                  <p className="mb-6 text-lg">
                    {category.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {category.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <CheckCircle2 className="text-cake-gold mr-2 mt-1 flex-shrink-0" size={18} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/order" className="btn-accent inline-block">
                    Order {category.name}
                  </Link>
                </div>
                <div className={`relative ${index % 2 !== 0 ? 'lg:col-start-1' : ''}`}>
                  <img
                    src={category.image}
                    alt={category.name}
                    className="rounded-lg shadow-xl w-full"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-cake-pink/20 w-1/3 h-1/3 -z-10 rounded-lg"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Information */}
      <section className="py-16 bg-cake-cream/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold font-playfair text-cake-brown mb-4">
              Pricing Information
            </h2>
            <p className="max-w-3xl mx-auto">
              Our cakes are priced based on design complexity, size, and special requirements. 
              Contact us for a custom quote tailored to your specific needs.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold font-playfair mb-4">Starting Prices</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span>Custom Cakes</span>
                    <span className="font-semibold">from ₹1200</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Wedding Cakes (per tier)</span>
                    <span className="font-semibold">from ₹3000</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Birthday Cakes</span>
                    <span className="font-semibold">from ₹800</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Cupcakes (dozen)</span>
                    <span className="font-semibold">from ₹600</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold font-playfair mb-4">Additional Services</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span>Cake Toppers</span>
                    <span className="font-semibold">from ₹200</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Special Dietary Options</span>
                    <span className="font-semibold">+10%</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Delivery (within city)</span>
                    <span className="font-semibold">from ₹200</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Rush Orders</span>
                    <span className="font-semibold">+25%</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <p className="italic text-sm mb-4">
                * Prices may vary based on complexity, size, and specific requirements.
              </p>
              <Link to="/contact" className="btn-primary">
                Get a Custom Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold font-playfair text-cake-brown text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-playfair text-xl font-semibold mb-2">How far in advance should I order?</h3>
              <p>For standard cakes, we recommend ordering at least 3-5 days in advance. For wedding cakes or complex designs, 2-4 weeks is preferable. Last-minute orders may be accommodated based on availability.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-playfair text-xl font-semibold mb-2">Do you deliver?</h3>
              <p>Yes, we offer delivery services within the city for an additional charge. The delivery fee depends on the distance from our location.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-playfair text-xl font-semibold mb-2">Can I get a cake tasting before ordering?</h3>
              <p>Yes, we offer cake tastings for wedding cakes and large event orders. For standard orders, tastings can be arranged for a small fee.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-playfair text-xl font-semibold mb-2">Do you accommodate dietary restrictions?</h3>
              <p>Absolutely! We offer eggless, dairy-free, and reduced sugar options. Gluten-free options are available upon request.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
