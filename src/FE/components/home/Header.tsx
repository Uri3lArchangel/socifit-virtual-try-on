import React from 'react'
import Image from "next/image";
import Link from "next/link";
import hero from "@/public/hero.jpg";

const Header = () => {
  return (

    <header className="h-[120vh] md:flex justify-center items-center">
    <section className="h-[60%] flex items-center md:h-full md:w-[50%] md:transform md:translate-y-[-130px] relative z-[2]">
      <div className="title_container z-[2] relative text-center sm:text-left sm:max-w-[400px] sm:ml-20 ">
        <h1 className="text-sm font-bold italic md:text-lg">SOCIFIT.AI</h1>
        <h2 className="text-3xl font-extrabold md:text-6xl">VIRTUAL TRY-ON</h2>
        <p className="text-[#b5b5b5] font-medium md:text-xl my-4">
          Transform Your Social Media with AI-Powered Dress and Photography
          Experience. We offer a groundbreaking way to elevate your social
          media presence with our AI-powered dress and photography
          experience.
        </p>
        <Link href="/app" className="button_link mx-auto my-4 sm:mx-0">
          TRY IT NOW FREE
        </Link>
      </div>
    </section>
    <section className="h-[40%] md:h-full md:w-[50%]">
      <Image src={hero} className="h-full" alt="mobile virtual shopping" />
    </section>
  </header>  )
}

export default Header