import React, { useState } from 'react'
import Button2 from './Button2'
import FaqCard from './FaqCard'

const Faq = () => {
    const faqData = [
        {
            question: "What is Cryptix?",
            answer: "Cryptix is a next-generation platform for buying, selling, and converting cryptocurrencies with real-time market insights."
        },
        {
            question: "Is Cryptix secure?",
            answer: "Yes, Cryptix uses top-tier encryption, multi-layer security, and cold storage solutions to keep your assets safe."
        },
        {
            question: "Which cryptocurrencies are supported?",
            answer: "Cryptix supports a vast range of cryptocurrencies, including Bitcoin (BTC), Ethereum (ETH), and many others."
        },
        {
            question: "What are the fees for transactions??",
            answer: "We optimize transaction fees to offer the best rates. You’ll always see the fee before confirming a transaction."
        },
        {
            question: "How fast are transactions?",
            answer: "Most transactions are processed instantly, but network congestion may cause slight delays."
        },
        {
            question: "Do I need to verify my identity?",
            answer: "Yes, for security and compliance, identity verification is required for certain transactions."
        },
        {
            question: "Can I access Cryptix on mobile?",
            answer: "Yes, Cryptix is fully optimized for both desktop and mobile, ensuring a seamless experience everywhere.."
        },
        {
            question: "How can I contact support?",
            answer: "Our support team is available 24/7. Reach out via chat or email for any assistance."
        },
    ]
    const [activeIndex, setActiveindex] = useState(null);

    return (
        <div className='border-y border-secondary/20 mt-12 md:mt-25 mb-1'>
            <div className='max-w-full md:max-w-360 mx-auto border-x border-secondary/20'>

                {/* Header Section: 
                    Changed to flex-col for mobile to stack the title and button.
                */}
                <div className='flex flex-col md:flex-row px-0 md:px-4 border-b border-b-secondary/20'>
                    <div className='flex flex-col gap-y-4 flex-none md:flex-4 border-b md:border-b-0 md:border-r border-secondary/20 px-6 md:px-4 py-8 md:py-5 text-center md:text-left'>
                        <h1 className='text-3xl md:text-4xl font-normal text-primary'>
                            Your Questions, Answered
                        </h1>
                        <p className='text-base md:text-lg font-normal text-secondary'>
                            Find everything you need to know about Cryptix, from security to supported assets.
                        </p>
                    </div>
                    
                    {/* Button container: 
                        Full width on mobile to make Button2 act as a wide list-item.
                    */}
                    <div className='flex-none md:flex-2 flex items-end w-full'>
                        <Button2 text={"Create account Now"} />
                    </div>
                </div>

                {/* Grid Section:
                    Switched from grid-cols-2 to responsive grid.
                    1 column on mobile, 2 columns on tablets/desktop.
                */}
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    {faqData.map((faq, index) => {
                        return (
                            <FaqCard 
                                key={index}
                                onClick={() => setActiveindex((prevIndex) => prevIndex === index ? null : index)} 
                                isActive={index === activeIndex} 
                                index={index} 
                                question={faq.question} 
                                answer={faq.answer} 
                                /* Note: Your 'special' logic for borders might need adjustment in FaqCard 
                                   to look perfect in a 1-column mobile layout. */
                                special={index === 0 || index === 2 || index === 4 || index === 6} 
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Faq