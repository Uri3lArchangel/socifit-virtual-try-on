
import { connectMongo } from "@/connection"
import { checkIfUsernameExist, emailLogin, findUserByEmail, usernameLogin } from "@/src/BE/DB/queries/auth/query"
import { setSessionCookie } from "@/src/FE/Cookie"
import { userDataTokenSign } from "@/src/FE/JWT"
import { passwordHasher } from "@/src/FE/helpers"
import { revalidateTag } from "next/cache"
import { NextResponse } from "next/server"

export async function POST(request:Request){
try{
    const {Email_Username,Password}:{Email_Username:string,Password:string} = await request.json()
    const emailCheck = await findUserByEmail(Email_Username)
    await connectMongo()

if(emailCheck){
    const hash = passwordHasher(Password)
    const login = await emailLogin(Email_Username,hash)
    
    if(login){
        let token = userDataTokenSign(login.username,login.email,login.Verified,login.subscription.plan)
        setSessionCookie(token)

       return NextResponse.json({'message':'Login Successful','description':'',type:"success"},{status:200})

    }

    return  NextResponse.json({'message':'Wrong Credentials','description':'Incorrect Email or Passord',type:"error"},{status:400})

}
const unameCheck =await checkIfUsernameExist(Email_Username)

if(unameCheck){
    const hash = passwordHasher(Password)
    const login = await usernameLogin(Email_Username,hash)
    if(login){
        let token = userDataTokenSign(login.username,login.email,login.Verified,login.subscription.plan)
        setSessionCookie(token)
        revalidateTag("cookie_revalidate")

        return NextResponse.json({'message':'Login Successful','description':'',type:"success"},{status:200})

    }

    return  NextResponse.json({'message':'Wrong Credentials','description':'Incorrect Username or Passord'},{status:400})

}


return  NextResponse.json({'message':'Wrong Credentials','description':'Incorrect Username, Email or Passord'},{status:400})
}catch(err:any){
    console.log(err)
return  NextResponse.json({'message':'An error occured','description':'Incorrect Username, Email or Passord'},{status:400})

}
}