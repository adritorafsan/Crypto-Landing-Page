import React, { useState } from 'react'
import PricingCard from './PricingCard'

const Pricing = () => {
    const [yearly, setYearly] = useState(false);

    const pricingPlans = [
        {
            title: "Free",
            price: yearly ? "$0" : "$0",
            description: "Perfect for beginners exploring crypto trading",
            include: "Included",
            services: ["Trade 50+ cryptocurrencies",
                "Standard trading fees (0.8%)",
                "Basic Wallet Security",
                "Mobile and Desktop access",
                "Email support",
                "Market analysis tools",
                "Real-time price alerts"],
            btntext: "Get Started",
            btnbg: "bg-transparent "
        },
        {
            title: "Pro",
            price: yearly ? "$10" : "$12",
            description: "Advanced tools for serious traders",
            include: "Everything in Free, plus:",
            services: [
                "Reduced fees (0.5% per trade)",
                "Priority transaction processing",
                "Advanced Charting and indicators",
                "Portfolio analytics dashboard",
                "Stacking Rewards (up to 12% APY)",
                "API access for automation",
                "Priority Support (2 hour response)"
            ],
            btntext: "Get Started",
            btnbg: "green"
        },
        {
            title: "Business",
            price: yearly ? "$32" : "$39",
            description: "Built for institutions and high-volume traders",
            include:"Everything in Pro, plus:",
            services: ["Ultra low fees (0.1% per trade)",
                "Dedicated account manager",
                "OTC desks for large orders",
                "White-label solutions",
                "Custom API limits",
                "Multi-user team accounts",
                "24/7 phone support"],
            btntext: "Get Started",
            btnbg: "bg-transparent "
        },
    ]


    return (
        <div className='border-y border-secondary/20 mt-25 mb-1'>
            <div className='max-w-360 mx-auto border-x border-secondary/20 '>
                <div className='space-y-3 pl-3 py-4 pr-30 flex flex-col border-b border-secondary/20'>
                    <h1 className='text-5xl text-primary max-w-[60%] font-normal self-start'>Choose Your Plan. Start Trading Today.</h1>
                    <p className='text-xl text-right text-secondary max-w-[40%] self-end '>Transparent pricing for every investor. Scale as you grow with no hidden fees or surprise charges</p>
                </div>

                <div className='fle flex-col justify-center items-center'>
                    <div className='flex gap-x-5 items-center mt-6 justify-center'>
                        <p className='text-secondary text-2xl font-normal'>Monthly</p>
                        <p onClick={() => setYearly(!yearly)} className={`w-[60px] h-[30px] cursor-pointer rounded-full border border-secondary/20  transition-all duration-200 flex  ease-out ${yearly ? "bg-bg items-center justify-end" : "bg-transparent"}`}><span className={`size-[29px] rounded-full bg-bg ${yearly ? "bg-black" : ""} `}></span></p>
                        <p className='text-secondary text-2xl font-normal'>Yearly</p>
                        <p className='w-[100px] h-[35px] bg-transparent border text-secondary rounded-4xl flex items-center justify-center border-secondary/20 shadow-2xl font-medium text-xl text-center px-1 py-1.5 '>20% OFF</p>
                    </div>
                   
                   <div className='flex w-full  justify-center items-center gap-x-3'>
                    
                     {
                        pricingPlans.map((items)=>{
                            return <PricingCard title={items.title} price={items.price} description={items.description} services={items.services} btntext={items.btntext} include={items.include} btnstyl={items.btnbg} />
                        })
                    }
                    </div >
                </div>
            </div>
        </div>
    )
}

export default Pricing