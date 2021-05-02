import { Fragment } from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import VideoOpening from '../components/home-page/video-opening';
import Hero from '../components/home-page/hero';
import FeaturedDestinations from '../components/destinations/featured-destinations';
import AllCountries from '../components/destinations/countries/all-countries';
import { getAllCountriesData, getFeaturedDestinations } from '../lib/data-utils';
import { country, post } from '../lib/types';

interface Props {
  featuredPosts: post[];
  countries: country[];
}

const HomePage: React.FC<Props> = (props) => {
  const { featuredPosts, countries } = props;

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
      <AllCountries countries={countries} />
      <FeaturedDestinations destinations={featuredPosts} />
    </Fragment>
  );
};

export default HomePage;

export const getStaticProps: GetStaticProps = async (context) => {
  const locale = context.locale;
  const featuredPosts = getFeaturedDestinations(locale || 'en-US');
    const countries = getAllCountriesData(locale!);

  return {
    props: {
      featuredPosts: featuredPosts,
      countries: countries
    },
  };
};
