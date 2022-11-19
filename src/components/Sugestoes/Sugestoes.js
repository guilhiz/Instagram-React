import mockSugestoes from "./mockSugestoes";
import Sugestao from "./Sugestao";

export default function Sugestoes() {
  return (
    <div>
      <div className="aside-suggestion">
        <div>
          <span>Sugestões para você</span>
        </div>
        <button>Ver tudo</button>
      </div>
      {mockSugestoes.map((el) => (
        <Sugestao key={el.name} name={el.name} alt={el.alt} src={el.src} status={el.status} />
      ))}
    </div>
  );
}
