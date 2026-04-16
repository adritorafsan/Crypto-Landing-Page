import { GoHomeFill } from "react-icons/go";
import { AiTwotoneThunderbolt } from "react-icons/ai";
import { MdWorkspacePremium } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import BenefitCard from "./BenefitCard";


const Benefits = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-y-14 mt-30'>
        <div className=' flex flex-col justify-center items-center gap-y-3 max-w-360 mx-auto '>
            <h1 className='font-semibold text-3xl text-primary max-w-[45%]'>Why Choose Crptyx ?</h1>
            <p className=' text-lg text-secondary max-w-[65%] text-center'>Benefits designed to provide a seamless, secure, and accessible experience for all users.</p>
        </div>
        <div className="w-full border border-y-secondary/20">
            <div className=" flex border-x border-secondary/20 max-w-360 mx-auto">
                <BenefitCard special icon={<GoHomeFill />} title={"Maximum Security"} description={"Your assets are protected with cutting-edge security protocols."} />
                <BenefitCard icon={<AiTwotoneThunderbolt />} title={"Instant Transactions"} description={"Execute your transactions in real-time, without delays."} />
                <BenefitCard icon={<TiTick />} title={"Optimized Fees"} description={"Benefit from some of the lowest fees on the market."} />
                <BenefitCard icon={<MdWorkspacePremium />} title={"Premium Interface"} description={"An intuitive design that’s easy to use, even for beginners."} /> 
            </div>
        </div>
    </div>
  )
}

export default Benefits