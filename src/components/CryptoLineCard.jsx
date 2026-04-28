import React from 'react'

const CryptoLineCard = ({ icon, name, price, change, cstmBg }) => {
  return (
    <div className="flex justify-center items-center pl-1.5 pr-3 md:pl-2 md:pr-4 py-1 md:py-1.5 rounded-full bg-gray-800/60 border-none shrink-0">
        
        {/* Scaled icon container: size-[35px] on mobile, [45px] on desktop */}
        <div className={`size-[35px] md:size-[45px] flex justify-center items-center text-xl md:text-3xl text-black rounded-full ${cstmBg}`}>
          {icon}        
        </div>

        {/* Text container: slightly tighter spacing on mobile */}
        <div className="flex items-center flex-col gap-y-0.5 md:gap-y-1 ml-2 md:ml-3">
          <h1 className="text-[14px] md:text-[16px] text-primary font-medium">
            {name}
          </h1>
          
          <p className="text-[11px] md:text-[13px] text-secondary flex items-center gap-x-1">
            {price} 
            <span className={`text-[8px] md:text-[9px] font-bold ${change.includes('-') ? 'text-red-500' : 'text-green-500'}`}>
              {change}
            </span>
          </p>
        </div>
      </div>
  )
}

export default CryptoLineCard