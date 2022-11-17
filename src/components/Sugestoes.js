const sugestoes = [
{
    src: "./assets/images/aside/aspas.jpeg",
    nome: "aspaszin",
    status: "Segue você",
    alt: "profile image"
},
{
  src: "./assets/images/aside/f1.png",
  nome: "formula1",
  status: "Segue você",
  alt: "profile image"
},
{
  src: "./assets/images/aside/xandzizi.jpg",
  nome: "xandzizi",
  status: "Novo no Instagram",
  alt: "profile image"
},
{
  src: "./assets/images/aside/neymar.jpeg",
  nome: "neymarjr",
  status: "Segue você",
  alt: "profile image"
},
{
  src: "./assets/images/aside/kevinhart.jpg",
  nome: "kevinhart4real",
  status: "Segue você",
  alt: "profile image"
}
]

export default function Sugestoes() {
  return (
    <div>
      <div class="aside-suggestion">
        <div>
          <span>Sugestões para você</span>
        </div>
        <button>Ver tudo</button>
      </div>

      <div class="aside-profiles">
        <div class="aside-profiles-username">
          <img class="username-short-image" src="./assets/images/aside/aspas.jpeg" alt="" />
          <div>
            <p>aspaszin</p>
            <p>Segue você</p>
          </div>
        </div>
        <button>seguir</button>
      </div>

      <div class="aside-profiles">
        <div class="aside-profiles-username">
          <img class="username-short-image" src="./assets/images/aside/f1.png" alt="" />
          <div>
            <p>formula1</p>
            <p>Segue você</p>
          </div>
        </div>
        <button>seguir</button>
      </div>

      <div class="aside-profiles">
        <div class="aside-profiles-username">
          <img class="username-short-image" src="./assets/images/aside/xandzizi.jpg" alt="" />
          <div>
            <p>xandzizi</p>
            <p>Novo no Instagram</p>
          </div>
        </div>
        <button>seguir</button>
      </div>

      <div class="aside-profiles">
        <div class="aside-profiles-username">
          <img class="username-short-image" src="./assets/images/aside/neymar.jpeg" alt="" />
          <div>
            <p>neymarjr</p>
            <p>Segue você</p>
          </div>
        </div>
        <button>seguir</button>
      </div>

      <div class="aside-profiles">
        <div class="aside-profiles-username">
          <img class="username-short-image" src="./assets/images/aside/kevinhart.jpg" alt="" />
          <div>
            <p>kevinhart4real</p>
            <p>Segue você</p>
          </div>
        </div>
        <button>seguir</button>
      </div>

    </div>
  );
}
