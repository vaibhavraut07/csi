import React from 'react'

function InfoCard({title,description}) {
  return (
    <div className='bg-[#ffffff33] rounded-lg mx-auto' style={{height: "131px",width:"238px"}}>
          <h1 className='text-4xl text-white text-center font-bold pt-7'>{title}</h1>
          <h2 className="text-[#9B9B9B] text-xl text-center pt-2">{description}</h2>
        </div>
  )
}

export default InfoCard
