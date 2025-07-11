import React from 'react'
import { TiltCard } from './gsap/tilt-card';

const services = [
    {
        icon: "💻",
        title: "Custom Website Development",
        desc: "Fully responsive, fast, and SEO-friendly websites tailored to your business needs.",
        pointers: ["React, Next.js", "Responsive Design", "Modern UI/ UX", "Performance Optimization"]
    },
    {
        icon: "🚀",
        title: "Portfolio & Business Websites",
        desc: "Showcase your work or brand online with a clean, high-converting website.",
        pointers: ["React", "Next.js", "Mnimimalistic, clean UI", "Fast loading, optimised pages"]
    },
    {
        icon: "💡",
        title: "Full-Stack Web Application",
        desc: "I build scalable web apps that solve real problems — from backend to frontend.",
        pointers: ["MERN Stack", "API Integration", "Authentication", "Managing Data and Databses"]
    },
    
];




const Servicesection = () => {
    return (
        <section className='mt-10'>
            <div className='text-white text-center  mb-5'>
                <h1 className='text-5xl font-bold py-5'>My Services</h1>
                <p className='text-xl px-5' >I offer a comprehensive range of web development services to help bring your ideas to life.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 sm:grid-cols-3 p-6 gap-5 sm:gap-20 md:gap-10 lg:gap-20 max-w-5xl sm:mx-20 md:mx-10 lg:mx-20">
                {services.map((service, index) => (
                    <TiltCard key={index} className=" bg-white w-full min-h-[300px] lg:min-h-[350px] md:min-h-[250px] border rounded-xl p-4 sm:w-full lg:w-[330px] mx-auto text-black sm:min-h-[350px]" highlightClassName=" hidden sm:block bg-white/15 dark:bg-white/2">
                        <div>
                            <div className="text-3xl mb-4">{service.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                            <p className="text-sm pb-5">{service.desc}</p>

                            {service.pointers.map((pointer, index) => (
                                <div key={index}>
                                    <li>{pointer}</li>
                                </div>
                            ))}

                        </div>
                    </TiltCard>

                ))}

            </div>
        </section>

    )
}

export default Servicesection