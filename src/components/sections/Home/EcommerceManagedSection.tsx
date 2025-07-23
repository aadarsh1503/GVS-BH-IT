// src/components/sections/home/EcommerceManagedSection.tsx
import React from 'react';

import { RoadMapCard } from '@/components/cards';
import roadmap from '@/constant/roadmap';

const EcommerceManagedSection = () => {
  return (
    <section id='sec-roadmap' className='mt-0 h-min bg-white lg:mt-28'>
      <div className='layout flex flex-col items-start justify-between gap-10 lg:flex-row lg:gap-20'>
        <div className='top-0 py-14 lg:sticky lg:top-28 lg:w-1/2 lg:py-0'>
          <h2 className='heading text-center'>
            E-commerce Managed
            <span className='fancy'>Services</span>
          </h2>
          <p className='h3 text-center'>
            Some of the processes that we usually use when we have a project
            with our client.
          </p>
        </div>
        <div className='mx-auto flex-grow space-y-3 pb-4 text-xl lg:space-y-20'>
          {roadmap.map((phase) => (
            <RoadMapCard {...phase} key={phase.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcommerceManagedSection;