import React from 'react'

const BenefitCard = ({ icon, title, description, special }) => {
  return (
    <div className={`
      flex flex-col gap-y-1.5 p-6 md:p-3 
      /* Mobile: No left border, maybe a bottom border instead? */
      /* Desktop: Restore the border-l you created */
      border-l-0 md:border-l border-secondary/20 
      ${special ? "md:border-none" : ""} 
      /* Optional: Add a separator for mobile users */
      border-b md:border-b-0 last:border-b-0
    `}> 
        {/* Icon container: Centered on mobile, left-aligned on desktop */}
        <div className='size-12 md:size-15 mb-4 md:mb-6 text-xl md:text-2xl text-white bg-transparent border border-secondary rounded-full flex justify-center items-center mx-auto md:mx-0'>
            {icon}
        </div>

        {/* Text: Centered on mobile for better readability */}
        <h2 className='font-semibold text-lg md:text-xl text-primary text-center md:text-left'>
            {title}
        </h2>
        
        <p className='text-secondary text-sm md:text-md max-w-full md:max-w-100 text-center md:text-left'>
            {description}
        </p>
    </div>
  )
}

export default BenefitCard