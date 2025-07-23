// src/components/sections/home/PartnersSection.tsx
import Image from 'next/image';
import React from 'react';

const logos = [
  'logo1.png', 'logo2.png', 'logo3.png', 'logo4.png',
  'logo5.png', 'logo6.png', 'logo7.png', 'logo8.png',
];

const PartnersSection = () => {
  return (
    <section id='sec-partners' className='overflow-hidden py-14'>
      <div className='layout flex flex-col items-center justify-center space-y-8'>
        <h2 className='heading'>
          Our
          <span className='fancy'>Trusted Partners</span>
        </h2>
        <div className='relative w-full'>
          <div className='slide-animation flex gap-4'>
            <div className='inline-flex animate-infiniteXSlide'>
              {[...logos, ...logos].map((logo, i) => ( // Duplicate for smooth loop
                <Image
                  key={i}
                  src={`/images/logo/${logo}`}
                  alt='Partner Logo'
                  width={150}
                  height={100}
                  className='mx-8 h-24 w-32 object-contain'
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;