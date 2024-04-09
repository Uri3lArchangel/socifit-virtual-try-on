"use client";
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext, useState } from 'react'
import loader from '@/public/spinner.gif'
import { NotificationContext } from '@/src/FE/contexts/Notification';
import { useRouter } from 'next/navigation';
import { useSession } from '@/src/FE/hooks/SessionHook';

const SigninForm = () => {
  const {setSession}=useSession()
  const [loading,setLoading]=useState(false)
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = (e: React.MouseEvent<SVGSVGElement>) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };
  const notification = useContext(NotificationContext)!
  const router = useRouter();

  const credentialSignIn = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const display1 = document.getElementById("display1") as HTMLParagraphElement;
    const display2 = document.getElementById("display2") as HTMLParagraphElement;
    const form =document.getElementById("signinform") as HTMLFormElement
    display1.innerText=""
    display2.innerText=""
    
    const formdata = new FormData(form);
    if(String(formdata.get('email')).length == 0){
      display1.innerText="Enter your email address or username"
      display1.style.color="red"
      return
    }
    if(String(formdata.get('password')).length == 0){
      display2.innerText="Enter your password"
      display2.style.color="red"
      return
    }
    display1.innerText=""
    display2.innerText=""

    setLoading(true)
    const res = await fetch("/api/auth/sign-in", {
      method:"POST",
      body:JSON.stringify({ 
        Email_Username: formdata.get("email"),
        Password: formdata.get("password"),})
         });
      setLoading(false)
      const d = await res.json()
    if (res.status == 200) {
      setSession(true)
      notification(
        {
          type:"success",
          message:"Sign in successfully",
          description:""
        }
      )
      setTimeout(()=>{router.push("/")},2000)
    }else{

  notification(
        {
          type:"error",
          message:d.message,
          description:""
        }
      )
    }
  };
  return (
    <div> 
      <form
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
   onClick={credentialSignIn}
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