import Sugestoes from "./Sugestoes";
import Usuario from "./Usuario";


export default function SideBar() {
  return (
    <aside>
      <Usuario />
      <Sugestoes />
      <p class="aside-text">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas
        mais relevantes • Hashtags • Idioma
      </p>
      <p class="aside-text">© 2021 INSTAGRAM DO FACEBOOK</p>
    </aside>
  );
}
