import React from 'react'

function DomainDetailsCard({ title, description, image, imageAlt, path }) {
  return (
    <div className="group relative bg-white rounded-tl-[10px] rounded-bl-[10px] rounded-br-[10px] rounded-tr-[64px] shadow-[0px_0px_22.1px_0px_rgba(0,0,0,0.25)] bg-cover bg-center flex flex-col justify-between overflow-hidden mx-auto w-[300px] h-[406.4px] md:w-[375px] md:h-[508px]">
      <div className='p-5'>
        <h1 className='text-black font-sans sm:text-2xl md:text-3xl  font-medium  leading-[100%] mr-[40px]'>
          {title}
        </h1>
        <p className='text-[#919191] font-sans text-xl sm:text-xl  md:text-xl mt-5 sm:mt-3 md:mt-2 sm:leading-[110%] md:leading-[120%]'>
          {description}
        </p>
      </div>
      <div className='relative mt-10 md:mt-5 sm:mt-0'>
          <img className='rounded-bl-[10px] rounded-br-[10px]' src={image} alt={imageAlt} />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <a href={path}>
        <button className="absolute bottom-0 left-0 mb-[22px] ml-[22px] bg-transparent border-2 border-solid text-white px-4 py-2 rounded transition-opacity duration-300 opacity-0 group-hover:opacity-100 flex items-center">
          View Details
            <img src='/bootcamppage/domaindetails/arrow.svg' alt="arrowicon" className="ml-5 w-4 h-4" /> 
        </button>
        </a>
      </div>
    </div>

  )
}

export default DomainDetailsCard