import JWT from 'jsonwebtoken'

export const userDataTokenSign = (username:string,email:string,verified:boolean,plan:string)=>{
    const randomKey=`${Math.random() * 10000}`
    return JWT.sign({email,username,verified,plan,randomKey},process.env.userDataTokenKey!+randomKey)
}
export const verifyUserDataToken=(token:string)=>{
    if(!token){return}
    const {randomKey} = (JWT.decode(token) as any)
    const data = JWT.verify(token,process.env.userDataTokenKey!+randomKey)  
    return data
}
export const decodeUserDataToken=(token:string)=>{
    const data = JWT.decode(token) 
    return data
}

export const signKeyData=({...a})=>{
    a['timestamp']=Date.now()
const key = JWT.sign(a,process.env.keygenkey!)
return key
}