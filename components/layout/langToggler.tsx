import React from 'react';
import styles from './langToggler.module.scss';
import { useRouter } from 'next/router';

const LangToggler: React.FC = () => {
  const router = useRouter();
  const locale = router.locale!;
  const currPath = router.pathname;

  const switchLangHandler = () => {
    if (locale === 'es-AR') {
      router.push(currPath, currPath, {   locale: 'en-US' });
    } else {
      router.push(currPath, currPath, { locale: 'es-AR' });
    }
  };

  return (
    <li className={styles.Toggler} onClick={switchLangHandler}>
      {locale === 'es-AR' ? 'ENG' : 'ESP'}
    </li>
  );
};

export default LangToggler;
