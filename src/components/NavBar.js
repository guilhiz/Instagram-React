export default function NavBar() {
  return (
    <header>
      <div className="container-header">
        <div className="header-logo">
          <ion-icon name="logo-instagram"></ion-icon>
          <div className="line-vertical"></div>
          <img src="./assets/images/logo 1.png" alt="Logo" />
        </div>
        <label className="header-search" method="post">
          <input type="search" name="search" autoComplete="off" placeholder="Pesquisar" />
        </label>
        <div className="header-icons">
          <ion-icon name="paper-plane-outline"></ion-icon>
          <ion-icon name="compass-outline"></ion-icon>
          <ion-icon name="heart-outline"></ion-icon>
          <ion-icon name="person-outline"></ion-icon>
        </div>
      </div>
    </header>
  );
}