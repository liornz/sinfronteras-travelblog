import React from "react";
import YouTube from "react-youtube";
import styles from "./video-display.module.scss";
import Backdrop from "./backdrop";

interface Props {
  show: boolean;
  toggle: () => void;
  youtubeId: string;
}

const VideoDisplay: React.FC<Props> = (props) => {
  const { show, toggle, youtubeId } = props;
  const opts = {
    height: "720",
    width: "1280",
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
