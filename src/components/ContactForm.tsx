
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    cakeType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    
    setFormData({
      name: "",
      email: "",
      phone: "",
      cakeType: "",
      message: "",
    });
    
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block mb-2 font-medium">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-cake-pink/30 rounded-md focus:outline-none focus:ring-2 focus:ring-cake-pink"
          placeholder="Your name"
          required
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block mb-2 font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-cake-pink/30 rounded-md focus:outline-none focus:ring-2 focus:ring-cake-pink"
          placeholder="Your email address"
          required
        />
      </div>
      
      <div>
        <label htmlFor="phone" className="block mb-2 font-medium">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-cake-pink/30 rounded-md focus:outline-none focus:ring-2 focus:ring-cake-pink"
          placeholder="Your phone number"
          required
        />
      </div>
      
      <div>
        <label htmlFor="cakeType" className="block mb-2 font-medium">
          Type of Cake / Occasion
        </label>
        <select
          id="cakeType"
          name="cakeType"
          value={formData.cakeType}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-cake-pink/30 rounded-md focus:outline-none focus:ring-2 focus:ring-cake-pink"
          required
        >
          <option value="" disabled>Select cake type</option>
          <option value="Birthday">Birthday Cake</option>
          <option value="Wedding">Wedding Cake</option>
          <option value="Anniversary">Anniversary Cake</option>
          <option value="Graduation">Graduation Cake</option>
          <option value="Cupcakes">Cupcakes</option>
          <option value="Other">Other</option>
        </select>
      </div>
      
      <div>
        <label htmlFor="message" className="block mb-2 font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="w-full px-4 py-3 border border-cake-pink/30 rounded-md focus:outline-none focus:ring-2 focus:ring-cake-pink"
          placeholder="Tell us about your inquiry"
          required
        ></textarea>
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-accent w-full flex justify-center items-center"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};

export default ContactForm;
