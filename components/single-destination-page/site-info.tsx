import DestinationText from './destination-text';
import DestinationMap from './destination-map';
import { location } from '../../lib/types';

import styles from './site-info.module.scss';

interface Props {
  text: string;
  location: location;
  zoom: number;
}

const SiteInfo: React.FC<Props> = (props) => {
  const { text, location, zoom } = props;
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <DestinationText text={text} />
        <DestinationMap location={location} zoom={zoom} />
      </div>
    </div>
  );
};

export default SiteInfo;
