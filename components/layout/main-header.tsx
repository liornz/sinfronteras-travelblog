import { useEffect, useState } from 'react';
import Logo from './logo';
import Navbar from './navbar';
import styles from './main-header.module.scss';
import MenuToggler from './menuToggler';
import { CSSTransition } from 'react-transition-group';

interface Props {}

const MainHeader: React.FC<Props> = (props) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const {} = props;
  const breakpoint = 600;

  useEffect(() => {
    const handleResizeWindow = () =>
      window.innerWidth <= breakpoint ? setIsMobile(true) : setIsMobile(false);
    handleResizeWindow();
    window.addEventListener('resize', handleResizeWindow);
    return () => {
      window.removeEventListener('resize', handleResizeWindow);
    };
  }, [breakpoint]);

  function toggleMobileMenu() {
    setShowMobileMenu((prevState) => !prevState);
  }

  const output = isMobile ? (
    <header>
      <div className={styles.header_mobile}>
        <div className={styles.toolbar_mobile}>
          <Logo toggle={showMobileMenu ? toggleMobileMenu : undefined} />
          <MenuToggler show={showMobileMenu} toggle={toggleMobileMenu} />
        </div>
        <Navbar show={showMobileMenu} toggle={toggleMobileMenu} isMobile={isMobile} />
      </div>
    </header>
  ) : (
    <header>
      <div className={styles.header_desktop}>
        <Logo />
        <Navbar show isMobile={false} />
      </div>
    </header>
  );

  return output;
};

export default MainHeader;
