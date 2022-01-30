/* eslint-disable @next/next/no-img-element */

import React from 'react';
import { RiPlayFill } from 'react-icons/ri';

const Hero = () => {
  return (
    <div className="py-16">
      <div className="flex flex-col">
        <div className="flex flex-col md:flex-row gap-4 mb-5 text-center md:text-left">
          <h2 className="flex-1 text-3xl md:text-5xl font-bold mb-3">
            Why Enver Is The Best Choice?
          </h2>
          <p className="flex-1 md:text-lg text-gray-300">
            Watch this one minute video so you understand why you should use our
            services!
          </p>
        </div>
        <div className="w-full mt-10 relative">
          <img className="w-full" src="/assets/hero.png" alt="" />
          <div className="absolute top-2/4 left-2/4 btn-color rounded-full p-3">
            <RiPlayFill size="40" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
