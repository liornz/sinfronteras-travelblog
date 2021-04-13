import { useState } from 'react';
import Logo from './logo';
import Navbar from './navbar';
import styles from './main-header.module.scss';
import MenuToggler from './menuToggler';

interface Props {}

const MainHeader: React.FC<Props> = (props) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const {} = props;

  function toggleMobileMenu() {
    setShowMobileMenu(prevState => !prevState);
  }

  return (
    <header>
      <div className={styles.header_desktop}>
        <Logo />
        <Navbar show />
      </div>
      <div className={styles.header_mobile}>
        <div className={styles.toolbar_mobile}>
          <Logo toggle={showMobileMenu ? toggleMobileMenu : undefined} />
          <MenuToggler show={showMobileMenu} toggle={toggleMobileMenu} />
        </div>
        <Navbar show={showMobileMenu} toggle={toggleMobileMenu} />
      </div>
    </header>
  );
};

export default MainHeader;
