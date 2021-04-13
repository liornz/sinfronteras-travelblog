import DestinationsGrid from '../destinations/destinations-grid';
import styles from 'all-destinations.module.scss';

interface Props {
  destinations: {
    slug: string;
    title: string;
    subtitle: string;
    image: string;
  }[];
}

const AllDestinations: React.FC<Props> = (props) => {
const { destinations } = props;
  return (
    <div>
      <h1>Check out all of our cool videos</h1>
      <DestinationsGrid destinations={destinations} />
    </div>
  );
};

export default AllDestinations;

