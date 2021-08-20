import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/images/logo/logo_sinfronteras-417x150.png';
import { useRouter } from 'next/router';
import styles from './extended-logo.module.scss';

const ExtendedLogo: React.FC = () => {
  const router = useRouter();
  const locale = router.locale;
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Link href="/">
          <a>
            <Image src={logo} alt="Sin Fronteras Logo" />
          </a>
        </Link>
      </div>
      <h1>
        {locale === 'en-US' ? 'Your Travel Channel' : 'Tu Canal de Viajes'}
      </h1>
      <a href="mailto:info@sinfronteras-travelblog.com">
        <h5>info@sinfronteras-travelblog.com</h5>
      </a>
      <p>©2021 SINFRONTERAS</p>
      <p>
        {locale === 'en-US'
          ? 'ALL RIGHTS RESERVED.'
          : 'TODOS LOS DERECHOS RESERVADOS'}
      </p>
    </div>
  );
};

export default ExtendedLogo;
