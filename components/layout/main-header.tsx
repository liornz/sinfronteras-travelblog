import { useEffect, useState } from 'react';
import Logo from './logo';
import Navbar from './navbar';
import styles from './main-header.module.scss';
import MenuToggler from './menuToggler';

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
        {showMobileMenu ? (<Navbar show toggle={toggleMobileMenu} />) : null}
      </div>
    </header>
  ) : (
    <header>
      <div className={styles.header_desktop}>
        <Logo />
        <Navbar show />
      </div>
    </header>
  );

  return output;
};

export default MainHeader;
