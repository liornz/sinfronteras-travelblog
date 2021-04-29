import styles from './spinner.module.scss';

const Spinner: React.FC = () => {

  return (
    <div className={styles.lds_ring}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Spinner;