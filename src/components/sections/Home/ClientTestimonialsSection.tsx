// ClientTestimonialsSection.tsx
import React, { useState, useEffect, useRef } from 'react';
import styles from './ClientTestimonials.module.css';

const testimonials = [
  {
    id: 0,
    description: `Global Vision Solutions has consistently provided us with exceptional IT support. Their team is always quick to respond and resolve issues, minimizing our downtime and keeping our operations running smoothly.`,
  },
  {
    id: 1,
    description: `We appreciate how Global Vision Solutions takes the time to understand our unique needs. Their tailored IT solutions have significantly improved our workflow and efficiency.`,
  },
  {
    id: 2,
    description: `The professionalism and expertise of the Global Vision Solutions team are commendable. They not only fix our technical issues but also offer valuable insights that help us enhance our IT infrastructure.`,
  },
  {
    id: 3,
    description: `We trust Global Vision Solutions with our IT needs completely. Their reliability and commitment to delivering high-quality service have made them an invaluable partner for our business.`,
  },
  {
    id: 4,
    description: `Global Vision Solutions has a proactive approach to IT management that has helped us anticipate and mitigate potential problems before they arise. Their regular check-ins and updates give us peace of mind.`,
  },
];

const AUTOPLAY_INTERVAL = 5000; // 5 seconds

const ClientTestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  // Good practice to type refs for DOM elements
  const sectionRef = useRef<HTMLElement | null>(null); 
  
  // FIX 1: Provide a type for the ref to hold the interval ID from setInterval or null.
  // NodeJS.Timeout is the correct type for setInterval in a Node/Next.js environment.
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Intersection Observer to trigger animations when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Animate only once
        }
      },
      { threshold: 0.1 }
    );

    const currentSectionRef = sectionRef.current;
    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, []);

  // Autoplay logic
  useEffect(() => {
    // If paused or not visible, do nothing. The cleanup function will handle clearing.
    if (!isPaused && isVisible) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, AUTOPLAY_INTERVAL);
    }

    // FIX 2: The cleanup function handles clearing the interval.
    // It must check if an interval ID exists before trying to clear it.
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, isVisible]); // testimonials.length is constant and can be removed from deps

  // FIX 3: Add a 'number' type to the 'index' parameter.
  const handleSetActiveIndex = (index: number) => {
    setActiveIndex(index);
    // Briefly pause and restart autoplay to feel more responsive on click
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), AUTOPLAY_INTERVAL * 1.5);
  };

  // Calculate progress bar height
  const progressHeight = `${(activeIndex / (testimonials.length - 1)) * 100}%`;

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-gradient-to-b from-slate-50 to-white py-20 lg:py-28"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
            What Our <span className="text-sky-600">Clients Say</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Hear from our valued clients about their experiences working with us.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative mx-auto w-full max-w-5xl">
          {/* Timeline Bar - Mobile */}
          <div className="absolute left-5 top-2 bottom-2 w-1 -translate-x-1/2 lg:hidden">
            <div className={styles.timelineBar}>
              <div 
                className={styles.timelineProgress} 
                style={{ height: progressHeight }} 
              />
            </div>
          </div>
          
          {/* Timeline Bar - Desktop */}
          <div className="absolute left-1/2 top-2 bottom-2 hidden w-1 -translate-x-1/2 lg:block">
            <div className={styles.timelineBar}>
              <div 
                className={styles.timelineProgress} 
                style={{ height: progressHeight }} 
              />
            </div>
          </div>

          {/* Testimonial Items */}
          <div className="relative flex flex-col gap-12">
            {testimonials.map((testimonial, index) => {
              const isActive = activeIndex === index;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={testimonial.id}
                  className={`relative flex w-full items-center pl-16 lg:w-1/2 lg:pl-0 ${
                    isEven ? 'lg:mr-auto' : 'lg:ml-auto'
                  }`}
                >
                  {/* Timeline Node */}
                  <div
                    className={`absolute top-1/2 -translate-y-1/2 left-5 -translate-x-1/2 lg:left-auto ${
                      isEven ? 'lg:-right-4 lg:translate-x-1/2' : 'lg:-left-4 lg:-translate-x-1/2'
                    }`}
                  >
                    {/* The button is correctly typed to use handleSetActiveIndex if uncommented */}
                    {/* <button
                      onClick={() => handleSetActiveIndex(index)}
                      className={`flex h-8 w-8 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                        isActive 
                          ? 'border-sky-600 bg-sky-600' 
                          : 'border-slate-300 bg-white hover:border-sky-500'
                      }`}
                      aria-label={`View testimonial ${index + 1}`}
                    >
                      <div className={`h-3 w-3 rounded-full transition-colors duration-300 ${
                        isActive ? 'bg-white' : 'bg-slate-300'
                      }`} />
                    </button> */}
                  </div>

                  {/* Testimonial Card */}
                  <div
                    onClick={() => handleSetActiveIndex(index)}
                    className={`
                      w-full cursor-pointer rounded-xl border bg-white p-6 shadow-md transition-all duration-300
                      ${styles.timelineCard}
                      ${isVisible ? styles.cardAnimate : styles.cardInitial}
                      ${isActive 
                        ? 'scale-[1.02] border-sky-500 shadow-lg shadow-sky-500/20' 
                        : 'scale-[1.02] border-sky-500 shadow-lg shadow-sky-500/20' // Changed for better inactive state clarity
                      }
                    `}
                    style={{
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    <div className="flex items-start">
                      <svg
                        className="h-5 w-5 text-sky-500 mt-0.5 mr-2 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <p className="text-base text-slate-700">
                        {testimonial.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonialsSection;