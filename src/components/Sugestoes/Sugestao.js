export default function Sugestao(props) {
  return (
    <div className="aside-profiles">
      <div className="aside-profiles-username">
        <img className="username-short-image" src={props.src} alt={props.alt} />
        <div>
          <p>{props.name}</p>
          <p>{props.status}</p>
        </div>
      </div>
      <button>seguir</button>
    </div>
  );
}
