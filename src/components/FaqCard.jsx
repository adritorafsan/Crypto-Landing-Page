import { FiPlus } from "react-icons/fi";

const FaqCard = ({ question, answer, special, index, onClick, isActive }) => {
    return (
        <div 
            onClick={onClick} 
            className={`
                flex flex-col gap-y-3 px-5 py-6 md:px-3 md:py-4 cursor-pointer 
                border-b border-secondary/20 transition-colors duration-300
                hover:bg-secondary/5
                
                /* Border-R logic: 
                   On mobile (default), we remove the right border.
                   On desktop (md:), we apply it only if 'special' is true.
                */
                border-r-0 ${special ? "md:border-r md:border-r-secondary/20" : "md:border-r-0"}
            `}
        >
            <div className='flex justify-between items-center gap-x-4'>
                {/* Scaled text size for mobile (lg) vs desktop (xl) */}
                <p className='text-lg md:text-xl font-medium text-primary leading-tight'>
                    {question}
                </p>
                
                <FiPlus className={`shrink-0 text-white text-xl transition-transform duration-300 ${isActive ? "rotate-45" : "rotate-0"}`} />
            </div>

            <p 
                className={`
                    overflow-hidden transition-all duration-500 ease-in-out 
                    text-sm md:text-base font-normal text-secondary
                    ${isActive ? "max-h-60 opacity-100 mt-2" : "max-h-0 opacity-0"}
                `}
            >
                {answer}
            </p>
        </div>
    )
}

export default FaqCard