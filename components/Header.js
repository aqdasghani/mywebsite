'use client'
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"


const Header = () => {

    const [menuOpen, setmenuOpen] = useState(false)



    return (
        <nav className="flex justify-between items-center p-6 text-white">
            <div className="left">
                <Link href="/"><h1 className="text-2xl font-bold">&lt;AqdasGhani/&gt;</h1></Link>
            </div>

            <div className=" hidden sm:block centre">
                <ul className="flex gap-5">
                    <Link href="/about" className="cursor-pointer" prefetch={true}>about</Link>
                    <Link href="/services" className="cursor-pointer" prefetch={true}>services</Link>
                    <Link href="/projects" className="cursor-pointer" prefetch={true}>projects</Link>
                    <Link href="/contact" className="cursor-pointer" prefetch={true}>contact</Link>
                </ul>
            </div>

            <div className="right">

                <div className="right hidden sm:block">
                    <Link href="https://calendly.com/aqdasghani2005/15min" target="_blank"><button className="bg-white border rounded-4xl px-4 py-2 text-black cursor-pointer">Book a call</button></Link>
                </div>


                <div className="sm:hidden cursor-pointer" onClick={() => setmenuOpen(!menuOpen)}>

                    {menuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" viewBox="0 0 24 24">
                            <path d="M18.3 5.71a1 1 0 0 0-1.41 0L12 10.59 7.11 5.7a1 1 0 0 0-1.41 1.41L10.59 12l-4.89 4.89a1 1 0 1 0 1.41 1.41L12 13.41l4.89 4.89a1 1 0 0 0 1.41-1.41L13.41 12l4.89-4.89a1 1 0 0 0 0-1.4z" />
                        </svg>
                    ) : <Image src="/menu.png" width={25} height={25} alt="menu" className="invert" />
                    }

                    {menuOpen && (
                        <div className="absolute top-20 left-0 w-full min-h-[30vh] border bg-black rounded-xl border-white/10 sm:hidden flex flex-col items-center gap-6 px-4 py-6 z-100">

                            <Link href="/about" onClick={() => setmenuOpen(false)}>about</Link>
                            <Link href="/services" onClick={() => setmenuOpen(false)}>services</Link>
                            <Link href="/projects" onClick={() => setmenuOpen(false)}>projects</Link>
                            <Link href="/contact" onClick={() => setmenuOpen(false)}>contact</Link>
                            <Link href="https://calendly.com/aqdasghani2005/15min" target="_blank"><button className="bg-white border rounded-4xl px-3 py-1 text-black cursor-pointer">Book a call</button></Link>
                        </div>
                    )}

                </div>

            </div>
        </nav >


    )
}

export default Header