import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

import Link from 'next/link';
import styles from './menu-items.module.scss';

const MenuItems: React.FC = () => {
  const router = useRouter();
  const { t } = useTranslation('nav');

  return (
    <div className={styles.container}>
      <Link
        href="/destinations"
        style={{
          color: router.pathname === '/destinations' ? 'rgb(240,150,37)' : '',
        }}>

        {t('destinations')}

      </Link>
      <Link
        href="/shop"
        style={{
          color: router.pathname === '/shop' ? 'rgb(240,150,37)' : '',
        }}>

        {t('shop')}

      </Link>
      <Link
        href="/contact"
        style={{
          color: router.pathname === '/contact' ? 'rgb(240,150,37)' : '',
        }}>

        {t('contact')}

      </Link>
    </div>
  );
};

export default MenuItems;
