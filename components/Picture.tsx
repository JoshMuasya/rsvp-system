import React from 'react'
import { ButtonLink } from './Button'

const Picture = () => {
    return (
        <div className='lg:w-5/6 w-full'>
            <div className='bg-[#FCB2A9] w-full flex flex-col justify-center items-center align-middle font-bold rounded-2xl'>
                {/* Title */}
                <div className='text-center text-xl pt-5 pb-10'>
                    TOGETHER <br />
                    WITH OUR FAMILIES <br />
                    WE
                </div>

                {/* Names */}
                <div className='pb-10 text-center items-center align-middle flex flex-col text-3xl'>
                    <div>
                        JANE DOE
                    </div>

                    <div>
                        &
                    </div>

                    <div>
                        JOHN DOE
                    </div>
                </div>

                {/* Invite */}
                <div className='text-center text-xl pb-10'>
                    INVITE YOU TO CELEBRATE <br />
                    OUR WEDDING
                </div>

                {/* Date */}
                <div className='flex flex-row justify-center align-middle items-center font-bold text-base pb-3'>
                    <div className='pr-6'>
                        APRIL
                    </div>

                    <div className='border-blue h-20 border-2 mr-5' />

                    <div className='flex flex-col justify-center items-center align-middle'>
                        <div>
                            SAT
                        </div>

                        <div>
                            20
                        </div>
                    </div>

                    <div className='border-blue h-20 border-2 ml-5' />

                    <div className='pl-7'>
                        2024
                    </div>
                </div>
            </div>

            {/* Buttons */}
            <div className='w-full py-10 flex flex-row items-center align-middle justify-between'>
                {/* More Details */}
            <ButtonLink 
            detailsLink='/details'
            linkRef='More Details'
            />

            {/* RSVP */}
            <ButtonLink 
            detailsLink='/rsvp'
            linkRef='R.S.V.P'
            />
            </div>
        </div>
    )
}

export default Picture
