import styles from './video-opening.module.scss';

interface Props {

}

const VideoOpening: React.FC<Props> = (props) => {
const {  } = props;
  return (
    <div className={styles.video}>
      <h1>This will be the video display of the intro</h1>
    </div>
  );
};

export default VideoOpening;