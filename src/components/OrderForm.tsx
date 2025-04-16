
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Calendar } from "lucide-react";

const OrderForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    occasion: "",
    dateRequired: "",
    flavors: "",
    referenceImg: null as File | null,
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({
        ...prev,
        referenceImg: e.target.files![0],
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast({
      title: "Order request sent!",
      description: "We'll contact you shortly to confirm your cake order.",
    });
    
    setFormData({
      name: "",
      phone: "",
      email: "",
      occasion: "",
      dateRequired: "",
      flavors: "",
      referenceImg: null,
      message: "",
    });
    
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
          <label htmlFor="phone" className="block mb-2 font-medium">
            Contact Number
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
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="occasion" className="block mb-2 font-medium">
            Occasion
          </label>
          <select
            id="occasion"
            name="occasion"
            value={formData.occasion}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-cake-pink/30 rounded-md focus:outline-none focus:ring-2 focus:ring-cake-pink"
            required
          >
            <option value="" disabled>Select occasion</option>
            <option value="Birthday">Birthday</option>
            <option value="Wedding">Wedding</option>
            <option value="Anniversary">Anniversary</option>
            <option value="Graduation">Graduation</option>
            <option value="Baby Shower">Baby Shower</option>
            <option value="Corporate">Corporate Event</option>
            <option value="Other">Other</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="dateRequired" className="block mb-2 font-medium">
            Date Required
          </label>
          <div className="relative">
            <input
              type="date"
              id="dateRequired"
              name="dateRequired"
              value={formData.dateRequired}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-cake-pink/30 rounded-md focus:outline-none focus:ring-2 focus:ring-cake-pink"
              min={new Date().toISOString().split('T')[0]}
              required
            />
            <Calendar className="absolute right-3 top-3 text-cake-brown pointer-events-none" size={20} />
          </div>
        </div>
      </div>
      
      <div>
        <label htmlFor="flavors" className="block mb-2 font-medium">
          Flavors / Preferences
        </label>
        <input
          type="text"
          id="flavors"
          name="flavors"
          value={formData.flavors}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-cake-pink/30 rounded-md focus:outline-none focus:ring-2 focus:ring-cake-pink"
          placeholder="e.g. Chocolate, Vanilla, Red Velvet, etc."
          required
        />
      </div>
      
      <div>
        <label htmlFor="referenceImg" className="block mb-2 font-medium">
          Upload Design Reference (optional)
        </label>
        <input
          type="file"
          id="referenceImg"
          name="referenceImg"
          onChange={handleFileChange}
          accept="image/*"
          className="w-full px-4 py-3 border border-cake-pink/30 rounded-md focus:outline-none focus:ring-2 focus:ring-cake-pink"
        />
        <p className="text-sm text-gray-500 mt-1">Max file size: 5MB. Supported formats: JPG, PNG, GIF</p>
      </div>
      
      <div>
        <label htmlFor="message" className="block mb-2 font-medium">
          Message / Instructions
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="w-full px-4 py-3 border border-cake-pink/30 rounded-md focus:outline-none focus:ring-2 focus:ring-cake-pink"
          placeholder="Tell us about your cake requirements"
        ></textarea>
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-accent w-full flex justify-center items-center"
      >
        {isSubmitting ? "Processing..." : "Place Order Request"}
      </button>
    </form>
  );
};

export default OrderForm;
