import {
  RiFacebookFill,
  RiInstagramLine,
  RiLinkedinFill,
  RiMailFill,
  RiTwitterXFill,
} from 'react-icons/ri';

import TextButton from '@/components/buttons/TextButton';
import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
import IconLink from '@/components/links/IconLink';

import FooterLink from '../links/FooterLink';

const Footer = () => {
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

              {/* Services Links */}
              {/* <div>
                <p className='text-base font-semibold text-gray-500 underline'>
                  Services
                </p>
                <ul className='mt-6 space-y-3'>
                  <li>
                    <TextButton variant='basic'>App Development</TextButton>
                  </li>
                  <li>
                    <TextButton variant='basic'>E-Commerce</TextButton>
                  </li>
                  <li>
                    <TextButton variant='basic'>Marketing Solutions</TextButton>
                  </li>
                </ul>
              </div> */}

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

              {/* Extra Links */}
              {/* <div>
                <p className='text-base font-semibold text-gray-500 underline'>
                  Extra Links
                </p>
                <ul className='mt-6 space-y-3'>
                  <li>
                    <TextButton variant='basic' disabled>
                      Careers <span className='tag tag-sm ml-2'>soon</span>
                    </TextButton>
                  </li>
                  <li>
                    <TextButton variant='basic' disabled>
                      Blogs <span className='tag tag-sm ml-2'>soon</span>
                    </TextButton>
                  </li>
                  <li>
                    <TextButton variant='basic' disabled>
                      Terms & Conditions{' '}
                      <span className='tag tag-sm ml-2'>soon</span>
                    </TextButton>
                  </li>
                  <li>
                    <TextButton variant='basic' disabled>
                      Privacy Policy{' '}
                      <span className='tag tag-sm ml-2'>soon</span>
                    </TextButton>
                  </li>
                </ul>
              </div> */}
              <div className='flex flex-col items-center justify-center gap-y-4 text-center md:flex-row md:justify-between'>
                {/* Logo */}

                {/* Social Icons */}
                <ul className='flex items-center space-x-4'>
                  <li>
                    <IconLink
                      href='https://www.facebook.com/gvsbahrain
'
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
                      href='https://www.instagram.com/gvsbahrain
'
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

                {/* Copyright Text */}
              </div>
            </div>

            <hr className='my-10 border-gray-300' />

            {/* Footer Bottom Section */}
            <p className='mt-4 text-sm md:mt-0'>
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
