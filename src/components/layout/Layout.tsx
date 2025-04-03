import * as React from 'react';

import Footer from './Footer';
import Header from './Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='bg-base-100 text-base-content'>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
