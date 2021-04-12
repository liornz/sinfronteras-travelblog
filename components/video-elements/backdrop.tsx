import React from 'react';
import styles from './backdrop.module.scss';

const Backdrop: React.FC<{toggle: () => void}> = ({toggle}) => {
  return (
    <div className={styles.Backdrop} onClick={toggle} ></div>
  );
}

export default Backdrop;