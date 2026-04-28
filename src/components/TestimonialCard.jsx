import React from 'react'

const TestimonialCard = ({image, heading, name, work, number}) => {
    return (
        /* 1. Added md:flex-4 to maintain your desktop ratio
           2. Changed padding: px-6 on mobile for more space, px-8 on desktop 
        */
        <div className='bg-radial-[at_25%_35%] from-primary/50 to-zinc to-95% flex gap-y-8 md:gap-y-10 flex-col py-8 md:py-6 px-6 md:px-8 flex-none md:flex-4 w-full'>
            
            {/* Scaled image size slightly for mobile */}
            <img className="size-[40px] md:size-[50px] rounded-full object-cover" src={image} alt={name} />
            
            {/* 1. Scaled heading: text-2xl on mobile, text-3xl on desktop
               2. Expanded width for mobile readability
            */}
            <h2 className="text-2xl md:text-3xl font-normal w-full md:max-w-[90%] text-primary leading-tight">
                {heading}
            </h2>

            {/* Bottom info section */}
            <div className="flex flex-row items-end justify-between w-full md:max-w-[90%] gap-x-4">
                <div className="space-y-1 md:space-y-2">
                    {/* Scaled name and work text */}
                    <h1 className="text-xl md:text-2xl font-normal text-primary whitespace-nowrap">
                        {name}
                    </h1>
                    <p className="text-secondary text-sm md:text-md leading-snug">
                        {work}
                    </p>
                </div>
                
                {/* Number indicator: Fixed width on mobile to prevent layout shift */}
                <p className="text-primary text-sm md:text-base font-medium shrink-0">
                    {number}
                </p>
            </div>
        </div>
    )
}

export default TestimonialCard