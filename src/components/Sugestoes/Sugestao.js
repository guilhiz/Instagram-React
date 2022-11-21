import React, { useState } from "react";
export default function Sugestao(props) {
  const [follow, setFollow] = useState(true);
  return (
    <div className="aside-profiles">
      <div className="aside-profiles-username">
        <img className="username-short-image" src={props.src} alt={props.alt} />
        <div>
          <p>{props.name}</p>
          <p>{props.status}</p>
        </div>
      </div>
      <button
        className={!follow ? "button-follow" : null}
        onClick={() => {
          setFollow((current) => !current);
        }}
      >
        {follow ? "Seguir" : "Seguindo"}
      </button>
    </div>
  );
}
