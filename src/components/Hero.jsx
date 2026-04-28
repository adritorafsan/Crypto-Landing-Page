import Button from './Button'
import Rating from './Rating'
import { FaGoogle } from "react-icons/fa";
import Heroimg from '../assets/homeimg.png'

const Hero = () => {
    return (
        /* Added px-4 to ensure content doesn't touch screen edges on mobile */
        <div className='max-w-full md:max-w-360 mx-auto py-10 md:py-15 font-primary flex flex-col justify-center items-center gap-y-10 px-4'>
            <div className='space-y-5 w-full'>
                <div className='flex flex-col justify-center items-center gap-y-6 md:gap-y-8'>
                    {/* 1. Scale text: 4xl on mobile, 6xl on desktop 
                        2. Scale width: 90% on mobile, 56% on desktop
                    */}
                    <h1 className='text-3xl md:text-6xl font-normal w-[90%] md:max-w-[56%] text-center text-primary leading-tight'>
                        Take Control of Your Digital Assets
                    </h1>
                    
                    <p className='text-base md:text-lg font-normal w-[95%] md:max-w-[56%] text-center text-secondary'>
                        Cryptix offers a secure experience for managing your digital assets. Instant transactions, optimized fees, and premium design.
                    </p>
                    
                    <Button text={"Get Started Now"} />
                </div>

                <div className='flex flex-col justify-center items-center space-y-1.5 mt-8'>
                    <p className="text-sm md:text-md text-secondary">They trust us</p>
                    <div className='flex items-center gap-x-1.5 text-primary'>
                        <Rating rating={4.9} />
                        <span className="text-sm md:text-base">4,9</span>
                        <FaGoogle className="text-sm md:text-base" />
                    </div>
                </div>
            </div>

            {/* Hero Image Container: Added w-full so image scales down on mobile */}
            <div className='mt-8 relative p-[1px] rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 w-full max-w-[95%] md:max-w-none'>
                <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-emerald-400/80 to-transparent blur-[4px]"
                    aria-hidden="true"
                />
                <img className='rounded-xl w-full h-auto' src={Heroimg} alt="Hero Image" />
            </div>

            {/* Bottom Quote: Expanded width for mobile readability */}
            <p className='text-primary text-xl md:text-3xl mt-10 md:mt-13 leading-relaxed md:leading-11 w-[95%] md:max-w-[44%] text-center'>
                Simplicity, performance, and security, empowering you to navigate the digital world with confidence and agility.
            </p>
        </div>
    )
}

export default Hero