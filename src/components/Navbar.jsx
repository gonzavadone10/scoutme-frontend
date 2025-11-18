import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();

  const isActive = (path) => (pathname === path ? "active" : "");

  return (
    <div className="navbar-wrapper">
      <header className="navbar">
        <div className="navbar-left">
          <div className="logo-circle" />
          <span className="logo-text">SCOUTME</span>
        </div>
        <nav className="nav-links">
          <Link to="/" className={isActive("/")}>
            Inicio
          </Link>
          <Link to="/jugadores" className={isActive("/jugadores")}>
            Jugadores
          </Link>
          <Link to="/nosotros" className={isActive("/nosotros")}>
            Quiénes Somos
          </Link>
          <Link to="/contacto" className={isActive("/contacto")}>
            Contacto
          </Link>
        </nav>
        <div className="nav-actions">
          <Link to="/login">
            <button className="btn-nav-primary">Iniciar sesión</button>
          </Link>
        </div>
      </header>
    </div>
  );
}