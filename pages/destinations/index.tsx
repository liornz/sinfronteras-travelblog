import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import AllCountries from '../../components/destinations/countries/all-countries';
import { country } from '../../lib/types';
import { getAllCountriesData } from '../../lib/data-utils';

interface Props {
  countries: {
    en: country[];
    es: country[];
  };
}

const AllCountriesPage: React.FC<Props> = (props) => {
const { countries } = props;
const locale = useRouter().locale;
const countriesList = locale === 'en-US' ? countries.en : countries.es;
  return (
    <AllCountries countries={countriesList} />
  );
};

export default AllCountriesPage;

export const getStaticProps: GetStaticProps = async () => {
  const countriesEn = getAllCountriesData('en-US');
  const countriesEs = getAllCountriesData('es-AR');
  const countriesData = {
    en: countriesEn,
    es: countriesEs
  }
  return {
    props: {
      countries: countriesData
    }
  }
}