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
  return (
    <section
      id='digital-marketing'
      className='flex min-h-screen items-center justify-center overflow-hidden py-24'
    >
      <div className='layout flex flex-col items-center justify-center gap-16 lg:flex-row lg:gap-8'>
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
        <div
          className='
            relative flex items-center justify-center
            /* Define CSS variables and their responsive values using Tailwind prefixes */
            [--orbit-radius:8rem] [--pod-size:5.5rem]
            sm:[--orbit-radius:11rem] sm:[--pod-size:6.5rem]
            lg:[--orbit-radius:15rem] lg:[--pod-size:7.5rem]
          '
        >
          {/* Sizing container: Ensures it's large enough to contain the orbit at all breakpoints */}
          <div
            className='relative flex h-[calc(var(--orbit-radius)*2+var(--pod-size))] w-[calc(var(--orbit-radius)*2+var(--pod-size))] items-center justify-center'
          >
            {/* The main rotating group - pauses on hover */}
            <div className='group animate-spin-slow [animation-play-state:running] hover:[animation-play-state:paused]'>
              {/* The static, central glowing core */}
              <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
                <div className='h-20 w-20 rounded-full bg-primary-base/10 blur-2xl lg:h-24 lg:w-24'></div>
              </div>

              {/* Map over services to create orbiting pods */}
              {serviceItems.map((service, index) => (
                <div
                  key={index}
                  className='
                    absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                    /* Use the responsive variable in a transform. Underscores are for spaces. */
                    [transform:rotate(var(--rotation))_translateX(var(--orbit-radius))]
                  '
                  style={
                    {
                      '--rotation': `${service.rotation}deg`,
                    } as React.CSSProperties
                  }
                >
                  {/* Individual pod container for hover effects and counter-rotation */}
                  <div
                    className='pod-container group/pod'
                    style={{ transform: `rotate(-${service.rotation}deg)` }}
                  >
                    {/* The connecting tether line */}
                    <div
                      className='
                        absolute bottom-1/2 right-full h-0.5 origin-right
                        /* Tether width now uses the responsive variable automatically */
                        w-[var(--orbit-radius)]
                        bg-gradient-to-l from-primary-base/20 to-transparent
                        transition-all duration-300 group-hover/pod:from-primary-base/60'
                    />

                    {/* The Pod Itself */}
                    <div
                      className='
                        relative flex transform-gpu cursor-pointer flex-col items-center
                        justify-center rounded-full border border-slate-200/80 bg-white/80 p-4
                        text-primary-base shadow-lg backdrop-blur-sm transition-all duration-300
                        group-hover/pod:scale-110 group-hover/pod:shadow-primary-base/40
                        group-hover/pod:shadow-2xl group-hover/pod:border-primary-base/30
                        /* Pod size now uses the responsive variable automatically */
                        h-[var(--pod-size)] w-[var(--pod-size)]'
                    >
                      <div className='mb-1 text-4xl transition-colors duration-300 group-hover/pod:text-primary-base sm:text-5xl'>
                        {service.icon}
                      </div>
                      <span
                        className='
                          absolute -bottom-6 w-max text-center text-xs font-semibold
                          text-gray-500 opacity-0 transition-all duration-300
                          group-hover/pod:bottom-[-2.4rem] group-hover/pod:opacity-100
                          group-hover/pod:text-primary-base'
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
      </div>
    </section>
  );
};

export default DigitalMarketingSection;