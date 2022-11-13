import {useRef, useEffect} from 'react';

type Props = {
    trailer: string;
    poster: string;
};

function VideoPlayer({trailer, poster}: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayVideo = () => {
    videoRef?.current?.play();
  };

  useEffect(()=>{
    const timer = setTimeout(handlePlayVideo, 1000);

    return () => clearTimeout(timer);
  }, [poster]);
  return (
    <video ref={videoRef} poster={poster} muted width='100%' >
      <source src={trailer} type="video/mp4"/>
      Sorry, your browser do not support videos.
    </video>
  );
}

export default VideoPlayer;
