
import { Link } from "react-router-dom";
import { Cake, Mail, Phone, MapPin, Clock, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-cake-cream pt-16 text-cake-brown">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Cake className="h-8 w-8 text-cake-gold mr-2" />
              <span className="text-2xl font-bold font-playfair">SK Cake</span>
            </div>
            <p className="mb-4">
              Beautifully designed, handcrafted cakes made with love. Bringing joy to every celebration.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" aria-label="Instagram" className="hover:text-cake-gold transition-colors">
                <Instagram size={24} />
              </a>
              <a href="https://facebook.com" aria-label="Facebook" className="hover:text-cake-gold transition-colors">
                <Facebook size={24} />
              </a>
              <a href="https://twitter.com" aria-label="Twitter" className="hover:text-cake-gold transition-colors">
                <Twitter size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-playfair font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-cake-gold transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-cake-gold transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-cake-gold transition-colors">Gallery</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-cake-gold transition-colors">Our Cakes</Link>
              </li>
              <li>
                <Link to="/testimonials" className="hover:text-cake-gold transition-colors">Testimonials</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-cake-gold transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-playfair font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>Custom Cakes</li>
              <li>Wedding Cakes</li>
              <li>Birthday Cakes</li>
              <li>Cupcakes & Treats</li>
              <li>Eggless & Vegan Options</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-playfair font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <Phone size={18} className="mr-2 mt-1 text-cake-gold" />
                <span>+91-XXXXXXXXXX</span>
              </div>
              <div className="flex items-start">
                <Mail size={18} className="mr-2 mt-1 text-cake-gold" />
                <span>info@skcake.com</span>
              </div>
              <div className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-cake-gold" />
                <span>Delhi, India</span>
              </div>
              <div className="flex items-start">
                <Clock size={18} className="mr-2 mt-1 text-cake-gold" />
                <span>Mon–Sat: 10am – 7pm</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-cake-pink/30 mt-12 py-6 text-sm text-center">
          <p>© {new Date().getFullYear()} SK Cake. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
