import DestinationsGrid from '../destinations/destinations-grid';
import styles from 'featured-destinations.module.scss';

interface Props {
  destinations: {
    slug: string;
    title: string;
    subtitle: string;
    image: string;
  }[];
}

const FeaturedDestinations: React.FC<Props> = (props) => {
const { destinations } = props;
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Featured destinations</h1>
      <DestinationsGrid destinations={destinations} />
    </div>
  );
};

export default FeaturedDestinations;