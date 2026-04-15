import React from 'react'

const Button = ({ text }) => {
  return (
    <button className="bg-bg text-black/70 font-semibold py-2 px-4 rounded-full hover:ring-4 ring-bg/40 cursor-pointer transition duration-300">
      {text}
    </button>
  )
}

export default Button