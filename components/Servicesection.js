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


console.log("SERVICE SECTION LOADED");


const Servicesection = () => {
    return (
        <section className='mt-10'>

            <div className='text-white text-center  mb-5'>
                <h1 className='text-5xl font-bold py-5'>My Services</h1>
                <p className='text-xl px-5' >I offer a comprehensive range of web development services to help bring your ideas to life.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto p-6">
                {services.map((service, index) => (
                    <TiltCard
                        key={index}
                        className="bg-white w-full min-h-[350px] border rounded-2xl p-6 text-black shadow-md"
                        highlightClassName="hidden sm:block"
                    >
                        <div>
                            <div className="text-3xl mb-4">{service.icon}</div>

                            <h3 className="text-xl font-semibold mb-2">
                                {service.title}
                            </h3>

                            <p className="text-sm pb-4">
                                {service.desc}
                            </p>

                           
                            <ul className="list-disc list-inside space-y-1 pl-2">
                                {service.pointers.map((pointer, i) => (
                                    <li key={i}>{pointer}</li>
                                ))}
                            </ul>
                        </div>
                    </TiltCard>
                ))}
            </div>

        </section>

    )
}

export default Servicesection
