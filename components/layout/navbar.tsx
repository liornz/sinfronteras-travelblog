import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './navbar.module.scss';

interface Props {
  show: boolean;
  toggle?: () => void;
}

const Navbar: React.FC<Props> = (props) => {
  const router = useRouter();
  const locale = router.locale;

  const { show, toggle } = props;

  const navClass = [styles.navigation];
  show ? navClass.push(styles.nav_opened) : navClass.push(styles.nav_closed);
  const navClassString = navClass.join(' ');

  return (
    <nav className={navClassString}>
      <ul>
        <li onClick={toggle}>
          <Link href="/destinations">
            <a
              style={{
                color:
                  router.pathname === '/destinations' ? 'rgb(240,150,37)' : '',
              }}
            >
              {locale === 'en-US' ? 'DESTINATIONS' : 'DESTINOS'}
            </a>
          </Link>
        </li>
        <li onClick={toggle}>
          <Link href="/shop">
            <a
              style={{
                color: router.pathname === '/shop' ? 'rgb(240,150,37)' : '',
              }}
            >
              {locale === 'en-US' ? 'SHOP' : 'TIENDA'}
            </a>
          </Link>
        </li>
        <li onClick={toggle}>
          <Link href="/contact">
            <a
              style={{
                color: router.pathname === '/contact' ? 'rgb(240,150,37)' : '',
              }}
            >
              {locale === 'en-US' ? 'CONTACT' : 'CONTACTO'}
            </a>
          </Link>
        </li>
        <li>
          <Link
            href={{
              pathname: router.pathname,
              query: router.query,
            }}
            locale={locale === 'en-US' ? 'es-AR' : 'en-US'}
          >
            {locale === 'en-US' ? 'ESP' : 'ENG'}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
