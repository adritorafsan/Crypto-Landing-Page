import CryptoLine from "./CryptoLine";
import Button2 from "./Button2";

const AllCrypto = () => {
  return (
    // Adjusted margin for mobile (mt-12) vs desktop (mt-25)
    <div className='border-y border-secondary/20 mt-12 md:mt-25 mb-1'>
      {/* 1. Changed 'flex' to 'flex-col' (mobile) and 'md:flex-row' (desktop)
          2. Removed fixed max-width on mobile to allow fluid scaling
      */}
      <div className='max-w-full md:max-w-360 mx-auto border-x border-secondary/20 flex flex-col md:flex-row'>

        {/* 1. Changed max-w-[50%] to max-w-full on mobile
            2. Added padding-bottom (pb-10) to separate from the crypto lines on mobile
        */}
        <div className="flex flex-col justify-between items-center w-full md:max-w-[50%] pb-10 md:pb-0">
          {/* Aligned text to center on mobile for better aesthetics */}
          <div className="flex flex-col items-center md:items-start justify-start py-6 px-6 md:px-8 gap-y-6 md:gap-y-8 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold text-primary">
              All Cryptos, One Platform
            </h1>
            <p className="text-secondary font-medium text-base md:text-lg max-w-[90%] md:max-w-[75%]">
              Buy, sell, and convert all major cryptocurrencies on a single platform. A seamless experience with no compromises.
            </p>
          </div>
          <Button2 text={"Buy All Crypto"} />
        </div>

        {/* 1. Removed left border on mobile (border-l-0) and added it back on desktop (md:border-l)
            2. Added top border on mobile to create separation
        */}
        <div className="flex flex-col justify-center items-center gap-y-4 border-t md:border-t-0 md:border-l border-secondary/20 py-8 md:py-0 overflow-hidden w-full">
          <CryptoLine cstmdirection={"left"} />
          <CryptoLine cstmdirection={"right"} />
          <CryptoLine cstmdirection={"left"} />
          <CryptoLine cstmdirection={"right"} />
        </div>
      </div>
    </div>
  )
}

export default AllCrypto;