import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const jugadoresMock = [
  {
    id: 1,
    nombre: "Matías Romero",
    posicion: "Extremo derecho",
    edad: 19,
    club: "Club Atlético Norte",
    pie: "Derecho",
    estado: "Excelente estado físico",
    validado: true,
    goles: 12,
    asistencias: 7,
    minutos: 840,
    descripcion: "Rápido, desequilibrante, buen uno contra uno.",
  },
  {
    id: 2,
    nombre: "Franco Pérez",
    posicion: "Volante central",
    edad: 21,
    club: "Deportivo Sur",
    pie: "Derecho",
    estado: "Muy buen estado físico",
    validado: true,
    goles: 4,
    asistencias: 11,
    minutos: 1020,
    descripcion: "Buen visión de juego, distribuidor, orden táctico.",
  },
  {
    id: 3,
    nombre: "Lucas Torres",
    posicion: "Defensor central",
    edad: 22,
    club: "Atlético Oeste",
    pie: "Izquierdo",
    estado: "Óptimo, sin lesiones recientes",
    validado: false,
    goles: 2,
    asistencias: 1,
    minutos: 1150,
    descripcion: "Fuerte en el mano a mano, juego aéreo sólido.",
  },
  {
    id: 4,
    nombre: "Tomás Aguirre",
    posicion: "Delantero centro",
    edad: 20,
    club: "Barrio Norte FC",
    pie: "Derecho",
    estado: "Bueno",
    validado: true,
    goles: 18,
    asistencias: 3,
    minutos: 970,
    descripcion: "Definidor, buen posicionamiento en el área.",
  },
  {
    id: 5,
    nombre: "Nicolás Silva",
    posicion: "Lateral izquierdo",
    edad: 18,
    club: "Juventud Sur",
    pie: "Izquierdo",
    estado: "En recuperación leve",
    validado: false,
    goles: 1,
    asistencias: 6,
    minutos: 760,
    descripcion: "Recorrido largo, buen centro y velocidad.",
  },
  {
    id: 6,
    nombre: "Bruno Medina",
    posicion: "Arquero",
    edad: 23,
    club: "San Martín FC",
    pie: "Derecho",
    estado: "Excelente estado físico",
    validado: true,
    goles: 0,
    asistencias: 0,
    minutos: 1200,
    descripcion: "Reflejos rápidos, buen juego con los pies.",
  },
  {
    id: 7,
    nombre: "Santiago López",
    posicion: "Enganche",
    edad: 20,
    club: "Estrella del Sur",
    pie: "Derecho",
    estado: "A mejorar",
    validado: true,
    goles: 9,
    asistencias: 10,
    minutos: 930,
    descripcion: "Volante creativo, buen pase entre líneas y llegada al área.",
  },
  {
    id: 8,
    nombre: "Agustín Herrera",
    posicion: "Lateral derecho",
    edad: 19,
    club: "Defensores Unidos",
    pie: "Derecho",
    estado: "Excelente estado físico",
    validado: false,
    goles: 1,
    asistencias: 5,
    minutos: 880,
    descripcion: "Rápido para proyectarse, intenso en marca y recuperación.",
  },
  {
    id: 9,
    nombre: "Joaquín Morales",
    posicion: "Delantero centro",
    edad: 22,
    club: "Atlético Barrio Sur",
    pie: "Izquierdo",
    estado: "Óptimo, sin lesiones recientes",
    validado: true,
    goles: 15,
    asistencias: 4,
    minutos: 1010,
    descripcion: "Potente, buen juego de espaldas y definición dentro del área.",
  },
];

export default function Jugadores() {
  const navigate = useNavigate();
  const [busqueda, setBusqueda] = useState("");
  const [posicion, setPosicion] = useState("Todas");
  const [soloValidados, setSoloValidados] = useState(false);

  const posiciones = ["Todas", ...new Set(jugadoresMock.map((j) => j.posicion))];

  const jugadoresFiltrados = jugadoresMock.filter((jugador) => {
    const coincideBusqueda =
      jugador.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      jugador.club.toLowerCase().includes(busqueda.toLowerCase()) ||
      jugador.posicion.toLowerCase().includes(busqueda.toLowerCase());

    const coincidePosicion =
      posicion === "Todas" || jugador.posicion === posicion;

    return coincideBusqueda && coincidePosicion;
  });

  return (
    <main className="players-page">
      <section className="players-hero">
        <p className="players-kicker">Scouting digital</p>
        <h1>Jugadores</h1>
        <p>
          Explorá perfiles deportivos con estadísticas, estado físico y validaciones.
          Usá filtros para encontrar jugadores según las necesidades del club o entrenador.
        </p>
      </section>

      <section className="players-filters">
        <input
          type="text"
          placeholder="Buscar por nombre, club o posición..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />

        <select value={posicion} onChange={(e) => setPosicion(e.target.value)}>
          {posiciones.map((pos) => (
            <option key={pos} value={pos}>
              {pos}
            </option>
          ))}
        </select>

        <label className="validated-check">
          <input
            type="checkbox"
            checked={soloValidados}
            onChange={(e) => setSoloValidados(e.target.checked)}
          />
          Solo validados
        </label>
      </section>

      <section className="players-count">
        <span>{jugadoresFiltrados.length}</span> jugadores encontrados
      </section>

      <section className="players-grid">
        {jugadoresFiltrados.map((jugador) => (
          <article
            className={`player-card scout-card ${soloValidados && !jugador.validado ? "player-card-disabled" : ""
              }`}
            key={jugador.id}
          >
            <div className="player-card-top">
              <div className="player-icon">⚽</div>

              <div>
                <h2 className="player-name">{jugador.nombre}</h2>
                <p className="player-pos">{jugador.posicion}</p>
              </div>

              <span
                className={
                  jugador.validado
                    ? "player-badge validated"
                    : "player-badge pending"
                }
              >
                {jugador.validado ? "Validado" : "Pendiente"}
              </span>
            </div>

            <p className="player-description">{jugador.descripcion}</p>

            <div className="player-info-grid">
              <div>
                <span>Edad</span>
                <strong>{jugador.edad}</strong>
              </div>

              <div>
                <span>Club</span>
                <strong>{jugador.club}</strong>
              </div>

              <div>
                <span>Pie hábil</span>
                <strong>{jugador.pie}</strong>
              </div>

              <div>
                <span>Estado</span>
                <strong>{jugador.estado}</strong>
              </div>
            </div>

            <div className="player-stats-row">
              <div>
                <strong>{jugador.goles}</strong>
                <span>Goles</span>
              </div>

              <div>
                <strong>{jugador.asistencias}</strong>
                <span>Asist.</span>
              </div>

              <div>
                <strong>{jugador.minutos}</strong>
                <span>Min.</span>
              </div>
            </div>

            <div className="player-actions">
              <button onClick={() => window.location.href = `/jugadores/${jugador.id}`}>
                Ver perfil
              </button>
              <button
                className="secondary-action"
                disabled={soloValidados && !jugador.validado}
              >
                Contactar
              </button>
              <div className="players-actions">
                <button
                  className="compare-btn"
                  onClick={() => navigate("/compare")}
                >
                  ⚔️ Comparar jugadores
                </button>
              </div>
            </div>
          </article>
        ))}
      </section>
      {
        jugadoresFiltrados.length === 0 && (
          <p className="empty-players">
            No se encontraron jugadores con esos filtros.
          </p>
        )
      }
    </main >
  );
}