import testi1 from "../assets/testi1.png"
import testi2 from "../assets/testi2.png"
import testi3 from "../assets/test3.png"
import TestimonialCard from "./TestimonialCard"
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { useState } from "react"

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testtimonials = [
    <TestimonialCard image={testi1} heading="“Cryptix makes crypto trading effortless. Fast transactions, low fees, and a sleek interface—exactly what I needed.”" name="Adrito R" work="Blockchain Analyst at NovaChainrader" number="1/3" />,
    <TestimonialCard image={testi2} heading="“Security and ease of use are my top priorities. Cryptix delivers on both with style.”" name="Sophie L" work="Blockchain AnalLead Developer at Quantum Ledger" number="2/3" />,
    <TestimonialCard image={testi3} heading="'Cryptix makes buying and converting crypto incredibly intuitive. No more juggling between platforms, everything is here, fully optimized.'" name="Brownee Z." work="Blockchain enthusiast" number="3/3" />
  ]

  const Next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testtimonials.length);
  }
  const Prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testtimonials.length) % testtimonials.length);
  }
    
  return (
    <div className='border-y border-secondary/20 mt-12 md:mt-25 mb-1'>
      <div className='max-w-full md:max-w-360 mx-auto border-x border-secondary/20 '>
        
        {/* Header: Responsive widths and alignment */}
        <div className='space-y-4 px-6 md:pl-3 py-10 md:py-4 md:pr-30 flex flex-col border-b border-secondary/20 text-center md:text-left'>
          <h1 className='text-3xl md:text-5xl text-primary w-full md:max-w-[60%] font-normal md:self-start'>
            Trusted by Crypto Enthusiasts Worldwide
          </h1>
          <p className='text-base md:text-xl text-secondary w-full md:max-w-[40%] md:self-end md:text-right'>
            Join a growing community of investors who choose Cryptix for its seamless experience, security, and premium design.
          </p>
        </div>

        {/* Slider Section: 
            Changed from 'flex' (horizontal) to 'flex-col' on mobile 
        */}
        <div className="flex flex-col md:flex-row justify-between">
          
          <div className="flex-1 w-full">
            {testtimonials[currentIndex]}
          </div>

          {/* Navigation Controls:
              1. Mobile: Two columns at the bottom
              2. Desktop: Stacked on the right side
          */}
          <div className="flex flex-row md:flex-col md:flex-2 items-end justify-end border-t md:border-t-0 md:border-l border-secondary/20 w-full md:w-auto">
            <button 
              onClick={Prev} 
              className="bg-black/50 text-secondary cursor-pointer w-1/2 md:w-full flex justify-center md:justify-end gap-x-3 md:gap-x-5 items-center border-r md:border-r-0 border-t-0 md:border-t border-secondary/20 py-5 md:py-4 px-8 hover:bg-secondary/20 transition-colors duration-200"
            >
              <FaChevronLeft /> <span className="uppercase text-xs md:text-base font-semibold">prev</span>
            </button>
            
            <button 
              onClick={Next} 
              className="bg-black/50 text-secondary cursor-pointer w-1/2 md:w-full flex justify-center md:justify-end gap-x-3 md:gap-x-5 items-center border-t-0 md:border-t border-secondary/20 py-5 md:py-4 px-8 hover:bg-secondary/20 transition-colors duration-200"
            >
              <span className="uppercase text-xs md:text-base font-semibold">next</span> <FaChevronRight />
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Testimonial