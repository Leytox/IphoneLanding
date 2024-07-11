const VideoCard = ({ video }) => {
  return (
    <div className="video-card">
      <video loop autoPlay muted playsInline={true} key={video.src}>
        <source src={video.src} />
      </video>
    </div>
  );
};
export default VideoCard;
