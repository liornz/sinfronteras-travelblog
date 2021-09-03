import styles from './shop.module.scss';
import { useTranslation } from 'next-i18next';

interface Props {}

const Shop: React.FC<Props> = (props) => {
  const {} = props;
  const { t } = useTranslation('shop');

  return (
    <div className={styles.container}>
      <h1>{t('title')}</h1>
      <h2>{t('sub')}</h2>
    </div>
  );
};

export default Shop;
