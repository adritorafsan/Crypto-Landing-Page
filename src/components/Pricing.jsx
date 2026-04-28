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
            services: ["Trade 50+ cryptocurrencies", "Standard trading fees (0.8%)", "Basic Wallet Security", "Mobile and Desktop access", "Email support", "Market analysis tools", "Real-time price alerts"],
            btntext: "Get Started",
            btnbg: "bg-transparent "
        },
        {
            title: "Pro",
            price: yearly ? "$10" : "$12",
            description: "Advanced tools for serious traders",
            include: "Everything in Free, plus:",
            services: ["Reduced fees (0.5% per trade)", "Priority transaction processing", "Advanced Charting and indicators", "Portfolio analytics dashboard", "Stacking Rewards (up to 12% APY)", "API access for automation", "Priority Support (2 hour response)"],
            btntext: "Get Started",
            btnbg: "green"
        },
        {
            title: "Business",
            price: yearly ? "$32" : "$39",
            description: "Built for institutions and high-volume traders",
            include:"Everything in Pro, plus:",
            services: ["Ultra low fees (0.1% per trade)", "Dedicated account manager", "OTC desks for large orders", "White-label solutions", "Custom API limits", "Multi-user team accounts", "24/7 phone support"],
            btntext: "Get Started",
            btnbg: "bg-transparent "
        },
    ]

    return (
        <div className='border-y border-secondary/20 mt-12 md:mt-25 mb-1'>
            <div className='max-w-full md:max-w-360 mx-auto border-x border-secondary/20'>
                
                <div className='space-y-4 px-6 md:pl-3 py-10 md:py-4 md:pr-30 flex flex-col border-b border-secondary/20 text-center md:text-left'>
                    <h1 className='text-3xl md:text-5xl text-primary w-full md:max-w-[60%] font-normal md:self-start'>
                        Choose Your Plan. Start Trading Today.
                    </h1>
                    <p className='text-base md:text-xl text-secondary w-full md:max-w-[40%] md:self-end md:text-right'>
                        Transparent pricing for every investor. Scale as you grow with no hidden fees or surprise charges.
                    </p>
                </div>

                <div className='flex flex-col justify-center items-center pb-10'>
                    <div className='flex gap-x-3 md:gap-x-5 items-center my-8 justify-center'>
                        <p className={`text-lg md:text-2xl font-normal transition-colors ${!yearly ? "text-primary" : "text-secondary"}`}>Monthly</p>
                        <div 
                            onClick={() => setYearly(!yearly)} 
                            className={`w-[50px] md:w-[60px] h-[26px] md:h-[30px] cursor-pointer rounded-full border border-secondary/20 transition-all duration-200 flex items-center p-0.5 ${yearly ? "bg-bg" : "bg-transparent"}`}
                        >
                            <div className={`size-[20px] md:size-[24px] rounded-full transition-transform duration-200 transform ${yearly ? "translate-x-[24px] md:translate-x-[30px] bg-black" : "translate-x-0 bg-secondary"}`}></div>
                        </div>
                        <p className={`text-lg md:text-2xl font-normal transition-colors ${yearly ? "text-primary" : "text-secondary"}`}>Yearly</p>
                        <p className='text-[10px] md:text-sm bg-primary/10 border border-primary/20 text-primary rounded-full px-2 py-1 font-bold'>20% OFF</p>
                    </div>
                   
                    {/* GRID SETTINGS:
                        - grid-cols-1: 1 card per row on mobile (Total 3 rows)
                        - md:grid-cols-2: 2 cards on first row, 1 on second row (Total 2 rows)
                        - lg:grid-cols-3: All 3 cards on 1 row 
                    */}
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-6 px-6 md:px-10 lg:px-0'>
                        {pricingPlans.map((items, index) => {
                            return (
                                <div 
                                    key={index} 
                                    className={`w-full flex justify-center 
                                        /* This logic centers the 3rd card on tablets */
                                        ${index === 2 ? "md:col-span-2 lg:col-span-1" : "col-span-1"}
                                    `}
                                >
                                    <div className="w-full max-w-md lg:max-w-none h-full">
                                        <PricingCard 
                                            title={items.title} 
                                            price={items.price} 
                                            description={items.description} 
                                            services={items.services} 
                                            btntext={items.btntext} 
                                            include={items.include} 
                                            btnstyl={items.btnbg} 
                                        />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing