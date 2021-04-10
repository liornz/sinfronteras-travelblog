import Link from 'next/link';
import Image from 'next/image';
import styles from './main-header.module.scss';

import { useRouter } from 'next/router';

interface Props {}

const MainHeader: React.FC<Props> = (props) => {
  const {} = props;
  const router = useRouter();
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
            <Link href="/destinations">
              <a
                style={{
                  color:
                    router.pathname === '/destinations'
                      ? 'rgb(240,150,37)'
                      : '',
                }}
              >
                ALL DESTINATIONS
              </a>
            </Link>
          </li>
          <li>
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
          <li>
            <Link href="/contact">
              <a
                style={{
                  color:
                    router.pathname === '/contact' ? 'rgb(240,150,37)' : '',
                }}
              >
                CONTACT
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
