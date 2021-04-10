import Link from 'next/link';
import Image from 'next/image';
import styles from './main-header.module.scss';

interface Props {}

const MainHeader: React.FC<Props> = (props) => {
  const {} = props;
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <a>
            <Image
              src={'/images/logo/logo_sinfronteras-417x150.png'}
              alt="Sin Fronteras Logo"
              width={600}
              height={200}
            />
          </a>
        </Link>
      </div>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <Link href="/destinations">ALL DESTINATIONS</Link>
          </li>
          <li>
            <Link href="/shop">SHOP</Link>
          </li>
          <li>
            <Link href="/contact">CONTACT</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
