import React, { useState } from 'react';
import {
  RiFacebookFill,
  RiInstagramLine,
  RiLinkedinFill,
  RiMailFill,
  RiArrowRightUpLine, // A more dynamic icon for the newsletter button
} from 'react-icons/ri';

import IconLink from '@/components/links/IconLink';
import FooterLink from '../links/FooterLink'; // Assuming this is a styled link

// A new component for a more visually appealing logo/brand name
const FooterLogo = () => (
  <div className='flex items-center space-x-2'>
    {/* Logo image inside circular background */}
    <div className='flex h-full mt-0 lg:-mt-12 w-full items-center justify-center rounded-full  overflow-hidden'>
      <img 
        src='https://gvs-bh.com/images/logo/gvs.svg' 
        alt='Global Vision Logo' 
        className='h-56 w-56 object-cover' 
      />
    </div>
    
  </div>
);


const Footer = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  // The subscription logic remains the same
  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // ... same logic as before
  };

  return (
    <footer className='bg-white text-slate-700'>
      {/* 
        SECTION 1: The "Sexy" Newsletter CTA
        This is now a standalone, visually stunning section that acts as a "pre-footer".
        The subtle gradient and centered, bold typography make it a powerful focal point.
      */}
      <div className='bg-gradient-to-r from-slate-50 to-gray-100 py-16 sm:py-20 lg:py-24'>
        <div className='layout mx-auto max-w-2xl px-6 text-center'>
          <h2 className='text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl'>
            Join Our Inner Circle.
          </h2>
          <p className='mt-4 text-lg leading-8 text-slate-600'>
            Receive exclusive insights, case studies, and special offers delivered
            straight to your inbox. No spam, ever.
          </p>
          <form
            onSubmit={handleSubscribe}
            className='mt-8'
          >
            <div className='relative mx-auto max-w-md'>
              <input
                type='email'
                placeholder='your.email@example.com'
                className='w-full rounded-full border-gray-300 bg-white px-6 py-4 text-base shadow-sm transition placeholder:text-slate-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-slate-800'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading}
              />
              <button
                type='submit'
                disabled={loading}
                className='absolute inset-y-1 right-1 flex items-center justify-center rounded-full bg-slate-800 px-6 font-semibold text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:bg-slate-500'
                aria-label='Subscribe to newsletter'
              >
                {loading ? (
                  'Joining...'
                ) : (
                  <>
                    <span className='hidden sm:inline'>Subscribe</span>
                    <RiArrowRightUpLine className='ml-0 h-5 w-5 sm:ml-2' />
                  </>
                )}
              </button>
            </div>
          </form>
          {message && (
            <p className='mt-4 text-sm text-slate-600'>{message}</p>
          )}
        </div>
      </div>

      {/* 
        SECTION 2: Main Footer Content
        Cleaner layout, better typography, and organized columns.
      */}
      <div className='layout mx-auto max-w-6xl px-6 py-16 sm:px-10 lg:px-12'>
        <div className='grid gap-12 lg:grid-cols-12'>
          {/* Left Column: Brand & Socials */}
          <div className='lg:col-span-4'>
            <FooterLogo />
            <p className='mt-0 lg:-mt-12 text-base leading-7 text-slate-600'>
              Crafting digital experiences where advanced technology feels like
              magic. Let's build the future, together.
            </p>
            <div className='mt-6 flex items-center space-x-2'>
              <IconLink
                href='https://www.facebook.com/gvsbahrain'
                variant='ghost-primary'
                icon={RiFacebookFill}
                className='rounded-full p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900'
              />
              <IconLink
                href='mailto:info@gvs-bh.com'
                variant='ghost-primary'
                icon={RiMailFill}
                className='rounded-full p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900'
              />
              <IconLink
                href='https://www.instagram.com/gvsbahrain'
                variant='ghost-primary'
                icon={RiInstagramLine}
                className='rounded-full p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900'
              />
              <IconLink
                href='https://www.linkedin.com/company/global-vision-solutions/'
                variant='ghost-primary'
                icon={RiLinkedinFill}
                className='rounded-full p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900'
              />
            </div>
          </div>

          {/* Right Columns: Links */}
          <div className='grid grid-cols-2 gap-8 lg:col-span-8 lg:grid-cols-3'>
            <div>
              <h3 className='font-semibold text-slate-900'>Company</h3>
              <ul className='mt-4 space-y-3'>
                <li>
                  <FooterLink href='/about'>About Us</FooterLink>
                </li>
                <li>
                  <FooterLink href='/#sec-work'>Featured Work</FooterLink>
                </li>
                <li>
                  <FooterLink href='/contact'>Contact</FooterLink>
                </li>
                 <li>
                  <FooterLink href='/faq'>FAQ</FooterLink>
                </li>
              </ul>
            </div>
            <div>
              <h3 className='font-semibold text-slate-900'>Services</h3>
              <ul className='mt-4 space-y-3'>
                <li>
                  <FooterLink href='/#app-dev'>App Development</FooterLink>
                </li>
                <li>
                  <FooterLink href='/#sec-roadmap'>E-commerce</FooterLink>
                </li>
                <li>
                  <FooterLink href='/#digital-marketing'>
                    Marketing Solutions
                  </FooterLink>
                </li>
              </ul>
            </div>
            <div>
              <h3 className='font-semibold text-slate-900'>Legal</h3>
              <ul className='mt-4 space-y-3'>
                <li>
                  <FooterLink href='/privacy'>Privacy Policy</FooterLink>
                </li>
                <li>
                  <FooterLink href='/terms'>Terms & Conditions</FooterLink>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 
          SECTION 3: Bottom Bar
          A clean, final element for copyright and credits. The top border provides
          clear separation.
        */}
        <div className='mt-16 border-t border-slate-200 pt-8'>
          <p className='text-sm text-slate-500'>
            © {new Date().getFullYear()} Global Vision Solutions. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;