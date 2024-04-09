import { changeEmail, resetVerificationToken } from "@/src/BE/DB/queries/auth/query";
import User from "@/src/BE/DB/schema/User";
import { signUpConfirmation } from "@/src/BE/mail-service/nodemailer";
import { verifyUserDataToken } from "@/src/FE/JWT";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){
    try{
        const {newEmail}=await req.json()
    const cookie = cookies().get("gt_0_")
    if(!cookie || !cookie.value){
        return NextResponse.redirect(new URL("/auth/signin",req.nextUrl))
    }
    console.log({newEmail})

        const userData = verifyUserDataToken(cookie.value) as any
        if(!userData){
            return NextResponse.redirect(new URL("/auth/signin",req.nextUrl))
        }
        const email = userData.email
        await changeEmail(email,newEmail)
        const u = await resetVerificationToken(newEmail)
        if(u.type=="success"){
        await signUpConfirmation(newEmail,u.data.token.value)
        return NextResponse.json({type:"success",message:"email sent successfully"})
        }else{
        return NextResponse.json({...u,timer:u.data.token.nextRequestable})
        
    }


}catch(err:any){
    // console.log(err)
return NextResponse.json({type:"error",message:"an error occured"})
    }
}
