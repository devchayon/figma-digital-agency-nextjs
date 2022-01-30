/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React from 'react';
import { RiArrowRightUpLine } from 'react-icons/ri';

const Header = () => {
  return (
    <div className="py-16 relative">
      <div className="absolute -left-96 -top-64 opacity-25 pointer-events-none">
        <img src="/assets/gradient1.svg" alt="" />
      </div>
      <div className="absolute h-5 right-0 top-2/4 md:top-11 opacity-60 pointer-events-none">
        <img src="/assets/gradient2.svg" alt="" />
      </div>
      <div className="flex gap-6 md:gap-0 flex-col justify-center items-center md:flex-row ">
        <div className="flex flex-col justify-start flex-1 mr-2 w-full z-10">
          <h1 className="text-3xl md:text-5xl lg:text-6xl text-center md:text-left mb-6 font-bold">
            Build Your Awesome Platform
          </h1>
          <p className="text-center lg:text-lg md:text-left mb-6 font-light text-gray-300 ">
            Enver studio is a digital studio that offers several services such
            as UI/UX Design to developers, we will provide the best service for
            those of you who use our services.
          </p>
          <button
            type="button"
            className="btn-color w-40 self-center md:self-start py-3 rounded-md flex justify-center items-center gap-1"
          >
            Our Services
            <RiArrowRightUpLine />
          </button>
        </div>
        <div className="flex-1 flex items-center justify-center relative">
          <Image
            src="/assets/Header.png"
            alt="header"
            width="500"
            height="540"
          />
          <img
            className="absolute top-5 right-6 lg:top-10 lg:right-20 w-10"
            src="/assets/circle.png"
            alt=""
          />
          <img
            className="absolute top-6 left-6 lg:top-10 lg:left-20 w-10"
            src="/assets/curve.png"
            alt=""
          />
          <img
            className="absolute bottom-5 right-6 lg:bottom-10 lg:right-20 w-10"
            src="/assets/add.png"
            alt=""
          />
          <img
            className="absolute bottom-4 left-6 lg:bottom-8 lg:left-20 w-11"
            src="/assets/triangle.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
