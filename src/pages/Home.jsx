import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="main-container">
      {/* HERO */}
      <section className="hero">
        <div className="hero-image" />
        <div>
          <h1 className="hero-title">Descubre tu potencial</h1>
          <p className="hero-subtitle">
            Una plataforma para jugadores de fútbol que buscan ser vistos por reclutadores.
          </p>
          <div className="hero-actions">
            <Link to="/registro">
              <button className="btn-primary" style={{ width: "auto" }}>
                Regístrate
              </button>
            </Link>
            <button className="btn-outline">Más información</button>
          </div>
        </div>
      </section>

      {/* OBJETIVO */}
      <section className="section">
        <h2 className="section-title">Objetivo</h2>
        <div className="objetivo-grid card">
          <div className="objetivo-image" />
          <div className="objetivo-text">
            <p>
              ScoutMe conecta jugadores amateurs con entrenadores y reclutadores,
              permitiendo mostrar su rendimiento deportivo de forma clara y estructurada.
            </p>
            <p>
              A través de perfiles, estadísticas y contenido audiovisual, se facilita el
              scouting y se generan nuevas oportunidades de crecimiento profesional.
            </p>
            <p>
              La plataforma brinda visibilidad, transparencia y herramientas de análisis
              tanto para jugadores como para clubes u organizaciones.
            </p>
          </div>
        </div>
      </section>

      {/* FUNCIONALIDADES */}
      <section className="section">
        <h2 className="section-title">Funcionalidades</h2>
        <div className="feature-list">
          <div className="feature-item">
            <span className="feature-label">Busca y filtra</span>
            <span className="feature-desc">
              Jugadores de talento por posición, edad y ubicación.
            </span>
          </div>
          <div className="feature-item">
            <span className="feature-label">Muestra tus habilidades y logros</span>
            <span className="feature-desc">
              Sube videos, estadísticas y certificaciones deportivas.
            </span>
          </div>
          <div className="feature-item">
            <span className="feature-label">Conéctate</span>
            <span className="feature-desc">
              Con reclutadores y clubes de fútbol a través de la plataforma.
            </span>
          </div>
        </div>
      </section>

      {/* JUGADORES RECIENTES */}
      <section className="section">
        <h2 className="section-title">Jugadores recientes</h2>
        <div className="card-grid-2">
          <div className="placeholder-card" />
          <div className="placeholder-card" />
        </div>
      </section>

      {/* CONTACTARSE / UNIRSE */}
      <section className="section">
        <div className="card-grid-2">
          <div>
            <h2 className="section-title">Cómo contactarse</h2>
            <div className="placeholder-card" />
          </div>
          <div>
            <h2 className="section-title">Unirse</h2>
            <div className="placeholder-card" />
          </div>
        </div>
      </section>
    </main>
  );
}