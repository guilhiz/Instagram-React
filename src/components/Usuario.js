import { useState } from "react";
let img = ""

export default function Usuario() {
  const [name, setName] = useState("𝓛𝓾𝓲𝔃 𝓖𝓾𝓲𝓵𝓱𝓮𝓻𝓶𝓮");
  const [imageUrl, setImageUrl] = useState("./assets/images/story/guilhiz.jpeg");
  img = {imageUrl}

  return (
    <div className="aside-profiles">
      <div className="aside-profiles-username" data-test="user">
        <img
          onClick={() => setImageUrl(prompt("Digite o link para sua nova foto de perfil aqui"))}
          className="username-large-image"
          src={imageUrl ? imageUrl : "./assets/images/story/guilhiz.jpeg"}
          alt="profile image"
          data-test="profile-image"
        />
        <div>
          <p>guilhiz</p>
          <span data-test="name">
            {name}
            <ion-icon
              data-test="edit-name"
              name="pencil"
              onClick={() => setName(prompt("Digite seu novo nome de usuário aqui"))}
            ></ion-icon>
          </span>
        </div>
      </div>
      <button>mudar</button>
    </div>
  );
}

console.log(img)
