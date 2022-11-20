import Fundo from "./Fundo";
import NavBar from "./NavBar";
import Corpo from "./Corpo";

export default function App() {
  return (
    <div className="container">
      <NavBar />
      <Corpo />
      <Fundo />
    </div>
  );
}
