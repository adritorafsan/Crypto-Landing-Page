import work1 from '../assets/work1.png'
import work2 from '../assets/work2.png'
import work3 from '../assets/work3.png'
import Button2 from './Button2'

const HowWorks = () => {
    return (
        <div className='border-y border-secondary/20 mt-25 mb-1'>
            <div className='max-w-360 mx-auto border-x border-secondary/20 grid grid-cols-3'>
                <div className=' col-span-2 px-3 py-6 space-y-4 border-r border-r-secondary/20 border-b border-b-secondary/20 '>
                    <h1 className='text-4xl text-primary'>How It Works</h1>
                    <p className=' text-xl text-secondary max-w-[50%]'>A simple, fast, and secure platform to manage your cryptocurrencies in just a few steps.</p>
                </div>
                <div className=' flex items-end'>
                    <Button2 customBorder={"border-b border-b-secondary/20"} text={"Create Account Now"} />
                </div>

                <div className='flex flex-col gap-y-2 px-3 py-6 border-r border-secondary/20'>
                    <img src={work1} alt="Work 1" />
                    <h3 className='mt-3 text-2xl text-primary'>Create Your Account</h3>
                    <p className=' text-md text-secondary max-w-[80%]'>Sign up easily and secure your profile in just a few steps.</p>
                </div>
                <div className='flex flex-col gap-y-2 px-3 py-6 border-r border-secondary/20'>
                    <img src={work2} alt="Work 2" />
                    <h3 className='mt-3 text-2xl text-primary'>Fund Your Wallet</h3>
                    <p className=' text-md text-secondary max-w-[80%]'>Deposit your cryptos or make a transfer to start trading.</p>
                </div>
                <div className='flex flex-col gap-y-2 px-3 py-6 border-r border-secondary/20'>
                    <img src={work3} alt="Work 3" />
                    <h3 className='mt-3 text-2xl text-primary'>Buy,sell, or Convert</h3>
                    <p className=' text-md text-secondary max-w-[80%]'>Enjoy the simplicity of a platform that makes every transaction seamless in real-time.</p>
                </div>

            </div>
        </div>
    )
}

export default HowWorks