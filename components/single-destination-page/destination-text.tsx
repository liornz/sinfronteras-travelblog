import MarkDown from 'react-markdown';
import { useRouter } from 'next/router';
import styles from './destination-text.module.scss';

interface Props {
  text: string;
}

const DestinationText: React.FC<Props> = (props) => {
  const { text } = props;
  const router = useRouter();
  const locale = router.locale;

  return (
    <div className={styles.text}>
      <h3>{locale === 'en-US' ? 'About this video' : 'Sobre este video'}</h3>
      <MarkDown>{text}</MarkDown>
    </div>
  );
};

export default DestinationText;
