import React from 'react';

function Hero() {
  return (
    <>
      <div className="bg-tertiary h-screen flex items-center justify-center">
        <div className="bg-blue-600 p-4 rounded-2xl">
          <div className="text-custom-size font-bai font-bold leading-custom-line-height tracking-custom-spacing text-white animate-shine flex items-center">
            <div>CSI</div>
            <div className="relative">
              {/* First SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" width="211" height="100" viewBox="0 0 211 100" fill="none">
                <path
                  d="M209.049 21.8689C210.483 27.1886 209.132 33.0907 205.26 39.2759C201.386 45.4624 195.038 51.8488 186.658 58.0538C169.903 70.4602 145.188 82.0234 116.484 89.7614C87.7794 97.4994 60.6014 99.9251 39.881 97.621C29.5179 96.4687 20.8195 94.1385 14.3616 90.737C7.90507 87.3362 3.7704 82.913 2.33634 77.5932C0.902284 72.2735 2.25351 66.3714 6.1259 60.1862C9.99915 53.9997 16.3477 47.6133 24.7275 41.4083C41.4823 29.0019 66.1971 17.4387 94.9017 9.70071C123.606 1.96272 150.784 -0.46303 171.505 1.84106C181.868 2.99344 190.566 5.32361 197.024 8.72513C203.481 12.1259 207.615 16.5491 209.049 21.8689Z"
                  stroke="#E94A47"
                  strokeWidth="1.84555"
                />
              </svg>
              {/* Second SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="208"
                height="79"
                viewBox="0 0 208 79"
                fill="none"
                className="absolute inset-0"
              >
                <ellipse
                  cx="104.093"
                  cy="39.543"
                  rx="104.105"
                  ry="38.3854"
                  transform="rotate(5.19406 104.093 39.543)"
                  fill="#E94A47"
                />
                {/* Text inside the second SVG */}
                <text
                  x="50%"
                  y="50%"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  fontSize="14"
                  fill="white"
                  fontWeight="bold"
                  transform="rotate(5.19406 104.093 39.543)"
                >
                  17 SEP onwards
                </text>
              </svg>
            </div>
          </div>
          <div className="text-custom-size font-bai font-bold leading-custom-line-height tracking-custom-spacing text-white animate-shine mt-4">
            BOOTCAMP
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
