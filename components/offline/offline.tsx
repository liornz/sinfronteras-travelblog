import styles from './offline.module.scss';
import { useTranslation } from 'next-i18next';

interface Props {}

const Offline: React.FC<Props> = (props) => {
  const {} = props;
  const { t } = useTranslation('offline');

  return (
    <div className="center">
      <h2>{t('title')}</h2>
      <p>{t('sub')}</p>
    </div>
  );
};

export default Offline;
