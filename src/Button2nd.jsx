const Button2nd = ({ text, btnstyl }) => {
  return (
    <button className={`
      /* 1. Logic for the 'Pro' (green) vs 'Free/Business' styles 
         2. Added w-full so it fills the PricingCard container on mobile
         3. Adjusted padding: py-2.5 for a better mobile tap target
      */
      ${btnstyl === "green" 
        ? "bg-bg text-black hover:bg-bg/80" 
        : "bg-black/80 text-white/70 hover:bg-secondary/20"
      } 
      border border-secondary/20 font-semibold 
      py-2.5 px-6 rounded-full w-full
      text-sm md:text-base
      cursor-pointer transition-all duration-300 
      active:scale-95
    `}>
      {text}
    </button>
  )
}

export default Button2nd