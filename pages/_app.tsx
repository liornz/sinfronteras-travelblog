import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import Layout from '../components/layout/layout';
import { NotificationContextProvider } from '../context/notification-context';
import '../styles/globals.scss';

export const siteTitle = 'Sin Fronteras - Video Travel Blog';

function MyApp({ Component, pageProps }: AppProps): React.ReactNode {
  const generalHead = (
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <meta charSet="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, minimum-scale=1.0, viewport-fit=cover"
      />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      {/* <meta
          name="google-site-verification"
          content="l0w2h2JQOHdnGVdvB0UqUOHAon8XxS24IlkTFJOqXN0"
        /> */}
      <title>{siteTitle}</title>
      <meta
        name="description"
        content="An Inspiring Video Travel Blog. I would like to inspire you and share with you my passion for culture and people from all over the world"
      />
      <meta property="og:url" content="https://sinfronteras-travelblog.com/" />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content={`https://og-image.now.sh/${encodeURI(
          siteTitle
        )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
      />
      <meta name="og:title" content={siteTitle} />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;1,400;1,700&display=swap"
      />
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
