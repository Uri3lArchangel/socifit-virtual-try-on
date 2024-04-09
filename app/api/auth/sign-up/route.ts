
import { connectMongo } from "@/connection";
import { createUser } from "@/src/BE/DB/queries/auth/query";
import { signUpConfirmation } from "@/src/BE/mail-service/nodemailer";
import { passwordHasher, validateEmail } from "@/src/FE/helpers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {

    const { email, password, username, confirmPassword } = await req.json();
    
    let st = validateEmail(email)
    if(st.status == "error" ){
      return NextResponse.json({message:"Invalid email address"},{status:400})
    }




    if(password !=  confirmPassword){
      return   NextResponse.json({message:"Password and confirm password do not match",data:null},{status:400})
    }

    
    const hash = passwordHasher(password);
    const user = (await createUser(username,email, hash)) ;
  await signUpConfirmation( user.email,user.token.value);
    
    return NextResponse.json(
      { status: "success", message: "" },
      { status: 201 }
    );
  } catch (err: any) {

console.log(err.message)
    const errorMessage = err.message as string;
    if (
      errorMessage.includes("duplicate key error") &&
      errorMessage.includes("email")
    ) {
      return NextResponse.json(
        {
          message: "This email is already registered, try signing in",
          data: null,
        },
        { status: 400 }
      );
    }
    if (
      errorMessage.includes("duplicate key error") &&
      errorMessage.includes("username")
    ) {
      return NextResponse.json(
        {
          message: "This username is already used, try something else",
          data: null,
        },
        { status: 400 }
      );
    }
    return NextResponse.error();
  }
}
