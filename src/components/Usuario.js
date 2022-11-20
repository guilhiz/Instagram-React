import React, { useState } from "react";

export default function Usuario() {
const [name, setName] = useState("𝓛𝓾𝓲𝔃 𝓖𝓾𝓲𝓵𝓱𝓮𝓻𝓶𝓮")

  return (
    <div className="aside-profiles">
      <div className="aside-profiles-username" data-test="user">
        <img
          className="username-large-image"
          src="./assets/images/story/guilhiz.jpeg"
          alt="profile image"
          data-test="profile-image"
        />
        <div>
          <p>guilhiz</p>
          <span data-test="name">
            {name}
            <ion-icon data-test="edit-name" name="pencil"></ion-icon>
          </span>
        </div>
      </div>
      <button>mudar</button>
    </div>
  );
}
