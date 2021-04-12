import React, { useState } from 'react';
import Image from 'next/image';
import VideoDisplay from './video-display';
import styles from './video-card.module.scss';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlay } from '@fortawesome/free-solid-svg-icons';

interface Props {
  youtubeId: string;
  imagePath: string;
  imgAlt: string;
  text?: {
    title: string;
    subtitle: string;
  };
}

const VideoCard: React.FC<Props> = (props) => {
  const { youtubeId, imagePath, imgAlt, text } = props;
  const [videoDisplayOn, setVideoDisplayOn] = useState(false);
  const videoDisplayHandler = () => {
    setVideoDisplayOn((currState) => !currState);
  };

  const textSection = text ? (
    <div className={styles.Text}>
      <div className={styles.title}>
        <h4>{text?.title}</h4>
      </div>
      <div className={styles.subtitle}>
        <p>{text?.subtitle}</p>
      </div>
    </div>
  ) : null;

  return (
    <>
      <div className={styles.VideoCard}>
        <div className={styles.CardContainer}>
          <Image src={imagePath} alt={imgAlt} width={1644} height={925} />
          <div onClick={videoDisplayHandler} className={styles.Overlay}>
            {/* <FontAwesomeIcon icon={faPlay} size="4x" color="white" /> */}
          </div>
        </div>
        {textSection}
      </div>
      <VideoDisplay
        show={videoDisplayOn}
        toggle={videoDisplayHandler}
        youtubeId={youtubeId}
      />
    </>
  );
};

export default VideoCard;
