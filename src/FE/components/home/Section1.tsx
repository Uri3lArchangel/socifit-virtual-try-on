import React from 'react'
import aiTryOn from "@/public/ai-tryon.jpg";
import bgTransform from "@/public/bgchange.jpg";
import timeAndCost from "@/public/save-time-money1.jpg";
import social from "@/public/social-media.jpg";
import Image from "next/image";
import Link from 'next/link';

const Section1 = () => {
  return (
    <section>
           <div className="bg-black py-4">
          <h3 className="text-[2rem] text-center font-extrabold text-white opacity-[0.94] sm:text-[3rem] md:text-[10rem]">
            WHY USE OUR SERVICE
          </h3>
          <h3 className="text-[2rem] text-center font-extrabold my-2 text-white opacity-[0.82] gradient_text sm:text-[3rem] md:text-[10rem]">
            WHY USE OUR SERVICE
          </h3>
          <h3 className="text-[2rem] text-center font-extrabold text-white opacity-[0.2] sm:text-[3rem] md:text-[10rem]">
            WHY USE OUR SERVICE
          </h3>
        </div>
    <ul className="py-20">
      <li className="my-12 sm:max-w-[462px] sm:mx-auto md:flex md:max-w-[60%] items-center">
        {/* <Image
          src={aiTryOn}
          alt="ai try-on"
          className="block rounded-lg md:max-w-[500px] h-[400px]"
        /> */}
        <div className="text-center px-2 md:text-left">
          <h3 className="text-xl font-semibold py-2 sm:text-2xl md:text-4xl">
            Personalized Real Dress Visualization
          </h3>
          <p className="sm:text-xl">
            {" "}
            Just upload your photo and describe your dream dress, then see
            it superimposed on your image using AI technology.
          </p>
        </div>
      </li>
      <li className="my-12 max-w-[462px] sm:mx-auto md:flex md:max-w-[60%] items-center flex-row-reverse">
        <Image
          src={bgTransform}
          alt="ai try-on"
          className="block rounded-lg md:max-w-[500px] h-[400px]"
        />
        <div className="text-center px-2">
          <h3 className="text-xl font-semibold py-2 sm:text-2xl md:text-4xl">
            Background Transformation
          </h3>
          <p className="sm:text-xl">
            {" "}
            Easily change the background of photos to create new and
            unique images with text prompts for social media
          </p>
        </div>
      </li>
      <li className="my-12 max-w-[462px] sm:mx-auto md:flex md:max-w-[60%] items-center">
        <Image
          src={timeAndCost}
          alt="ai try-on"
          className="block rounded-lg md:max-w-[500px] h-[400px]"
        />
        <div className="text-center px-2">
          <h3 className="text-xl font-semibold py-2 sm:text-2xl md:text-4xl">
            Time and Cost Savings
          </h3>
          <p className="sm:text-xl">
            Avoid the need for physical try-ons and photoshoots, saving
            time and money in the process
          </p>
        </div>
      </li>
      <li className="my-12 max-w-[462px] sm:mx-auto md:flex md:max-w-[60%] items-center flex-row-reverse">
        <Image
          src={social}
          alt="ai try-on"
          className="block rounded-lg md:max-w-[500px] h-[400px]"
        />
        <div className="text-center px-2">
          <h3 className="text-xl font-semibold py-2 sm:text-2xl md:text-4xl">
            Easy Social Media Sharing
          </h3>
          <p className="sm:text-xl">
            Finally, easily share your completely different photo on your
            social media accounts.
          </p>
        </div>
      </li>
    </ul>
    <Link href="/app" className="button_link mx-auto my-4 ">
          TRY IT NOW FREE
        </Link>
  </section>  )
}

export default Section1