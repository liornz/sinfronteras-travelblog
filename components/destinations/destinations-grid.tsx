import DestinationCard from './destination-card';
import styles from './destinations-grid.module.scss';

interface Props {
  destinations: {
    slug: string;
    title: string;
    subtitle: string;
    image: string;
  }[];
}

const DestinationsGrid: React.FC<Props> = (props) => {
  const { destinations } = props;
  return (
    <div className={styles.fixedContainer}>
      <div className={styles.dark}>
        {destinations.map((item) => (
          <DestinationCard
            key={item.slug}
            slug={item.slug}
            title={item.title}
            subtitle={item.subtitle}
            image={item.image}
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
