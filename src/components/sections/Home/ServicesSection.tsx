// src/components/sections/home/ServicesSection.tsx
import React from 'react';

import { ServicesCard } from '@/components/cards';
import services from '@/constant/services';

const ServicesSection = () => {
  return (
    <section id='sec-services' className='relative bg-white'>
      <div className='layout top-0 flex flex-col items-center justify-center space-y-5 py-14 lg:sticky lg:py-0'>
        <h2 className='heading'>
          Our
          <span className='fancy'>Services</span>
        </h2>
       
      </div>
      <p className='h3 text-center'>
          It’s not about limitations, but this is something about what we focus
          on.
        </p>
            <div className='layout sticky top-0 flex flex-col items-start gap-3 py-4 text-xl lg:flex-row'>
        {services.map((service) => (
          <ServicesCard {...service} key={service.heading} />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;