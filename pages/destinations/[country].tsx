import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import AllDestinations from '../../components/destinations/all-destinations';
import {
  getCountryFileData,
  getCountryFileNames,
  getDestinationsPerCountry,
} from '../../lib/data-utils';
import { post, country } from '../../lib/types';

interface Props {
  destinations: post[];
  country: country;
}

const DestinationsPerCountry: React.FC<Props> = (props) => {
  const { destinations, country } = props;

  return (
    <React.Fragment>
      <Head>
        <title>{`Sinfronteras - Destinations in ${country.name}`}</title>
        <meta
          name="description"
          content={`Sinfronteras Travel Blog - Destinations in ${country.name}`}
        />
      </Head>
      <AllDestinations destinations={destinations} country={country} />
    </React.Fragment>
  );
};

export default DestinationsPerCountry;

export const getStaticProps: GetStaticProps = async (context) => {
  const locale = context.locale!;
  const countrySlug = context.params!.country;
  const destinations = getDestinationsPerCountry(
    countrySlug as string,
    locale as string
  );
  const countryFileData = getCountryFileData(
    countrySlug as string,
    locale as string
  );

  return {
    props: {
      destinations: destinations,
      country: countryFileData,
      ...(await serverSideTranslations(locale, ['common', 'footer', 'nav'])),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const countryFileNames = getCountryFileNames('en-US');
  const countriesArray = countryFileNames.map((fileName) =>
    fileName.replace(/\.md$/, '')
  );
  const pathsEn = countriesArray.map((country) => ({
    params: { country: country },
    locale: 'en-US',
  }));
  const pathsEs = countriesArray.map((country) => ({
    params: { country: country },
    locale: 'es-AR',
  }));
  const paths = pathsEn.concat(pathsEs);
  return {
    paths: paths,
    fallback: false,
  };
};
