"use client";

import React from "react";
import HeroContent from "./HeroContent";

const Hero = () => {
  return (
    <section
      className="relative min-h-[620px] lg:min-h-[700px] overflow-hidden"
      style={{
        background: `
          radial-gradient(
            circle at 15% 10%,
            rgba(210, 238, 250, 0.75) 0%,
            rgba(210, 238, 250, 0) 42%
          ),
          radial-gradient(
            circle at 85% 10%,
            rgba(215, 250, 225, 0.8) 0%,
            rgba(215, 250, 225, 0) 45%
          ),
          radial-gradient(
            circle at 80% 90%,
            rgba(255, 245, 235, 0.65) 0%,
            rgba(255, 245, 235, 0) 40%
          ),
          #f8fcfa
        `,
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(76, 111, 132, 0.10) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(76, 111, 132, 0.10) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "68px 68px",
        }}
      />

      <div
        className="
          absolute
          top-[230px]
          left-0
          h-[130px]
          w-[110px]
          bg-[#E30613]
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          top-0
          right-[9%]
          h-[130px]
          w-[132px]
          bg-[#0878C9]
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          top-0
          right-0
          h-[54px]
          w-[67px]
          bg-[#159B5B]
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          top-[230px]
          right-[9%]
          h-[43px]
          w-[67px]
          bg-[#159B5B]
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          top-[230px]
          right-0
          h-[43px]
          w-[67px]
          bg-[#159B5B]
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          bottom-0
          left-0
          h-[142px]
          w-[176px]
          bg-[#0878C9]
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          bottom-[142px]
          left-[14%]
          h-[66px]
          w-[67px]
          bg-[#159B5B]
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          bottom-0
          left-[19%]
          h-[70px]
          w-[70px]
          bg-[#E30613]
          pointer-events-none
        "
      />

      <HeroContent />
    </section>
  );
};

export default Hero;