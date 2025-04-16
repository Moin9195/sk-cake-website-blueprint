
import ContactForm from "@/components/ContactForm";
import { Phone, Mail, MapPin, Clock, MessageCircle, Instagram, Facebook } from "lucide-react";

const Contact = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-cake-pink/20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-playfair text-cake-brown mb-4">
              Let's Talk Cake!
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Got a question? Want to place an order? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-semibold font-playfair text-cake-brown mb-6">
                Send Us a Message
              </h2>
              <p className="mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
              
              <ContactForm />
            </div>
            
            <div>
              <h2 className="text-3xl font-semibold font-playfair text-cake-brown mb-6">
                Contact Information
              </h2>
              <p className="mb-8">
                Have a quick question? Reach out to us directly using the information below.
              </p>
              
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-cake-pink/20 p-3 rounded-full mr-4">
                      <Phone className="text-cake-gold" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Phone</h3>
                      <p>+91-XXXXXXXXXX</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-cake-pink/20 p-3 rounded-full mr-4">
                      <Mail className="text-cake-gold" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Email</h3>
                      <p>info@skcake.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-cake-pink/20 p-3 rounded-full mr-4">
                      <MapPin className="text-cake-gold" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Location</h3>
                      <p>Delhi, India</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-cake-pink/20 p-3 rounded-full mr-4">
                      <Clock className="text-cake-gold" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Working Hours</h3>
                      <p>Mon–Sat: 10am – 7pm</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="font-semibold text-lg mb-4">Connect With Us</h3>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-cake-pink/20 hover:bg-cake-pink/30 transition-colors rounded-lg px-4 py-3"
                  >
                    <Instagram className="text-cake-gold mr-2" size={20} />
                    <span>Instagram</span>
                  </a>
                  
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-cake-pink/20 hover:bg-cake-pink/30 transition-colors rounded-lg px-4 py-3"
                  >
                    <Facebook className="text-cake-gold mr-2" size={20} />
                    <span>Facebook</span>
                  </a>
                  
                  <a
                    href="https://wa.me/91XXXXXXXXXX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-cake-pink/20 hover:bg-cake-pink/30 transition-colors rounded-lg px-4 py-3"
                  >
                    <MessageCircle className="text-cake-gold mr-2" size={20} />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (placeholder) */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="bg-gray-200 rounded-lg overflow-hidden h-96">
            <div className="h-full w-full flex items-center justify-center">
              <p className="text-lg">Google Maps Location Would Go Here</p>
              {/* Replace this with an actual Google Maps embed */}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-cake-cream/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold font-playfair text-cake-brown mb-4">
              Common Questions
            </h2>
            <p className="max-w-3xl mx-auto">
              Find answers to frequently asked questions about our ordering process
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-playfair text-xl font-semibold mb-2">What is your order process?</h3>
              <p>Fill out our contact form or order form with your requirements. We'll get back to you to confirm details, pricing, and availability. Upon confirmation, a 50% advance payment is required to secure your order.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-playfair text-xl font-semibold mb-2">What is your cancellation policy?</h3>
              <p>Orders can be cancelled with a full refund up to 72 hours before the delivery date. Cancellations made less than 72 hours before delivery will receive a 50% refund of the advance payment.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-playfair text-xl font-semibold mb-2">How do I make payment?</h3>
              <p>We accept payments via bank transfer, UPI, and major credit/debit cards. Payment details will be provided after your order is confirmed.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
