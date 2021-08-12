import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './menu-items.module.scss';

const MenuItems: React.FC = () => {
  const router = useRouter();
  const locale = router.locale;
  return (
    <div className={styles.container}>
      <Link href="/destinations">
        <a
          style={{
            color: router.pathname === '/destinations' ? 'rgb(240,150,37)' : '',
          }}
        >
          {locale === 'en-US' ? 'DESTINATIONS' : 'DESTINOS'}
        </a>
      </Link>
      <Link href="/shop">
        <a
          style={{
            color: router.pathname === '/shop' ? 'rgb(240,150,37)' : '',
          }}
        >
          {locale === 'en-US' ? 'SHOP' : 'TIENDA'}
        </a>
      </Link>
      <Link href="/contact">
        <a
          style={{
            color: router.pathname === '/contact' ? 'rgb(240,150,37)' : '',
          }}
        >
          {locale === 'en-US' ? 'CONTACT' : 'CONTACTO'}
        </a>
      </Link>
    </div>
  );
};

export default MenuItems;
