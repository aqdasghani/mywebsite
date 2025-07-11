import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const Herosection = () => {
    return (
        <div>

            <div className=' min-h-[40vh]  sm:min-h-[90vh] md:min-h-[60vh] lg:min-h-[81vh] flex flex-wrap items-center justify-center overflow-hidden text-center relative '>
                <div className="absolute left-1/2 transform -translate-x-1/2 top-[0px] sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 z-[-10]">
                    <div className="w-[90vw] h-[60vh] sm:w-[400px] sm:h-[500px] relative">
                        <Image src="/aqdas.png" alt="Aqdas Ghani" fill className="object-contain" />
                    </div>
                </div>
                <div className=" mx-5 sm:mx-10">
                    <p className='text-white pb-4 text-xl mt-40 sm:mt-55'>🚀 Turning ideas into digital solutions</p>
                    <h1 className='font-bold text-2xl sm:text-4xl text-white sm:px-20'>Hi, I am Aqdas who helps businesses by building fast, responsive, and modern websites that turn visitors into customers.</h1>
                    <div className='pt-10 pb-20 sm:pb-50 md:pb-15'>
                        <Link href="/contact"><button className="bg-white text-black border-none cursor-pointer rounded-4xl px-4 py-2 ">📞 Let’s build your online presence</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Herosection