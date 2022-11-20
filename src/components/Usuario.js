import { useState } from "react";

export default function Usuario(props) {
  const [name, setName] = useState(props.userName);
  const [imageUrl, setImageUrl] = useState(props.userSrc);

  return (
    <div className="aside-profiles">
      <div className="aside-profiles-username" data-test="user">
        <img
          onClick={() => setImageUrl(prompt("Digite o link para sua nova foto de perfil aqui"))}
          className="username-large-image"
          src={imageUrl ? imageUrl : props.userSrc}
          alt="profile image"
          data-test="profile-image"
        />
        <div>
          <p>guilhiz</p>
          <span data-test="name">
            {name ? name : props.userName}
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
