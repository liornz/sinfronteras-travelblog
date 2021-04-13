import { Fragment } from 'react';
import Head from 'next/head';
import VideoOpening from '../components/home-page/video-opening';
import Hero from '../components/home-page/hero';
import FeaturedDestinations from '../components/destinations/featured-destinations';

const HomePage: React.FC = () => {

  const DUMMY_DATA = [
    {
      slug: 'myanmar-the-land-of-a-thousend-pagodas',
      title: 'Myanmar - the land of a thousend pagodas',
      subtitle: 'Myanmar - a short visual introduction',
      image: 'portada-myanmar.jpg',
    },
    {
      slug: 'yangon-myanmar-day-1',
      title: 'Yangon - Myanmar - Day 1',
      subtitle: 'The first part of the visit to Yangon',
      image: 'portada-yangon-dia1.jpg',
    },
    {
      slug: 'yangon-myanmar-day-2',
      title: 'Yangon - Myanmar - Day 2',
      subtitle: 'The second part of the visit to Yangon',
      image: 'portada-yangon-dia2.jpg',
    },
    {
      slug: 'yangon-myanmar-day-3',
      title: 'Yangon - Myanmar - Day 3',
      subtitle: 'The third part of the visit to Yangon',
      image: 'portada-yangon-dia3.jpg',
    },
  ];

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
      <FeaturedDestinations destinations={DUMMY_DATA} />
    </Fragment>
  );
};

export default HomePage;
