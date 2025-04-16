
import { Link } from "react-router-dom";
import { ChevronRight, Star, Calendar, Cake, Award, Clock, Heart } from "lucide-react";
import CakeCard from "@/components/CakeCard";
import TestimonialCard from "@/components/TestimonialCard";
import { motion } from "framer-motion";

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

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  const imageAnimation = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-cake-pink/20 to-white/0"></div>
        <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1557308536-ee471ef2c390?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="text-center lg:text-left"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cake-brown leading-tight mb-6">
                Celebrate Every Moment with a Slice of Perfection
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Beautifully designed, handcrafted cakes made with love at SK Cake.
              </p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                <motion.div variants={itemAnimation}>
                  <Link to="/gallery" className="btn-primary">
                    View Our Cakes
                  </Link>
                </motion.div>
                <motion.div variants={itemAnimation}>
                  <Link to="/order" className="btn-accent">
                    Order Now
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
            <div className="hidden lg:block">
              <motion.div 
                className="relative"
                initial="hidden"
                animate="visible"
                variants={imageAnimation}
              >
                <img 
                  src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Featured Cake" 
                  className="rounded-lg shadow-2xl mx-auto max-w-md object-cover"
                />
                <motion.div 
                  className="absolute -bottom-8 -left-8 bg-white p-4 rounded-lg shadow-lg"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1563778084459-859099e48677?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" 
                    alt="Cake Detail" 
                    className="rounded-lg w-24 h-24 object-cover"
                  />
                </motion.div>
                <motion.div 
                  className="absolute -top-8 -right-8 bg-white p-4 rounded-lg shadow-lg"
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" 
                    alt="Cake Detail" 
                    className="rounded-lg w-24 h-24 object-cover"
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Specialties */}
      <section className="section-padding bg-cake-light">
        <div className="container mx-auto">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Cakes for Every Occasion
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Whether you're celebrating a birthday, wedding, or any special moment, we have the perfect cake for you.
          </motion.p>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {specialties.map((specialty, index) => (
              <motion.div 
                key={specialty.name}
                variants={itemAnimation}
                className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <div className="bg-cake-pink/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <specialty.icon className="text-cake-gold w-8 h-8" />
                </div>
                <h3 className="font-playfair font-semibold">{specialty.name}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Cakes */}
      <section className="section-padding">
        <div className="container mx-auto">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Beautiful Creations
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Take a look at some of our most loved cake designs
          </motion.p>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {cakeImages.map((cake, index) => (
              <motion.div key={index} variants={itemAnimation}>
                <CakeCard 
                  title={cake.title}
                  image={cake.image}
                  category={cake.category}
                />
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <Link to="/gallery" className="btn-primary group">
              View Full Gallery
              <ChevronRight className="inline ml-2 group-hover:translate-x-1 transition-transform duration-300" size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-cake-cream/50">
        <div className="container mx-auto">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Why Choose SK Cake
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We put our heart and soul into every cake we create
          </motion.p>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { icon: Heart, title: "Made with love & passion", text: "Every cake we create is made with utmost care and attention to detail." },
              { icon: Cake, title: "100% fresh ingredients", text: "We use only the finest and freshest ingredients for superior taste and quality." },
              { icon: Award, title: "Custom designs just for you", text: "We create personalized designs to match your vision and occasion." },
              { icon: Clock, title: "On-time delivery", text: "We ensure your cake arrives fresh and on time for your special day." },
              { icon: Star, title: "Hygienic baking practices", text: "We maintain the highest standards of cleanliness and food safety." }
            ].map((item, index) => (
              <motion.div 
                key={index}
                variants={itemAnimation}
                className="bg-white rounded-lg p-6 text-center flex flex-col items-center shadow-md hover:shadow-lg transition-shadow duration-300"
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <item.icon className="text-cake-gold mb-4" size={32} />
                <h3 className="font-playfair font-semibold mb-2">{item.title}</h3>
                <p className="text-sm">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="section-padding">
        <div className="container mx-auto">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            What Our Customers Say
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We pride ourselves on making our customers happy
          </motion.p>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemAnimation}>
              <TestimonialCard 
                quote="The cake was the highlight of our party! Everyone loved the design and flavor. SK Cake truly exceeded our expectations."
                author="Aarti R."
              />
            </motion.div>
            <motion.div variants={itemAnimation}>
              <TestimonialCard 
                quote="Best fondant work I've ever seen! The cake tasted as amazing as it looked. Will definitely order again."
                author="Reena M."
              />
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <Link to="/testimonials" className="btn-secondary group">
              Read More Reviews
              <ChevronRight className="inline ml-2 group-hover:translate-x-1 transition-transform duration-300" size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 bg-cake-pink/30"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold font-playfair text-cake-brown mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Looking for a custom cake?
          </motion.h2>
          <motion.p 
            className="text-xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Let's bake your dream dessert!
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemAnimation}>
              <Link to="/contact" className="btn-primary">
                Contact Us
              </Link>
            </motion.div>
            <motion.div variants={itemAnimation}>
              <Link to="/order" className="btn-accent">
                Order Now
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default Index;
