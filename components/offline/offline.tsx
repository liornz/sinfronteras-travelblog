import styles from './offline.module.scss';

interface Props {

}

const Offline: React.FC<Props> = (props) => {
const {  } = props;
  return (
    <div className="center">
      <h2>We are very sorry, this page cannot be viewed at this time.</h2>
      <p>Please check your network connection and try again!</p>
    </div>
  );
};

export default Offline;