import React from 'react';
import TeamMemberCard from './TeamMemberCard.jsx';

function Team() {
  const teamMembers = [
    {
      "name": "Jay Patel",
      "role": "Chairperson",
      "imgpath": "/team/jay.svg",
      "alt": "img"
    },
    
    {
      "name": "Anand Subramani",
      "role": "Deputy Secretary",
      "imgpath": "/team/anand.svg",
      "alt": "img"
    },
    
    {
      "name": "Vedant Farkade",
      "role": "Technical Lead",
      "imgpath": "/team/vedant.svg",
      "alt": "img"
    },
    
    
    {
      "name": "Shree Shinde",
      "role": "UI UX Lead",
      "imgpath": "/team/shree.svg",
      "alt": "img"
    },
    {
      "name": "Sanskriti Mahadik",
      "role": "Creative Lead",
      "imgpath": "/team/sanskriti.svg",
      "alt": "img"
    },
    {
      "name": "Parth Mhatre",
      "role": "Sponsorship Lead",
      "imgpath": "/team/parth.svg",
      "alt": "img"
    },
    {
      "name": "Pratham Nibade",
      "role": "Public Relations Lead",
      "imgpath": "/team/pratham.svg",
      "alt": "img"
    },
    {
      "name": "Rutuja Lubal",
      "role": "Documentation Lead",
      "imgpath": "/team/rutuja.svg",
      "alt": "img"
    },
  ]
    const teamMembers2=[
      {
        "name":"Nishit Prabhu",
        "role":"Secretary",
        "imgpath":"/team/nishit.svg",
        "alt": "img"
      },
      {
        "name": "Ayush Sonar",
        "role": "Treasurer",
        "imgpath": "/team/ayush.svg",
        "alt": "img"
      },
      {
        "name": "Akash Kolakkal",
        "role": "Web Dev Lead",
        "imgpath": "/team/akash.svg",
        "alt": "img"
      },
      {
        "name": "Shravani Pawar",
        "role": "UI UX Lead",
        "imgpath": "/team/shravani.svg",
        "alt": "img"
      },
    {
      "name": "Ajinkya Wankhede",
      "role": "Assi-Creative Lead",
      "imgpath": "/team/ajinkya.svg",
      "alt": "img"
    },
    {
      "name": "Chinmayee Bidaye",
      "role": "Social Media Lead",
      "imgpath": "/team/chinmae.svg",
      "alt": "img"
    },
    {
      "name": "Vedansh Gothi",
      "role": "Management Lead",
      "imgpath": "/team/vedance.svg",
      "alt": "img"
    },
  ];

  return (
    <div className='bg-[#94BFFF] py-10 px-6 sm:px-0 sm:py-20 sm:pl-20'>
      <div className='flex flex-col lg:flex-row gap-12'>
        <div className='flex flex-col w-full lg:w-[40vw] text-5xl sm:text-5xl lg:text-6xl pl-[5vw] justify-center text-[#5E5E5E] font-productsansmedium font-medium leading-tight'>
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
        <div className='relative flex overflow-hidden' style={{ width: '100%', maskImage: 'linear-gradient(to right, transparent, black 10%, black 100%)' }}>
          <div className='flex flex-col gap-14 pt-12 animate-marquee whitespace-nowrap'>
            <div className='flex'>
              {
                teamMembers.map((member, index) => (
                  <TeamMemberCard key={index} name={member.name} role={member.role} imgpath={member.imgpath} alt={member.alt} />
                ))
              }
            </div>
            <div className='flex'>
              {
                teamMembers2.map((member, index) => (
                  <TeamMemberCard key={index} name={member.name} role={member.role} imgpath={member.imgpath} alt={member.alt}/>
                ))
              }
            </div>
          </div>
          <div className='absolute flex flex-col gap-14 pt-12 animate-marquee2 whitespace-nowrap'>
            <div className='flex'>
              {
                teamMembers.map((member, index) => (
                  <TeamMemberCard key={index} name={member.name} role={member.role} imgpath={member.imgpath} alt={member.alt}/>
                ))
              }
            </div>
            <div className='flex'>
              {
                teamMembers2.map((member, index) => (
                  <TeamMemberCard key={index} name={member.name} role={member.role} imgpath={member.imgpath} alt={member.alt}/>
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
