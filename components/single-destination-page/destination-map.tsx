import styles from './destination-map.module.scss';
import { location } from '../../lib/types';
import Map from './map';

interface Props {
  location: location;
  zoom: number;
  google_api: string;
}

const DestinationMap: React.FC<Props> = (props) => {
  const { location, zoom, google_api } = props;
  return (
    <div className={styles.map}>
      <Map
        location={location}
        width={'100%'}
        height={'30vw'}
        minHeight={'200px'}
        zoom={zoom}
        google_api={google_api}
      />
    </div>
  );
};

export default DestinationMap;
