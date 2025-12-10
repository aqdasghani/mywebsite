import React from 'react'
import { TiltCard } from "@/components/gsap/tilt-card";

const skills = [
  {
    icon: "💻",
    title: "Clean Code",
    desc: "Writing maintainable and scalable code",
  },
  {
    icon: "💡",
    title: "Problem Solving",
    desc: "Finding creative solutions to complex challenges",
  },
  {
    icon: "🚀",
    title: "Performance",
    desc: "Building fast and optimized applications",
  },
  {
    icon: "👥",
    title: "Collaboration",
    desc: "Working effectively in team environments",
  },
];

const Section2 = () => {
  return (
    <div>
      <div className="px-10 pb-10 pt-10 ">
        <div className="text-white flex flex-wrap pb-5 text-xl font-bold">
          Technologies I work with:
        </div>
        <div className="flex flex-wrap gap-5 items-center ">
          <div className="bg-white text-black rounded-2xl py-1 px-4">React</div>
          <div className="bg-white text-black rounded-2xl py-1 px-4">Next.js</div>
          <div className="bg-white text-black rounded-2xl py-1 px-4">JavaScript</div>
          <div className="bg-white text-black rounded-2xl py-1 px-4">Node.js</div>
          <div className="bg-white text-black rounded-2xl py-1 px-4">Express</div>
          <div className="bg-white text-black rounded-2xl py-1 px-4">Git</div>
          <div className="bg-white text-black rounded-2xl py-1 px-4">MongoDB</div>
          <div className="bg-white text-black rounded-2xl py-1 px-4">Taiwlind CSS</div>
        </div>
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-5 sm:px-10 pb-10">
        {skills.map((skill, index) => (
          <TiltCard
            key={index}
            className="bg-white w-full min-h-[180px] mb-5 border rounded-xl p-4 text-black flex flex-col justify-center"
            highlightClassName="hidden lg:block"
          >
            <div>
              <div className="text-3xl mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-sm">{skill.desc}</p>
            </div>
          </TiltCard>
        ))}
      </section>


    </div>
  )
}

export default Section2
