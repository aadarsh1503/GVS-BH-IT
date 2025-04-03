import { ReactNode } from 'react';
import { FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa';

import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
import WhatsAppButton from '../WhatsapButton/WhatsapButton';

type ContactProps = {
  children: ReactNode;
  email: string;
  phone: string;
  socials?: {
    instagram?: string;
    linkedin?: string;
    twitter?: string;
    whatsapp?: string;
  };
};

const Contact = ({ children, socials }: ContactProps) => {
  return (
    <section id='sec-contact' className='bg-gray-50 py-14'>
      <WhatsAppButton />
      <div className='layout'>
        <div className='rounded-2xl bg-gradient-to-br from-white to-gray-100 p-10 text-center shadow-lg lg:p-20'>
          <h2 className='h1 mb-6'>{children}</h2>

          <p className='text-lg text-gray-700'>
            We’re here to assist. Schedule a call or connect with us on any of
            our platforms!
          </p>

          <ArrowLink
            className='schdcontact mt-10 inline-flex items-center rounded-full bg-primary-500 px-8 py-4 text-xl font-semibold text-white transition-all duration-300 hover:bg-primary-600'
            as={ButtonLink}
            href='/contact'
          >
            Schedule Call
          </ArrowLink>

          {/* Social Links */}
          <div className='mt-8 flex justify-center space-x-5 text-2xl text-gray-600'>
            {socials?.instagram && (
              <a
                href={socials.instagram}
                className='hover:text-pink-600'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaInstagram aria-label='Instagram' />
              </a>
            )}
            {socials?.linkedin && (
              <a
                href={socials.linkedin}
                className='hover:text-blue-600'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaLinkedin aria-label='LinkedIn' />
              </a>
            )}
            {socials?.twitter && (
              <a
                href={socials.twitter}
                className='hover:text-blue-400'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaTwitter aria-label='Twitter' />
              </a>
            )}
            {socials?.whatsapp && (
              <a
                href={`https://wa.me/${socials.whatsapp}`}
                className='hover:text-green-500'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaWhatsapp aria-label='WhatsApp' />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
