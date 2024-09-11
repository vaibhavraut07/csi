import React from 'react';
import InfoCard from './InfoCard.jsx';

function BootcampInfo() {
  const infocards = [
    {
      "title": "Offline",
      "description": 'FORMAT'
    },
    {
      "title": "INR 350",
      "description": 'REG FEES'
    },
    {
      "title": "18/09/24",
      "description": 'START DATE'
    },
    {
      "title": "80",
      "description": 'SEATS'
    }
  ];

  const registerCard = {
    "title": "Register Now!",
    "description": ''
  };

  return (
    <div className="bg-black">
      <h1 className="font-sans text-[#F2D73B] shine-text sm:text-4xl text-3xl text-center pt-9">Bootcamp Information</h1>
      <h2 className="font-sans text-[#858585] sm:text-3xl text-xl text-center">All you need to know about events Information</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-9 pt-9 pb-12 mx-auto max-w-[1000px]'>
        {
          infocards.map((card, index) => (
            <InfoCard key={index} title={card.title} description={card.description} />
          ))
        }
      </div>
      <div className="flex justify-center pb-12">
        <a
          href="https://forms.gle/c5RUbXM5ghExL9Eq5"
          className="bg-black border-2 text-yellow rounded-full px-6 py-3 text-xl shine-text font-medium"
        >
          {registerCard.title}
        </a>
      </div>
    </div>
  );
}

export default BootcampInfo;