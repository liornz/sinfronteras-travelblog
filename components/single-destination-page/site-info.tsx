import DestinationText from './destination-text';
import DestinationMap from './destination-map';
import styles from './site-info.module.scss';

interface Props {
  text: string
}

const SiteInfo: React.FC<Props> = (props) => {
const { text } = props;
  return (
    <div className={styles.info}>
      <DestinationText text={text} />
      <DestinationMap />
    </div>
  );
};

export default SiteInfo;