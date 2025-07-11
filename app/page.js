import Image from "next/image";
import Herosection from "@/components/Herosection";
import Section2 from "@/components/Section2";
import Servicesection from "@/components/Servicesection";
import Projectsection from "@/components/Projectsection";
import Contactsection from "@/components/Contactsection";

export default function Home() {
  return (
    <div>
      <Herosection />
      <Section2 />
      <Servicesection />
      <Projectsection />
      <Contactsection />
    </div>

  );
}


export const metadata = {
  title: "Aqdas Ghani | Freelance Web Developer",
  description: "I craft high-quality, custom websites and web applications that are fast, SEO-friendly, and built to help businesses succeed online. Let’s bring your idea to life.",
}