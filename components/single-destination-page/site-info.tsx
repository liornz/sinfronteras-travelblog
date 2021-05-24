import DestinationText from './destination-text';
import DestinationMap from './destination-map';
import { location } from '../../lib/types';

import styles from './site-info.module.scss';

interface Props {
  text: string;
  location: location;
  zoom: number;
  google_api: string;
}

const SiteInfo: React.FC<Props> = (props) => {
  const { text, location, zoom, google_api } = props;
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <DestinationText text={text} />
        <DestinationMap location={location} zoom={zoom} google_api={google_api}/>
      </div>
    </div>
  );
};

export default SiteInfo;
