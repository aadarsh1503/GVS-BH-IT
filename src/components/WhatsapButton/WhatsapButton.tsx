import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React, { useState } from 'react';

const WhatsAppButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handlePopupToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleWhatsAppClick = (number: string) => {
    window.open(`https://wa.me/${number}`, '_blank'); // Directs to the WhatsApp chat with the specified number
  };

  return (
    <div className='fixed bottom-5 right-5 z-50 flex flex-col items-end'>
      {/* Popup with options for Bahrain and Dammam */}
      {isOpen && (
        <div className='mb-4 w-72 overflow-hidden rounded-lg bg-white shadow-lg'>
          {/* Option for Bahrain */}
          <div
            className='flex cursor-pointer items-start border-b border-gray-100 p-4 transition hover:bg-gray-50'
            onClick={() => handleWhatsAppClick('+97339416363')} // Replace with Bahrain WhatsApp number
          >
            <Image
              src='/images/logo/gvs.svg'
              alt='Bahrain Office Logo'
              className='h-12 w-12'
              width={48}
              height={48}
            />
            <div className='ml-3'>
              <div className='font-semibold text-gray-800'>
                Global Vision Solution - Bahrain
              </div>
              <div className='mt-1 max-w-xs rounded-lg bg-green-500 p-2 text-sm text-gray-700'>
                <span className='text-white'>
                  Hi! How can we assist you in Bahrain?
                </span>
              </div>
            </div>
          </div>

          {/* Option for Dammam */}
          <div
            className='flex cursor-pointer items-start p-4 transition hover:bg-gray-50'
            onClick={() => handleWhatsAppClick('+966553800550')} // Replace with Dammam WhatsApp number
          >
            <Image
              src='/images/logo/gvs.svg'
              alt='Dammam Office Logo'
              className='h-12 w-12'
              width={48}
              height={48}
            />
            <div className='ml-3'>
              <div className='font-semibold text-gray-800'>
                Global Vision Solution - Dammam
              </div>
              <div className='mt-1 max-w-xs rounded-lg bg-green-500 p-2 text-sm text-gray-700'>
                <span className='text-white'>
                  Hi! How can we assist you in Dammam?
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* WhatsApp Floating Button */}
      <button
        className='flex h-12 w-12 items-center justify-center rounded-full bg-green-500 shadow-lg transition-transform duration-300 hover:scale-105'
        onClick={handlePopupToggle}
        aria-label='WhatsApp'
      >
        <FontAwesomeIcon icon={faWhatsapp} className='text-2xl text-white' />
      </button>
    </div>
  );
};

export default WhatsAppButton;
