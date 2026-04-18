

const TestimonialCard = ({image,heading,name,work,number}) => {
    return (
        <div className='bg-radial-[at_25%_35%] from-primary/50 to-zinc to-95% flex gap-y-10  flex-col py-6 px-8 flex-4'>
            <img className="size-[50px] rounded-full" src={image} alt={name} />
            <h2 className="text-3xl font-normal max-w-[90%] text-primary">{heading}</h2>
            <div className="flex items-center justify-between max-w-[90%]">
                <div className=" space-y-2">
                    <h1 className="text-2xl font-normal text-primary">{name}</h1>
                    <p className="text-secondary text-md  ">{work}</p>
                </div>
                <p className="text-primary">{number}</p>
            </div>
        </div>
    )
}

export default TestimonialCard