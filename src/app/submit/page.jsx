import DeclarationDetails from '@/components/forms/DeclarationDetails';
import React from 'react'

const page = () => {
  return (
    <div className="flex justify-center">
    <div className='w-full sm:max-w-[800px] rounded-md shadow-md p-2'>
         <DeclarationDetails />
    </div>
    </div>
  )
}

export default page