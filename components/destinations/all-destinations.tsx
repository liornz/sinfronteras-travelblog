import DestinationsGrid from '../destinations/destinations-grid';
import styles from 'all-destinations.module.scss';
import { post } from '../../lib/types';

interface Props {
  destinations: post[];
}

const AllDestinations: React.FC<Props> = (props) => {
const { destinations } = props;
  return (
    <div>
      <h1 className="header">CHECK OUT THESE COOL VIDEOS</h1>
      <div className="header-underline"></div>
      <DestinationsGrid destinations={destinations} />
    </div>
  );
};

export default AllDestinations;

