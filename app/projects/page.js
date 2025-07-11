import React from 'react'
import Contactsection from '@/components/Contactsection'
import Projectsection from '@/components/Projectsection'

const Projects = () => {
  return (
    <div>
      <section className='min-h-screen '>

        <Projectsection />
        <Contactsection />
      </section>

    </div>
  )
}

export default Projects

export const metadata = {
  title: "Projects | Aqdas Ghani",
  description: "Browse a collection of web development projects by Aqdas Ghani, showcasing custom websites, responsive designs, and real-world problem-solving through code.",
}