import Sugestoes from "./Sugestoes/Sugestoes";
import Usuario from "./Usuario";
const dados = {user: "𝓛𝓾𝓲𝔃 𝓖𝓾𝓲𝓵𝓱𝓮𝓻𝓶𝓮", userSrc: "./assets/images/story/guilhiz.jpeg"};

export default function SideBar() {
  return (
    <aside>
      <Usuario userSrc={dados.userSrc} userName={dados.user} />
      <Sugestoes />
      <p className="aside-text">Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma</p>
      <p className="aside-text">© 2021 INSTAGRAM DO FACEBOOK</p>
    </aside>
  );
}
