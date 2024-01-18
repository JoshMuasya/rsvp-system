import Qrcode from '@/components/Qrcode'
import React from 'react'

const page = ({ 
  params }: {
    params: { userId: string };
}) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='bg-[#FCB2A9] w-full flex flex-col justify-center items-center align-middle font-bold rounded-2xl'>
      <div className='py-10'>
      <Qrcode
        userId={params.userId} 
      />
      </div>

      <div className='px-10 pb-10'>
        <h1 className='font-bold text-center text-xl'>Show this to be scanned at the entrance</h1>
      </div>
      </div>
      
    </main>
  )
}

export default page
