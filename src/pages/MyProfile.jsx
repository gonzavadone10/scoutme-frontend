import { Link, useNavigate } from "react-router-dom";
import "./MyProfile.css";

export default function MyProfile() {
  const perfil = JSON.parse(localStorage.getItem("miPerfil"));
  const navigate = useNavigate();
  const eliminarPerfil = () => {
    localStorage.removeItem("miPerfil");
    navigate("/mi-perfil");
  };

  if (!perfil || !perfil.nombre) {
    return (
      <main className="profile-container">
        <section className="profile-empty-card">
          <h1>Mi Perfil Deportivo</h1>
          <p>Todavía no creaste tu perfil deportivo.</p>

          <Link to="/crear-perfil" className="profile-button">
            Crear perfil
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="profile-container">
      <h1>Mi Perfil Deportivo</h1>

      <section className="profile-card">
        <div className="profile-avatar">
          {perfil.nombre.charAt(0).toUpperCase()}
        </div>

        <h2>{perfil.nombre}</h2>

        <p><strong>Edad:</strong> {perfil.edad} años</p>
        <p><strong>Posición:</strong> {perfil.posicion}</p>
        <p><strong>Club:</strong> {perfil.club}</p>
        <p><strong>Pie hábil:</strong> {perfil.pie}</p>
        <p><strong>Biografía:</strong> {perfil.biografia}</p>
        {perfil.estadisticas && (
  <>
    <h3>Últimas estadísticas</h3>

    <p>
      <strong>Rival:</strong>{" "}
      {perfil.estadisticas.rival}
    </p>

    <p>
      <strong>Goles:</strong>{" "}
      {perfil.estadisticas.goles}
    </p>

    <p>
      <strong>Asistencias:</strong>{" "}
      {perfil.estadisticas.asistencias}
    </p>

    <p>
      <strong>Minutos:</strong>{" "}
      {perfil.estadisticas.minutos}
    </p>
  </>
)}

        <Link to="/crear-perfil" className="profile-button">
          Editar perfil
        </Link>

        <button
          className="profile-delete-button"
          onClick={eliminarPerfil}
        >
          Eliminar perfil
        </button>
      </section>
    </main>
  );
}