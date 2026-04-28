import React from 'react'

const Button = ({ text }) => {
  return (
    <button className="
      /* Layout: Ensure it fits the text but has a minimum tap target size */
      inline-flex items-center justify-center 
      
      /* Colors & Style */
      bg-bg text-black/70 font-semibold rounded-full 
      
      /* Sizing: Smaller on mobile (py-2 px-5), larger on desktop (md:py-2.5 md:px-8) */
      py-2 px-5 md:py-2.5 md:px-8 
      
      /* Typography: Scaling the text size for better readability */
      text-sm md:text-base
      
      /* Interaction & Transitions */
      hover:ring-4 ring-bg/40 cursor-pointer transition duration-300 
      active:scale-95 /* Added a small 'press' effect for mobile users */
      whitespace-nowrap /* Prevents text from wrapping inside the button */
    ">
      {text}
    </button>
  )
}

export default Button