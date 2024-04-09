import { code_generator } from "@/src/FE/helpers";
import User from "../../schema/User";
import { connectMongo } from "@/connection";

connectMongo()


export const createUser = async (
  username: string,
  email: string,
  password?: string
) => {
  if (password) {
    const user = await User.create({
      UUID: crypto.randomUUID(),
      email,
      password,
      username,
      token: {
        value: code_generator(),
        expires: Date.now() + 30 * 60 * 1000,
        nextRequestable: 0,
      },
      subscription:{}
    });
    return user;
  } else {
    let user = User.findOne({ email });
    if (user) return user;
    user = await User.create({
      UUID: crypto.randomUUID(),
      email,
      isEmailVerified: true,
      username,
    });
    return user;
  }
};
export const findUserByEmail = async (email: string) => {
  try {
    const user = await User.findOne({ email });
    return user;
  } catch (err: any) {
    console.log(err);
  }
};

export const emailLogin = async(email:string,hash:string)=>{
  const res = await User.findOne({email:email,password:hash})
  return res
  }
  
  export const checkIfUsernameExist=async(uname:string)=>{
    const user = await User.findOne({username:uname})
     if(user){
         return true
     }
     return false
 }

 export const usernameLogin = async(uname:string,hash:string)=>{
  let res = await User.findOne({username:uname,password:hash})
  return res
  }

  export const getCodeTimerCountdown = async(email:string)=>{
    const user = await User.findOne({email})
    if(user.token.nextRequestable <= 0){
      return
    }else{
      return user.token.nextRequestable 
    }
}

export const updateUserEmailStatusByToken=async(token:string)=>{
  try{  
    const user = await User.findOne({"token.value":token}) 

     if(!user){
      return {type:"error",message:"Invalid token"}
    }
    if(user.token.expires <= Date.now()){
      return {type:"error",message:"Token expired"}
    }
   
      await User.updateOne({"token.value":token},{isEmailVerified:true,email:user.email,"token.value":null,"token.expires":null,"token.nextRequestable":0});
  
      return {type:"success",message:"Verification successful",data:user}
    }catch(err:any){
      console.log(err)
      return {type:"error",message:"An error occured"}
  
      }
  }

  export const resetVerificationToken = async(email:string)=>{
    const token = Math.ceil((Math.random()*1000000))
    const u =await User.findOne({email}) as any;
    if(u.token.nextRequestable >= Date.now()){
      return {type:"warning",message:"cool down period is no yet up, please wait",data:u}
    }
     await User.updateOne({email},{'token.value':token,"token.expires":Date.now()+(30*60*1000),"token.nextRequestable":Date.now()+(2*60*1000)}) ;
  const user = await User.findOne({email}) 
  
     return {type:"success",message:"",data:user}
    
  }
  export const changeEmail = async(email:string,newEmail:string)=>{
    await User.updateOne({email},{email:newEmail})
     
   }
   export const updateTokenData=async(email:string)=>{

    let updated = await User.updateOne({email},{"token.value":code_generator(),"token.expires":Date.now()+(30 * 60 * 1000),"token.nextRequestable":Date.now()+(120*1000)})
    
    return await findUserByEmail(email)
    
    }