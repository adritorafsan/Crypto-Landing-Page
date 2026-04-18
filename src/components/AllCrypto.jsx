
import CryptoLine from "./CryptoLine";
import Button2 from "./Button2";


const AllCrypto = () => {
  return (
    <div className='border-y border-secondary/20 mt-25 mb-1'>
      <div className='max-w-360 mx-auto border-x border-secondary/20 flex   '>

        <div className=" flex flex-col justify-between items-center max-w-[50%]">
          <div className="flex flex-col items-start justify-start py-6 px-8 gap-y-8">
            <h1 className="text-5xl font-bold text-primary ">All Cryptos, One Platform</h1>
            <p className="text-secondary font-medium text-lg max-w-[75%] ">Buy, sell, and convert all major cryptocurrencies on a single platform. A seamless experience with no compromises.</p>
          </div>
         <Button2 text={"Buy All Crypto"} />
        </div>

        <div className=" flex flex-col justify-center items-center gap-y-4 border-l border-secondary/20 ">
          <CryptoLine cstmdirection={"left"} />
          <CryptoLine cstmdirection={"right"} />
          <CryptoLine cstmdirection={"left"} />
          <CryptoLine cstmdirection={"right"} />
        </div>
      </div>
    </div>
  )
}

export default AllCrypto