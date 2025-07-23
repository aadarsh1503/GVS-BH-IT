import React, { createRef, useCallback, useEffect, useRef, useState } from 'react';

// Make sure the path to your CSS module is correct
import styles from './TechExpertiseSection.module.css';

type TechStackItem = {
  name: string;
  description: string[];
};

const techStack: TechStackItem[] = [
    {
        name: 'Microsoft .NET',
        description: [
          'Build robust, enterprise-grade applications on Windows using C#.',
          'Develop scalable web APIs and services with ASP.NET Core.',
          'Utilize Entity Framework for seamless, high-performance database integration.',
        ],
      },
      {
        name: 'Java / J2EE',
        description: [
          'Leverage Java for platform-independent, high-performance systems.',
          'Implement powerful and secure backends with Spring, Hibernate, and RESTful APIs.',
          'Ensure unmatched scalability and reliability for large-scale enterprise applications.',
        ],
      },
      {
        name: 'Databases',
        description: [
          'Architect and manage relational data with SQL Server, Oracle, and PostgreSQL.',
          'Handle unstructured big data with the speed and flexibility of MongoDB.',
          'Optimize complex queries and guarantee data integrity with robust transaction management.',
        ],
      },
      {
        name: 'Mobile Apps',
        description: [
          'Create stunning native Android experiences leveraging the full power of Kotlin.',
          'Develop elegant and fluid iOS applications using the latest features in Swift.',
          'Build efficient cross-platform solutions with React Native to maximize reach.',
        ],
      },
      {
        name: 'BI & Data Analytics',
        description: [
          'Visualize complex datasets and create actionable insights with Tableau & Power BI.',
          'Engineer real-time big data pipelines using Apache Kafka and Spark.',
          'Deploy advanced Machine Learning and AI models for predictive analytics.',
        ],
      },
      {
        name: 'NextGen Technologies',
        description: [
          'Innovate with the Internet of Things (IoT) for a network of intelligent devices.',
          'Implement secure, transparent, and decentralized solutions using Blockchain.',
          'Pioneer immersive user experiences with Augmented Reality (AR) and Virtual Reality (VR).',
        ],
      },
];

export default function TechExpertiseSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [indicatorStyle, setIndicatorStyle] = useState({});

  const autoPlayIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<React.RefObject<HTMLButtonElement>[]>(
    techStack.map(() => createRef<HTMLButtonElement>())
  );

  const handleTabClick = useCallback((index: number, isAuto = false) => {
    if (index === activeIndex && !isAuto) return;
  
    if (!isAuto && isAutoPlay) {
      setIsAutoPlay(false);
    }
  
    setIsAnimating(true);
    setActiveIndex(index);
  
    setTimeout(() => {
      setIsAnimating(false);
    }, 200);
  }, [activeIndex, isAutoPlay]); // This is correct, as it lists its own dependencies.

  // Effect for auto-playing tabs
  useEffect(() => {
    // Clear any existing interval before starting a new one
    if (autoPlayIntervalRef.current) {
        clearInterval(autoPlayIntervalRef.current);
    }
    
    if (isAutoPlay) {
      autoPlayIntervalRef.current = setInterval(() => {
        // We use a functional update here to ensure we always have the latest activeIndex
        setActiveIndex(prevIndex => {
            const nextIndex = (prevIndex + 1) % techStack.length;
            // The handleTabClick logic is now primarily for manual clicks and animations,
            // so we can manage the index change directly.
            // However, to keep the animation logic consistent, we can still call it.
            handleTabClick(nextIndex, true); 
            return nextIndex; // This return is for the functional update itself
        });
      }, 4000); 
    }
    
    return () => {
      if (autoPlayIntervalRef.current) clearInterval(autoPlayIntervalRef.current);
    };
  // FIX: Added 'handleTabClick' to the dependency array.
  }, [isAutoPlay, handleTabClick]); 

  // Effect for moving the active indicator
  useEffect(() => {
    const activeItem = itemRefs.current[activeIndex]?.current;
    if (activeItem) {
      setIndicatorStyle({
        transform: `translateY(${activeItem.offsetTop}px)`,
        height: `${activeItem.clientHeight}px`,
      });
    }
  }, [activeIndex]);

  const activeTech = techStack[activeIndex];

  return (
    <section id="sec-tech-expertise" className={styles.sectionBackground}>
      <div className="layout flex flex-col items-center justify-center space-y-5 py-20 lg:py-24">
        <h2 className="heading text-slate-900">
          Tech <span className="fancy mb-10">Expertise</span>
        </h2>
        <p className="text-center text-lg text-slate-600 max-w-3xl">
          We architect solutions with a future-proof stack, ensuring scalability, security, and peak performance.
        </p>
        
        <div className={styles.techContainer}>
          <div className={styles.techNav} ref={navRef}>
            <div className={styles.activeIndicator} style={indicatorStyle} />
            
            {techStack.map((tech, index) => (
              <button
                key={tech.name}
                ref={itemRefs.current[index]}
                onClick={() => handleTabClick(index)}
                className={`${styles.navItem} ${activeIndex === index ? styles.active : ''} whitespace-nowrap mt-4`}
              >
                {tech.name}
              </button>
            ))}
          </div>

          <div className={styles.contentPanel}>
            {activeTech && (
              <div
                className={`${styles.contentWrapper} ${isAnimating ? styles.fade : ''}`}
              >
                <h3 className={styles.contentTitle}>{activeTech.name}</h3>
                <ul className="mt-6 space-y-4">
                  {activeTech.description.map((desc, i) => (
                    <li key={`${activeTech.name}-desc-${i}`} className={styles.descriptionItem}>
                      <div className={styles.descriptionIcon}></div>
                      <p>{desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}