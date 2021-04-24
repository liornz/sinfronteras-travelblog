import { GetStaticProps } from 'next';
import AllCountries from '../../components/destinations/countries/all-countries';
import { country } from '../../lib/types';
import { getAllCountriesData } from '../../lib/data-utils';

interface Props {
  countries: country[]
}

const AllCountriesPage: React.FC<Props> = (props) => {
const { countries } = props;
  return (
    <AllCountries countries={countries} />
  );
};

export default AllCountriesPage;

export const getStaticProps: GetStaticProps = async (context) => {
  const locale = context.locale!;
  const countries = getAllCountriesData(locale);

  return {
    props: {
      countries: countries
    }
  }
}