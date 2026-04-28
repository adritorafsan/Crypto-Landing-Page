import React from 'react'
import Button from './Button'

const Conculation = () => {
  return (
    // Reduced margins for mobile (mt-12) vs desktop (mt-25)
    <div className='border-y border-secondary/20 mt-12 md:mt-25 mb-1'>
        <div className='max-w-full md:max-w-360 mx-auto border-x border-secondary/20 flex flex-col items-center justify-center gap-y-6 md:gap-y-7 py-12 md:py-18 px-4'>
                
                {/* 1. Changed max-w from 25% to 90% for mobile
                  2. Scaled text from 3xl (mobile) to 4xl (desktop)
                */}
                <h1 className='text-3xl md:text-4xl w-[90%] md:max-w-[25%] text-center text-primary font-normal leading-tight'>
                  Ready To Take Control of Your Crypto?
                </h1>

                {/* Adjusted max-w for mobile (95%) and text size (base)
                */}
                <p className='text-base md:text-lg w-[95%] md:max-w-[32%] text-secondary font-normal text-center'>
                  Join thousands of users who trust Cryptix for secure, seamless, and efficient cryptocurrency transactions.
                </p>

                <Button text={"Get started Now"}/>
        </div>
    </div>
  )
}

export default Conculation