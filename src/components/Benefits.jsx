import { GoHomeFill } from "react-icons/go";
import { AiTwotoneThunderbolt } from "react-icons/ai";
import { MdWorkspacePremium } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import BenefitCard from "./BenefitCard";

const Benefits = () => {
  return (
    // Reduced top margin for mobile (mt-16) vs desktop (mt-30)
    <div className='flex flex-col justify-center items-center gap-y-10 md:gap-y-14 mt-16 md:mt-30 px-4 md:px-0'>
        
        <div className='flex flex-col justify-center items-center gap-y-3 max-w-360 mx-auto text-center'>
            {/* Changed max-w from 45% to 90% on mobile so the text isn't a thin column. 
               Adjusted text size for mobile (text-2xl) vs desktop (text-3xl).
            */}
            <h1 className='font-semibold text-2xl md:text-3xl text-primary max-w-[90%] md:max-w-[45%]'>
              Why Choose Crptyx?
            </h1>
            <p className='text-base md:text-lg text-secondary max-w-[95%] md:max-w-[65%]'>
              Benefits designed to provide a seamless, secure, and accessible experience for all users.
            </p>
        </div>

        <div className="w-full border-y border-secondary/20">
            {/* 1. Changed 'flex' to 'grid'
               2. Mobile: 1 column (grid-cols-1)
               3. Tablet: 2 columns (md:grid-cols-2)
               4. Desktop: 4 columns (lg:grid-cols-4)
            */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-x border-secondary/20 max-w-360 mx-auto">
                <BenefitCard 
                  special 
                  icon={<GoHomeFill />} 
                  title={"Maximum Security"} 
                  description={"Your assets are protected with cutting-edge security protocols."} 
                />
                <BenefitCard 
                  icon={<AiTwotoneThunderbolt />} 
                  title={"Instant Transactions"} 
                  description={"Execute your transactions in real-time, without delays."} 
                />
                <BenefitCard 
                  icon={<TiTick />} 
                  title={"Optimized Fees"} 
                  description={"Benefit from some of the lowest fees on the market."} 
                />
                <BenefitCard 
                  icon={<MdWorkspacePremium />} 
                  title={"Premium Interface"} 
                  description={"An intuitive design that’s easy to use, even for beginners."} 
                /> 
            </div>
        </div>
    </div>
  )
}

export default Benefits