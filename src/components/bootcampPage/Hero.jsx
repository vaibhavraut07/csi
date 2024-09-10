import React from "react";

function Hero() {
  const texts = [
    "UI UX Design Bootcamp",
    "Web Development Bootcamp",
    "AI & ML Bootcamp",
    "Cybersecurity Bootcamp",
    "Placement and Industry Exposure",
    "Git & Github + LinkedIn",
  ];

  return (
    <>
    <div className="bg-tertiary h-[60vh] sm:h-screen flex items-center justify-center relative"
        style={{background: "linear-gradient(180deg, #E0F0FF 0%, #F7FCFF 100%)",}}>
        <div className=" items-start sm:items-start px-8">
          <div>
          </div>
          <div className="flex flex-col gap-0 items-start  justify-center ">
            <div className="flex flex-row gap-10">
              <div className="bg-blue-600 p-4  rounded-tr-2xl rounded-tl-2xl">
                <div className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bai font-bold leading-[0.95] tracking-[2.876px] text-white animate-shine flex">
                  <div>CSI</div>
                </div>
              </div>
              <div className="sm:ml-40 relative w-[150px] sm:w-[210px] h-[90px] sm:h-[137px]">
                <div className="flex">
                  <img
                    src="/bootcamppage/hero/19thsept.svg"
                    alt="star"
                    className="absolute top-0 left-0 z-10 w-[100px] sm:w-[150px] md:w-[210px]"
                  />
              </div>
            </div>
            </div>
            
          </div>
          <div className="bg-blue-600 p-4 rounded-bl-2xl rounded-br-2xl rounded-tr-2xl sm:mt-0">
            <div className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bai font-bold leading-[0.95] tracking-[2.876px] text-white animate-shine flex items-center justify-center">
              BOOTCAMP
            </div>
          </div>
        </div>
        <div className=" mt-40 sm:mt-64  ml-[-50px] sm:ml-[-40px] relative place-items-center">
          <img src="/bootcamppage/hero/joinus.svg" alt="star" />
        </div>
        <div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 z-10 hidden lg:block"></div>
        <div className="absolute bottom-0 left-0 w-full justify-between px-40 hidden lg:flex">
          {texts.map((text, index) => (
            <div key={index} className="relative flex flex-col items-center">
              <div className="w-1 h-12 bg-[#FFE655]"></div>
              <div className="w-32 absolute bottom-12 text-center text-black text-xl font-bold">
                {text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}

export default Hero;
