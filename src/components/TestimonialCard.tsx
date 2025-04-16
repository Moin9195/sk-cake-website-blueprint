
import { Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  rating?: number;
  className?: string;
}

const TestimonialCard = ({ quote, author, rating = 5, className = "" }: TestimonialCardProps) => {
  return (
    <div className={`bg-white rounded-lg p-6 shadow-md ${className}`}>
      <div className="flex mb-4">
        {Array(rating)
          .fill(null)
          .map((_, index) => (
            <Star key={index} size={18} className="text-cake-gold fill-cake-gold" />
          ))}
      </div>
      <blockquote>
        <p className="text-lg italic mb-4">"{quote}"</p>
        <footer className="font-semibold">– {author}</footer>
      </blockquote>
    </div>
  );
};

export default TestimonialCard;
