import React from 'react'

const BenefitCard = ({ icon, title, description , special }) => {
  return (
    <div className={` flex flex-col gap-y-1.5 p-3 border-l border-secondary/20 ${special ? "border-none" : ""}`}> 
        <div className='size-15 mb-6 text-2xl text-white bg-transparent border border-secondary rounded-full flex justify-center items-center'>
            {icon}
        </div>
        <h2 className=' font-semibold text-xl text-primary'>{title}</h2>
        <p className=' text-secondary text-md max-w-100'>{description}</p>
    </div>
  )
}

export default BenefitCard