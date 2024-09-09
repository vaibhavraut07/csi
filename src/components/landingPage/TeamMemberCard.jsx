import React from 'react'

function TeamMemberCard() {
  return (
    <div className='relative w-[227px] h-[271px] bg-white ml-5'>
        <img className="absolute rounded-[3px]" src="/landingpage/membercardbg.png"></img>
        <div className='absolute px-4'>
        <div className='w-[194px] h-[184px] bg-[#94BFFF]  mt-4 rounded-[3px] '></div>
        <h1 className='mt-1 text-center font-productsans text-2xl font-bold'>Shree Shinde</h1>
        <h2 className='text-center font-productsans text-[#5E5E5E]'>UI UX Lead</h2>
        </div>
    </div>
  )
}

export default TeamMemberCard