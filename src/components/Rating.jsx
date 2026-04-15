
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

const Rating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex text-black-400">
      {/* Full Stars */}
      {Array(fullStars).fill().map((_, i) => (
        <FaStar key={`full-${i}`} />
      ))}

      {/* Half Star */}
      {hasHalfStar && <FaStarHalfAlt />}

      {/* Empty Stars */}
      {Array(emptyStars).fill().map((_, i) => (
        <FaRegStar key={`empty-${i}`} />
      ))}
    </div>
  );
};

export default Rating;