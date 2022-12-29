import Link from 'next/link';
import styles from './404.module.scss';
import { useTranslation } from 'next-i18next';

interface Props {}

const Error404: React.FC<Props> = (props) => {
  const {} = props;
  const { t } = useTranslation('error');
  return (
    <div className={styles.section}>
      <h1 className={styles.title}>{t('title')}</h1>
      <p className={styles.sub}>{t('sub')}</p>
      <Link href="/" className={styles.button}>
        Home
      </Link>
    </div>
  );
};

export default Error404;
