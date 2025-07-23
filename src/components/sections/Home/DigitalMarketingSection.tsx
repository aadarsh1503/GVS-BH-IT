// src/components/sections/home/DigitalMarketingSection.tsx
import React from 'react';
import {
  FaBullhorn,
  FaEnvelope,
  FaGlobe,
  FaPenNib,
  FaSearch,
} from 'react-icons/fa';

interface Service {
  name: string;
  icon: JSX.Element;
  rotation: number; // Angle in degrees for initial placement
}

const serviceItems: Service[] = [
  { name: 'Integrated Marketing', icon: <FaBullhorn />, rotation: 0 },
  { name: 'Organic Search (SEO)', icon: <FaSearch />, rotation: 72 },
  { name: 'Social Media Marketing', icon: <FaGlobe />, rotation: 144 },
  { name: 'Content Marketing', icon: <FaPenNib />, rotation: 216 },
  { name: 'Email Marketing', icon: <FaEnvelope />, rotation: 288 },
];

const DigitalMarketingSection = () => {
  const orbitRadius = '15rem'; // lg: '18rem'
  const podSize = '6rem'; // lg: '7rem'

  return (
    <section
      id='digital-marketing'
      className='flex items-center  justify-center  overflow-hidden '
    >
      <div className='layout flex -mt-24 flex-col items-center justify-center gap-12 lg:flex-row lg:gap-2'>
        {/* === Left Side: Text Content (The Central Hub) === */}
        <div className='z-10 w-full max-w-xl shrink-0 text-center lg:text-left'>
          <h2 className='text-4xl font-bold tracking-tighter text-gray-800 sm:text-5xl lg:text-6xl'>
            Our{' '}
            <span className='fancy text-primary-base'>
              Digital Marketing
            </span>{' '}
            Ecosystem
          </h2>
          <p className='mt-6 text-lg leading-8 text-gray-600'>
            Explore our interconnected services, engineered to create a powerful,
            synergistic growth engine for your brand in the digital frontier.
          </p>
        </div>

        {/* === Right Side: Animated Orbital System === */}
        <div className='relative flex h-[350px] w-[350px] items-center justify-center sm:h-[450px] sm:w-[450px] lg:h-[600px] lg:w-[600px]'>
          {/* The main rotating group - pauses on hover */}
          <div className='group animate-spin-slow [animation-play-state:running] hover:[animation-play-state:paused]'>
            {/* The static, central glowing core */}
            <div className='absolute inset-0 flex items-center justify-center'>
              <div className='h-24 w-24 rounded-full bg-primary-base/10 blur-2xl'></div>
            </div>

            {/* Map over services to create orbiting pods */}
            {serviceItems.map((service, index) => (
              <div
                key={index}
                className='absolute left-1/2 top-1/2'
                style={{
                  transform: `rotate(${service.rotation}deg) translate(calc(${orbitRadius} / 2 * 0.7)) translate(calc(${orbitRadius} / 2 * 0.7))`,
                  // On larger screens, the orbit is wider
                  '--orbit-radius': orbitRadius, 
                  '--pod-size': podSize,
                } as React.CSSProperties}
              >
                {/* Individual pod container for hover effects */}
                <div
                  className='pod-container group/pod'
                  style={{
                    transform: `rotate(-${service.rotation}deg)`,
                  }}
                >
                  {/* The connecting tether line */}
                  <div
                    className='absolute bottom-1/2 left-0 h-0.5 w-[14rem] sm:w-[14rem] lg:w-[18rem] origin-right bg-gradient-to-l from-primary-base/20 to-transparent 
                               transition-all duration-300 group-hover/pod:from-primary-base/60'
                    style={{ transform: 'rotate(180deg) ' }}
                  />

                  {/* The Pod Itself */}
                  <div
                    className='relative flex h-24 w-24 transform-gpu cursor-pointer flex-col items-center justify-center rounded-full border border-slate-200/80 bg-white/80 p-4
                                text-primary-base shadow-lg backdrop-blur-sm transition-all duration-300
                                group-hover/pod:scale-110 group-hover/pod:shadow-primary-base/40 group-hover/pod:shadow-2xl group-hover/pod:border-primary-base/30'
                  >
                    <div className='mb-1 text-5xl transition-colors duration-300 group-hover/pod:text-primary-base'>
                      {service.icon}
                    </div>
                    <span
                      className='absolute -bottom-6 w-max text-center text-xs font-semibold text-gray-500 opacity-0
                                 transition-all duration-300 group-hover/pod:bottom-[-2.2rem] group-hover/pod:opacity-100 group-hover/pod:text-primary-base'
                    >
                      {service.name}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalMarketingSection;