import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './navbar.module.scss';

interface Props {
  show: boolean,
  toggle?: () => void
}

const Navbar: React.FC<Props> = (props) => {
  const router = useRouter();

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
              ALL DESTINATIONS
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
              SHOP
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
              CONTACT
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
