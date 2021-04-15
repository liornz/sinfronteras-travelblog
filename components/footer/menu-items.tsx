import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './menu-items.module.scss';

const MenuItems: React.FC = () => {
  const router = useRouter();
  const locale = router.locale;
  return (
    <div className={styles.container}>
      <Link href="/destinations">
        {locale === 'en-US' ? 'DESTINATIONS' : 'DESTINOS'}
      </Link>
      <Link href="/shop">{locale === 'en-US' ? 'SHOP' : 'TIENDA'}</Link>
      <Link href="/contact">
        {locale === 'en-US' ? 'CONTACT' : 'CONTACTO'}
      </Link>
    </div>
  );
};

export default MenuItems;
