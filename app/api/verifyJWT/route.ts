import { verifyUserDataToken } from "@/src/FE/JWT";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest) {
    try{const {cookie} = await req.json()
    const user = verifyUserDataToken(cookie)

    return NextResponse.json({user})}catch(err){
        console.log(err)
    }
}