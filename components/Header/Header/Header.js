import "./Header.css";

const Header = () => `
  <header class="header">
    <nav class="header-nav">
      <img src="https://www.cupraofficial.es/" alt="Cupra Logo" class="logo" />
      <ul class="nav-links">
        <li><a href="#hero">Inicio</a></li>
        <li><a href="#configurador">Configurador</a></li>
        <li><a href="#novedades">Novedades</a></li>
        <li><a href="#slider">Modelos</a></li>
        <li><a href="#kings-league">Kings League</a></li>
      </ul>
      <div class="nav-actions">
        <button class="btn">Configurador</button>
        <button class="btn">Cookies</button>
        <button class="btn"><i class="fas fa-user"></i> Iniciar Sesión</button>
      </div>
    </nav>
  </header>
`;

export default Header;