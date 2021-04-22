import { useRouter } from 'next/router';
import CountriesGrid from './countries-grid';
import styles from './all-countries.module.scss';
import { country } from '../../../lib/types';

interface Props {
  countries: country[]
}

const AllCountries: React.FC<Props> = (props) => {
const { countries } = props;
const locale = useRouter().locale;
  return (
    <div>
      <div className={styles.container}>
        <h1 className="header">
          {locale === 'en-US'
            ? 'SELECT YOUR DESTINATION'
            : 'SELECCIONE SU DESTINO'}
        </h1>
        <div className="header-underline"></div>
        <div className={styles.divider}></div>
      </div>
      <CountriesGrid countries={countries} />
    </div>
  );
};

export default AllCountries;