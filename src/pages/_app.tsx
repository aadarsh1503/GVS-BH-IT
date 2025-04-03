import { AppProps } from 'next/app';
import { Router } from 'next/router';
import nProgress from 'nprogress';
import { ReactElement } from 'react';

import '@/styles/dracula.css';
import '@/styles/globals.css';
import '@/styles/mdx.css';
import '@/styles/nprogress.css';

import Layout from '@/components/layout/Layout';

Router.events.on('routeChangeStart', nProgress.start);
Router.events.on('routeChangeError', nProgress.done);
Router.events.on('routeChangeComplete', nProgress.done);

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
