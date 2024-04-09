
import DropzoneCloth from '@/src/FE/components/app/DropzoneCloth'
import DropzonePerson from '@/src/FE/components/app/DropzonePeson'
import Dropzone from '@/src/FE/components/app/DropzonePeson'
import React from 'react'

const page = () => {
  return (
    <main className='min-h-[100vh] bg-[#FCFCF9] py-40'>
        <div className=' flex sm:justify-around flex-col items-center  sm:flex-row'>
            <section className='w-full max-w-[250px] '>
                <h1 className='text-center sm:text-xl'>Persons&apos;s Image</h1>
            <DropzonePerson />
            <input type="text" placeholder='Enter Image URL' className='border border-[#000] w-full mt-2 block px-2 h-[40px] bg-transparent'/>
            </section>
            <section className='w-full max-w-[250px]'>
                <h1 className='text-center sm:text-xl'>Clothing&apos;s Image</h1>
            <DropzoneCloth />
            <input type="text" placeholder='Enter Image URL' className='border border-[#000] w-full mt-2 block px-2 h-[40px] bg-transparent'/>
            <input type="text" placeholder='Generate using A.I prompt' className='border border-[#000] w-full mt-2 block px-2 h-[40px] bg-transparent'/>

            </section>
        </div>
        <button className='mx-auto block mt-8 text-xl max-w-[150px] py-2 w-full rounded-lg shadow bg-black text-white'>TRY ON</button>

    </main>
)
}

export default page