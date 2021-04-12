import { Fragment } from 'react';
import Head from 'next/head';
import VideoOpening from '../components/home-page/video-opening';
import Hero from '../components/home-page/hero';

const HomePage: React.FC = () => {
  return (
    <Fragment>
      <Head>
        <title>Travelblog Sinfronteras</title>
        <meta
          name="description"
          content="Homepage - Sinfronteras Travel Blog - Your place for informative cool videos about exciting destinations"
        />
      </Head>
      <VideoOpening />
      <Hero />
      <h1 style={{textAlign: 'center'}}>Featured Posts - Component</h1>
    </Fragment>
  );
};

export default HomePage;
