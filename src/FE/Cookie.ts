import { revalidatePath, revalidateTag } from 'next/cache'
import {cookies} from 'next/headers'

export const setSessionCookie = (token:string)=>{
    cookies().delete("gt_0_")
    cookies().set("gt_0_",token,{
        maxAge:2592000, // 30 days = 3600 seconds * 24 * 30,
        secure:true,
        httpOnly:true,
    })
revalidateTag("cookie_revalidate")
}



export const deleteSessionCookie=()=>{
    cookies().delete("gt_0_")
    revalidateTag("cookie_revalidate")
}