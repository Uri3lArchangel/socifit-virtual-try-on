"use client";
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import loader from '@/public/spinner.gif'

const SigninForm = () => {
  const [loading,setLoading]=useState(false)
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = (e: React.MouseEvent<SVGSVGElement>) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <div> <form
    id="signinform"
      className={` mx-auto my-10 md:my-20 rounded-[15px] max-w-[400px] w-[95%] px-8 py-12 `}
    >
     
      <div className="text-center mb-14 " >
        <h2 className="font-bold text-[19px] my-3 sm:text-2xl text-[#DBD1F7]">Log in to your account</h2>
        <p className="text-sm italic text-[#c9c1c1c9] sm:text-md ">&quot;EXPERIECE POWERFUL A.I VIRTUAL TRY-ON &quot;</p>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm mb-5 sm:text-xl">
          Your Email or Username:
        </label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Enter Email or Username"
          className=" border-b-2 border-[#B58419] w-full mb-7 bg-transparent placeholder:text-[#c9c1c1c9] focus:outline-none"
        />

      </div>
<p id="display1"></p>
      <div className="border-b-2 mb-10 border-[#B58419]">
        <label htmlFor="password" className="block text-sm mb-5 sm:text-xl">
          Your Password:
        </label>
        <div className="flex">
        <input
        type={showPassword ? 'text' : 'password'}
        name="password"
          id="password"
          placeholder="Enter Password"
          className="   h-fit w-full bg-transparent placeholder:text-[#c9c1c1c9] focus:outline-none"
        />
                    
        {showPassword ?  <EyeOffIcon className="cursor-pointer" onClick={togglePasswordVisibility} /> :  <EyeIcon className="cursor-pointer" onClick={togglePasswordVisibility} />}
      </div>
      </div>
<p id="display2"></p>

      <Link href={"/auth/reset-password"} className="underline text-[#DBD1F7]">forgot password?</Link>
      <button
        type="submit"
   disabled={loading}
        className={"border-2  text-base text-black font-bold p-2 my-4 border-[#000] rounded mb-3 block w-[100%] mx-auto sm:w-[200px] md:text-xl"}
      >
        {loading?<div className="flex justify-center"><Image src={loader} className="w-6 h-full filter brightness-[1]" alt="loader" /> <span>Signing in...</span></div>: <span>Sign In</span>}
      </button>
      {/* <button
        type="button"
        onClick={googleSignin}
        className={"border-2 border-[#fff] text-base font-bold  p-2 rounded  w-[200px] mx-auto flex items-center justify-center "+ signin.GoogleBtn}
      ><FcGoogle size={20} className="mx-[2px]" />
       <p className="">  Google Sign in</p>
      </button> */}

      <p className="text-center mt-3 text-sm line-break sm:text-xl">
        Don&apos;t have an account?
        <Link className=" underline text-[#DBD1F7]" href={"/auth/signup"}>
          <span className="">Sign Up</span>
        </Link>
      </p>
    </form></div>
  )
}

export default SigninForm