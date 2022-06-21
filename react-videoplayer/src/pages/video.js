import React from "react";
import ReactPlayer from "react-player";
import styles from "../styles/Home.module.css";

const Video = () => {
  return (
    <ReactPlayer
      width='480px'
      height='240px'
      controls
      url='https://www.youtube.com/watch?v=UK1zJLNHWrE'
      onReady={() => alert("onReady!!")}
      onStart={() => alert("onStart!!")}
      onPause={() => alert("onPause!!")}
      onEnded={() => alert("onEnded!!")}
      onError={() => alert("onError!!")}
      className={styles.center}
    />
  );
};

export default Video;
