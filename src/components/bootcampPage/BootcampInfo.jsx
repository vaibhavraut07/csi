import React from 'react'

function BootcampInfo() {
  return (
    <div className="bg-black" style={{height:'343px'}}>
      <h1 className="font-sans text-[#F2D73B] text-4xl text-center pt-9">Bootcamp Information</h1>
      <h2 className="font-sans text-[#858585] text-3xl text-center">All you need to know about events Information</h2>
      <div className="flex space-x-5 justify-center pb-14 pt-9">
        <div className='bg-[#ffffff33] rounded-lg' style={{height: "131px",width:"238px"}}>
          <h1 className='text-4xl text-white text-center font-bold pt-7'>Offline</h1>
          <h2 className="text-[#9B9B9B] text-xl text-center pt-2">FORMAT</h2>
        </div>
        <div className='bg-[#ffffff33] rounded-lg' style={{height: "131px",width:"238px"}}>
          <h1 className='text-4xl text-white text-center font-bold pt-7'>INR 350</h1>
          <h2 className="text-[#9B9B9B] text-xl text-center pt-2">REG FEES</h2>
        </div>
        <div className='bg-[#ffffff33] rounded-lg' style={{height: "131px",width:"238px"}}>
          <h1 className='text-4xl text-white text-center font-bold pt-7'>19/09/24</h1>
          <h2 className="text-[#9B9B9B] text-xl text-center pt-2">START DATE</h2>
        </div>
        <div className='bg-[#ffffff33] rounded-lg' style={{height: "131px",width:"238px"}}>
          <h1 className='text-4xl text-white text-center font-bold pt-7'>80</h1>
          <h2 className="text-[#9B9B9B] text-xl text-center pt-2">SEATS</h2>
        </div>
      </div>
    </div>
  )
}

export default BootcampInfo