import React from 'react';
import TeamMemberCard from './TeamMemberCard.jsx';

function Team() {
  const teamMembers = [
    {
      "name": "Shree Shinde",
      "role": "UI UX Lead",
      "imgpath": "/landingpage/sree.png"
    },
    {
      "name": "Shree Shinde",
      "role": "UI UX Lead",
      "imgpath": "/landingpage/sree.png"
    },
    {
      "name": "Shree Shinde",
      "role": "UI UX Lead",
      "imgpath": "/landingpage/sree.png"
    },
    {
      "name": "Shree Shinde",
      "role": "UI UX Lead",
      "imgpath": "/landingpage/sree.png"
    },
    {
      "name": "Shree Shinde",
      "role": "UI UX Lead",
      "imgpath": "/landingpage/sree.png"
    },
    {
      "name": "Shree Shinde",
      "role": "UI UX Lead",
      "imgpath": "/landingpage/sree.png"
    },
    {
      "name": "Shree Shinde",
      "role": "UI UX Lead",
      "imgpath": "/landingpage/sree.png"
    },
    {
      "name": "Shree Shinde",
      "role": "UI UX Lead",
      "imgpath": "/landingpage/sree.png"
    },
  ];

  return (
    <div className='bg-[#94BFFF] py-10 px-6 sm:px-0 sm:py-20 sm:pl-20'>
      <div className='flex flex-col lg:flex-row gap-12'>
        <div className='flex flex-col w-full lg:w-[40vw] text-3xl sm:text-5xl lg:text-6xl pl-[5vw] justify-center text-[#5E5E5E] font-productsansmedium font-medium leading-tight'>
          <div>Meet Our</div>
          <div className='flex flex-row gap-4 items-center'>
            <div>Team</div>
            <div>
              <img className="w-10 h-10 sm:w-12 sm:h-12" src='/landingpage/wavinghand.png' alt="waving hand" />
            </div>
          </div>
          <div>
            <img className="mt-2" src='/landingpage/line14.svg' alt="underline" />
          </div>
        </div>
        <div className='relative flex overflow-hidden' style={{ width: '100vw', maskImage: 'linear-gradient(to right, transparent, black 10%, black 100%)' }}>
          <div className='flex flex-col gap-10 pt-10 animate-marquee whitespace-nowrap'>
            <div className='flex'>
              {
                teamMembers.map((member, index) => (
                  <TeamMemberCard key={index} name={member.name} role={member.role} imgpath={member.imgpath} />
                ))
              }
            </div>
            <div className='flex'>
              {
                teamMembers.map((member, index) => (
                  <TeamMemberCard key={index} name={member.name} role={member.role} imgpath={member.imgpath} />
                ))
              }
            </div>
          </div>
          <div className='absolute flex flex-col gap-10 pt-10 animate-marquee2 whitespace-nowrap'>
            <div className='flex'>
              {
                teamMembers.map((member, index) => (
                  <TeamMemberCard key={index} name={member.name} role={member.role} imgpath={member.imgpath} />
                ))
              }
            </div>
            <div className='flex'>
              {
                teamMembers.map((member, index) => (
                  <TeamMemberCard key={index} name={member.name} role={member.role} imgpath={member.imgpath} />
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  
}  

export default Team;
