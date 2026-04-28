import { FaChevronRight } from "react-icons/fa";

const Button2 = ({ text, customBorder }) => {
  return (
    <button
      className={`
        /* Layout: full width by default, flex for icon alignment */
        w-full flex items-center justify-between md:justify-start 
        bg-black/50 text-bg cursor-pointer text-start 
        
        /* Borders: maintaining your desktop logic while ensuring visibility */
        border-t border-secondary/20 
        
        /* Padding: slightly tighter on mobile (py-3 px-6) for better screen usage */
        py-3 px-6 md:py-4 md:px-8 
        
        /* Spacing & Typography */
        gap-x-4 md:gap-x-5 text-sm md:text-base
        
        /* Effects */
        hover:bg-bg/20 transition-colors duration-200 
        active:bg-bg/30 /* Visual feedback for mobile taps */
        ${customBorder}
      `}
    >
      <span className="font-medium">{text}</span>
      <FaChevronRight className="text-xs md:text-sm" />
    </button>
  );
};

export default Button2;