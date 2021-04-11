import  Link from 'next/link';
import Image from 'next/image';

import styles from './logo.module.scss';

const Logo: React.FC = () => {

  return (
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
  );
};

export default Logo;