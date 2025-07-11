'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Contactsection from '@/components/Contactsection'


const About = () => {
  return (
    <div>
      <div className="min-h-screen px-6 py-20 text-white">

        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-5xl font-extrabold mb-16 text-white  bg-clip-text  drop-shadow-lg"
        >
          About Me
        </motion.h1>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-14 max-w-7xl mx-auto items-center">

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="backdrop-blur-lg  bg-opacity-5 p-8 rounded-3xl shadow-lg border border-white/10 space-y-6"
          >
            <p className="text-2xl font-bold">
              I don't just build websites — I craft digital experiences that drive results.
            </p>

            <p className='text-xl'>
              Hi, I’m <strong>Aqdas Ghani</strong> — a freelance web developer helping businesses and individuals bring their ideas to life through custom websites and web applications.
              From design to deployment, I handle everything personally to ensure high attention and quality.
            </p>

            {/* Feature Cards */}
            <div className="grid sm:grid-cols-2 gap-4 text-xl">
              {[
                'Custom Website Development',
                'Responsive Design',
                'SEO-Friendly Structure',
                'Fast Loading Speed',
                'End-to-End Process',
              ].map((text, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="p-3 border border-white/20 rounded-xl text-sm  bg-opacity-10"
                >
                  {text}
                </motion.div>
              ))}
            </div>

            <p className="pt-4 text-xl">
              Whether you're just starting or scaling up, I simplify the process and deliver a tailored solution.
            </p>

            <p className="font-bold text-2xl">Why work with me?</p>
            <ul className="list-disc list-inside pl-4 space-y-1 text-xl">
              <li>Clear communication</li>
              <li>Honest feedback</li>
              <li>Timely delivery</li>
              <li>Complete transparency</li>
            </ul>

            <p className="pt-4 text-xl">
              You're not just hiring a developer — you're gaining a long-term partner in your digital journey.
            </p>

            <div>
              <p className="font-bold mt-6 text-2xl">My Mission</p>
              <p className="text-xl mt-3">
                To help businesses build a strong digital presence through high-quality, user-focused, SEO-optimized websites.
              </p>
            </div>


          </motion.div>


          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="rounded-xl p-1 bg-white shadow-xl w-[90%] max-w-md">
              <Image
                src="/aqdas.png"
                alt="Aqdas Ghani"
                width={500}
                height={700}
                className="rounded-xl object-cover w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
        <div className='text-center '>
          <h1 className="mt-6 text-3xl font-bold pt-10">
            Let’s bring your website idea to life — Contact me today for a free consultation!
          </h1>
        </div>

      </div>
      <Contactsection />
    </div>


  )

}

export default About
