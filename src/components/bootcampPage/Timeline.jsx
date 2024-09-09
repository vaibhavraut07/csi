import React from 'react'

function Timeline() {

  const timelineData = [
    {
      date: '19 Sept',
      events: [
        {
          icon: '/bootcamppage/timeline/linkedIn.png',
          title: 'LinkedIn',
          time: '12pm - 2pm'
        },
        {
          icon: '/bootcamppage/timeline/git.png',
          title: 'Git & GitHub',
          time: '3pm - 5pm'
        },
      ],
    },
    {
      date: '20 Sept',
      events: [
        {
          icon: '/bootcamppage/timeline/js.png',
          title: 'Web Development',
          time: '12pm - 2pm'
        },
        {
          icon: '/bootcamppage/timeline/figma.png',
          title: 'UI/UX Designing',
          time: '3pm - 5pm'
        },
      ],
    },
    {
      date: '21 Sept',
      events: [
        {
          icon: '/bootcamppage/timeline/placement.png',
          title: 'Placement & Industry Exposure',
          time: '10am - 12pm'
        },
        {
          icon: '/bootcamppage/timeline/js.png',
          title: 'Web Development',
          time: '12pm - 2pm'
        },
        {
          icon: '/bootcamppage/timeline/figma.png',
          title: 'UI/UX Designing',
          time: '3pm - 5pm'
        },
      ],
    },
    {
      date: '23 Sept',
      events: [
        {
          icon: '/bootcamppage/timeline/cybersec.png',
          title: 'Cyber Security',
          time: '12pm - 2pm'
        },
        {
          icon: '/bootcamppage/timeline/aiml.png',
          title: 'AI/ML',
          time: '3pm - 5pm'
        }
      ],
    },
    {
      date: '24 Sept',
      events: [
        {
          icon: '/bootcamppage/timeline/aiml.png',
          title: 'AI/ML',
          time: '12pm - 2pm'
        },
        {
          icon: '/bootcamppage/timeline/cybersec.png',
          title: 'Cyber Security',
          time: '3pm - 5pm'
        },
      ],
    },
  ]

  return(
      <div className='timeline'>
        <div className="relative w-full my-20">
          {/* Center Line */}
          <div className="absolute w-[2px] bg-black left-1/2 top-0 h-full -translate-x-1/2 opacity-[50%]"></div>
        
          <div className="flex flex-col items-center">
            {timelineData.map((timeline, index) => (
              <div className="w-[80%]">
                <div key={index} className="w-full flex items-center mb-12">
                  {index % 2 === 0 ? (
                    <>
                    {/* Left Side (Title) */}
                      
                    <div className="w-1/2 flex justify-end px-8">
                      <div className="border-2 rounded-[20px] p-8">
                        {timeline.events.map((event, index) => (
                          <div key={index} className="flex items-center justify-between my-2">
                            <div className="flex">
                              <img src={event.icon} alt={event.title} className='w-8 h-6 pr-2' />
                              <h3 className="text-xl font-semibold">{event.title}</h3>
                            </div>
                            <h3 className="text-xl font-semibold pl-10">{event.time}</h3>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Center Dots*/}
                    <img src="/bootcamppage/timeline/circle.png" alt="" />

                    {/* Right Side (Date)*/}  
                      <div className="w-1/2 flex justify-start px-8">
                        <div className="w-[40%] text-center font-bold bg-[#F0F0F0] p-4 rounded-[25px] text-2xl">{timeline.date}</div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Left Side (Date) */}
                      <div className="w-1/2 flex justify-end px-8">
                          <div className="w-[40%] text-center font-bold bg-[#F0F0F0] p-4 rounded-[25px] text-2xl">{timeline.date}</div>
                      </div>

                      {/* Center Dots*/}
                      <img src="/bootcamppage/timeline/circle.png" alt="" />

                      {/* Right Side (Title) */}
                      <div className="w-1/2 flex justify-start px-8">
                        <div className="border-2 rounded-[20px] p-8">
                          {timeline.events.map((event, index) => (
                            <div key={index} className="flex items-center justify-between my-2">
                              <div className="flex">
                                <img src={event.icon} alt={event.title} className='w-8 h-6 pr-2' />
                                <h3 className="text-xl font-semibold">{event.title}</h3>
                              </div>
                              <h3 className="text-xl font-semibold pl-10">{event.time}</h3>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  )
};

export default Timeline