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
        <div className='border-y border-secondary/20 mt-25 mb-1'>
            <div className='max-w-360 mx-auto border-x border-secondary/20 '>
                <div className='space-y-3 pl-3 py-4 pr-30 flex flex-col'>
                    <h1 className='text-5xl text-primary max-w-[60%] font-normal self-start'>Trusted by Crypto Enthusiasts Worldwide</h1>
                    <p className='text-xl text-right text-secondary max-w-[40%] self-end '>Join a growing community of investors who choose Cryptix for its seamless experience, security, and premium design.</p>
                </div>
                <div className="border-t border-t-secondary/20 flex justify-between">
                    {testtimonials[currentIndex]}

                    <div className="flex-2 flex flex-col items-end justify-end border-l border-l-secondary/20">
                        <button onClick={Prev} className={`bg-black/50 text-secondary cursor-pointer w-full text-end flex gap-x-5 items-center border-t border-t-secondary/20 py-4 px-8  hover:bg-secondary/20 transition-colors duration-200 space-x-2 `}>
                            <FaChevronLeft />   previous
                        </button>
                        <button onClick={Next} className={`bg-black/50 text-secondary cursor-pointer w-full text-end flex gap-x-5 items-center border-t border-t-secondary/20 py-4 px-8  hover:bg-secondary/20 transition-colors duration-200 space-x-2`}>
                            next <FaChevronRight />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial