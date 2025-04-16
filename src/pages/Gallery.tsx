
import { useState } from 'react';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const cakeGallery = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      category: 'birthday',
      title: 'Chocolate Birthday Cake'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1535254973040-607b474d7321?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      category: 'wedding',
      title: 'Elegant Wedding Cake'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1562777717-dc6984f65a63?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      category: 'cupcakes',
      title: 'Strawberry Cupcakes'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1563778084459-859099e48677?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      category: 'anniversary',
      title: 'Gold Anniversary Cake'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1568051243858-47a6ffe36a9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      category: 'birthday',
      title: 'Vanilla Birthday Cake'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1557925923-cd4648e211a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      category: 'baby-shower',
      title: 'Baby Shower Cake'
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      category: 'wedding',
      title: 'Rustic Wedding Cake'
    },
    {
      id: 8,
      image: 'https://images.unsplash.com/photo-1587668178277-295251f900ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      category: 'cupcakes',
      title: 'Mini Cupcakes Set'
    },
    {
      id: 9,
      image: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      category: 'custom',
      title: 'Custom Themed Cake'
    },
    {
      id: 10,
      image: 'https://images.unsplash.com/photo-1562777717-dc6984f65a63?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      category: 'cupcakes',
      title: 'Birthday Cupcakes'
    },
    {
      id: 11,
      image: 'https://images.unsplash.com/photo-1559620192-032c4bc4674e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      category: 'anniversary',
      title: 'Heart Anniversary Cake'
    },
    {
      id: 12,
      image: 'https://images.unsplash.com/photo-1542826438-bd32f43d626f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      category: 'custom',
      title: 'Rainbow Celebration Cake'
    },
  ];

  const categories = [
    { id: 'all', label: 'All Cakes' },
    { id: 'birthday', label: 'Birthday' },
    { id: 'wedding', label: 'Wedding' },
    { id: 'anniversary', label: 'Anniversary' },
    { id: 'baby-shower', label: 'Baby Shower' },
    { id: 'cupcakes', label: 'Cupcakes' },
    { id: 'custom', label: 'Custom Designs' },
  ];

  const filteredGallery = activeFilter === 'all' 
    ? cakeGallery 
    : cakeGallery.filter(item => item.category === activeFilter);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-cake-pink/20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-playfair text-cake-brown mb-4">
              A Slice of Our Creations
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Take a look at some of the beautiful cakes we've designed for birthdays, weddings, baby showers, and more!
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Filter Buttons */}
          <div className="mb-12 flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  activeFilter === category.id
                    ? 'bg-cake-gold text-white'
                    : 'bg-cake-cream text-cake-brown hover:bg-cake-pink/50'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredGallery.map((item) => (
              <div key={item.id} className="cake-card group">
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cake-brown/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                    <h3 className="text-white font-playfair text-lg">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Order CTA */}
      <section className="py-16 bg-cake-cream/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold font-playfair text-cake-brown mb-6">
            Ready to Order Your Custom Cake?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            See something you like or have your own design in mind? Contact us to discuss your cake requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary">
              Contact Us
            </a>
            <a href="/order" className="btn-accent">
              Order Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
