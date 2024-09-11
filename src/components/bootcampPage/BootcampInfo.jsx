import React from 'react'
import InfoCard from './InfoCard.jsx'

function BootcampInfo() {
  const infocards = [
    {
      "title":"Offline",
      "description":'FORMAT'
    },
    {
      "title":"INR 350",
      "description":'REG FEES'
    },
    {
      "title":"18/09/24",
      "description":'START DATE'
    },
    {
      "title":"80",
      "description":'SEATS'
    }
  ]
  return (
    <div className="bg-black">
    <h1 className="font-sans text-[#F2D73B] text-4xl text-center pt-9">Bootcamp Information</h1>
    <h2 className="font-sans text-[#858585] text-3xl text-center">All you need to know about events Information</h2>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-9 pt-9 pb-12 mx-auto max-w-[1000px] '>
      {
        infocards.map((card,index) => (
          <InfoCard key={index} title={card.title} description={card.description}/>
        ))
      }
    </div>
  </div>
  )
}

export default BootcampInfo