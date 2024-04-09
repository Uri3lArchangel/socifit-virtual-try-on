'use server'
import { setSessionCookie } from "@/src/FE/Cookie"
import { userDataTokenSign } from "@/src/FE/JWT"
import { findUserByEmail, updateTokenData, updateUserEmailStatusByToken } from "../../DB/queries/auth/query"
import { passwordReset } from "../../mail-service/nodemailer"

export const verifyEmailAction=async(prev:any,code:string)=>{
    try {
       const r=  await updateUserEmailStatusByToken(code)
        if(r.type != "success") return  r 
       const user = r.data
       if(!user.username)return { message:"No user found",type:"warning" }
        const token  = userDataTokenSign(user.username,user.email,true,user.subscription.plan)
        setSessionCookie(token)
        return{
            message:" Email address verified",type:"success"
        }
    } catch (err:any) {
        return{
            message:"An error occured when verifying your email",type:"error"
        }
    }
}

export const sendResetLink = async(prev:any,e:FormData)=>{
    try{
        const email= e.get('email_change') as string
    
        if(!email){
            return {type:"error",message:"Provide an email address"}
        }
        const user = await findUserByEmail(email) as any
        if(!user){
            return {type:"error",message:"No records with this email"}
        }
        if(user.token.nextRequestable > Date.now()){
            return {type:"warning",message:'Please wait for the cooldown period ',time:user.token.nextRequestable}
        }
    
       const u= await updateTokenData(email) as any
       console.log({u})
       await passwordReset(email,u.token.value)

        return {type:"success",message:"Password reset link sent to "+email,time:u.token.nextRequestable}
    
    
    }catch(err:any){
        return {type:"error",message:String(err)}
     
    }
    }