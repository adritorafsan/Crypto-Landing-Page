import work1 from '../assets/work1.png'
import work2 from '../assets/work2.png'
import work3 from '../assets/work3.png'
import Button2 from './Button2'

const HowWorks = () => {
    return (
        <div className='border-y border-secondary/20 mt-12 md:mt-25 mb-1'>
            {/* 1. Mobile: Default to 1 column
                2. Desktop: Switch back to 3 columns
            */}
            <div className='max-w-full md:max-w-360 mx-auto border-x border-secondary/20 grid grid-cols-1 md:grid-cols-3'>
                
                {/* Header: 
                    1. Mobile: Takes 1 full column, text centered.
                    2. Desktop: Takes 2 columns (col-span-2), text left-aligned.
                */}
                <div className='col-span-1 md:col-span-2 px-6 md:px-3 py-8 md:py-6 space-y-4 border-r-0 md:border-r border-b border-secondary/20 text-center md:text-left'>
                    <h1 className='text-3xl md:text-4xl text-primary'>How It Works</h1>
                    <p className='text-lg md:text-xl text-secondary max-w-full md:max-w-[50%] mx-auto md:mx-0'>
                        A simple, fast, and secure platform to manage your cryptocurrencies in just a few steps.
                    </p>
                </div>

                {/* Button Container:
                    Full width on mobile to maintain list-style design.
                */}
                <div className='flex items-end border-b border-secondary/20 md:border-b-0'>
                    <Button2 customBorder={"md:border-b md:border-b-secondary/20"} text={"Create Account Now"} />
                </div>

                {/* Step Cards:
                    1. Mobile: Stacked, centered content.
                    2. Desktop: 3 across.
                    3. Border logic: Remove right-border on mobile to avoid stray lines.
                */}
                <div className='flex flex-col gap-y-2 px-6 py-8 md:px-3 md:py-6 border-b md:border-b-0 md:border-r border-secondary/20 items-center md:items-start text-center md:text-left'>
                    <img src={work1} alt="Work 1" className="w-24 md:w-auto" />
                    <h3 className='mt-3 text-xl md:text-2xl text-primary'>Create Your Account</h3>
                    <p className='text-sm md:text-md text-secondary max-w-[90%] md:max-w-[80%]'>Sign up easily and secure your profile in just a few steps.</p>
                </div>

                <div className='flex flex-col gap-y-2 px-6 py-8 md:px-3 md:py-6 border-b md:border-b-0 md:border-r border-secondary/20 items-center md:items-start text-center md:text-left'>
                    <img src={work2} alt="Work 2" className="w-24 md:w-auto" />
                    <h3 className='mt-3 text-xl md:text-2xl text-primary'>Fund Your Wallet</h3>
                    <p className='text-sm md:text-md text-secondary max-w-[90%] md:max-w-[80%]'>Deposit your cryptos or make a transfer to start trading.</p>
                </div>

                <div className='flex flex-col gap-y-2 px-6 py-8 md:px-3 md:py-6 border-b-0 md:border-r border-secondary/20 items-center md:items-start text-center md:text-left'>
                    <img src={work3} alt="Work 3" className="w-24 md:w-auto" />
                    <h3 className='mt-3 text-xl md:text-2xl text-primary'>Buy, Sell, or Convert</h3>
                    <p className='text-sm md:text-md text-secondary max-w-[90%] md:max-w-[80%]'>Enjoy the simplicity of a platform that makes every transaction seamless in real-time.</p>
                </div>

            </div>
        </div>
    )
}

export default HowWorks