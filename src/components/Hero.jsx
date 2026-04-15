
import Button from './Button'
import Rating from './Rating'
import { FaGoogle } from "react-icons/fa";
import Heroimg from '../assets/homeimg.png'


const Hero = () => {
    return (
        <div className='max-w-360 mx-auto py-15 font-primary flex flex-col justify-center items-center gap-y-10'>
            <div className=' space-y-5'>
                <div className=' flex flex-col justify-center items-center gap-y-8'>
                    <h1 className=' text-6xl font-normal max-w-[56%] text-center text-primary'>Take Control of Your Digital Assets</h1>
                    <p className=' text-lg font-normal max-w-[56%] text-center text-secondary'>Cryptix offers a secure experience for managing your digital assets. Instant transactions, optimized fees, and premium design.</p>
                    <Button text={"Get Started Now"} />
                </div>
                <div className='flex flex-col justify-center items-center space-y-1.5 mt-8'>
                    <p className=" text-md text-secondary">They trust us</p>
                    <div className=' flex items-center gap-x-1.5 text-primary'>
                        <Rating rating={4.9} />
                        <span>4,9</span>
                        <FaGoogle />
                    </div>
                </div>
            </div>
            <div className='mt-8 relative p-[1px] rounded-2xl overflow-hidden bg-zinc-900 border border-white/10'>
               <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-emerald-400/80 to-transparent blur-[4px]" 
        aria-hidden="true"
      />
               

                <img className='  rounded-xl' src={Heroimg} alt="Hero Image" />
            </div>
        </div>
    )
}

export default Hero