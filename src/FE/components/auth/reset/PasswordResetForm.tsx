'use client'
import React from 'react'
import Image from 'next/image'
import { useFormState } from 'react-dom';
import PasswordRestFormButton from './PasswordRestFormButton';
import { sendResetLink } from '@/src/BE/server-actions/auth/actions';

function PasswordResetForm() {
    const  initialState={
        type:'' as 'success'|'error'|'warning',message:'' ,time:0 
      }
    const [state,formAction]= useFormState(sendResetLink,initialState)

  return (
    <form

    action={formAction}
      className={`backgroundVector  rounded-[15px] max-w-[500px] w-10/12 px-12 py-20 bg-[#fff] text-black mx-auto my-40  `}
    >
  
      <div>
        <h1 className='text-2xl font-normal mb-2 sm:text-2xl'>Reset your password</h1>
        <label htmlFor="email_change" className="block text-sm mb-5 sm:text-xl">
          Enter Your Email Address
        </label>
        <input
          type="email"
          id="email_change"
          name='email_change'
          placeholder="abc...@gmail.com"
          className=" border-b-2 border-[#B58419] w-full mb-7 bg-transparent placeholder:text-[#c9c1c1c9] focus:outline-none"
        />
      </div>
{state.time && state.time == 0 ? <></>: <p className='text-red-500'>{(state.type == "error" ||state.type == "warning" ) && state.message}</p>}

    <PasswordRestFormButton state={state} />
    </form>  )
}

export default PasswordResetForm