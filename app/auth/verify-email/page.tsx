import React, { useRef } from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import EmailVerificationComponent from "@/src/FE/components/auth/email/EmailVerificationComponent";
import ResendVerificationCode from "@/src/FE/components/auth/email/ResendVerificationCode";
import { verifyUserDataToken } from "@/src/FE/JWT";

async function page() {

  const cookie = cookies().get("gt_0_")
  if(!cookie || !cookie.value){
    redirect("/auth/signin")
    return
  }
  const user = verifyUserDataToken(cookie.value) as any
  if(!user){
      redirect("/auth/signin")
    }

    return (  
      <div className="bg-white text-black mt-20 mb-10 py-12 px-6 my-4 rounded-md w-[95%] mx-auto max-w-[400px] shadow-div">
      <EmailVerificationComponent email={user.email} />
      <ResendVerificationCode email={user.email} />
      </div>
    )
    
}

export default page;