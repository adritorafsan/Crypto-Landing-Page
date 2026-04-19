import React from 'react'
import { FaCheck } from 'react-icons/fa6'
import Button2nd from '../Button2nd'

const PricingCard = ({ title, price, description, services = [], btntext, include, btnstyl}) => {
  
    return (
        <div className='p-4 border-r border-r-secondary/20 w-full '>
            <div className='flex flex-col gap-y-8'>
                <h1 className='text-2xl font-medium'>{title}</h1>
                <p className='text-lg font-normal text-secondary'><span className='text-4xl text-primary font-semibold'>{price}</span> /month</p>
                <p className='text-lg font-normal text-secondary'>{description}</p>
                <Button2nd btnstyl={btnstyl} text={btntext} />
            </div>
            <div className='flex flex-col space-y-8'>
                <div className='flex justify-center items-center gap-x-2 w-full mt-4'><span className=' bg-secondary/20 h-[1px] w-[30%]'></span><p className='text-[14px] font-normal text-secondary'>{include}</p><span className='w-[30%] bg-secondary/20 h-[1px]'></span></div>
                <div>
                    {services.map((service, index) => {
                        return <ul className='flex flex-col ' key={index}>
                            <li className='list-none text-center flex items-center gap-x-1.5 text-lg text-secondary'><FaCheck />{service}</li>
                        </ul>
                    })}
                </div>

            </div>
        </div>
    )
}

export default PricingCard