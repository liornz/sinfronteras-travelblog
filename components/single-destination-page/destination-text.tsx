import MarkDown from 'react-markdown';
import styles from './destination-text.module.scss';

interface Props {
  text: string
}

const DestinationText: React.FC<Props> = (props) => {
const { text } = props;
  return (
    <div className={styles.text}>
      <MarkDown>{text}</MarkDown>
    </div>
  );
};

export default DestinationText;