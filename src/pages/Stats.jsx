import { useState } from "react";
import "./Stats.css";

export default function Stats() {
  const [rival, setRival] = useState("");
  const [goles, setGoles] = useState("");
  const [asistencias, setAsistencias] = useState("");
  const [minutos, setMinutos] = useState("");
  const [mensaje, setMensaje] = useState("");

  const guardar = () => {
  const perfil = JSON.parse(
    localStorage.getItem("miPerfil")
  );

  if (!perfil) {
    setMensaje("Primero debés crear un perfil.");
    return;
  }

  perfil.estadisticas = {
    rival,
    goles,
    asistencias,
    minutos,
  };

  localStorage.setItem(
    "miPerfil",
    JSON.stringify(perfil)
  );

  setMensaje("Estadística guardada correctamente.");

  setRival("");
  setGoles("");
  setAsistencias("");
  setMinutos("");
};

  return (
    <main className="stats-container">
      <section className="stats-card">
        <h1>Cargar estadísticas</h1>

        <p className="stats-subtitle">
          Registrá el rendimiento de un partido para mantener actualizado tu perfil deportivo.
        </p>

        <input
          type="text"
          placeholder="Rival"
          value={rival}
          onChange={(e) => setRival(e.target.value)}
        />

        <input
          type="number"
          placeholder="Goles"
          value={goles}
          onChange={(e) => setGoles(e.target.value)}
        />

        <input
          type="number"
          placeholder="Asistencias"
          value={asistencias}
          onChange={(e) => setAsistencias(e.target.value)}
        />

        <input
          type="number"
          placeholder="Minutos jugados"
          value={minutos}
          onChange={(e) => setMinutos(e.target.value)}
        />

        <button onClick={guardar}>Guardar estadística</button>

        {mensaje && <p className="stats-message">{mensaje}</p>}
      </section>
    </main>
  );
}