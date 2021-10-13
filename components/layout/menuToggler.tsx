import React from 'react';
import styles from './menuToggler.module.scss';

interface Props {
  toggle: () => void;
  show: boolean | undefined;
}

const getStyles = (show: boolean | undefined) => {
  const classes1 = [styles.first_line];
  show === true
    ? classes1.push(styles.firstline_open)
    : show === false
    ? classes1.push(styles.firstline_close)
    : null;
  const classes1Str = classes1.join(' ');

  const classes3 = [styles.third_line];
  show === true
    ? classes3.push(styles.thirdline_open)
    : show === false
    ? classes3.push(styles.thirdline_close)
    : null;
  const classes3Str = classes3.join(' ');

  const style2: React.CSSProperties = {
    opacity: show ? '0' : '1',
  };
  return {
    classes1: classes1Str,
    classes3: classes3Str,
    style2,
  };
};

const MenuToggler: React.FC<Props> = (props) => {
  const { toggle, show } = props;
  const { classes1, classes3, style2 } = getStyles(show);
  return (
    <div role="button" className={styles.menu_toggler} onClick={toggle}>
      <div className={classes1}></div>
      <div className={styles.second_line} style={style2}></div>
      <div className={classes3}></div>
    </div>
  );
};

export default MenuToggler;
