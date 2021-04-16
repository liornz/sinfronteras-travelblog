import styles from './selected-video.module.scss';

interface Props {
  title: string;
  youtubeId: string;
}

const SelectedVideo: React.FC<Props> = (props) => {
  const { youtubeId, title } = props;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.video}>
        <iframe
          className={styles.youtube}
          src={`https://www.youtube.com/embed/${youtubeId}`}
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default SelectedVideo;
