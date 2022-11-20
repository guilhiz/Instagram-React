import Sugestoes from "./Sugestoes/Sugestoes";
import Usuario from "./Usuario";

export default function SideBar() {
  return (
    <aside>
      <Usuario />
      <Sugestoes />
      <p className="aside-text">Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma</p>
      <p className="aside-text">© 2021 INSTAGRAM DO FACEBOOK</p>
    </aside>
  );
}
