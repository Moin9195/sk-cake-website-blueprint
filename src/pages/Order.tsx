
import OrderForm from "@/components/OrderForm";
import { CheckCircle2, Clock, Truck } from "lucide-react";

const Order = () => {
  const orderProcess = [
    {
      step: 1,
      title: "Place Your Order",
      description: "Fill out the order form with your cake requirements and preferences."
    },
    {
      step: 2,
      title: "Confirmation",
      description: "We'll contact you to confirm details, pricing, and availability."
    },
    {
      step: 3,
      title: "Payment",
      description: "Secure your order with a 50% advance payment."
    },
    {
      step: 4,
      title: "Cake Creation",
      description: "We'll craft your custom cake with care and attention to detail."
    },
    {
      step: 5,
      title: "Delivery/Pickup",
      description: "Your cake will be ready for delivery or pickup on the specified date."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-cake-pink/20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-playfair text-cake-brown mb-4">
              Place Your Order
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Tell us your idea, and we'll bring it to life in cake form!
            </p>
          </div>
        </div>
      </section>

      {/* Order Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold font-playfair text-cake-brown text-center mb-12">
            How Ordering Works
          </h2>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Process Steps */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-cake-pink/30 transform -translate-x-1/2"></div>
            {orderProcess.map((process, index) => (
              <div key={process.step} className="relative mb-12 last:mb-0">
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:ml-auto' : 'md:pl-12'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="bg-cake-gold text-white w-8 h-8 rounded-full flex items-center justify-center mb-4">
                      {process.step}
                    </div>
                    <h3 className="text-xl font-semibold font-playfair mb-2">{process.title}</h3>
                    <p>{process.description}</p>
                  </div>
                </div>
                <div className="hidden md:block absolute top-6 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-cake-pink border-4 border-white"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Form Section */}
      <section className="py-16 bg-cake-cream/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-3">
                <div className="bg-cake-pink/20 p-8 lg:col-span-1">
                  <h2 className="text-2xl font-semibold font-playfair text-cake-brown mb-6">
                    Order Information
                  </h2>
                  
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center mb-2">
                        <Clock className="text-cake-gold mr-2" size={18} />
                        <h3 className="font-semibold">Advance Notice</h3>
                      </div>
                      <p className="text-sm">
                        Standard cakes: 3-5 days<br />
                        Custom designs: 1-2 weeks<br />
                        Wedding cakes: 2-4 weeks
                      </p>
                    </div>
                    
                    <div>
                      <div className="flex items-center mb-2">
                        <Truck className="text-cake-gold mr-2" size={18} />
                        <h3 className="font-semibold">Delivery</h3>
                      </div>
                      <p className="text-sm">
                        Available within Delhi<br />
                        Delivery fee based on distance<br />
                        Pickup option available
                      </p>
                    </div>
                    
                    <div>
                      <div className="flex items-center mb-2">
                        <CheckCircle2 className="text-cake-gold mr-2" size={18} />
                        <h3 className="font-semibold">Payment</h3>
                      </div>
                      <p className="text-sm">
                        50% advance to confirm order<br />
                        Balance due before delivery<br />
                        Bank transfer, UPI, cards accepted
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="p-8 lg:col-span-2">
                  <h2 className="text-2xl font-semibold font-playfair text-cake-brown mb-6">
                    Place Your Order
                  </h2>
                  <OrderForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Notes */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold font-playfair text-cake-brown text-center mb-8">
              Important Information
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-playfair text-xl font-semibold mb-2">Custom Designs</h3>
                <p>For complex or unique designs, please provide reference images if possible. This helps us understand your vision better and create exactly what you're looking for.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-playfair text-xl font-semibold mb-2">Allergies & Dietary Restrictions</h3>
                <p>Please inform us about any allergies or dietary restrictions when placing your order. We can accommodate many special dietary needs, but we need to know in advance.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-playfair text-xl font-semibold mb-2">Rush Orders</h3>
                <p>Need a cake quickly? Contact us directly to discuss rush order availability. Additional charges may apply for expedited orders.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Order;
