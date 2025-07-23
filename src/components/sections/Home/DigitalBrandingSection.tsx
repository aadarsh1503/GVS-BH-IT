// src/components/sections/home/DigitalBrandingSection.tsx
import React, { useEffect, useRef,useState } from 'react';
import {
  FaCode,
  FaMobileAlt,
  FaPenFancy,
  FaSearch,
  FaShoppingCart,
  FaUserFriends,
} from 'react-icons/fa';

interface BrandingFeature {
  name: string;
  icon: JSX.Element;
  description: string;
}

const features: BrandingFeature[] = [
  {
    name: 'Creative Digital Design',
    icon: <FaPenFancy />,
    description: 'Innovative and visually captivating design solutions that define your brand identity.',
  },
  {
    name: 'Enhanced User Engagement',
    icon: <FaUserFriends />,
    description: 'Interactive experiences architected to capture and retain user attention effectively.',
  },
  {
    name: 'Search Engine Friendly',
    icon: <FaSearch />,
    description: 'Built from the ground up with SEO best practices to boost visibility and organic ranking.',
  },
  {
    name: 'Responsive Web Design',
    icon: <FaMobileAlt />,
    description: 'A flawless and intuitive experience across all devices, from mobile phones to desktops.',
  },
  {
    name: 'Content Management (CMS)',
    icon: <FaCode />,
    description: 'Empowering you with effortless content control via platforms like WordPress and Joomla.',
  },
  {
    name: 'E-commerce Development',
    icon: <FaShoppingCart />,
    description: 'Powerful and scalable e-commerce solutions that are built to drive sales and growth.',
  },
];

const DigitalBrandingSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoPlay = () => {
    // Evita crear múltiples intervalos
    if (intervalRef.current) clearInterval(intervalRef.current);
    
    intervalRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % features.length);
    }, 1300);
  };

  const stopAutoPlay = () => {
    // --- FIX: Función stopAutoPlay habilitada ---
    // Ab yeh interval ko safalta-purvak clear karega.
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay(); // Limpieza al desmontar el componente
  }, []);

  const handleIconClick = (index: number) => {
    stopAutoPlay();
    setActiveIndex(index);
  };

  return (
    <section
      id='digital-branding'
      className='relative bg-gray-50 py-24 sm:py-32 overflow-hidden'
      // --- FIX: Yahan se onMouseEnter/Leave hata diya gaya hai ---
    >
      {/* Fondo sutil de puntos */}
      <div
        aria-hidden='true'
        className='absolute inset-0 z-0 bg-[radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:32px_32px]'
        style={{ opacity: 0.3 }}
      ></div>

      <div className='layout relative z-10 flex flex-col items-center'>
        {/* Encabezado de la sección */}
        <div className='mb-12 text-center'>
          <h2 className='text-4xl font-bold tracking-tighter text-gray-800 sm:text-5xl lg:text-6xl'>
            Our{' '}
            <span className='fancy text-primary-base'>Digital Branding</span>{' '}
            Services
          </h2>
          <p className='mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600'>
          Unlock the full potential of your brand online with a wide array of digital branding solutions crafted to meet your specific needs.
          </p>
        </div>

        {/* --- Área de visualización principal --- */}
        <div className='relative w-full max-w-2xl h-64'>
          {features.map((feature, index) => (
            <div
              key={feature.name}
              className={`absolute inset-0 flex flex-col items-center justify-center p-8 text-center transition-all duration-500 ease-in-out
                ${
                  activeIndex === index
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8 pointer-events-none'
                }`}
            >
              <div className='mb-4 text-7xl text-primary-base'>{feature.icon}</div>
              <h3 className='text-2xl font-bold text-gray-900'>{feature.name}</h3>
              <p className='mt-2 text-gray-600'>{feature.description}</p>
            </div>
          ))}
        </div>

        {/* --- Línea de tiempo interactiva --- */}
        <div 
          className='relative mt-8 flex w-full max-w-xl justify-between items-center px-4'
          // --- FIX: Hover events ko is container par lagaya gaya hai ---
          // Jab mouse is area mein aayega, autoplay ruk jayega.
          onMouseEnter={stopAutoPlay}
          // Jab mouse is area se bahar jayega, autoplay shuru ho jayega.
          onMouseLeave={startAutoPlay}
        >
          {/* La línea de fondo */}
          <div className='absolute left-8 right-8 top-1/2 h-1 -translate-y-1/2 bg-gray-200 rounded-full' />
          
          {/* Los iconos clickeables */}
          {features.map((feature, index) => (
            <button
              key={index}
              onClick={() => handleIconClick(index)}
              className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 shadow-md ring-2 ring-gray-200
                          transition-all duration-300
                          ${
                            activeIndex === index
                              ? 'scale-110 text-primary-base text-2xl ring-primary-base'
                              : 'grayscale hover:scale-110'
                          }`}
            >
              {feature.icon}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalBrandingSection;