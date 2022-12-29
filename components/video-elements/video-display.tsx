import React, { useEffect, useState } from "react";
import YouTube, { YouTubeProps } from "react-youtube";
import styles from "./video-display.module.scss";
import Backdrop from "./backdrop";

interface Props {
  show: boolean;
  toggle: () => void;
  youtubeId: string;
}

const VideoDisplay: React.FC<Props> = (props) => {
  const { show, toggle, youtubeId } = props;
  const [width, setWidth] = useState(1280);
  const [height, setHeight] = useState(720);
  useEffect(() => {
    if (window.innerWidth <= 600) {
      setWidth((window.innerWidth * 90) / 100);
      setHeight((window.innerWidth * 45) / 100);
    } else {
      setWidth((window.innerWidth * 60) / 100);
      setHeight((window.innerWidth * 30) / 100);
    }
  }, []);
  const opts: YouTubeProps["opts"] = {
    height,
    width,
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const _onReady = (event: { target: { playVideo: () => void } }) => {
    // access to player in all event handlers via event.target
    event.target.playVideo();
  };

  const render = show ? (
    <div>
      <Backdrop toggle={toggle} />
      <YouTube
        className={styles.Video}
        videoId={youtubeId}
        opts={opts}
        onReady={_onReady}
      />
    </div>
  ) : null;

  return render;
};

export default VideoDisplay;
