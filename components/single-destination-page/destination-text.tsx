import MarkDown from 'react-markdown';
import styles from './destination-text.module.scss';
import { useTranslation } from 'next-i18next';

interface Props {
  text: string;
}

const DestinationText: React.FC<Props> = (props) => {
  const { text } = props;
  const { t } = useTranslation('destination');

  return (
    <div className={styles.text}>
      <h3>{t('title')}</h3>
      <MarkDown>{text}</MarkDown>
    </div>
  );
};

export default DestinationText;
