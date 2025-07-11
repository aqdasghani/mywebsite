import React from 'react'
import Servicesection from '@/components/Servicesection'
import { TiltCard } from '@/components/gsap/tilt-card'
import Contactsection from '@/components/Contactsection'

const Services = () => {
  return (
    <div>
      <Servicesection />
      <Contactsection />
    </div>

  )
}

export default Services

export const metadata = {
  title: "Services | Aqdas Ghani",
  description: "Explore custom website development, responsive design, and SEO-optimized solutions offered by Aqdas Ghani to help your business grow online.",
}