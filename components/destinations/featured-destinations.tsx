import { useTranslation } from 'next-i18next';
import DestinationsGrid from '../destinations/destinations-grid';
import styles from './featured-destinations.module.scss';
import { post } from '../../lib/types';

interface Props {
  destinations: post[];
}

const FeaturedDestinations: React.FC<Props> = (props) => {
  const { destinations } = props;
  const { t } = useTranslation('common');

  return (
    <>
      <div className={styles.container}>
        <h1 className="header">{t('featured')}</h1>
        <div className="header-underline"></div>
        <div className={styles.divider}></div>
      </div>
      <DestinationsGrid destinations={destinations} />
    </>
  );
};

export default FeaturedDestinations;
