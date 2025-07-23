// pages/index.tsx
import { NextPage } from 'next';
import React from 'react';

import ClientsSection from '@/components/ClientsSection/ClientsSection';
// --- FIX: Import paths ko actual folder name 'Home' se match kiya gaya ---
import AppDevelopmentSection from '@/components/sections/Home/AppDevelopmentSection';
import ClientTestimonialsSection from '@/components/sections/Home/ClientTestimonialsSection';
import DigitalBrandingSection from '@/components/sections/Home/DigitalBrandingSection';
import DigitalMarketingSection from '@/components/sections/Home/DigitalMarketingSection';
import EcommerceDifferentiatorsSection from '@/components/sections/Home/EcommerceDifferentiatorsSection';
import EcommerceManagedSection from '@/components/sections/Home/EcommerceManagedSection';
import HeroSection from '@/components/sections/Home/HeroSection';
import PartnersSection from '@/components/sections/Home/PartnersSection';
import ServicePortfolioSection from '@/components/sections/Home/ServicePortfolioSection';
import ServicesSection from '@/components/sections/Home/ServicesSection';
import Seo from '@/components/Seo';

const Home: NextPage = () => {
  return (
    <>
      <Seo title='Global Vision Solutions' />
      <main className='w-full space-y-28 pb-20'>
        <HeroSection />
        <ServicesSection />
        <ServicePortfolioSection />
        <AppDevelopmentSection />
        <ClientsSection /> {/* This was already a component */}
        <DigitalMarketingSection />
        <EcommerceManagedSection />
        <DigitalBrandingSection />
        <EcommerceDifferentiatorsSection />
        <PartnersSection />
        <ClientTestimonialsSection />
      </main>
    </>
  );
};

export default Home;