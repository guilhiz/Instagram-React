export default function Media(props) {
  if (props.postImg) {
    return <img src={props.postImg} alt="post image" />;
  }
  return (
    <video autoPlay loop muted>
      <source src={props.videoMp4} type="video/mp4" />
      <source src={props.videoOgg} type="video/ogg" />
      Your browser does not support the video tag.
    </video>
  );
}
