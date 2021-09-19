import crypto from './11.png'

const Hero = () => {
    return (

<section className="flex flex-col w-full overflow-hidden bg-white lg:flex-row sm:mx-auto rounded-md">
    <div className="flex justify-end p-8 bg-white lg:py-32 lg:px-16 lg:pl-10 lg:w-1/2">
        <div className="flex flex-col items-start justify-center w-full lg:max-w-lg">
            <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl lg:text-7xl">
                What is Muzey?
            </h5>
            <p className="py-5 mb-5 text-gray-600 lg:text-xl">
                <span className="font-bold">Muzey</span> is the music streaming service of the future. Muzey has three goals, distribution, discovery, and de-centralization. 
            </p>
            <div className="flex items-center">
            </div>
        </div>
    </div>
    <div className="relative lg:w-1/2 -mt-14 md:mt-0">
        <img src={crypto} alt="Hero" className=""/>
    </div>
</section>

    )
}

export default Hero;

