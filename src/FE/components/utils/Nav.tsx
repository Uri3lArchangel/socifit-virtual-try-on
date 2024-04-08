'use client'
import Link from "next/link";
import React from "react";

const Nav = ({authenticated}:{authenticated:boolean}) => {
  return (
    <nav className="fixed top-0 text-white bg-black w-full z-[5] px-4 py-4 items-center sm:px-10 md:px-20">
      <ul className="flex justify-between flex-wrap">
        <li className=" text-xl sm:w-[70%] sm:text-2xl sm:font-bold">
          <Link href="/">SOCIFIT</Link>
        </li>
        <li><Link href="/pricing" className="md:text-xl">Pricing</Link></li>
        <div className="flex  justify-between sm:w-[30%] max-w-[200px]">
         {authenticated?
         <li>
            <Link href="/app" className="text-md text-black bg-white px-2 rounded-lg sm:text-xl sm:px-4 py-1">App</Link>
         </li>
         :
         <>
         <li className="text-md sm:text-xl mx-2">
            <Link href="/auth/signin">Login</Link>
          </li>
          <li className="text-md text-black bg-white px-2 rounded-lg sm:text-xl sm:px-4 md:py-1 mx-2">
            <Link href="/auth/signup">Sign up</Link>
          </li>
          </>
          
          }
        </div>
      </ul>
    </nav>
  );
};

export default Nav;
