import Sugestoes from "./Sugestoes/Sugestoes";
import Usuario from "./Usuario";
const dados = {user: "ðð¾ð²ð ðð¾ð²ðµð±ð®ð»ð¶ð®", userSrc: "./assets/images/story/guilhiz.jpeg"};

export default function SideBar() {
  return (
    <aside>
      <Usuario userSrc={dados.userSrc} userName={dados.user} />
      <Sugestoes />
      <p className="aside-text">Sobre â¢ Ajuda â¢ Imprensa â¢ API â¢ Carreiras â¢ Privacidade â¢ Termos â¢ LocalizaÃ§Ãµes â¢ Contas mais relevantes â¢ Hashtags â¢ Idioma</p>
      <p className="aside-text">Â© 2021 INSTAGRAM DO FACEBOOK</p>
    </aside>
  );
}
