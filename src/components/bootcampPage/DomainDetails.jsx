import React from 'react'
import DomainDetailsCard from './DomainDetailsCard.jsx'

function DomainDetails() {
  const cardDetails = [
    {
      title: 'UI/UX Design Bootcamp',
      description: 'Learn the principles of design, Wireframing, Prototyping, and Mastering Figma.',
      image: '/bootcamppage/domaindetails/uiuxcardimg.png',
      imageAlt: 'uiuxcardimg',
      path: '#'
    },
    {
      title: 'Web Development Bootcamp',
      description: 'Master HTML, CSS, JavaScript, and React to build modern web applications.',
      image: '/bootcamppage/domaindetails/webdevcardimg.png',
      imageAlt: 'webdevcardimg',
      path: '#'
    },
    {
      title: 'AI & ML Bootcamp',
      description: 'Dive into machine learning algorithms, model building and practical AI projects.',
      image: '/bootcamppage/domaindetails/aimlcardimg.png',
      imageAlt: 'aimlcardimgimg',
      path: '#'
    },
    {
      title: 'Cybersecurity Bootcamp',
      description: 'Master network security, ethical hacking and hands-on tools.',
      image: '/bootcamppage/domaindetails/cyberseccardimg.png',
      imageAlt: 'cyberseccardimg',
      path: '#'
    },
    {
      title: 'Placement & Industry Exposure',
      description: 'A comprehensive guide to interview preparation, technical skills, career paths, and professional development for job seekers.',
      image: '/bootcamppage/domaindetails/placementscardimg.png',
      imageAlt: 'placementscardimg',
      path: '#'
    },
    {
      title: 'Git & GitHub + LinkedIn',
      description: 'An in-depth introduction to Git and GitHub, covering version control fundamentals, repository management, and open-source contributions.',
      image: '/bootcamppage/domaindetails/gitlinkedincardimg.png',
      imageAlt: 'gitlinkedincardimg',
      path: '#'
    }
  ]
  return (
    <section id='about'>
    <div className="bg-gradient-to-b from-white to-[#0062f444]">
      <h1 className='text-black font-sans text-5xl font-medium text-center pt-24'>
      Join a career-changing bootcamp
      </h1>
      <h2 className='text-[#919191] font-sans text-3xl font-normal text-center pt-2'>Top-Notch Programs Designed for Future Leaders in Tech</h2>
      <div className='flex space-x-14 pt-10 justify-center'>
        <div className='flex space-x-3'>
          <img className="w-6 h-6" src='/bootcamppage/domaindetails/check.png' alt='check' />
          <h3 className='text-black font-sans font-bold leading-snug'>Complete Roadmap</h3>
        </div>
        <div className='flex space-x-3'>
          <img className="w-6 h-6" src='/bootcamppage/domaindetails/check.png' alt='check' />
          <h3 className="text-black font-sans font-bold leading-snug">Hands on Work</h3>
        </div>
        <div className='flex space-x-3'>
          <img className="w-6 h-6" src='/bootcamppage/domaindetails/check.png' alt='check' />
          <h3 className="text-black font-sans font-bold leading-snug">Networking</h3>
        </div>
      </div>
      <div className='grid grid-cols-1 sm-custom:grid-cols-2 lg-custom:grid-cols-3 gap-9 pt-20 mx-auto max-w-[1197px] pb-28'>
        {cardDetails.map((card, index) => (
              <DomainDetailsCard key={index} title={card.title} description={card.description} image={card.image} path={card.path}/>
          ))}   
      </div>
    </div>
    </section>
  )
}

export default DomainDetails