import React from 'react'
import { FaCheck } from 'react-icons/fa6'
import Button2nd from '../Button2nd'

const PricingCard = ({ title, price, description, services = [], btntext, include, btnstyl }) => {
  return (
    <div className='
      p-6 md:p-4 
      /* Desktop: Keeps your right border */
      /* Mobile: Removes right border, adds bottom border for separation */
      border-r-0 md:border-r border-b md:border-b-0 border-secondary/20 
      last:border-b-0 md:last:border-r-0 
      w-full h-full flex flex-col justify-between
    '>
        <div className='flex flex-col gap-y-6 md:gap-y-8'>
            <h1 className='text-xl md:text-2xl font-medium text-primary'>{title}</h1>
            
            <p className='text-base md:text-lg font-normal text-secondary'>
                <span className='text-3xl md:text-4xl text-primary font-semibold'>{price}</span> /month
            </p>
            
            <p className='text-base md:text-lg font-normal text-secondary min-h-[3rem]'>
                {description}
            </p>
            
            <Button2nd btnstyl={btnstyl} text={btntext} />
        </div>

        <div className='flex flex-col space-y-6 md:space-y-8 mt-8'>
            {/* The "Includes" divider line */}
            <div className='flex justify-center items-center gap-x-2 w-full'>
                <span className='bg-secondary/20 h-[1px] flex-grow'></span>
                <p className='text-[12px] md:text-[14px] font-normal text-secondary whitespace-nowrap'>
                    {include}
                </p>
                <span className='flex-grow bg-secondary/20 h-[1px]'></span>
            </div>

            <div className='space-y-4'>
                {services.map((service, index) => (
                    /* Changed list item to be left-aligned for better readability on mobile */
                    <div key={index} className='flex items-start gap-x-3 text-sm md:text-lg text-secondary'>
                        <FaCheck className="mt-1 shrink-0 text-primary" />
                        <span className='leading-tight'>{service}</span>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default PricingCard