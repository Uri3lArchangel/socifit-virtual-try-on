import { findUserByEmail } from "@/src/BE/DB/queries/auth/query";
import { setSessionCookie } from "@/src/FE/Cookie";
import { userDataTokenSign, verifyUserDataToken } from "@/src/FE/JWT";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest) {
    const {cookie} =await req.json()
    if(!cookie ) return NextResponse.redirect(new URL("/auth/sigin",req.nextUrl));
  
    const token = verifyUserDataToken(cookie) as any
    if(!token) return NextResponse.redirect(new URL("/auth/sigin",req.nextUrl));
const user = await findUserByEmail(token.email) 
if(user.isEmailVerified){
    const newToken = userDataTokenSign(user.username,user.email,user.isEmailVerified,user.subscription.plan)
    setSessionCookie(newToken)

}
return NextResponse.redirect(new URL("/",req.nextUrl))

}