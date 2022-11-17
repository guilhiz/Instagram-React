export default function NavBar() {
  return (
    <header>
      <div class="container-header">
        <div class="header-logo">
          <ion-icon name="logo-instagram"></ion-icon>
          <div class="line-vertical"></div>
          <img src="./assets/images/logo 1.png" alt="Logo" />
        </div>
        <label class="header-search" method="post">
          <input type="search" name="search" autocomplete="off" placeholder="Pesquisar" />
        </label>
        <div class="header-icons">
          <ion-icon name="paper-plane-outline"></ion-icon>
          <ion-icon name="compass-outline"></ion-icon>
          <ion-icon name="heart-outline"></ion-icon>
          <ion-icon name="person-outline"></ion-icon>
        </div>
      </div>
    </header>
  );
}