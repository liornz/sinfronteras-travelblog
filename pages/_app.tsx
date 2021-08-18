import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import Layout from '../components/layout/layout';
import { NotificationContextProvider } from '../context/notification-context';
import '../styles/globals.scss';

export const siteTitle = 'Sin Fronteras - Video Travel Blog';
const siteDescription =
  'An Inspiring Video Travel Blog. I would like to inspire you and share with you my passion for culture and people from all over the world';

function MyApp({ Component, pageProps }: AppProps): React.ReactNode {
  const generalHead = (
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <meta charSet="UTF-8" />
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
      />
      <meta charSet="utf-8"></meta>
      <meta
        name="google-site-verification"
        content="l0w2h2JQOHdnGVdvB0UqUOHAon8XxS24IlkTFJOqXN0"
      />
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      {/* <meta name="og:title" content={siteTitle} />
      <meta
        property="og:image"
        content="images\posters\portada-la-vida-es-un-viaje.jpg"
      />
      <meta name="og:description" content={siteDescription} />
      <meta property="og:url" content="https://sinfronteras-travelblog.com/" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:type" content="website" /> */}

      <link rel="preconnect" href="https://fonts.gstatic.com" />
    </Head>
  );

  return (
    <NotificationContextProvider>
      <Layout>
        {generalHead}
        <Component {...pageProps} />
      </Layout>
    </NotificationContextProvider>
  );
}

export default MyApp;
