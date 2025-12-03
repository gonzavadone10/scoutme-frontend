import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  // Ocultar navbar en login y registro
  if (location.pathname === "/login" || location.pathname === "/register") {
    return null;
  }

  const linkClass = ({ isActive }) =>
    isActive ? "active" : "";

  return (
    <header className="navbar-wrapper">
      <nav className="navbar">
        <div className="navbar-left">
          <div className="logo-circle" />
          <span className="logo-text">SCOUTME</span>
        </div>

        <div className="nav-links">
          <NavLink to="/" end className={linkClass}>
            Inicio
          </NavLink>
          <NavLink to="/jugadores" className={linkClass}>
            Jugadores
          </NavLink>
          <NavLink to="/quienes-somos" className={linkClass}>
            Quiénes Somos
          </NavLink>
          <NavLink to="/contacto" className={linkClass}>
            Contacto
          </NavLink>
        </div>

        <div className="nav-actions">
          <button
            className="btn-nav-primary"
            onClick={() => navigate("/login")}
          >
            Iniciar sesión
          </button>
        </div>
      </nav>
    </header>
  );
}