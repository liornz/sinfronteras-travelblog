import { useEffect, useState } from 'react';
import Logo from './logo';
import Navbar from './navbar';
import styles from './main-header.module.scss';
import MenuToggler from './menuToggler';

interface Props {}

const MainHeader: React.FC<Props> = (props) => {
  const breakpoint = 600;
  let winWidth = true;
  if (typeof window !== 'undefined') {
    winWidth = window.innerWidth <= breakpoint;
  }
  const [isMobile, setIsMobile] = useState(winWidth);
  const [showMobileMenu, setShowMobileMenu] = useState<boolean | undefined>(undefined);
  const {} = props;

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

  let output = isMobile ? (
    <header>
      <div className={styles.header_mobile}>
        <div className={styles.toolbar_mobile}>
          <Logo toggle={showMobileMenu ? toggleMobileMenu : undefined} />
          <MenuToggler show={showMobileMenu} toggle={toggleMobileMenu} />
        </div>
        <Navbar
          show={showMobileMenu ? true : false}
          toggle={toggleMobileMenu}
          isMobile={true}
        />
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

  if (typeof window === 'undefined') {
    output = <div></div>;
  }

  return output;
};

export default MainHeader;
