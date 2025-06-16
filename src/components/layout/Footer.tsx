import {
  RiFacebookFill,
  RiInstagramLine,
  RiLinkedinFill,
  RiMailFill,
} from 'react-icons/ri';
import React, { useState } from 'react';

import TextButton from '@/components/buttons/TextButton';
import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
import IconLink from '@/components/links/IconLink';
import FooterLink from '../links/FooterLink';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setMessage('Please enter a valid email address.');
      return;
    }

    try {
      setLoading(true);
      const formData = new FormData();
      formData.append('email', email);
      formData.append('list', 'uAV0Hil1qYOUWk892NPTwvKA'); // Your actual list ID
      formData.append('subform', 'yes');
      formData.append('hp', '');

      await fetch('https://send.alzyara.com/subscribe', {
        method: 'POST',
        body: formData,
        mode: 'no-cors',
      });

      setMessage('Thank you for subscribing!');
      setEmail('');
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      console.error('Subscription error:', error);
      setMessage('Subscription failed. Please try again.');
      setTimeout(() => setMessage(''), 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className='bg-slate-100 py-10 text-black sm:pt-16 lg:pt-24'>
      <div className='layout mx-auto max-w-6xl px-6 sm:px-10 lg:px-12'>
        <div className='flex flex-col gap-10 lg:flex-row'>
          {/* Left Column */}
          <div className='flex flex-col items-start justify-center lg:w-1/3 lg:justify-start'>
            <p className='text-center text-2xl sm:text-3xl lg:text-left'>
              Any sufficiently advanced technology is indistinguishable from
              magic.
            </p>
            <ArrowLink
              href='/contact'
              as={ButtonLink}
              className='bg-primary mx-auto mt-6 items-center rounded-md px-5 py-2 text-base text-black hover:bg-primary-base lg:mx-0'
            >
              Schedule A Meeting
            </ArrowLink>
          </div>

          {/* Right Column */}
          <div className='flex-1'>
            <div className='grid grid-cols-2 gap-6 p-4 sm:grid-cols-3 sm:gap-8 lg:gap-12'>
              {/* Navigation Links */}
              <div>
                <p className='text-base font-semibold text-gray-500 underline'>
                  Navigations
                </p>
                <ul className='mt-6 space-y-3'>
                  <li>
                    <FooterLink href='/about'>About</FooterLink>
                  </li>
                  <li>
                    <FooterLink href='/#sec-work'>Featured Work</FooterLink>
                  </li>
                  <li>
                    <FooterLink href='/terms'>Terms & Conditions</FooterLink>
                  </li>
                  <li>
                    <FooterLink href='/faq'>FAQ</FooterLink>
                  </li>
                </ul>
              </div>

              {/* Services */}
              <div>
                <p className='text-base font-semibold text-gray-500 underline'>
                  Services
                </p>
                <ul className='mt-6 space-y-3'>
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

              {/* Social Icons */}
              <div className='flex flex-col items-center justify-center gap-y-4 text-center md:flex-row md:justify-between'>
                <ul className='flex items-center space-x-4'>
                  <li>
                    <IconLink
                      href='https://www.facebook.com/gvsbahrain'
                      variant='ghost-primary'
                      icon={RiFacebookFill}
                    />
                  </li>
                  <li>
                    <IconLink
                      href='mailto:info@gvs-bh.com'
                      variant='ghost-primary'
                      icon={RiMailFill}
                    />
                  </li>
                  <li>
                    <IconLink
                      href='https://www.instagram.com/gvsbahrain'
                      variant='ghost-primary'
                      icon={RiInstagramLine}
                    />
                  </li>
                  <li>
                    <IconLink
                      href='https://www.linkedin.com/company/global-vision-solutions/'
                      variant='ghost-primary'
                      icon={RiLinkedinFill}
                    />
                  </li>
                </ul>
              </div>
            </div>

            {/* Newsletter Form */}
            <div className='mt-10 rounded-lg bg-white p-10 shadow-md'>
              <h3 className='text-xl font-semibold text-center mb-2'>
                Subscribe to our Newsletter
              </h3>
              <p className='text-center text-sm text-gray-600 mb-4'>
                Get updates, insights & offers delivered to your inbox.
              </p>
              <form
                onSubmit={handleSubscribe}
                className='flex flex-col items-center justify-center gap-4 sm:flex-row'
              >
                <input
                  type='email'
                  placeholder='Enter your email'
                  className='w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary sm:max-w-xs'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  type='submit'
                  disabled={loading}
                  className='bg-slate-800 text-white px-5 py-2 rounded-md hover:bg-slate-700 transition'
                >
                  {loading ? 'Submitting...' : 'Subscribe'}
                </button>
              </form>
              {message && (
                <p className='text-sm text-center mt-2 text-gray-600'>{message}</p>
              )}
            </div>

            <hr className='my-10 border-gray-300' />

            {/* Copyright */}
            <p className='mt-4 text-sm '>
              © {new Date().getFullYear()}, All Rights Reserved by Global Vision
              Solutions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
