import { FaBitcoin } from "react-icons/fa";
import { SiSolana } from "react-icons/si";
import { FaDashcube } from "react-icons/fa";
import { RiXrpFill } from "react-icons/ri";
import { FaEthereum } from "react-icons/fa";
import CryptoLineCard from "./CryptoLineCard";




const CryptoLine = ({cstmdirection}) => {

  const CryptoData = [
    {
      icon: <FaBitcoin />,
      name: 'Bitcoin',
      price: '$29,000',
      change: '+2.5%',
      cstmBg: 'bg-yellow-500'
    },
    {
      icon: <SiSolana />,
      name: 'Solana',
      price: '$150',
      change: '+5.0%',
      cstmBg: 'bg-blue-500'
    },
    {
      icon: <FaDashcube />,
      name: 'Dash',
      price: '$50',
      change: '-3.0%',
      cstmBg: 'bg-cyan-500/50'
    },
    {
      icon: <RiXrpFill />,
      name: 'XRP',
      price: '$0.50',
      change: '+1.0%',
      cstmBg: 'bg-white'
    },
    {
      icon: <FaEthereum />,
      name: 'Ethereum',
      price: '$1,800',
      change: '-4.0%',
      cstmBg: 'bg-white'
    }

  ]

  return (
    <marquee className="py-2 flex" direction={cstmdirection}   behavior="scroll" loop="infinite">
      <div className="flex gap-x-3">
        {CryptoData.map((crypto, index) => {

          return <div className="flex justify-center items-center" key={index}>
            <CryptoLineCard icon={crypto.icon} name={crypto.name} price={crypto.price} change={crypto.change} cstmBg={crypto.cstmBg} />
          </div>
        })}
      </div>

    </marquee>
  )
}

export default CryptoLine