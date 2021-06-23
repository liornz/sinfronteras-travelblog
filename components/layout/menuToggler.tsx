import React from 'react';
import styles from './menuToggler.module.scss';

interface Props {
  toggle: () => void;
  show: boolean;
}

const getStyles = (show: boolean) => {
  const classes1 = [styles.first_line];
  show
    ? classes1.push(styles.firstline_open)
    : classes1.push(styles.firstline_close);
  const classes1Str = classes1.join(' ');

  const classes3 = [styles.third_line];
  show
    ? classes3.push(styles.thirdline_open)
    : classes3.push(styles.thirdline_close);
  const classes3Str = classes3.join(' ');

  const style2: React.CSSProperties = {
    opacity: show ? '0' : '1',
  };
  return {
    classes1: classes1Str,
    classes3: classes3Str,
    style2
  }
};

const MenuToggler: React.FC<Props> = (props) => {
  const { toggle, show } = props;
  const { classes1, classes3, style2 } = getStyles(show);
  return (
    <div className={styles.menu_toggler} onClick={toggle}>
      <div className={classes1}></div>
      <div className={styles.second_line} style={style2}></div>
      <div className={classes3}></div>
    </div>
  );
};

export default MenuToggler;
