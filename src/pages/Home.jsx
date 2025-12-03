import React from "react";
import { useNavigate } from "react-router-dom";
import pelota from "../assets/pelota.jpeg";
import charla from "../assets/charla.jpeg";
import partido from "../assets/partido.jpeg";

export default function Home() {
  const navigate = useNavigate();

  return (
    <main className="main-container">
      {/* HERO PRINCIPAL */}
      <section className="hero">
        <div
          className="hero-image"
          style={{
            backgroundImage: `url(${pelota})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        <div>
          <h1 className="hero-title">Descubrí tu potencial</h1>
          <p className="hero-subtitle">
            Una plataforma para jugadores de fútbol que buscan ser vistos por reclutadores.
          </p>

          <div className="hero-actions">
            {/* Botón de arriba: ir a registro */}
            <button
              className="btn-primary"
              onClick={() => navigate("/register")}
            >
              Registrate
            </button>

            {/* Botón de arriba: ir a Quiénes Somos / About */}
            <button
  className="btn-outline"
  onClick={() => navigate("/quienes-somos")}
>
  Más información
</button>
          </div>
        </div>
      </section>

      {/* OBJETIVO */}
      <section className="section">
        <h2 className="section-title">Objetivo</h2>

        <div className="objetivo-grid">
          <div
            className="objetivo-image"
            style={{
              backgroundImage: `url(${charla})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>

          <div className="objetivo-text">
            <p>
              ScoutMe conecta jugadores amateurs con entrenadores y reclutadores,
              permitiendo mostrar su rendimiento deportivo de forma clara y estructurada.
            </p>
            <p>
              A través de perfiles, estadísticas y contenido audiovisual, se facilita el scouting
              y se generan nuevas oportunidades de crecimiento profesional.
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
            <span className="feature-label">Buscá y filtra</span>
            <span className="feature-desc">
              Jugadores de talento por posición, edad y ubicación.
            </span>
          </div>

          <div className="feature-item">
            <span className="feature-label">Mostrá tus habilidades y logros</span>
            <span className="feature-desc">
              Subí videos, estadísticas y certificaciones deportivas.
            </span>
          </div>

          <div className="feature-item">
            <span className="feature-label">Conectate</span>
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
          <div className="card">
            <p>
              Último jugador registrado: extremo derecho categoría Sub-20, en proceso
              de evaluación por clubes de Primera Nacional.
            </p>
          </div>

          <div
            className="placeholder-card recent-photo-card"
            style={{
              backgroundImage: `url(${partido})`,
              backgroundSize: "cover",
              backgroundPosition: "center top",
            }}
          ></div>
        </div>
      </section>

      {/* CÓMO CONTACTARSE */}
      <section className="section">
        <h2 className="section-title">Cómo contactarse</h2>

        <div className="card-grid-2">
          <div className="placeholder-card contact-card">
            <p>📍 Dirección: Av. Santa Fe 1452, CABA</p>
            <p>📞 Teléfono: +54 11 4523-8871</p>
            <p>✉️ Email: contacto@scoutme.com</p>
            <p>⏰ Horarios: Lunes a viernes de 9 a 18 hs</p>
          </div>
        </div>
      </section>

      {/* UNIRSE */}
      <section className="section">
        <h2 className="section-title">Unirse</h2>

        <div className="card-grid-2">
          <div className="placeholder-card join-card">
            <p>✔ Creá tu perfil en minutos</p>
            <p>✔ Subí estadísticas y contenido deportivo</p>
            <p>✔ Conectate con clubes y reclutadores</p>

            {/* Botón de abajo: también lleva a registro */}
            <button
              className="btn-primary"
              style={{ marginTop: "1rem" }}
              onClick={() => navigate("/register")}
            >
              Registrate ahora
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}