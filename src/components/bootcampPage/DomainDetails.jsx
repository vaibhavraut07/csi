import React from 'react'
import DomainDetailsCard from './DomainDetailsCard.jsx'

function DomainDetails() {
  const cardDetails = [
    {
      title: 'UI/UX Design Bootcamp',
      description: 'Learn the principles of design, Wireframing, Prototyping, and Mastering Figma.',
      image: '/bootcamppage/domaindetails/uiuxcardimg.png',
      imageAlt: 'uiuxcardimg',
      path: '/bootcamp/uiux'
    },
    {
      title: 'Web Development Bootcamp',
      description: 'Master HTML, CSS, JavaScript, and React to build modern web applications.',
      image: '/bootcamppage/domaindetails/webdevcardimg.png',
      imageAlt: 'webdevcardimg',
      path: '/bootcamp/webdev'
    },
    {
      title: 'AI & ML Bootcamp',
      description: 'Dive into machine learning algorithms, model building and practical AI projects.',
      image: '/bootcamppage/domaindetails/aimlcardimg.png',
      imageAlt: 'aimlcardimgimg',
      path: '/bootcamp/aiml'
    },
    {
      title: 'Cybersecurity Bootcamp',
      description: 'Master network security, ethical hacking and hands-on tools.',
      image: '/bootcamppage/domaindetails/cyberseccardimg.png',
      imageAlt: 'cyberseccardimg',
      path: '/bootcamp/cybersec'
    },
    {
      title: 'Placement & Industry Exposure',
      description: 'A comprehensive guide to interview preparation, technical skills, career paths, and professional development for job seekers.',
      image: '/bootcamppage/domaindetails/placementscardimg.png',
      imageAlt: 'placementscardimg',
      path: '/bootcamp/dsa'
    },
    {
      title: 'Git & GitHub + LinkedIn',
      description: 'An in-depth introduction to Git and GitHub, covering version control fundamentals, repository management, and open-source contributions.',
      image: '/bootcamppage/domaindetails/gitlinkedincardimg.png',
      imageAlt: 'gitlinkedincardimg',
      path: '/bootcamp/git'
    }
  ]
  return (
    <section id='about'>
    <div className="bg-gradient-to-b from-white to-[#0062f444] pt-[20vw]">
      <div className='px-10'>
        <h1 className='text-black font-sans text-4xl sm:text-5xl font-medium text-center pt-0 sm:pt-24 '>
        Join a career-changing bootcamp
        </h1>
        <h2 className='text-[#919191] font-sans md:text-3xl text-2xl font-normal text-center pt-2'>Top-Notch Programs Designed for Future Leaders in Tech</h2>
      </div>
      
      <div className='flex md:flex-row flex-col gap-3 md:space-x-14 pt-10 md:justify-center'>
        <div className='flex justify-start px-[25vw] md:px-0 space-x-3'>
          <img className="w-6 h-6" src='/bootcamppage/domaindetails/check.png' alt='check' />
          <h3 className='text-black font-sans font-bold leading-snug'>Complete Roadmap</h3>
        </div>
        <div className='flex justify-start px-[25vw] md:px-0 space-x-3'>
          <img className="w-6 h-6" src='/bootcamppage/domaindetails/check.png' alt='check' />
          <h3 className="text-black font-sans font-bold leading-snug">Hands on Work</h3>
        </div>
        <div className='flex justify-start px-[25vw] md:px-0 space-x-3'>
          <img className="w-6 h-6" src='/bootcamppage/domaindetails/check.png' alt='check' />
          <h3 className="text-black font-sans font-bold leading-snug">Networking</h3>
        </div>
      </div>
      <div className='grid grid-cols-1 sm-custom:grid-cols-2 lg-custom:grid-cols-3 gap-9 pt-10 mx-auto max-w-[1197px] pb-28'>
        {cardDetails.map((card, index) => (
              <DomainDetailsCard key={index} title={card.title} description={card.description} image={card.image} path={card.path}/>
          ))}   
      </div>
    </div>
    </section>
  )
}

export default DomainDetails