import React, {useState, useEffect, useRef} from 'react'

function Timeline() {

  const timelineData = [
    {
      date: '18 Sept',
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
      date: '19 Sept',
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
          icon: '/bootcamppage/timeline/placement.png',
          title: 'Placement & Industry Exposure',
          time: '10am - 12pm'
        },
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

  const [visibleElements, setVisibleElements] = useState([])
  const [animatedElements, setAnimatedElements] = useState([]);
  const timelineRef = useRef(null)

  const handleScroll = () => {
    const timeline = timelineRef.current;
    if (!timeline) return;

    const viewportHeight = window.innerHeight;
    const elements = [];

    timeline.childNodes.forEach((child, index) => {
      const elementRect = child.getBoundingClientRect();
      const elementTop = elementRect.top;
      const elementBottom = elementRect.bottom;

      if (elementTop <= viewportHeight && elementBottom >= 0) {
        elements.push(index);
      }
    });

    setVisibleElements(elements);
  };

  useEffect(() => {
    setAnimatedElements([])

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, []);

  useEffect(() => {
    setAnimatedElements((prevAnimatedElements) => {
      const newAnimatedElements = new Set(prevAnimatedElements);
      visibleElements.forEach((element) => {
        const timeoutId = setTimeout(() => {
          setAnimatedElements((prevAnimatedElements) => {
            const newAnimatedElements = new Set(prevAnimatedElements);
            newAnimatedElements.add(element);
            return newAnimatedElements;
          });
        }, 2000);
      });
      return newAnimatedElements;
    });
  }, [visibleElements]);


  return(
      <div className='timeline'>
        <div className="relative w-full my-20">
          {/* Center Line */}
          <div className="absolute w-[2px] bg-black left-1/2 top-0 h-full -translate-x-1/2 opacity-[50%]"></div>
        
          <div className="flex flex-col items-center justify-center" ref={timelineRef}>
                      {timelineData.map((timeline, index) => (
              <div key={timeline.date} className="w-full sm:w-[80%]">
                <div className="w-full flex items-center mb-8 sm:mb-12 justify-center sm:justify-none">
                  {index % 2 === 0 ? (
                    <>
                      {/* Left Side (Title) */}
                      <div className={`w-1/2 sm:w-1/3 flex justify-end px-4 sm:px-8 ${
                        visibleElements.includes(index) && !animatedElements.has(index)
                          ? 'animate-fadeInLeft'
                          : ''
                      }`}>
                        <div className="border-2 rounded-[20px] p-4 sm:p-8 w-full">
                          {timeline.events.map((event, eventIndex) => (
                            <div key={event.title + eventIndex} className="flex items-center justify-between my-4 sm:my-2 flex-col sm:flex-row">
                              <div className="flex w-full flex-col sm:flex-row justify-start">
                                <img src={event.icon} alt={event.title} className='w-6 sm:w-8 h-6 pr-0 sm:pr-2' />
                                <h3 className="text-base sm:text-xl font-semibold">{event.title}</h3>
                              </div>
                              <h3 className="w-full text-left sm:text-right text-base sm:text-xl font-semibold pl-0 sm:pl-10">{event.time}</h3>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Center Dots */}
                      <img src="/bootcamppage/timeline/circle.png" alt="" className="w-6 sm:w-8" />

                      {/* Right Side (Date) */}
                      <div className={`w-1/2 sm:w-1/3 flex justify-start px-4 sm:px-8 ${
                        visibleElements.includes(index) && !animatedElements.has(index)
                          ? 'animate-fadeInRight'
                          : ''
                      }`}>
                        <div className="w-full sm:w-[65%] text-center font-bold bg-[#F0F0F0] p-4 rounded-[25px] text-base sm:text-2xl">
                          {timeline.date}
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Left Side (Date) */}
                      <div className={`w-1/2 sm:w-1/3 flex justify-end px-4 sm:px-8 ${
                        visibleElements.includes(index) && !animatedElements.has(index)
                          ? 'animate-fadeInLeft'
                          : ''
                      }`}>
                        <div className="w-full sm:w-[65%] text-center font-bold bg-[#F0F0F0] p-4 rounded-[25px] text-base sm:text-2xl">
                          {timeline.date}
                        </div>
                      </div>

                      {/* Center Dots */}
                      <img src="/bootcamppage/timeline/circle.png" alt="" className="w-6 sm:w-8" />

                      {/* Right Side (Title) */}
                      <div className={`w-1/2 sm:w-1/3 flex justify-start px-4 sm:px-8 ${
                        visibleElements.includes(index) && !animatedElements.has(index)
                          ? 'animate-fadeInRight'
                          : ''
                      }`}>
                        <div className="border-2 rounded-[20px] p-4 sm:p-8 w-full">
                          {timeline.events.map((event, eventIndex) => (
                            <div key={event.title + eventIndex} className="flex items-center justify-between my-4 sm:my-2 flex-col sm:flex-row">
                              <div className="flex w-full flex-col sm:flex-row justify-start">
                                <img src={event.icon} alt={event.title} className='w-6 sm:w-8 h-6 pr-0 sm:pr-2' />
                                <h3 className="text-base sm:text-xl font-semibold">{event.title}</h3>
                              </div>
                              <h3 className="w-full text-left sm:text-right text-base sm:text-xl font-semibold pl-0 sm:pl-10">{event.time}</h3>
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