
import { Link } from "react-router-dom";

interface CakeCardProps {
  title: string;
  image: string;
  category: string;
  link?: string;
  className?: string;
}

const CakeCard = ({ title, image, category, link = "/services", className = "" }: CakeCardProps) => {
  return (
    <div className={`cake-card group ${className}`}>
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-white bg-opacity-90 px-3 py-1 rounded-full text-sm font-medium text-cake-brown">
            {category}
          </span>
        </div>
      </div>
      <div className="p-4 text-center">
        <h3 className="font-playfair font-semibold text-xl mb-2">{title}</h3>
        <Link 
          to={link}
          className="inline-block text-cake-gold hover:underline"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default CakeCard;
