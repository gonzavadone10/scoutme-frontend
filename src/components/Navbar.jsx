import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const cerrarSesion = () => {
    localStorage.removeItem("user");
    navigate("/");
    window.location.reload();
  };

  // Ocultar navbar en login y registro
  if (location.pathname === "/login" || location.pathname === "/register") {
    return null;
  }

  const linkClass = ({ isActive }) => (isActive ? "active" : "");

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

          <NavLink to="/mi-perfil" className={linkClass}>
            Mi Perfil
          </NavLink>

          <NavLink to="/stats" className={linkClass}>
            Estadísticas
          </NavLink>

          <NavLink to="/quienes-somos" className={linkClass}>
            Quiénes Somos
          </NavLink>

          <NavLink to="/contacto" className={linkClass}>
            Contacto
          </NavLink>
        </div>

        <div
          className="nav-actions"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          {user ? (
            <>
              <span
                style={{
                  fontWeight: "600",
                  color: "#071a2d",
                }}
              >
                👤 {user.nombre || user.name}
              </span>

              <button
                className="btn-nav-primary"
                onClick={cerrarSesion}
              >
                Cerrar sesión
              </button>
            </>
          ) : (
            <button
              className="btn-nav-primary"
              onClick={() => navigate("/login")}
            >
              Iniciar sesión
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}