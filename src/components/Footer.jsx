import Logo from "../assets/logo.png"
import face from '../assets/face.png'

const Footer = () => {
    const footerData = [
        {
            title: "Navigation",
            tags: ["Why Cryptix?", "Crptos", "How it works", "FAQ", "404"]
        },
        {
            title: "Social",
            tags: ["Twitter(X)", "Instagram", "LinkedIn"]
        },
    ]

    return (
        <div className=''>
            {/* 1. Changed 'flex' to 'flex-col' for mobile
                2. Removed 'justify-between' on mobile and centered items
                3. Adjusted padding for mobile (py-10) vs desktop (py-13)
            */}
            <div className='max-w-full md:max-w-360 mx-auto border-x border-secondary/20 px-6 md:px-7 py-10 md:py-13 flex flex-col md:flex-row items-center md:items-start justify-between gap-y-12 md:gap-y-0'>

                <div className='flex flex-col justify-between flex-none md:flex-6 items-center md:items-start text-center md:text-left'>
                    
                    <div className='space-y-6 flex flex-col items-center md:items-start'>
                        <div className="flex items-center gap-x-2">
                            <img src={Logo} alt="Logo" className="w-8 h-8 md:w-auto" />
                            <h1 className="text-2xl md:text-3xl font-primary font-medium text-white">Cryptix</h1>
                        </div>
                        {/* 1. Changed max-w from 45% to 90% on mobile
                            2. Scaled text size down slightly for mobile
                        */}
                        <p className='text-base md:text-lg font-medium max-w-[90%] md:max-w-[45%] text-secondary'>
                            Secure, fast, and seamless crypto trading. Cryptix makes digital assets effortless.
                        </p>
                    </div>

                    <div className='flex gap-x-2 text-secondary items-center mt-8 md:mt-6'>
                        <h1 className="text-sm md:text-base">Created By</h1>
                        <img className="size-[25px] md:size-[30px] rounded-full" src={face} alt="Adrito Rafsan" />
                        <p className='text-xl md:text-2xl font-bold text-primary'>Adrito Rafsan</p>
                    </div>

                </div>

                {/* Navigation Links:
                    1. Changed 'flex-row' (default from parent) to stay flex but with gap
                    2. Removed 'mr-16' on mobile to keep it centered
                */}
                <div className="flex flex-row items-start justify-center md:justify-between gap-x-12 md:gap-x-0 flex-none md:flex-2 md:mr-16 w-full md:w-auto">
                    {footerData.map((item, index) => {
                        return (
                            <div key={index} className='flex flex-col gap-y-3 items-center md:items-start'>
                                <h1 className='text-xl md:text-2xl font-normal text-primary mb-2 md:mb-3'>
                                    {item.title}
                                </h1>
                                <ul className='space-y-2 md:space-y-3 text-center md:text-left'>
                                    {item.tags.map((tag, tagIndex) => {
                                        return (
                                            <li key={tagIndex} className='text-secondary text-sm md:text-lg font-medium hover:text-primary transition-colors cursor-pointer'>
                                                {tag}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        );
                    })}
                </div>

            </div>
        </div>
    )
}

export default Footer;