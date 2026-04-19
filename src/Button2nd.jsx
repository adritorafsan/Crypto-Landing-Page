const Button2nd = ({ text ,btnstyl}) => {
  console.log(btnstyl)
  return (
    <button  className={`
    ${btnstyl === "green" ? "bg-bg text-black hover:bg-bg/80" : "bg-black/80 text-white/70 hover:bg-secondary/20"} border border-secondary/20  font-semibold py-2 px-4 rounded-full  cursor-pointer transition duration-300
  `}>
      {text}
    </button>
  )
}

export default Button2nd