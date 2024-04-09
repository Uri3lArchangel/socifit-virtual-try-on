'use client'
import React from 'react'
import emailImg from '@/public/email.svg'
import Image from 'next/image'
import SixDigitInputField from '../../utils/SixDigitInputField'

async function EmailVerificationComponent({email}:{email:string}) {
  return (
<div className='flex flex-col items-center w-full space-y-4'>
  <Image src={emailImg} alt='email' />
  <h1 className='text-2xl font-bold text-[#000]'>Verify your mail</h1>
  <p className='text-black text-center w-full'>A 6 digit OTP code was sent to {email} </p>
  <p className='text-black text-center w-full'>Enter the code to complete the verification process</p>
<SixDigitInputField timer={0}  />
</div>
  )
}

export default EmailVerificationComponent