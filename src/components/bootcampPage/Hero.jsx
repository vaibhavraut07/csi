import React from "react";

function Hero() {
  return (
    <>
      <div className="bg-tertiary h-screen flex items-center justify-center">
        <div className="flex flex-col">
          <div className="flex">
            <div className="bg-blue-600 p-4 rounded-tr-2xl rounded-tl-2xl">
              <div className="text-[143px] font-bai font-bold leading-[0.95] tracking-[2.876px] text-white animate-shine flex">
                <div>CSI</div>
              </div>
            </div>
            <div className="relative w-[146px] h-[137px]"> {/* Container for the overlapping images */}
              <img
                src="/bootcamppage/oval.svg"
                className="absolute top-0 left-0 z-10" // First image
              />
              <img
                src="/bootcamppage/ellipse.svg"
                className="absolute top-0 left-0 z-20" // Second image overlapping
              />
            </div>
          </div>
          <div className="bg-blue-600 p-4 rounded-bl-2xl rounded-br-2xl rounded-tr-2xl">
            <div className="text-[143px] font-bai font-bold leading-[0.95] tracking-[2.876px] text-white animate-shine flex items-center justify-center">
              BOOTCAMP
            </div>
          </div>
          <div className="relative place-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="146"
              height="137"
              viewBox="0 0 146 137"
              fill="none"
            >
              <path
                d="M90.8906 0.0708002L99.4017 30.5402L132.28 28.6056L118.287 56.4743L145.494 75.0557L115.544 87.2837L124.35 117.687L92.4568 108.552L78.7408 136.551L59.8282 110.328L30.0082 122.822L32.9252 91.7806L0.954506 82.923L24.3361 61.588L5.1741 35.524L38.0799 33.8779L40.6926 2.80307L67.7256 21.6162L90.8906 0.0708002Z"
                fill="#F6CB48"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
