import React from 'react'
import TeamMemberCard from './TeamMemberCard.jsx'
function Team() {
  return (
    <div className='bg-[#94BFFF] pb-5'>
      <marquee behavior="scroll" direction="left" className="text-2xl text-black font-sans font-bold">Meet Our Team</marquee>
        <TeamMemberCard />
    </div>
  )
}

export default Team