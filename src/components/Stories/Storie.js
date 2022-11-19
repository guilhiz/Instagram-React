export default function Storie(props) {
  return (
    <div className="story-content">
      <div className="story-image">
        <img src={props.src} alt="profile picture" />
      </div>
      <p>{props.name}</p>
    </div>
  );
}