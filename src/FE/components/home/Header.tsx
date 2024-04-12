'use client'
import React, { useEffect } from 'react'
import Image from "next/image";
import Link from "next/link";
import hero from "@/public/headergif.gif";
import { servicescardcalculation } from '../../helpers';

const Header = () => {
  useEffect(() => {
    const card1 = document.getElementById("herogif") as HTMLDivElement;


    card1.addEventListener("mousemove", (e) => {
   const x= Number(Math.abs( e.x - card1.getBoundingClientRect().left).toFixed(0))
    const y= Number(Math.abs(e.y - card1.getBoundingClientRect().top).toFixed(0))
   const height = card1.getBoundingClientRect().height;
   const width = card1.getBoundingClientRect().width;

    const position = servicescardcalculation(x,y,width,height)
    console.log(position)
if(position == "tl") {card1.style.transform="rotateY(-20deg) rotateX(20deg)"}
if(position == "tc") {card1.style.transform="rotateX(20deg)"}
if(position == "tr") {card1.style.transform="rotateY(20deg) rotateX(20deg)"}
if(position == "ml") {card1.style.transform="rotateY(-20deg)"}
if(position == "mc") {card1.style.transform="scale(0.9)"}
if(position == "mr") {card1.style.transform="rotateY(20deg)"}
if(position == "bl") {card1.style.transform="rotateY(-20deg) rotateX(-20deg)"}
if(position == "bc") {card1.style.transform="rotateX(-20deg)"}
if(position == "br") {card1.style.transform="rotateY(20deg) rotateX(-20deg)"}




    });
 
  }, []);


  const resetTransform=(e:React.MouseEvent<HTMLDivElement>)=>{

e.currentTarget.style.transform="none"
  }








  return (

    <header className="h-[120vh] md:flex justify-center items-center HEADER">
    <section className="h-[60%] flex items-center md:h-full md:w-[50%] md:transform relative z-[2]">
      <div className="title_container z-[2] relative text-center sm:text-left sm:max-w-[400px] sm:ml-20 ">
        <h1 className="text-sm font-bold italic md:text-lg">SOCIFIT.AI</h1>
        <h2 className="text-3xl font-extrabold md:text-6xl">VIRTUAL TRY-ON</h2>
        <p className="text-[#fff] text-xl font-medium md:text-2xl my-4">
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
    <section className="h-[40%] md:h-full md:w-[50%] md:flex md:items-center md:pr-6 herogifContainer">
      <Image src={hero} className=" hoveringEffect shadow h-full md:h-[50%] w-full md:rounded-lg  " alt="mobile virtual shopping " id='herogif' onMouseLeave={resetTransform} />
    </section>
  </header>  )
}

export default Header