import { useEffect, useState } from "react";
import Logo from "./logo";
import Navbar from "./navbar";
import styles from "./main-header.module.scss";
import MenuToggler from "./menuToggler";
import { Lato } from "@next/font/google";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});

interface Props {}

const MainHeader: React.FC<Props> = (props) => {
  const breakpoint = 600;
  const [isMobile, setIsMobile] = useState(true);
  const [showMobileMenu, setShowMobileMenu] = useState<boolean | undefined>(
    undefined
  );
  const {} = props;

  useEffect(() => {
    const handleResizeWindow = () =>
      window.innerWidth <= breakpoint ? setIsMobile(true) : setIsMobile(false);
    handleResizeWindow();
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, [breakpoint]);

  function toggleMobileMenu() {
    setShowMobileMenu((prevState) => !prevState);
  }

  let output = isMobile ? (
    <header className={lato.className}>
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
    <header className={lato.className}>
      <div className={styles.header_desktop}>
        <Logo />
        <Navbar show isMobile={false} />
      </div>
    </header>
  );

  return output;
};

export default MainHeader;
