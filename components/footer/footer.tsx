import ExtendedLogo from "./extended-logo";
import MenuItems from "./menu-items";
import SocialMedia from "./social-media";
import Newsletter from "./newsletter-registration";
import styles from "./footer.module.scss";
import { Lato } from "@next/font/google";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Footer: React.FC = () => {
  return (
    <div className={styles.container + " " + lato.className}>
      <ExtendedLogo />
      <MenuItems />
      <SocialMedia />
      <Newsletter />
    </div>
  );
};

export default Footer;
