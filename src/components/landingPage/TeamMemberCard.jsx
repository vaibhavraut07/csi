import React from 'react'

function TeamMemberCard({imgpath, name, role}) {
  return (
    <div className='relative w-[227px] h-[271px] bg-white ml-5 rounded-[3px] '>
        <img className="absolute rounded-[3px]" src="/landingpage/membercardbg.png"></img>
        <div className='absolute px-4'>
        <div className='w-[194px] h-[184px] bg-[#94BFFF]  mt-4 rounded-[3px] '>
          <img className='absolute top-[-50px]' src={imgpath}></img>
        </div>
        <h1 className='mt-1 text-center font-productsans text-xl font-bold'>{name}</h1>
        <h2 className='text-center font-productsans text-[#5E5E5E] font-bold'>{role}</h2>
        </div>
    </div>
  )
}

export default TeamMemberCard