import styles from './countries-grid.module.scss';
import CountryCard from './country-card';
import { country } from '../../../lib/types';

interface Props {
  countries: country[]
}

const CountriesGrid: React.FC<Props> = (props) => {
  const { countries } = props;
  return (
    <div className={styles.fixedContainer}>
      <div className={styles.dark}>
        {countries.map((country) => (
          <CountryCard key={country.slug} country={country} />
        ))}
      </div>
      <div className={styles.fixedWrap}>
        <div className={styles.fixedInner}></div>
      </div>
    </div>
  );
};

export default CountriesGrid;
