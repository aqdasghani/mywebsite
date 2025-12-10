import React from 'react'
import Link from 'next/link'

const Contactsection = () => {
    return (
        <section >
            <div>
                <div className='text-center text-white '>
                    <h1 className='text-5xl font-bold  sm:py-5 mt-15'>Get in touch</h1>
                    <p className='text-xl px-5 sm:px-20 py-5'>Have a project in mind? I&apos;d love to hear from you. Send me a message and let&apos;s discuss how we can work together.</p>
                </div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-10'>
                <div className='left p-10'>
                    <h1 className='font-bold text-3xl text-white '>Let&apos;s Connect</h1>
                    <h1 className='text-white font-bold mt-10 text-2xl'>Email</h1>
                    <div className='flex items-center gap-2 mt-5'>
                        <lord-icon
                            src="https://cdn.lordicon.com/dhzbkemf.json"
                            trigger="hover"
                            colors="primary:#ffffff,secondary:#ffffff"
                            style={{ width: 30, height: 30 }}
                            className="cursor-pointer">
                        </lord-icon>
                        <p className='text-white'>aqdasghani2005@gmail.com</p>
                    </div>
                    <div>
                        <h1 className='text-white font-bold mt-10 text-2xl'>Socials</h1>
                        <div>
                            <div className='flex items-center gap-2 mt-5'>
                                <Link href="https://www.linkedin.com/in/aqdasghani/" target='_blank'>
                                    <button className='cursor-pointer'>
                                        <lord-icon
                                            src="https://cdn.lordicon.com/dsdlqjde.json"
                                            trigger="loop"
                                            delay="500"
                                            colors="primary:#ffffff,secondary:#ffffff"
                                            style={{ width: 50, height: 50 }}>
                                        </lord-icon>
                                    </button>
                                </Link>

                                <Link href="https://github.com/aqdasghani" target='_blank'>
                                    <button className='cursor-pointer'>
                                        <lord-icon
                                            src="https://cdn.lordicon.com/jjxzcivr.json"
                                            trigger="loop"
                                            delay="500"
                                            colors="primary:#ffffff,secondary:#ffffff"
                                            style={{ width: 50, height: 50 }}>
                                        </lord-icon>
                                    </button>
                                </Link>
                            </div>
                        </div>

                    </div>

                </div>

                <div className="right">
                    <div className='bg-white min-h-100 rounded-2xl m-5 sm:m-10 '>
                        <form action="https://formspree.io/f/xqabwnva" method="POST" className='flex flex-col p-5' >
                            <label>
                                Name
                                <br />
                                <input type="text" name="Name" className=' border border-gray-400 rounded-sm border-solid my-2 w-full md:w-full  p-2' placeholder='Your full name' required />
                            </label>
                            <label className='mt-4'>
                                Email
                                <br />
                                <input type="email" name="email" className=' border border-gray-400 rounded-sm border-solid my-2 w-full md:w-full  p-2' placeholder='Your best email ' required />
                            </label>
                            <label>
                                Message
                                <textarea name="message" className=' border border-gray-400 rounded-sm border-solid my-2 w-full  md:w-full min-h-[200px] p-2' placeholder='Enter your requirements here.' required></textarea>
                            </label>

                            <button type="submit" className='bg-black text-white rounded-xl py-3 cursor-pointer'>Yes! connect with me</button>
                        </form>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Contactsection