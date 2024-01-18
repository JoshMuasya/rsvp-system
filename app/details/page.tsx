import React from 'react'

import Map from '@/components/Map';

const Details = () => {
  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.852635611699!2d36.80080677409781!3d-1.2606296355967848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f173f254ef62f%3A0xeb15618740b6ee3f!2sWestlands%20commercial%20center!5e0!3m2!1sen!2ske!4v1705383715646!5m2!1sen!2ske"

  return (
    <div className='flex flex-col justify-center align-middle items-center py-14'>
      {/* Details */}
      <div className='font-bold text-lg pb-10'>
        More Details about the event
      </div>

      {/* Map */}
      <div>
        <Map
          src={mapSrc}
          width={500}
          height={300}
        />
      </div>
    </div>
  )
}

export default Details
