import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import AllDestinations from '../../components/destinations/all-destinations';
import {
  getCountryFileData,
  getCountryFileNames,
  getDestinationsPerCountry,
} from '../../lib/data-utils';
import { post, country } from '../../lib/types';

interface Props {
  destinations: post[];
  country: country
}

const DestinationsPerCountry: React.FC<Props> = (props) => {
  const { destinations, country } = props;

  return <AllDestinations destinations={destinations} country={country} />;
};

export default DestinationsPerCountry;

export const getStaticProps: GetStaticProps = async (context) => {
  const locale = context.locale;
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
      country: countryFileData
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
