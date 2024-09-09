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
    },
  ]

  return (
    <div className='bg-[#94BFFF] py-20 px-20'>
      <div className='flex flex-row gap-12 ml-40'>
        <div className='flex flex-col text-[5rem] justify-center text-[#5E5E5E] font-productsansmedium font-medium leading-tight'>
          <div>
            Meet Our
          </div>
          <div className='flex flex-row gap-6'>
            <div>
              Team
            </div>
            <div>
            <img className="" src='/landingpage/wavinghand.png' />
            </div>
          </div>
          <div>
          <img className="" src='/landingpage/line14.svg' />
          </div>
        </div>
        <div className='relative flex overflow-hidden'> 
          <div className='flex flex-col gap-10 pt-10 animate-marquee whitespace-nowrap'>
            <div className='flex'>  
            {
                teamMembers.map((member,index) => (
                  <TeamMemberCard key={index} name={member.name} role={member.role} imgpath={member.imgpath}/>
                ))
              }
            </div>
            <div className='flex'>
              {
                  teamMembers.map((member,index) => (
                    <TeamMemberCard key={index} name={member.name} role={member.role} imgpath={member.imgpath}/>
                  ))
                }
            </div>  
          </div>
          <div className=' absolute flex flex-col gap-10 pt-10 animate-marquee2 whitespace-nowrap'>
            <div className='flex'>
            {
                teamMembers.map((member,index) => (
                  <TeamMemberCard key={index} name={member.name} role={member.role} imgpath={member.imgpath}/>
                ))
              }
            </div>
            <div className='flex'>
              {
                  teamMembers.map((member,index) => (
                    <TeamMemberCard key={index} name={member.name} role={member.role} imgpath={member.imgpath}/>
                  ))
                }
            </div>  
          </div>
        </div>
      </div>
  </div>
  )
}

export default Team 