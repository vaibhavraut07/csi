import React, { useState, useEffect } from 'react';

export default function Hero() {
  const [imgSrc, setImgSrc] = useState("/landingpage/Hero-img.svg");

  useEffect(() => {
    const updateImageSrc = () => {
      if (window.innerWidth < 840) {
        setImgSrc("/landingpage/Hero-responsive.svg");
      } else {
        setImgSrc("/landingpage/Hero-img.svg");
      }
    };

    updateImageSrc();

    window.addEventListener("resize", updateImageSrc);

    return () => window.removeEventListener("resize", updateImageSrc);
  }, []);

  return (
    <section className="relative h-[calc(100vh)] bg-gradient-to-b from-[#C7DDFD] to-white">
      <img 
        src={imgSrc}
        alt="CSI-ACE" 
        className="absolute inset-0 w-full h-full object-cover rounded-[35px] p-5"
      />

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
        <h1 className="text-9xl font-bold mb-4 font-ethno text-primary p-5 shiny-text" data-text="CSI-ACE">
          <span className="block md:inline">CSI-</span>
          <span className="block md:inline">ACE</span>
        </h1>
        <p className="text-2xl mb-8 font-bai text-primary font-thin">Computer Society of India</p>
      </div>
    </section>
  );
}
