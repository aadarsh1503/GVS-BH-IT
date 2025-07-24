// src/components/sections/home/HeroSection.tsx
"use client"; // <-- IMPORTANT: Mark this as a Client Component

import { motion } from 'framer-motion';
import React, { useState } from 'react';

import ArrowLink from '@/components/links/ArrowLink';
import WhatsAppButton from '@/components/WhatsapButton/WhatsapButton';

const HeroSection = () => {
  // --- State and URLs ---
  const [videoError, setVideoError] = useState(false);
  const videoURL = 'https://res.cloudinary.com/dtjskgsnk/video/upload/v1753344172/mixkit-software-developer-working-on-a-computer-41644-hd-ready_cvu4kr.mp4';
  
  // A high-quality screenshot from the video to use as a poster and fallback
  const fallbackImageURL = 'https://images.pexels.com/photos/5473806/pexels-photo-5473806.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';

  // --- Animation Variants ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className='relative flex min-h-screen w-full items-center justify-center overflow-hidden'>
      {/* --- Background: Video or Fallback Image --- */}
      <div className='absolute inset-0 z-0'>
        {videoError ? (
          // If video fails, render a static image background
          <div
            className='h-full w-full bg-cover bg-center'
            style={{ backgroundImage: `url(${fallbackImageURL})` }}
          />
        ) : (
          // Otherwise, render the video
          <video
            className='h-full w-full object-cover'
            autoPlay
            loop
            muted
            playsInline
            poster={fallbackImageURL} // Show this image while video loads
            onError={() => setVideoError(true)} // Set error state if video fails
          >
            <source src={videoURL} type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        )}
        {/* Dark overlay for better text readability */}
        <div className='absolute inset-0 bg-black/50' />
      </div>

      {/* --- Content with Glass Effect --- */}
      <motion.div
        className='relative z-10 mx-auto mt-20 flex w-full max-w-5xl flex-col items-center space-y-8 px-4 text-center'
        variants={containerVariants}
        initial='hidden'
        animate='visible'
      >
        {/* Glassmorphism Card */}
        <div className='w-full rounded-2xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-lg md:p-12'>
          <motion.h1
            variants={itemVariants}
            className='text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl'
            style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)' }}
          >
            Transforming <span className='text-[#0EA5E9]'>Complex Ideas</span>{' '}
            into <span className='text-[#0EA5E9]'>Simple, Effective</span>{' '}
            Digital Solutions
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className='mt-6 text-lg leading-relaxed text-gray-200 sm:text-xl'
          >
            A creative agency dedicated to transforming your vision into reality
            with innovative and sustainable digital solutions.
          </motion.p>

          <motion.div variants={itemVariants} className='mt-10'>
            <ArrowLink
              href='/contact'
              className='rounded-full bg-primary-base px-8 py-4 text-lg font-semibold text-white shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-[#0EA5E9] focus:outline-none focus:ring-4 focus:ring-blue-300/50'
            >
              Schedule Call
            </ArrowLink>
          </motion.div>
        </div>
      </motion.div>

      {/* WhatsApp button position is handled by its own CSS (likely fixed) */}
      <WhatsAppButton />
    </section>
  );
};

export default HeroSection;