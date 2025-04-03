import Carousel from 'better-react-carousel';
import { NextPage } from 'next';
import Image from 'next/image';
import {
  FaBullhorn,
  FaEnvelope,
  FaGlobe,
  FaPenNib,
  FaSearch,
  FaShoppingCart,
} from 'react-icons/fa';
import {
  FaClipboardList,
  FaClock,
  FaFileAlt,
  FaHeadset,
  FaUserTie,
} from 'react-icons/fa'; // Example icons
import { FaCode, FaMobileAlt, FaPenFancy, FaUserFriends } from 'react-icons/fa';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';

import {
  RoadMapCard,
  ServicesCard,
  TestimonialCard,
  WorkCard,
} from '@/components/cards';
import ClientsSection from '@/components/ClientsSection/ClientsSection';
import ArrowLink from '@/components/links/ArrowLink';
import Seo from '@/components/Seo';
import WhatsAppButton from '@/components/WhatsapButton/WhatsapButton';

import clientsays from '@/constant/clientsays';
import roadmap from '@/constant/roadmap';
import services from '@/constant/services';
import works from '@/constant/work';

interface BrandingFeature {
  name: string;
  icon: JSX.Element;
  description: string;
}
const features: BrandingFeature[] = [
  {
    name: 'Creative Digital Design',
    icon: <FaPenFancy />,
    description: 'Innovative and visually captivating design solutions.',
  },
  {
    name: 'Easy to Access Information',
    icon: <FaUserFriends />,
    description: 'Structured for accessibility and ease of use.',
  },
  {
    name: 'Enhanced User Engagement',
    icon: <FaUserFriends />,
    description: 'Interactive experiences to keep users engaged.',
  },
  {
    name: 'Search Engine Friendly',
    icon: <FaSearch />,
    description: 'Optimized for search engines to boost visibility.',
  },
  {
    name: 'Responsive Web Design',
    icon: <FaMobileAlt />,
    description:
      'Seamless across devices, built on Bootstrap, Laravel, HTML5, and CSS3.',
  },
  {
    name: 'Content Management (CMS)',
    icon: <FaCode />,
    description: 'Supports WordPress, Joomla, and other CMS platforms.',
  },
  {
    name: 'E-commerce Development',
    icon: <FaShoppingCart />,
    description: 'Powerful e-commerce with Magento, Shopify, PHP, and ASP.NET.',
  },
];

interface Service {
  name: string;
  icon: JSX.Element;
}

const service: Service[] = [
  { name: 'Integrated Digital Marketing Approach', icon: <FaBullhorn /> },
  { name: 'Organic Search', icon: <FaSearch /> },
  { name: 'Social Media Marketing', icon: <FaGlobe /> },
  { name: 'Content Marketing', icon: <FaPenNib /> },
  { name: 'Email Marketing', icon: <FaEnvelope /> },
];

