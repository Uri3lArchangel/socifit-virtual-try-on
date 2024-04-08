import React from 'react'
import manFront from "@/public/manfront.webp";
import manSuit from "@/public/suit.jpg";
import aiPrompt from "@/public/generate-a-red-dress-for-party-in-fotor-ai-clothing-generator.jpg";
import redDress from "@/public/xs-ryn-gwn-red-bee-16-original-imagc6xx79wj9khj.webp";
import Image from "next/image";
import Link from "next/link";


const Section2 = () => {
  return (
  
    <section>
    <div className="bg-black py-4">
      <h3 className="text-[2rem] text-center font-extrabold text-[#454545] sm:text-[3rem] md:text-[10rem]">
        HOW TO USE
      </h3>
      <h3 className="text-[2rem] text-center font-extrabold text-[#C2C2C2] my-2 sm:text-[3rem] md:text-[10rem]">
        HOW TO USE
      </h3>
      <h3 className="text-[2rem] text-center font-extrabold text-[#ffffff] sm:text-[3rem] md:text-[10rem]">
        HOW TO USE
      </h3>
    </div>

    <ul>
      <h3 className="text-center text-xl my-2 mt-10">STEP 1</h3>
      <li className="shadow_2 rounded-lg m-4 max-w-[300px] sm:mx-auto" >
        <Image
          src={manFront}
          className="rounded-tl-lg rounded-tr-lg min-h-[400px]"
          alt="man facing front"
        />
        <div className="p-4">
          <h4 className="text-xl font-medium md:text-2xl">UPLOAD YOUR IMAGE</h4>
          <ul>
            <li className='md:text-xl'>✅ Front facing</li>
            <li className='md:text-xl'>✅ Body is visible</li>
            <li className='md:text-xl'>✅ Medium / High Quality image</li>
          </ul>
        </div>
      </li>
      <h3 className="text-center text-xl my-2 mt-10">STEP 2</h3>
      <div className="md:flex items-center">
      <li className="shadow_2 rounded-lg m-4 max-w-[300px] sm:mx-auto">
        <Image
          src={manSuit}
          className="rounded-tl-lg rounded-tr-lg min-h-[400px]"
          alt="man facing front"
        />
        <div className="p-4">
          <h4 className="text-xl font-medium md:text-2xl">
            UPLOAD CLOTHING IMAGE / PROVIDE LINK TO IMAGE
          </h4>
          <ul>
            <li className='md:text-xl'>✅ Front facing</li>
            <li className='md:text-xl'>✅ Matches the visible body part </li>
            <li className='md:text-xl'>✅ medium / High Quality image</li>
          </ul>
        </div>
      </li>
      <h4 className="text-2xl text-center">OR</h4>
      <li className="shadow_2 rounded-lg m-4 max-w-[300px] sm:mx-auto">
        <Image
          src={aiPrompt}
          className="rounded-tl-lg rounded-tr-lg min-h-[400px] w-full"
          alt="man facing front"
        />
        <div className="p-4">
          <h4 className="text-xl font-medium md:text-2xl">GENERATE CLOTHING IMAGE FROM A.I PROMPT</h4>
          <ul>
            <li className='md:text-xl'>✅ Front facing</li>
            <li className='md:text-xl'>✅ Body is visible</li>
            <li className='md:text-xl'>✅ Medium / High Quality image</li>
          </ul>
        </div>
      </li>
      </div>
      <h3 className="text-center text-xl my-2 mt-10">STEP 3</h3>
      <li className="shadow_2 rounded-lg m-4 max-w-[300px] sm:mx-auto">
        <Image
          src={redDress}
          className="rounded-tl-lg rounded-tr-lg min-h-[400px]"
          alt="man facing front"
        />
        <div className="p-4">
          <h4 className="text-xl font-medium md:text-2xl">
          CLICK "TRY ON" 
          </h4>
          <ul>
            <li className='md:text-xl'>✅ High quality output render</li>
            <li className='md:text-xl'>✅ Accurate render</li>
            <li className='md:text-xl'>✅ No errors</li>
          </ul>
        </div>
      </li>
    </ul>
    <Link href="/app" className="button_link mx-auto my-4">
        TRY IT NOW FREE
      </Link>
  </section>  )
}

export default Section2