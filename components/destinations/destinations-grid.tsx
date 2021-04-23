import DestinationCard from './destination-card';
import styles from './destinations-grid.module.scss';
import { post, country } from '../../lib/types';

interface Props {
  destinations: post[];
  image?: string;
  slug?: string;
}

const DestinationsGrid: React.FC<Props> = (props) => {
  const { destinations, image, slug } = props;
  console.log(`/images/countries/${slug}/${image}`);
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
        <div className={styles.fixedInner} style={image ? {backgroundImage: `url('/images/countries/${slug}/${image}')`} : undefined}></div>
      </div>
    </div>
  );
};

export default DestinationsGrid;
