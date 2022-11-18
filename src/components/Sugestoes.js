const sugestoes = [
  {
    src: "assets/images/aside/aspas.jpeg",
    name: "aspaszin",
    status: "Segue você",
    alt: "Aspas profile image",
  },
  {
    src: "assets/images/aside/f1.png",
    name: "formula1",
    status: "Segue você",
    alt: "Formula1 profile image",
  },
  {
    src: "assets/images/aside/xandzizi.jpg",
    name: "xandzizi",
    status: "Novo no Instagram",
    alt: "Xand profile image",
  },
  {
    src: "assets/images/aside/neymar.jpeg",
    name: "neymarjr",
    status: "Segue você",
    alt: "Neymar profile image",
  },
  {
    src: "assets/images/aside/kevinhart.jpg",
    name: "kevinhart4real",
    status: "Segue você",
    alt: "Kevin Hart profile image",
  },
];

export default function Sugestoes() {
  return (
    <div>
      <div class="aside-suggestion">
        <div>
          <span>Sugestões para você</span>
        </div>
        <button>Ver tudo</button>
      </div>

      {sugestoes.map((el) => (
        <Sugestao name={el.name} alt={el.alt} src={el.src} status={el.status} />
      ))}
    </div>
  );
}

function Sugestao(props) {
  return (
    <div class="aside-profiles">
      <div class="aside-profiles-username">
        <img class="username-short-image" src={props.src} alt={props.alt} />
        <div>
          <p>{props.name}</p>
          <p>{props.status}</p>
        </div>
      </div>
      <button>seguir</button>
    </div>
  );
}
