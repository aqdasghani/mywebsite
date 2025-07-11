import React from 'react'
import { TiltCard } from './gsap/tilt-card'
import Link from 'next/link'
import Image from 'next/image'


const projects = [
    {
        src: "/imageconverter.png",
        heading: "HEIC Image Converter",
        para: "An image converter that converts HEIC to Png or Jpg for free.",
        codelink: "https://github.com/aqdasghani/imageconverter",
        livelink: "https://imageconverter-nu.vercel.app/"
    },

    {
        src: "/qrcode.png",
        heading: "QR Code Generator",
        para: "Enter any URL and get the generated QR instantly.",
        codelink: "https://github.com/aqdasghani/qr-code-generator",
        livelink: "https://qr-code-generator-net.vercel.app/"
    },
    {
        src: "/weatherapp.png",
        heading: "Weather App",
        para: "Enter any URL and get the generated QR instantly.",
        codelink: "https://github.com/aqdasghani/weather-app",
        livelink: "https://weather-app-bice-three-99.vercel.app/"
    },
    {
        src: "/notesapp.png",
        heading: "Notes App",
        para: "Enter any URL and get the generated QR instantly.",
        codelink: "https://github.com/aqdasghani/notesapp",
        livelink: "https://notesapp-six-pied.vercel.app/"
    },
]

const Projectsection = () => {
    return (
        <section className='mt-10'>
            <div className='text-2xl'>
                <div className='text-center text-white '>
                    <h1 className='text-5xl font-bold py-5'>Projects</h1>
                    <p className='text-xl px-5 pb-5'>Here are some of my recent projects that showcase my skills and experience in web development.</p>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 p-4 sm:p-8 gap-10 flex-wrap'>
                    {projects.map((project, index) => {
                        return <TiltCard key={index} className="bg-card min-w-[300px] min-h-[350px] rounded-xl border p-4 sm:w-full sm:min-h-[400px] md:min-h-[300px] lg:min-h-[400px]" highlightClassName="  hidden sm:block bg-white/15 dark:bg-white/2">
                            <Image
                                className="mt-2 w-full h-full rounded object-cover"
                                src={project.src}
                                alt="Image"

                            />
                            <h1 className="text-muted-foreground text-xl font-bold mt-3 italic">{project.heading}</h1>
                            <p className="mt-1 text-sm leading-tight">
                                {project.para}
                            </p>
                            <div className="mt-5 flex justify-start gap-5">
                                {project.codelink &&
                                    <Link href={project.codelink}>
                                        <button className='rounded-xl px-6 py-3 sm:px-6 sm:py-3 md:px-4 md:py-2 bg-black text-white text-sm cursor-pointer flex items-center gap-2'>
                                            <lord-icon
                                          
                                                src="https://cdn.lordicon.com/jjxzcivr.json"
                                                trigger="loop"
                                                delay="500"
                                                colors="primary:#ffffff,secondary:#ffffff"
                                                style={{ width: 23, height: 23 }}>
                                    
                                            </lord-icon>
                                            Source Code
                                        </button>
                                    </Link>
                                }

                                {project.livelink &&
                                    <Link href={project.livelink}>
                                        <button className='rounded-xl px-6 py-3 sm:px-6 sm:py-3 md:px-4 md:py-2 bg-black text-white text-sm cursor-pointer flex items-center gap-2'>
                                            <lord-icon
                                                src="https://cdn.lordicon.com/hmqxevgf.json"
                                                trigger="loop"
                                                colors="primary:#ffffff,secondary:#ffffff"
                                               style={{ width: 23, height: 23 }}>
                                            </lord-icon>
                                            Live Link
                                        </button>
                                    </Link>
                                }

                            </div>
                        </TiltCard>
                    })}
                </div>
            </div>
        </section >
    )
}

export default Projectsection