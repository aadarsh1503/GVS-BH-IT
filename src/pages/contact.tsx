import Script from 'next/script';

import UnderlineLink from '@/components/links/UnderlineLink';
import Seo from '@/components/Seo';
import WhatsAppButton from '@/components/WhatsapButton/WhatsapButton';
export default function ContactPage() {
  return (
    <>
      <Seo templateTitle='Contact' />
      <main>
        <section
          id='contact-section'
          className='flex flex-col bg-gray-50 py-10'
        >
          <div className='layout flex flex-col justify-between lg:flex-row lg:space-x-10 lg:pt-20'>
            <div className='animate-fade-in px-4 py-10 lg:w-[45%]'>
              <h1 className='text-3xl font-bold leading-tight lg:text-4xl'>
                Bring Your Vision to Life. Let's discuss the next big thing
              </h1>
              <p className='mt-4 text-lg'>
                Lets Connect and explore the possiblities.{' '}
                <UnderlineLink
                  className='border-b border-base-content'
                  href='mailto:info@gvs-bh.com?subject=Project%20Inquiry'
                >
                  send us an email
                </UnderlineLink>
                .
              </p>
            </div>
            <div className='animate-fade-in-slow mt-10 flex w-full justify-center lg:mt-0 lg:w-[50%]'>
              <div
                className='calendly-inline-widget rounded-md border border-gray-200 shadow-lg'
                data-url='https://calendly.com/gvssoft-bh/gvs-meetup'
                style={{
                  minWidth: '100%',
                  height: '550px',
                  overflow: 'hidden',
                }}
              ></div>
              <Script
                type='text/javascript'
                src='https://assets.calendly.com/assets/external/widget.js'
                async
              />
            </div>
          </div>

          {/* <div className='layout animate-fade-in bg-gray-100 py-10'>
            <ContactForm />
          </div> */}
        </section>
      </main>
      <WhatsAppButton />
    </>
  );
}

// const ContactForm = () => null;
// <div className='flex w-full flex-col items-center justify-center gap-12 rounded-md bg-white py-12 px-6 shadow-md lg:gap-10 lg:px-12'>
//   <div className='flex flex-col items-center text-center lg:w-[50%] lg:items-start lg:text-left'>
//     <h3 className='text-4xl font-bold leading-snug lg:text-5xl'>
//       Good things start with{' '}
//       <span className='text-6xl font-bold uppercase text-orange-500'>
//         “Hello”
//       </span>
//     </h3>
//     <p className='mt-4 text-lg'>
//       Feel free to contact us; we’d love to hear from you.
//     </p>
//   </div>

//   {/* <form
//     method='post'
//     action='https://formsubmit.co/axstudios.tech@gmail.com'
//     className='flex w-full max-w-3xl flex-col flex-wrap gap-4 lg:flex-row lg:gap-6'
//   >
//     <input
//       type='text'
//       name='firstname'
//       required
//       placeholder='First Name*'
//       className='h-14 flex-1 rounded-md border-2 border-primary-400 px-4 py-2 text-base transition-all duration-200 ease-in-out focus:border-primary-600 focus:ring-primary-600'
//     />
//     <input
//       type='text'
//       name='lastname'
//       required
//       placeholder='Last Name*'
//       className='h-14 flex-1 rounded-md border-2 border-primary-400 px-4 py-2 text-base transition-all duration-200 ease-in-out focus:border-primary-600 focus:ring-primary-600'
//     />
//     <input
//       type='email'
//       name='email'
//       required
//       placeholder='Email Id*'
//       className='h-14 flex-1 rounded-md border-2 border-primary-400 px-4 py-2 text-base transition-all duration-200 ease-in-out focus:border-primary-600 focus:ring-primary-600'
//     />
//     <input
//       type='number'
//       name='number'
//       placeholder='Mobile No.'
//       className='h-14 flex-1 rounded-md border-2 border-primary-400 px-4 py-2 text-base transition-all duration-200 ease-in-out focus:border-primary-600 focus:ring-primary-600'
//     />
//     <textarea
//       name='message'
//       rows={6}
//       required
//       placeholder='Type Your Message Here...'
//       className='w-full rounded-md border-2 border-primary-400 px-4 py-2 text-base transition-all duration-200 ease-in-out focus:border-primary-600 focus:ring-primary-600'
//     />
//     <button
//       type='submit'
//       className='h-12 w-full transform rounded-md bg-primary-base px-6 text-lg font-semibold text-white transition-transform duration-300 hover:scale-105 hover:to-primary-700 lg:w-auto'
//     >
//       SUBMIT
//     </button>
//   </form> */}
// </div>
