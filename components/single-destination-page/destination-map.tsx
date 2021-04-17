import styles from './destination-map.module.scss';
import { location } from '../../lib/types';
import Map from './map';

interface Props {
  location: location;
  zoom: number;
}

const DestinationMap: React.FC<Props> = (props) => {
  const { location, zoom } = props;
  return (
    <div className={styles.map}>
      <Map location={location} width={'100%'} height={'30vw'} zoom={zoom} />
    </div>
  );
};

export default DestinationMap;
