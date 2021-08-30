import styles from './spinner.module.scss';

const Spinner: React.FC = () => {

  return (
    <div role="timer" className={styles.lds_ring}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Spinner;