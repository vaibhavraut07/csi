import React from 'react'
import TeamMemberCard from './TeamMemberCard.jsx'
function Team() {

  const teamMembers = [
    {
      "name":"Shree Shinde",
      "role":"UI UX Lead",
      "imgpath":"/landingpage/sree.png"
    },
    {
      "name":"Shree Shinde",
      "role":"UI UX Lead",
      "imgpath":"/landingpage/sree.png"
    },
    {
      "name":"Shree Shinde",
      "role":"UI UX Lead",
      "imgpath":"/landingpage/sree.png"
    },
    {
      "name":"Shree Shinde",
      "role":"UI UX Lead",
      "imgpath":"/landingpage/sree.png"
    },
    {
      "name":"Shree Shinde",
      "role":"UI UX Lead",
      "imgpath":"/landingpage/sree.png"
    },
    {
      "name":"Shree Shinde",
      "role":"UI UX Lead",
      "imgpath":"/landingpage/sree.png"
    },
    {
      "name":"Shree Shinde",
      "role":"UI UX Lead",
      "imgpath":"/landingpage/sree.png"
    },
    {
      "name":"Shree Shinde",
      "role":"UI UX Lead",
      "imgpath":"/landingpage/sree.png"
    }
  ]

  return (
    <div className='bg-[#94BFFF] pt-20 pb-20'>
      <div className='flex items-center justify-center'>
        <div className='relative flex items-center   max-w-[500px] leading-tight'>
          <h1 className="text-[80px] text-[#5E5E5E] font-productsansmedium font-medium">Meet our team
          </h1>
          <img className="absolute left-[210px] top-[120px] w-16 h-16" src='/landingpage/wavinghand.png' />
          <img className="absolute left-2 top-[200px]" src='/landingpage/line14.svg' />
        </div>
        <div className='grid grid-cols-1 sm-custom:grid-cols-2 lg-custom:grid-cols-4 gap-10 '>
        {
          teamMembers.map((member,index) => (
            <TeamMemberCard key={index} name={member.name} role={member.role} imgpath={member.imgpath}/>
          ))
        }
        </div> 
      </div>
    </div>
  )
}

export default Team