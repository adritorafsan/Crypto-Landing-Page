import Button from "./Button"
import Logo from "../assets/logo.png"

const NavBar = () => {
    const NavItems = ["Cryptos", "How It Works", "Testimonials", "Pricing", "FAQ"]
    return (
        <div className="max-w-360 mx-auto py-5 font-primary flex items-center justify-between">
            <div className="flex items-center gap-x-10 justify-center">
                <div className="flex items-center gap-x-2">
                    <img src={Logo} alt="Logo" />
                    <h1 className="text-3xl font-primary font-medium text-white">Cryptix</h1>
                </div>
                <ul className="flex gap-x-4">
                    {NavItems.map((item, index) => {
                        return <li className="text-secondary font-primary hover:text-primary transition duration-200 text-lg cursor-pointer" key={index}>{item}</li>
                    })}
                </ul>

            </div>
            <div>
                <Button text={"Get started Now"} />
            </div>
        </div>
    )
}

export default NavBar