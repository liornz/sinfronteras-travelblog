import DestinationsGrid from '../destinations/destinations-grid';
import styles from './all-destinations.module.scss';
import { post, country } from '../../lib/types';
import { useTranslation } from 'next-i18next';

interface Props {
  destinations: post[];
  country: country;
}

const AllDestinations: React.FC<Props> = (props) => {
  const { destinations, country } = props;
  const { t } = useTranslation('common');

  return (
    <>
      <div className={styles.container}>
        <h1 className="header">
          {`${t('dest')} ${country.name.toUpperCase()}`}
        </h1>
        <div className="header-underline"></div>
        <div className={styles.divider}></div>
      </div>
      <DestinationsGrid
        destinations={destinations}
        image={country.image}
        slug={country.slug}
      />
    </>
  );
};

export default AllDestinations;
