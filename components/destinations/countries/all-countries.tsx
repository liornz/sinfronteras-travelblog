import CountriesGrid from './countries-grid';
import styles from './all-countries.module.scss';
import { country } from '../../../lib/types';

interface Props {
  countries: country[]
}

const AllCountries: React.FC<Props> = (props) => {
const { countries } = props;
  return (
    <div>
      <h1>Browse Destinations</h1>
      <CountriesGrid countries={countries} />
    </div>
  );
};

export default AllCountries;