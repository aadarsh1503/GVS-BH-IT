// IMPORTANT: To use external images with next/image, you must configure the domain
// in your `next.config.js` file. Add the following configuration:
//
// module.exports = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'gvs-bh.com',
//         port: '',
//         pathname: '/images/**',
//       },
//     ],
//   },
// };

import Image from 'next/image'; // Import the Next.js Image component
import React, { useState } from 'react';
import {
  RiArrowRightUpLine,
  RiFacebookFill,
  RiInstagramLine,
  RiLinkedinFill,
  RiMailFill,
} from 'react-icons/ri';

import IconLink from '@/components/links/IconLink';

import FooterLink from '../links/FooterLink';

// A new component for a more visually appealing logo/brand name
const FooterLogo = () => (
  <div className='flex items-center space-x-2'>
    {/* Logo image inside circular background */}
    <div className='relative flex h-56 w-56 items-center justify-center rounded-full overflow-hidden mt-0 lg:-mt-12'>
      {/* FIX: Replaced <img> with next/image's <Image> for optimization. */}
      {/* Added width and height props, which are required. */}
      <Image
        src='https://gvs-bh.com/images/logo/gvs.svg'
        alt='Global Vision Logo'
        fill // 'fill' is a great option for responsive containers
        className='object-cover'
      />
    </div>
  </div>
);


const Footer = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  // FIX: Implemented subscription logic to utilize `setLoading` and `setMessage`.
  // This is a mock API call to demonstrate functionality.
  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage(''); // Clear previous messages

    try {
      // Simulate an API call delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // In a real application, you would make your API call here.
      // For example:
      // const response = await fetch('/api/subscribe', { body: JSON.stringify({ email }) });
      // if (!response.ok) throw new Error('Subscription failed.');

      setMessage(`Success! ${email} has been added to our newsletter.`);
      setEmail(''); // Clear input on success
    } catch (error) {
      setMessage('Oops! Something went wrong. Please try again.');
    } finally {
      setLoading(false); // Ensure loading state is reset
    }
  };

  return (
    <footer className='bg-white text-slate-700'>
      {/* 
        SECTION 1: The "Sexy" Newsletter CTA
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
            <p className={`mt-4 text-sm ${message.includes('Success') ? 'text-green-600' : 'text-red-600'}`}>{message}</p>
          )}
        </div>
      </div>

      {/* 
        SECTION 2: Main Footer Content
      */}
      <div className='layout mx-auto max-w-6xl px-6 py-16 sm:px-10 lg:px-12'>
        <div className='grid gap-12 lg:grid-cols-12'>
          {/* Left Column: Brand & Socials */}
          <div className='lg:col-span-4'>
            <FooterLogo />
            <p className='-mt-16 text-base leading-7 text-slate-600'>
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