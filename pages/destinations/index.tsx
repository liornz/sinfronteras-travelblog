import { GetStaticProps } from 'next';
import AllCountries from '../../components/destinations/countries/all-countries';
import { country } from '../../lib/types';
import { getAllCountriesData } from '../../lib/data-utils';
import React from 'react';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';


interface Props {
  countries: country[]
}

const AllCountriesPage: React.FC<Props> = (props) => {
const { countries } = props;
  return (
    <React.Fragment>
      <Head>
        <title>Travelblog Sinfronteras - Destinations Page</title>
        <meta
          name="description"
          content="Destinations - Sinfronteras Travel Blog - Choose country"
        />
      </Head>
      <AllCountries countries={countries} />
    </React.Fragment>
  );
};

export default AllCountriesPage;

export const getStaticProps: GetStaticProps = async (context) => {
  const locale = context.locale!;
  const countries = getAllCountriesData(locale);

  return {
    props: {
      countries: countries,
      ...(await serverSideTranslations(locale, ['common', 'footer', 'nav'])),
    },
  };
}