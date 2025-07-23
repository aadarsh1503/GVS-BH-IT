// src/components/sections/home/ServicePortfolioSection.tsx
"use client";

import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

// --- STYLES: The core of the new, sophisticated aesthetic ---
const AdvancedAestheticStyles = () => (
  <style jsx global>{`
    /* --- Refined Aurora Background --- */
    .aurora-bg-v2 {
      position: relative;
    
      overflow: hidden;
    }

    .aurora-bg-v2::before {
      content: '';
      position: absolute;
      inset: 0;
      z-index: 1;
      pointer-events: none;
      background: radial-gradient(
        circle at var(--mouse-x) var(--mouse-y),
        rgba(0, 150, 255, 0.1), /* Softer aurora color */
        transparent 40%
      );
      opacity: 0;
      transition: opacity 0.5s ease;
    }
    
    .aurora-bg-v2:hover::before {
      opacity: 1;
    }

    /* --- The "Advanced Material" Card --- */
    .advanced-card {
      position: relative;
      z-index: 2;
      overflow: hidden;
      border: 1px solid rgba(0, 150, 255, 0.15);
      background-color: #f8faff; /* A very light, solid material color */
      
      /* Subtle internal glow from the top-left */
      background-image: radial-gradient(
        circle at 0% 0%,
        rgba(0, 194, 255, 0.1),
        transparent 50%
      );
      
      clip-path: polygon(0 20px, 20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%);
      transition: border-color 0.3s ease;
    }
    
    .advanced-card:hover {
        border-color: rgba(0, 150, 255, 0.4);
    }
    
    /* --- The "Energy Trace" Border on Hover --- */
    .advanced-card::after {
      content: '';
      position: absolute;
      inset: -1px; /* Cover the border area */
      z-index: -1;
      
     
      background-size: 200% 100%;
      animation: energy-trace-animation 3s linear infinite;
      
      /* The magic: Masking creates the trace effect */
   
      mask-composite: exclude;
      
      /* Start with the trace invisible */
      mask-image: linear-gradient(
        to right,
        rgba(0,0,0,1) 0%, rgba(0,0,0,1) 0%,
        rgba(0,0,0,0) 0%, rgba(0,0,0,0) 100%
      );
      
      transition: mask-image 0.5s cubic-bezier(0.23, 1, 0.32, 1);
    }
    
    .advanced-card:hover::after {
        /* On hover, reveal the trace */
        mask-image: linear-gradient(
          to right,
          rgba(0,0,0,1) 0%, rgba(0,0,0,1) 100%,
          rgba(0,0,0,0) 100%, rgba(0,0,0,0) 100%
        );
    }

    /* --- Decorative Corner Brackets --- */
    .corner-brackets::before,
    .corner-brackets::after {
      content: '';
      position: absolute;
      width: 24px;
      height: 24px;
      border: 1px solid rgba(0, 150, 255, 0.3);
      opacity: 0.5;
      transition: all 0.3s ease;
    }
    
    .advanced-card:hover .corner-brackets::before,
    .advanced-card:hover .corner-brackets::after {
      opacity: 1;
      border-color: rgba(0, 150, 255, 0.8);
    }
    
    .corner-brackets::before {
      top: -1px;
      left: -1px;
      border-right: none;
      border-bottom: none;
    }
    
    .corner-brackets::after {
      bottom: -1px;
      right: -1px;
      border-left: none;
      border-top: none;
    }
  `}</style>
);

// --- FUTURISTIC DATA (Same as before) ---
const portfolioData = [
  {
    id: 'neural-arch',
    title: 'Cognitive-Wave Synthesis',
    items: [
      'Neural Mesh Integration',
      'Quantum Entanglement Comms',
      'Sentient Environment Control',
      'Bio-Digital Symbiote Frameworks',
    ],
    theme: { accent: 'cyan' },
  },
  {
    id: 'chroniton-sync',
    title: 'Temporal Stream Alignment',
    items: [
      'Legacy Data-Dephasing',
      'Subspace Server Migration',
      'Pre-Cognitive Threat Analysis',
      'Reality Rearchitecting (Alpha)',
    ],
    theme: { accent: 'violet' },
  },
  {
    id: 'holo-dev',
    title: 'Holo-Matter Projection',
    items: [
      'Hard-Light Environment Crafting',
      'Direct-to-Cortex UI Overlays',
      'Personalized Reality Augmentation',
      'Omni-Platform Grid Deployment',
    ],
    theme: { accent: 'lime' },
  },
];

// --- FIX: Props ke liye ek Interface banaya gaya hai ---
interface PortfolioCardProps {
  title: string;
  items: string[];
  theme: {
    accent: string;
  };
}

// --- The Advanced Card Component ---
// --- FIX: Component ko bataya gaya hai ki props `PortfolioCardProps` type ke honge ---
const PortfolioCard = ({ title, items, theme }: PortfolioCardProps) => (
  <div className="advanced-card h-full p-6">
    <div className="corner-brackets" />
    <h3 className={`mb-6 font-mono text-xl font-bold uppercase tracking-wider text-${theme.accent}-600`}>
      {title}
    </h3>
    <ul className="list-none space-y-4 font-light text-slate-700">
      {items.map((item) => (
        <li key={item} className="flex items-start">
          <svg
            className={`mr-3 mt-[5px] h-3 w-3 flex-shrink-0 text-${theme.accent}-500 opacity-80`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
          </svg>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

// --- Main Section Component ---
const ServicePortfolioSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      section.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
      section.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
    };

    section.addEventListener('mousemove', handleMouseMove);
    return () => section.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, filter: 'blur(5px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { type: 'spring', stiffness: 50, damping: 15, duration: 1 } },
  };

  return (
    <>
      <AdvancedAestheticStyles />
      <section ref={sectionRef} id="sec-portfolio" className="aurora-bg-v2 py-24 md:py-32">
        <motion.div
          className="layout"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div
            className="mb-20 flex flex-col items-center justify-center space-y-4 text-center"
            variants={itemVariants}
          >
            <h2 className="heading text-slate-800">
                Cognitive <span className="fancy-heading-v2">Service Matrix</span>
            </h2>
            <p className="h3 max-w-3xl font-light text-slate-600">
                Interface with our core protocols, engineered to transcend the digital frontier and propel your existence forward.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {portfolioData.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                whileHover={{ y: -12, scale: 1.03, transition: { type: 'spring', stiffness: 300 } }}
              >
                <PortfolioCard {...item} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default ServicePortfolioSection;