const Home: NextPage = () => {
  return (
    <>
      <Seo title='Global Vision Solutions' />
      <main className='w-full space-y-28  pb-20'>
        {/* Hero Section */}
        <section className='relative bg-gradient-to-br from-blue-100 via-white to-blue-200 py-24 text-center lg:py-36'>
          <div className='layout mx-auto flex max-w-4xl flex-col items-center space-y-8'>
            <h1 className='text-5xl font-extrabold leading-tight text-gray-800 sm:text-6xl md:text-7xl'>
              Transforming{' '}
              <span className='text-primary-base'>Complex Ideas</span> into{' '}
              <span className='text-primary-base'>Simple, Effective</span>{' '}
              Digital Solutions
            </h1>
            <p className='text-xl leading-relaxed text-gray-700 sm:text-2xl'>
              A creative agency dedicated to transforming your vision into
              reality with innovative and sustainable digital solutions.
            </p>
            <ArrowLink
              href='/contact'
              className='rounded-full bg-primary-base px-8 py-3 text-lg font-semibold text-white shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-blue-600'
            >
              Schedule Call
            </ArrowLink>
          </div>
          <WhatsAppButton />
        </section>

        {/* Services Section */}
        <section id='sec-services' className='relative bg-white'>
          <div className='layout top-0 flex flex-col items-center justify-center space-y-5 py-14 lg:sticky lg:py-0'>
            <h2 className='heading'>
              Our
              <span className='fancy'>Services</span>
            </h2>
            <p className='h3 text-center'>
              It’s not about limitations, but this is something about what we
              focus on.
            </p>
          </div>
          <div className='layout sticky top-0 flex flex-col items-start gap-3 py-4 text-xl lg:flex-row'>
            {services.map((service) => (
              <ServicesCard {...service} key={service.heading} />
            ))}
          </div>
        </section>

        {/* Service Portfolio */}
        <section
          id='sec-portfolio'
          className='relative bg-gray-50 py-14 lg:py-10'
        >
          <div className='layout flex flex-col items-center justify-center space-y-5'>
            <h2 className='heading'>
              Our <span className='fancy'>Service Portfolio</span>
            </h2>
            <p className='h3 text-center'>
              Discover our core services designed to elevate your business.
            </p>
          </div>

          {/* Portfolio Cards with Animation */}
          <div className='layout grid grid-cols-1 gap-10 py-10 lg:grid-cols-3'>
            {/* Enterprise Application Development */}
            <div
              className='animate-fadeInUp flex transform flex-col items-start rounded-lg bg-gradient-to-br from-indigo-50 to-white p-6 shadow-lg transition-transform duration-500 ease-in-out hover:scale-105'
              style={{ animationDelay: '0.1s' }}
            >
              <h3 className='mb-4 text-xl font-bold text-indigo-700'>
                Enterprise Application Development
              </h3>
              <ul className='list-none space-y-3'>
                <li className='flex items-center'>
                  <span className='mr-2 h-2.5 w-2.5 animate-pulse rounded-full bg-indigo-500'></span>{' '}
                  Application Integration
                </li>
                <li className='flex items-center'>
                  <span className='mr-2 h-2.5 w-2.5 animate-pulse rounded-full bg-indigo-500'></span>{' '}
                  Product Development
                </li>
                <li className='flex items-center'>
                  <span className='mr-2 h-2.5 w-2.5 animate-pulse rounded-full bg-indigo-500'></span>{' '}
                  Content Management Application
                </li>
                <li className='flex items-center'>
                  <span className='mr-2 h-2.5 w-2.5 animate-pulse rounded-full bg-indigo-500'></span>{' '}
                  Enterprise Portal Development
                </li>
                <li className='flex items-center'>
                  <span className='mr-2 h-2.5 w-2.5 animate-pulse rounded-full bg-indigo-500'></span>{' '}
                  Application Support
                </li>
              </ul>
            </div>

            {/* Application Modernization */}
            <div
              className='animate-fadeInUp flex transform flex-col items-start rounded-lg bg-gradient-to-br from-green-50 to-white p-6 shadow-lg transition-transform duration-500 ease-in-out hover:scale-105'
              style={{ animationDelay: '0.2s' }}
            >
              <h3 className='mb-4 text-xl font-bold text-green-700'>
                Application Modernization
              </h3>
              <ul className='list-none space-y-3'>
                <li className='flex items-center'>
                  <span className='mr-2 h-2.5 w-2.5 animate-pulse rounded-full bg-green-500'></span>{' '}
                  Technology Migration
                </li>
                <li className='flex items-center'>
                  <span className='mr-2 h-2.5 w-2.5 animate-pulse rounded-full bg-green-500'></span>{' '}
                  Database Migration
                </li>
                <li className='flex items-center'>
                  <span className='mr-2 h-2.5 w-2.5 animate-pulse rounded-full bg-green-500'></span>{' '}
                  Refactoring
                </li>
                <li className='flex items-center'>
                  <span className='mr-2 h-2.5 w-2.5 animate-pulse rounded-full bg-green-500'></span>{' '}
                  Rewriting
                </li>
                <li className='flex items-center'>
                  <span className='mr-2 h-2.5 w-2.5 animate-pulse rounded-full bg-green-500'></span>{' '}
                  Rehosting
                </li>
                <li className='flex items-center'>
                  <span className='mr-2 h-2.5 w-2.5 animate-pulse rounded-full bg-green-500'></span>{' '}
                  Rearchitecting
                </li>
              </ul>
            </div>

            {/* Mobile App Development */}
            <div
              className='animate-fadeInUp flex transform flex-col items-start rounded-lg bg-gradient-to-br from-yellow-50 to-white p-6 shadow-lg transition-transform duration-500 ease-in-out hover:scale-105'
              style={{ animationDelay: '0.3s' }}
              id='app-dev'
            >
              <h3 className='mb-4 text-xl font-bold text-yellow-700'>
                Mobile App Development
              </h3>
              <ul className='list-none space-y-3'>
                <li className='flex items-center'>
                  <span className='mr-2 h-2.5 w-2.5 animate-pulse rounded-full bg-yellow-500'></span>{' '}
                  Enterprise Mobile Apps
                </li>
                <li className='flex items-center'>
                  <span className='mr-2 h-2.5 w-2.5 animate-pulse rounded-full bg-yellow-500'></span>{' '}
                  B2C Apps
                </li>
                <li className='flex items-center'>
                  <span className='mr-2 h-2.5 w-2.5 animate-pulse rounded-full bg-yellow-500'></span>{' '}
                  Tablet Apps
                </li>
                <li className='flex items-center'>
                  <span className='mr-2 h-2.5 w-2.5 animate-pulse rounded-full bg-yellow-500'></span>{' '}
                  Responsive Web Apps
                </li>
                <li className='flex items-center'>
                  <span className='mr-2 h-2.5 w-2.5 animate-pulse rounded-full bg-yellow-500'></span>{' '}
                  Cross-Platform Apps
                </li>
                <li className='flex items-center'>
                  <span className='mr-2 h-2.5 w-2.5 animate-pulse rounded-full bg-yellow-500'></span>{' '}
                  iOS Apps
                </li>
                <li className='flex items-center'>
                  <span className='mr-2 h-2.5 w-2.5 animate-pulse rounded-full bg-yellow-500'></span>{' '}
                  Windows Apps
                </li>
                <li className='flex items-center'>
                  <span className='mr-2 h-2.5 w-2.5 animate-pulse rounded-full bg-yellow-500'></span>{' '}
                  Android Apps
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Work Section */}
        <section id='sec-work' className='bg-gray-50'>
          <div className='layout top-0 flex flex-col items-center justify-center space-y-5 py-14 lg:h-fit lg:py-0'>
            <h2 className='heading'>
              App
              <span className='fancy'>Development</span>
            </h2>
            <p className='h3 desc'>
              This is not just a piece of our work; these are the different
              shades of our creativity.
            </p>
          </div>
          <div className='layout sticky top-0 space-y-10 py-4 text-xl'>
            {works.map((work) => (
              <WorkCard {...work} key={work.id} />
            ))}
          </div>
        </section>

        {/* Our Tech Stack */}
        <ClientsSection />

        {/* Digital Markting Services  */}
        <section id='digital-marketing' className='py-12'>
          <div className='layout flex flex-col  items-center justify-between gap-10 lg:flex-row lg:gap-20'>
            <div className=''>
              <h2 className='heading text-center'>
                Our{' '}
                <span className='fancy text-primary-base'>
                  Digital Marketing Services
                </span>
              </h2>
              <p className='max-w-2xl text-center text-lg'>
                We provide a comprehensive suite of digital marketing services
                to help your business grow and succeed in a competitive digital
                landscape.
              </p>
            </div>

            {/* Bubbles container */}
            <div className='layout mt-12 flex flex-wrap justify-center gap-6'>
              {service.map((service, index) => (
                <div
                  key={index}
                  className='flex h-40 w-40 transform flex-col items-center justify-center rounded-full bg-primary-100 p-6 text-primary-base 
            shadow-lg transition duration-300 hover:scale-105 hover:bg-primary-base hover:text-white'
                >
                  <div className='mb-2 text-3xl'>{service.icon}</div>
                  <span className='text-center text-sm font-semibold'>
                    {service.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How We Work */}
        <section id='sec-roadmap' className='mt-0 h-min bg-white lg:mt-28'>
          <div className='layout flex flex-col items-start justify-between gap-10 lg:flex-row lg:gap-20'>
            <div className='top-0 py-14 lg:sticky lg:top-28 lg:w-1/2 lg:py-0'>
              <h2 className='heading text-left text-center'>
                E-commerce Managed
                <span className='fancy'>Services</span>
              </h2>
              <p className='h3 text-center'>
                Some of the processes that we usually use when we have a project
                with our client.
              </p>
            </div>
            <div className='mx-auto flex-grow space-y-3 pb-4 text-xl lg:space-y-20'>
              {roadmap.map((phase) => (
                <RoadMapCard {...phase} key={phase.id} />
              ))}
            </div>
          </div>
        </section>

        {/* Digital Branding */}
        <section id='digital-branding' className='relative bg-white py-10'>
          <div className='layout flex flex-col items-center justify-center space-y-5 lg:py-0'>
            <h2 className='heading text-center'>
              Our{' '}
              <span className='fancy text-primary-base'>Digital Branding</span>{' '}
              Services
            </h2>
            <p className='max-w-2xl text-lg'>
              Unlock the full potential of your brand online with a wide array
              of digital branding solutions crafted to meet your specific needs.
            </p>
          </div>
          {/* Features grid */}
          <div className='mt-12 grid grid-cols-1 gap-8 px-8 md:grid-cols-2 lg:grid-cols-3'>
            {features.map((feature, index) => (
              <div
                key={index}
                className='flex flex-col items-center justify-center rounded-lg bg-gray-100 p-6 text-center shadow-md transition duration-300 hover:bg-primary-100'
              >
                <div className='mb-4 text-4xl text-primary-base'>
                  {feature.icon}
                </div>
                <h3 className='mb-2 text-xl font-semibold text-primary-base'>
                  {feature.name}
                </h3>
                <p className='text-sm text-gray-700'>{feature.description}</p>
              </div>
            ))}
          </div>{' '}
        </section>

        <section className='py-10 px-4 sm:px-6 lg:px-8'>
          <div className='container mx-auto text-center'>
            <h2 className='heading pb-8 text-center'>
              E-commerce{' '}
              <span className='fancy text-primary-base'>Diffrentiators</span>{' '}
            </h2>

            <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3'>
              {[
                {
                  icon: (
                    <FaClock className='mb-4 h-12 w-12 text-primary-base' />
                  ),
                  text: 'Flexible, Fixed Monthly Support Hours',
                },
                {
                  icon: (
                    <FaClipboardList className='mb-4 h-12 w-12 text-primary-base' />
                  ),
                  text: 'Short/Mid/Long Term Engagement Models',
                },
                {
                  icon: (
                    <FaUserTie className='mb-4 h-12 w-12 text-primary-base' />
                  ),
                  text: 'SLA Driven Support Model',
                },
                {
                  icon: (
                    <FaHeadset className='mb-4 h-12 w-12 text-primary-base' />
                  ),
                  text: 'Dedicated Project Manager',
                },
                {
                  icon: (
                    <FaEnvelope className='mb-4 h-12 w-12 text-primary-base' />
                  ),
                  text: 'Telephone Support & Email Support',
                },
                {
                  icon: (
                    <FaFileAlt className='mb-4 h-12 w-12 text-primary-base' />
                  ),
                  text: 'Detailed Scheduled Reports (Hour, Week, Month)',
                },
              ].map(({ icon, text }, index) => (
                <div
                  key={index}
                  className={`animate__animated animate__fadeIn animate__delay-${
                    index + 2
                  }s flex transform flex-col items-center rounded-lg bg-white p-6 shadow-md transition-transform hover:scale-105`}
                >
                  {icon}
                  <p className='text-md font-semibold text-gray-800'>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trusted Partners */}
        <section id='sec-partners'>
          <div className='layout flex flex-col items-center justify-evenly gap-12 space-y-5 overflow-hidden py-14 lg:py-0'>
            <div>
              <h2 className='heading'>
                Our
                <span className='fancy'>Testimonials</span>
              </h2>
            </div>
            <div className='flex w-full justify-between'>
              <div className='slide-animation gap-4'>
                <div className='inline-flex animate-infiniteXSlide'>
                  {new Array(1).fill(0).map((_, i) => (
                    <Image
                      key={i}
                      src='/images/logo/logo1.png'
                      alt='Partner'
                      width={150}
                      height={100}
                      className='mx-4 h-24 w-32 object-contain'
                    />
                  ))}
                  {new Array(1).fill(0).map((_, i) => (
                    <Image
                      key={i}
                      src='/images/logo/logo2.png'
                      alt='Partner'
                      width={150}
                      height={100}
                      className='mx-4 h-24 w-32 object-contain'
                    />
                  ))}
                  {new Array(1).fill(0).map((_, i) => (
                    <Image
                      key={i}
                      src='/images/logo/logo3.png'
                      alt='Partner'
                      width={150}
                      height={100}
                      className='mx-4 h-24 w-32 object-contain'
                    />
                  ))}
                  {new Array(1).fill(0).map((_, i) => (
                    <Image
                      key={i}
                      src='/images/logo/logo4.png'
                      alt='Partner'
                      width={150}
                      height={100}
                      className='mx-4 h-24 w-32 object-contain'
                    />
                  ))}
                  {new Array(1).fill(0).map((_, i) => (
                    <Image
                      key={i}
                      src='/images/logo/logo5.png'
                      alt='Partner'
                      width={150}
                      height={100}
                      className='mx-4 h-24 w-32 object-contain'
                    />
                  ))}
                  {new Array(1).fill(0).map((_, i) => (
                    <Image
                      key={i}
                      src='/images/logo/logo6.png'
                      alt='Partner'
                      width={150}
                      height={100}
                      className='mx-4 h-24 w-32 object-contain'
                    />
                  ))}
                  {new Array(1).fill(0).map((_, i) => (
                    <Image
                      key={i}
                      src='/images/logo/logo7.png'
                      alt='Partner'
                      width={150}
                      height={100}
                      className='mx-4 h-24 w-32 object-contain'
                    />
                  ))}
                  {new Array(1).fill(0).map((_, i) => (
                    <Image
                      key={i}
                      src='/images/logo/logo8.png'
                      alt='Partner'
                      width={150}
                      height={100}
                      className='mx-4 h-24 w-32 object-contain'
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What our Clients Say */}
        <section id='sec-clients' className='relative bg-white'>
          <div className='layout flex flex-col items-center justify-center space-y-5 py-14 lg:py-0'>
            <h2 className='heading'>
              What our
              <span className='fancy'>Clients</span>
              Say?
            </h2>
            <p className='h3'>
              This is not just a piece of our work; these are the different
              shades of our creativity.
            </p>
          </div>
          <div className='layout flex flex-col gap-4 py-5 pb-10 text-lg'>
            <Carousel
              cols={3}
              rows={1}
              gap={30}
              autoplay={2500}
              dotColorActive='#f97316'
              showDots
              loop
              arrowRight={
                <RiArrowRightSLine
                  size={40}
                  className='absolute top-1/2 right-[-35px] z-10 -translate-y-1/2 cursor-pointer rounded-full bg-base-content/10 text-primary-base'
                />
              }
              arrowLeft={
                <RiArrowLeftSLine
                  size={40}
                  className='absolute top-1/2 left-[-35px] z-10 -translate-y-1/2 cursor-pointer rounded-full bg-base-content/10 text-primary-base'
                />
              }
            >
              {clientsays.map((client) => (
                <Carousel.Item key={client.id}>
                  <TestimonialCard {...client} />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </section>

        {/* Contact */}
        {/* <Contact>
          Have a product idea?
          <br className='' />
          We got you. We will build your product. Get your MVP in 15 days.
        </Contact> */}
      </main>
    </>
  );
};

export default Home;
