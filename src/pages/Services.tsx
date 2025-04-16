
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

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

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const listItem = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <>
      {/* Hero Section with Animation */}
      <motion.section 
        className="pt-32 pb-16 bg-cake-pink/20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.7 }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-bold font-playfair text-cake-brown mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              What We Offer
            </motion.h1>
            <motion.p 
              className="text-xl max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              We specialize in a wide variety of cakes to match your celebration style
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Section with Animations */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {cakeCategories.map((category, index) => (
              <motion.div 
                key={category.name} 
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 !== 0 ? 'lg:grid-flow-dense' : ''
                }`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeIn}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <div className={`${index % 2 !== 0 ? 'lg:col-start-2' : ''}`}>
                  <motion.h2 
                    className="text-3xl font-semibold font-playfair text-cake-brown mb-4"
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    {category.name}
                  </motion.h2>
                  <motion.p 
                    className="mb-6 text-lg"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    {category.description}
                  </motion.p>
                  <motion.ul 
                    className="space-y-3 mb-8"
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {category.features.map((feature) => (
                      <motion.li 
                        key={feature} 
                        className="flex items-start"
                        variants={listItem}
                        transition={{ duration: 0.3 }}
                      >
                        <CheckCircle2 className="text-cake-gold mr-2 mt-1 flex-shrink-0" size={18} />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <Link to="/order" className="btn-accent inline-block hover:scale-105 transition duration-300">
                      Order {category.name}
                    </Link>
                  </motion.div>
                </div>
                <motion.div 
                  className={`relative ${index % 2 !== 0 ? 'lg:col-start-1' : ''}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    className="rounded-lg shadow-xl w-full"
                  />
                  <motion.div 
                    className="absolute -bottom-4 -right-4 bg-cake-pink/20 w-1/3 h-1/3 -z-10 rounded-lg"
                    animate={{ 
                      scale: [1, 1.05, 1],
                      rotate: [0, 1, 0]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Information */}
      <motion.section 
        className="py-16 bg-cake-cream/50"
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            variants={fadeIn}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h2 className="text-3xl font-semibold font-playfair text-cake-brown mb-4">
              Pricing Information
            </h2>
            <p className="max-w-3xl mx-auto">
              Our cakes are priced based on design complexity, size, and special requirements. 
              Contact us for a custom quote tailored to your specific needs.
            </p>
          </motion.div>
          
          <motion.div 
            className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold font-playfair mb-4">Starting Prices</h3>
                <ul className="space-y-3">
                  {[
                    { name: "Custom Cakes", price: "from ₹1200" },
                    { name: "Wedding Cakes (per tier)", price: "from ₹3000" },
                    { name: "Birthday Cakes", price: "from ₹800" },
                    { name: "Cupcakes (dozen)", price: "from ₹600" }
                  ].map((item) => (
                    <motion.li 
                      key={item.name} 
                      className="flex justify-between"
                      variants={listItem}
                      transition={{ duration: 0.3 }}
                      whileHover={{ x: 5 }}
                    >
                      <span>{item.name}</span>
                      <span className="font-semibold">{item.price}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delayChildren: 0.2 }}
              >
                <h3 className="text-xl font-semibold font-playfair mb-4">Additional Services</h3>
                <ul className="space-y-3">
                  {[
                    { name: "Cake Toppers", price: "from ₹200" },
                    { name: "Special Dietary Options", price: "+10%" },
                    { name: "Delivery (within city)", price: "from ₹200" },
                    { name: "Rush Orders", price: "+25%" }
                  ].map((item) => (
                    <motion.li 
                      key={item.name} 
                      className="flex justify-between"
                      variants={listItem}
                      transition={{ duration: 0.3 }}
                      whileHover={{ x: 5 }}
                    >
                      <span>{item.name}</span>
                      <span className="font-semibold">{item.price}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
            
            <motion.div 
              className="text-center mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <p className="italic text-sm mb-4">
                * Prices may vary based on complexity, size, and specific requirements.
              </p>
              <Link to="/contact" className="btn-primary hover:scale-105 transition duration-300">
                Get a Custom Quote
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section 
        className="py-16"
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-semibold font-playfair text-cake-brown text-center mb-12"
            variants={fadeIn}
          >
            Frequently Asked Questions
          </motion.h2>
          
          <motion.div 
            className="max-w-3xl mx-auto space-y-6"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                question: "How far in advance should I order?",
                answer: "For standard cakes, we recommend ordering at least 3-5 days in advance. For wedding cakes or complex designs, 2-4 weeks is preferable. Last-minute orders may be accommodated based on availability."
              },
              {
                question: "Do you deliver?",
                answer: "Yes, we offer delivery services within the city for an additional charge. The delivery fee depends on the distance from our location."
              },
              {
                question: "Can I get a cake tasting before ordering?",
                answer: "Yes, we offer cake tastings for wedding cakes and large event orders. For standard orders, tastings can be arranged for a small fee."
              },
              {
                question: "Do you accommodate dietary restrictions?",
                answer: "Absolutely! We offer eggless, dairy-free, and reduced sugar options. Gluten-free options are available upon request."
              }
            ].map((faq, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 15px 30px rgba(0,0,0,0.1)" 
                }}
              >
                <h3 className="font-playfair text-xl font-semibold mb-2">{faq.question}</h3>
                <p>{faq.answer}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default Services;
