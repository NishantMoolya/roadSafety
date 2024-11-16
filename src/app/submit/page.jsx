import DeclarationDetails from '@/components/forms/DeclarationDetails';
import Image from 'next/image';
import React from 'react'

const page = () => {
  return (
    <div className="flex justify-center pt-10">
      <div className="flex flex-col w-full items-center gap-4">
    <Image src={'/WCEFinalLogo.png'} alt="college logo" width={'300'} height={'300'} />
    <div className='w-full sm:max-w-[800px] rounded-md shadow-md p-2'>
         <DeclarationDetails />
    </div>
      </div>
    </div>
  )
}

export default page