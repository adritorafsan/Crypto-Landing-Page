import React from 'react'

const CryptoLineCard = ({icon,name,price,change,cstmBg}) => {
  return (
    <div className="flex justify-center items-center pl-2 pr-4 py-1.5 rounded-full bg-gray-800/60 border-none">
        <div className={`size-[45px] flex justify-center items-center text-3xl text-black rounded-full ${cstmBg}`}>
          {icon}        
        </div>
        <div className="flex items-center flex-col gap-y-1 ">
          <h1 className="text-[16px] text-primary">{name}</h1>
          <p className="text-[13px] text-secondary">{price} <span className={`text-[9px] ${change.includes('-') ? 'text-red-500' : 'text-green-500'}`}>{change}</span></p>
        </div>
      </div>
  )
}

export default CryptoLineCard