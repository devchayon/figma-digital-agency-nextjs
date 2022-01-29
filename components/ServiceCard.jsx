/* eslint-disable @next/next/no-img-element */
import React from 'react';

const ServiceCard = ({ Icon, Heading, Text }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-3 mt-8 text-center px-12">
      <img src={Icon} alt="" className="w-1/5" />
      <h1 className="text-2xl font-bold">{Heading}</h1>
      <p className="text-gray-300">{Text}</p>
    </div>
  );
};

export default ServiceCard;
