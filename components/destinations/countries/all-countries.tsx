import { useTranslation } from 'next-i18next';
import CountriesGrid from './countries-grid';
import styles from './all-countries.module.scss';
import { country } from '../../../lib/types';

interface Props {
  countries: country[];
}

const AllCountries: React.FC<Props> = (props) => {
  const { countries } = props;
  const { t } = useTranslation('common');

  return (
    <div>
      <div className={styles.container}>
        <h1 className="header">
          {t('select')}
        </h1>
        <div className="header-underline"></div>
        <div className={styles.divider}></div>
      </div>
      <CountriesGrid countries={countries} />
    </div>
  );
};

export default AllCountries;
