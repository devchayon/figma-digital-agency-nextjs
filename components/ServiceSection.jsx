/* eslint-disable @next/next/no-img-element */
import React from 'react';
import ServiceCard from './ServiceCard';

const serviceContent = [
  {
    id: 1,
    icon: 'assets/icons/Icon.png',
    heading: 'Development',
    text: 'Create a platform with the best and coolest quality from us.',
  },
  {
    id: 2,
    icon: 'assets/icons/Icon-1.png',
    heading: 'UI/UX Designer',
    text: 'We provide UI/UX Design services, and of course with the best quality',
  },
  {
    id: 3,
    icon: 'assets/icons/Icon-2.png',
    heading: 'Graphic Designer',
    text: 'We provide Graphic Design services, with the best designers',
  },
  {
    id: 4,
    icon: 'assets/icons/Icon-3.png',
    heading: 'Motion Graphic',
    text: 'Create a platform with the best and coolest quality from us.',
  },
  {
    id: 5,
    icon: 'assets/icons/Icon-4.png',
    heading: 'Photography',
    text: 'We provide Photography services, and of course with the best quality',
  },
  {
    id: 6,
    icon: 'assets/icons/Icon-5.png',
    heading: 'Videography',
    text: 'Create a platform with the best and coolest quality from us.',
  },
];

const ServiceSection = () => {
  return (
    <div id="service" className="py-24 relative">
      <img
        className="absolute top-3 w-20 md:left-20 md:top-10"
        src="/assets/serviceshape/s-shape1.png"
        alt=""
      />
      <img
        className="absolute bottom-10 w-10"
        src="/assets/serviceshape/s-shape2.png"
        alt=""
      />
      <img
        className="absolute right-0 top-48 w-10"
        src="/assets/serviceshape/s-shape3.png"
        alt=""
      />
      <div className="absolute -left-96 -top-64 opacity-25 pointer-events-none">
        <img src="/assets/gradient1.svg" alt="" />
      </div>
      <div className="">
        <h1 className="font-bold text-3xl md:text-5xl text-center mb-12">
          The Service We Provide For You
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:md:grid-cols-3 gap-8">
          {serviceContent.map((content) => (
            <ServiceCard
              key={content.id}
              Icon={content.icon}
              Heading={content.heading}
              Text={content.text}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
