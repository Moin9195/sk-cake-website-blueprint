
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Cake } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Our Cakes", path: "/services" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <Cake className="h-8 w-8 text-cake-gold mr-2" />
          <span className="text-2xl font-bold font-playfair text-cake-brown">SK Cake</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-medium transition-colors hover:text-cake-gold ${
                location.pathname === link.path ? "text-cake-gold" : "text-cake-brown"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/order"
            className="bg-cake-gold text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors"
          >
            Order Now
          </Link>
        </nav>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden text-cake-brown" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`py-2 font-medium transition-colors hover:text-cake-gold ${
                    location.pathname === link.path ? "text-cake-gold" : "text-cake-brown"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/order"
                className="bg-cake-gold text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors text-center mt-2"
              >
                Order Now
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
