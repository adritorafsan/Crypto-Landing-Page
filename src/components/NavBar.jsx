import React, { useState } from 'react'
import Button from './Button'
import Logo from "../assets/logo.png"
import { FiMenu, FiX } from "react-icons/fi"; // Recommended for mobile toggle

const NavBar = () => {
    const NavItems = ["Cryptos", "How It Works", "Testimonials", "Pricing", "FAQ"]
    
    return (
        <div className="max-w-full md:max-w-360 mx-auto py-4 md:py-5 px-4 md:px-0 font-primary flex items-center justify-between relative">
            
            {/* Logo and Desktop Links */}
            <div className="flex items-center gap-x-10 justify-center">
                <div className="flex items-center gap-x-2">
                    <img src={Logo} alt="Logo" className="w-8 h-8 md:w-auto" />
                    <h1 className="text-2xl md:text-3xl font-primary font-medium text-white">Cryptix</h1>
                </div>

                {/* Desktop Menu: Hidden on mobile, flex on large screens */}
                <ul className="hidden lg:flex gap-x-6">
                    {NavItems.map((item, index) => {
                        return (
                            <li 
                                className="text-secondary font-primary hover:text-primary transition duration-200 text-base lg:text-lg cursor-pointer whitespace-nowrap" 
                                key={index}
                            >
                                {item}
                            </li>
                        )
                    })}
                </ul>
            </div>

            {/* Right Side Action */}
            <div className="flex items-center gap-x-4">
                {/* Desktop Button: You might want to scale padding in the Button component itself */}
                <div className="hidden sm:block">
                    <Button text={"Get started Now"} />
                </div>

                {/* Mobile Menu Icon: Visible only on small screens */}
                <div className="lg:hidden text-white text-3xl cursor-pointer">
                    <FiMenu />
                </div>
            </div>
        </div>
    )
}

export default NavBar