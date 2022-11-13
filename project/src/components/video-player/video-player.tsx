

type Props = {
    trailer: string;
    poster: string;
    videoRef: React.RefObject<HTMLVideoElement>;
};

function VideoPlayer({trailer, poster, videoRef}: Props) {

  return (
    <video ref={videoRef} poster={poster} muted width='100%' height='100%' >
      <source src={trailer} type="video/mp4"/>
      Sorry, your browser do not support videos.
    </video>
  );
}

export default VideoPlayer;
