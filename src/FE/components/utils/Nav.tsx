'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useSession } from "../../hooks/SessionHook";

const Nav = () => {
  const [signOut,setSignOut]=useState("Sign out")
  const {session,setSession} = useSession()

  const router = useRouter()
  return (
    <nav className="fixed top-0 text-white bg-black w-full z-[5] px-4 py-4 items-center sm:px-10 md:px-20">
      <ul className="flex justify-between flex-wrap">
        <li className=" text-xl  sm:text-2xl sm:font-bold">
          <Link href="/">SOCIFIT</Link>
        </li>
        <li><Link href="/pricing" className="md:text-xl">Pricing</Link></li>
        <div className="flex  justify-between sm:w-[30%] max-w-[200px]">
         {session?
         <>
         <li>
            <Link href="/app" className="text-md text-black bg-white px-2 rounded-lg sm:text-xl sm:px-4 py-1 md:px-6 md:py-2">App</Link>
         </li>
         <li>
         <button onClick={()=>{
          setSignOut("Signing out....")
          setSession(false)
          router.push("/api/auth/signout")
          setSignOut("Sign out")

         }} className="text-red-500 mx-2 sm:text-lg">{signOut}</button>

         </li>
         </>
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
