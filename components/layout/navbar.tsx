import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './navbar.module.scss';
import { useTranslation } from 'next-i18next';
import { CSSTransition } from 'react-transition-group';

interface Props {
  show: boolean;
  toggle?: () => void;
  isMobile: boolean;
}

// const getStyles = (show: boolean) => {
//   const navClass = [styles.navigation];
//   show ? navClass.push(styles.nav_opened) : navClass.push(styles.nav_closed);
//   const navClassString = navClass.join(' ');
//   return { navClass: navClassString };
// };

const Navbar: React.FC<Props> = (props) => {
  const router = useRouter();
  const locale = router.locale;
  const { t } = useTranslation('nav');

  const { show, toggle, isMobile } = props;
  // const { navClass } = getStyles(show);

  const navList = (
    <ul>
      <li onClick={toggle}>
        <Link href="/destinations">
          <a
            style={{
              color:
                router.pathname === '/destinations' ? 'rgb(240,150,37)' : '',
            }}
          >
            {t('destinations')}
            <div className={styles.underline}></div>
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
            {t('shop')}
            <div className={styles.underline}></div>
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
            {t('contact')}
            <div className={styles.underline}></div>
          </a>
        </Link>
      </li>
      <li onClick={toggle}>
        <Link
          href={{
            pathname: router.pathname,
            query: router.query,
          }}
          locale={locale === 'en-US' ? 'es-AR' : 'en-US'}
        >
          {t('lang')}
        </Link>
      </li>
    </ul>
  );

  const output = !isMobile ? (
    <nav className={styles.navigation}>{navList}</nav>
  ) : (
    <CSSTransition 
    in={show} 
    timeout={500} 
    classNames={{
      enterActive: styles.nav_opened,
      exitActive: styles.nav_closed
    }} 
    mountOnEnter 
    unmountOnExit >
      <nav className={styles.navigation}>{navList}</nav>
    </CSSTransition>
  );

  return output;
};

export default Navbar;
