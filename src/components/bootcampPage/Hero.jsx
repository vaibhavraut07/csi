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
      <div
  className="bg-tertiary h-screen flex items-center justify-center relative"
  style={{ background: "linear-gradient(180deg, #E0F0FF 0%, #F7FCFF 100%)" }}
>
        <div className="flex flex-col">
          <div className="flex">
            <div className="bg-blue-600 p-4 rounded-tr-2xl rounded-tl-2xl">
              <div className="text-[143px] font-bai font-bold leading-[0.95] tracking-[2.876px] text-white animate-shine flex">
                <div>CSI</div>
              </div>
            </div>
            <div className="ml-40 mt-6 relative w-[210px] h-[137px]">
              <div className="flex">
                <img
                  src="/bootcamppage/oval.svg"
                  alt="star"
                  className="absolute top-0 left-0 z-10"
                />
                <div className="font-sans text-white font-extrabold h-[50px] w-[75px] text-center absolute translate-x-16 translate-y-4 rotate-6 z-20 flex items-center justify-center">
                  19th SEPT Onwards
                </div>
              </div>

              <img
                src="/bootcamppage/ellipse.svg"
                alt="ellipse"
                className="absolute top-0 left-0 z-10"
              />
            </div>
          </div>
          <div className="bg-blue-600 p-4 rounded-bl-2xl rounded-br-2xl rounded-tr-2xl">
            <div className="text-[143px] font-bai font-bold leading-[0.95] tracking-[2.876px] text-white animate-shine flex items-center justify-center">
              BOOTCAMP
            </div>
          </div>
        </div>
        <div className="flex mt-64 ml-[-20px] relative place-items-center">
          <img src="/bootcamppage/star.svg" alt="star" />
          <div className="font-sans text-black font-extrabold h-[50px] w-[60px] text-center absolute translate-x-9 rotate-6 z-20 flex items-center justify-center">
            JOIN US!
          </div>
          
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 z-10"></div>
        <div className="absolute bottom-0 left-0 w-full flex justify-between px-40">
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
    </>
  );
}

export default Hero;
