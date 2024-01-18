import { RsvpForm } from '@/components/Form'
import React from 'react'

const Rsvp = () => {
  return (
    <div className='flex flex-col justify-center align-middle items-center h-screen w-full'>
      R.S.V.P

      {/* Form */}
      <div>
        <RsvpForm />
      </div>
    </div>
  )
}

export default Rsvp
