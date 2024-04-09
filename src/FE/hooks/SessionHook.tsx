'use client'
import { createContext, useContext, useEffect, useState } from "react";
import React from 'react'
import { URLRESOLVE } from "../helpers";

const SessionContext = createContext<{session:boolean,setSession:React.Dispatch<React.SetStateAction<boolean>>}>({session:false,setSession:()=>{}})
export const SessionProvider = ({children}:{children:React.ReactNode})=>{
    const [session,setSession] = useState(false)

    useEffect(()=>{
        const run = async()=>{
        const res = await fetch(URLRESOLVE("/api/fetchSession"))
        const data = await res.json()
        setSession(data.auth)
        }
        run()
    
    },[])
    return (
        <SessionContext.Provider value={{session,setSession}}>
            {children}
        </SessionContext.Provider>
    )
}

export const useSession = ()=>useContext(SessionContext)
