import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/images/logo/logo_sinfronteras-417x150.png';
import { useTranslation } from 'next-i18next';
import styles from './extended-logo.module.scss';

const ExtendedLogo: React.FC = () => {
  const { t } = useTranslation('footer');

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Link href="/">
          <a>
            <Image src={logo} alt="Sin Fronteras Logo" />
          </a>
        </Link>
      </div>
      <h1>{t('logo-subtitle')}</h1>
      <a href="mailto:info@sinfronteras-travelblog.com">
        <p className={styles.email}>info@sinfronteras-travelblog.com</p>
      </a>
      <p>©2021 SINFRONTERAS</p>
      <p>
        {t('rights')}
      </p>
    </div>
  );
};

export default ExtendedLogo;
