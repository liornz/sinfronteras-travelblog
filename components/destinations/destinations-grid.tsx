import DestinationCard from './destination-card';
import styles from './destinations-grid.module.scss';
import { post, country } from '../../lib/types';

interface Props {
  destinations: post[];
}

const DestinationsGrid: React.FC<Props> = (props) => {
  const { destinations } = props;
  return (
    <div className={styles.fixedContainer}>
      <div className={styles.dark}>
        {destinations.map((item) => (
          <DestinationCard
            key={item.slug}
            post={item}
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
