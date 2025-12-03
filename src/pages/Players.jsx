import React, { useState } from "react";

const jugadoresPorPagina = {
  1: [
    {
      nombre: "Matías Romero",
      posicion: "Extremo derecho",
      caracteristicas: "Rápido, desequilibrante, buen uno contra uno",
      estado: "Excelente estado físico",
    },
    {
      nombre: "Franco Pérez",
      posicion: "Volante central",
      caracteristicas: "Buena visión de juego, distribuidor, orden táctico",
      estado: "Muy buen estado físico",
    },
    {
      nombre: "Lucas Torres",
      posicion: "Defensor central",
      caracteristicas: "Fuerte en el mano a mano, juego aéreo sólido",
      estado: "Óptimo, sin lesiones recientes",
    },
  ],
  2: [
    {
      nombre: "Bruno Martínez",
      posicion: "Lateral izquierdo",
      caracteristicas: "Intenso, buena proyección en ataque",
      estado: "Excelente, resistencia alta",
    },
    {
      nombre: "Agustín López",
      posicion: "Enganche",
      caracteristicas: "Creativo, buen pase filtrado y media distancia",
      estado: "Muy buen estado, en ritmo de competencia",
    },
    {
      nombre: "Santiago Ríos",
      posicion: "Delantero centro",
      caracteristicas: "Definidor, buena ubicación en el área",
      estado: "Óptimo, rinde los 90 minutos",
    },
  ],
  3: [
    {
      nombre: "Tomás Gutiérrez",
      posicion: "Arquero",
      caracteristicas: "Reflejos rápidos, seguro en centros",
      estado: "Excelente, sin antecedentes de lesiones graves",
    },
    {
      nombre: "Nicolás Funes",
      posicion: "Volante mixto",
      caracteristicas: "Buen ida y vuelta, llegada al área",
      estado: "Muy buen estado físico",
    },
    {
      nombre: "Ezequiel Acosta",
      posicion: "Segundo delantero",
      caracteristicas: "Movilidad, asociaciones cortas, presión alta",
      estado: "Óptimo, preparado para alta intensidad",
    },
  ],
};

export default function Players() {
  const [pagina, setPagina] = useState(1);
  const lista = jugadoresPorPagina[pagina];

  return (
    <main className="main-container players-page">
      <h1 className="page-title">Jugadores</h1>
      <p className="players-intro">
        Explorá jugadores destacados con información sobre posición, estilo de
        juego y estado físico actual. Usá los números para recorrer más
        perfiles.
      </p>

      <div className="players-grid">
        {lista.map((jugador, index) => (
          <article className="player-card no-photo" key={index}>
            <div className="player-header">
              <div className="player-icon">⚽</div>
              <div>
                <h3 className="player-name">{jugador.nombre}</h3>
                <p className="player-pos">{jugador.posicion}</p>
              </div>
            </div>

            <div className="player-info">
              <p>
                <span className="player-label">Características:</span>{" "}
                {jugador.caracteristicas}
              </p>
              <p>
                <span className="player-label">Estado físico:</span>{" "}
                {jugador.estado}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="players-pagination">
        {[1, 2, 3].map((num) => (
          <button
            key={num}
            className={`page-btn ${pagina === num ? "active" : ""}`}
            onClick={() => setPagina(num)}
          >
            {num}
          </button>
        ))}
      </div>
    </main>
  );
}