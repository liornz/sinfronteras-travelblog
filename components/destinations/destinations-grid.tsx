import DestinationCard from './destination-card';
import styles from './destinations-grid.module.scss';
import { post, country } from '../../lib/types';

interface Props {
  destinations: post[];
  country: country
}

const DestinationsGrid: React.FC<Props> = (props) => {
  const { destinations, country } = props;
  return (
    <div className={styles.fixedContainer}>
      <div className={styles.dark}>
        {destinations.map((item) => (
          <DestinationCard
            key={item.slug}
            post={item}
            country={country}
          />
        ))}
      </div>
      <div className={styles.fixedWrap}>
        <div className={styles.fixedInner}></div>
      </div>
    </div>
  );
};

export default DestinationsGrid;
