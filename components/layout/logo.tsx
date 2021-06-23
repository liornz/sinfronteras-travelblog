import  Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/images/logo/logo_sinfronteras-417x150.png';

import styles from './logo.module.scss';

interface Props {
  toggle?: () => void
}

const Logo: React.FC<Props> = (props) => {
  const { toggle } = props;
  return (
    <div className={styles.logo} onClick={toggle}>
      <Link href="/">
        <a>
          <Image
            src={logo}
            alt="Sin Fronteras Logo"
          />
        </a>
      </Link>
    </div>
  );
};

export default Logo;