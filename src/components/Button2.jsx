import { FaChevronRight } from "react-icons/fa";

const Button2 = () => {
  return (
     <button className='bg-black/50 text-bg cursor-pointer w-full text-start flex gap-x-5 items-center border-t border-secondary/20 py-4 px-8 rounded-md hover:bg-bg/20 transition-colors duration-200 space-x-2'>
            Buy Crypto Now <FaChevronRight />
          </button>
  )
}

export default Button2