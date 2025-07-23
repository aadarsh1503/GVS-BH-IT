// src/components/sections/home/EcommerceDifferentiatorsSection.tsx
import React, { useState, useEffect, useRef } from 'react';
import {
  FaClipboardList,
  FaClock,
  FaEnvelope,
  FaFileAlt,
  FaHeadset,
  FaUserTie,
} from 'react-icons/fa';

// Import the CSS Module
import styles from './EcommerceDifferentiatorsSection.module.css';

const differentiators = [
  { icon: <FaClock />, text: 'Flexible, Fixed Monthly Support Hours' },
  { icon: <FaClipboardList />, text: 'Short/Mid/Long Term Engagement Models' },
  { icon: <FaUserTie />, text: 'SLA Driven Support Model' },
  { icon: <FaHeadset />, text: 'Dedicated Project Manager' },
  { icon: <FaEnvelope />, text: 'Telephone & Email Support' },
  { icon: <FaFileAlt />, text: 'Detailed Scheduled Reports' },
];

const EcommerceDifferentiatorsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Animate only once
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className='relative bg-gray-100 py-24 sm:py-32 overflow-hidden'>
      {/* Background Texture */}
      <div
        aria-hidden='true'
        className='absolute inset-0 bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:3rem_3rem]'
      />
      <div
        aria-hidden='true'
        className='absolute inset-0 bg-gradient-to-b from-transparent to-gray-100'
      />

      <div ref={sectionRef} className='layout relative text-center'>
        <h2 className='heading pb-4 text-center'>
          E-commerce <span className='fancy text-primary-base'>Differentiators</span>
        </h2>
        <p className='mx-auto max-w-2xl text-lg text-gray-600 mb-16'>
          Our commitment to excellence is reflected in the unique advantages and
          guarantees we offer with every project.
        </p>

        {/* Holographic Hex Grid */}
        <div className='grid grid-cols-1 gap-y-16 gap-x-8 sm:grid-cols-2 lg:grid-cols-3'>
          {differentiators.map(({ icon, text }, index) => (
            <div
              key={index}
              className={`group relative transform-gpu transition-all duration-700
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Hover Glow Effect */}
              <div
                className={`absolute -inset-1 rounded-2xl bg-primary-base opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-30 ${styles.hexagon}`}
              />

              {/* The Hexagon Itself */}
              <div
                className={`relative flex h-48 flex-col items-center justify-center p-6 text-center
                           border border-slate-300/80 bg-white/70 shadow-lg backdrop-blur-md
                           transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl
                           ${styles.hexagon} ${styles.scanlineAnimation}`}
                style={{'--scan-delay': `${index * 0.5}s`} as React.CSSProperties}
              >
                <div className='mb-3 text-4xl text-primary-base transition-transform duration-300 group-hover:scale-110'>
                  {icon}
                </div>
                <p className='text-md font-semibold text-gray-800'>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcommerceDifferentiatorsSection;