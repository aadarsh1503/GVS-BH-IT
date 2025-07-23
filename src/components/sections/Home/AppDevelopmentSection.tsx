// src/components/sections/home/AppDevelopmentSection.tsx
import React from 'react';

import { WorkCard } from '@/components/cards';
import works from '@/constant/work';

const AppDevelopmentSection = () => {
  return (
    <section id='sec-work' className='bg-gray-50'>
      <div className='layout top-0 flex flex-col items-center justify-center space-y-5 py-14 lg:h-fit lg:py-0'>
        <h2 className='heading'>
          App
          <span className='fancy'>Development</span>
        </h2>
        <p className='h3 desc'>
          This is not just a piece of our work; these are the different shades
          of our creativity.
        </p>
      </div>
      <div className='layout sticky top-0 space-y-10 py-4 text-xl'>
        {works.map((work) => (
          <WorkCard {...work} key={work.id} />
        ))}
      </div>
    </section>
  );
};

export default AppDevelopmentSection;