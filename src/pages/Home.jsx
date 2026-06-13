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
            <span className="feature-label">Buscá y filtrá:</span>
            <span className="feature-desc">
              Jugadores de talento por posición, edad y ubicación.
            </span>
          </div>

          <div className="feature-item">
            <span className="feature-label">Mostrá tus habilidades y logros:</span>
            <span className="feature-desc">
              Subí videos, estadísticas y certificaciones deportivas.
            </span>
          </div>

          <div className="feature-item">
            <span className="feature-label">Conectate:</span>
            <span className="feature-desc">
              Con reclutadores y clubes de fútbol a través de la plataforma.
            </span>
          </div>

          <div className="feature-item">
            <span className="feature-label">Compará jugadores:</span>
            <span className="feature-desc">
              Analizá estadísticas y rendimiento entre dos perfiles deportivos para facilitar la toma de decisiones.
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

const styles = {
  container: {
    paddingTop: "140px",
    paddingLeft: "60px",
    paddingRight: "60px",
  },

  hero: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    alignItems: "center",
    gap: "40px",
    marginBottom: "80px",
  },

  title: {
    fontSize: "48px",
    color: "#ffffff",
    margin: 0,
  },

  subtitle: {
    fontSize: "18px",
    marginTop: "20px",
    color: "rgba(255,255,255,0.85)",
    lineHeight: "1.6",
  },

  buttons: {
    marginTop: "30px",
    display: "flex",
    gap: "16px",
  },

  primaryBtn: {
    background: "linear-gradient(135deg, #0b4ea2 0%, #1694ff 100%)",
    color: "#fff",
    border: "none",
    padding: "12px 20px",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "bold",
    boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
  },

  secondaryBtn: {
    background: "#ffffff",
    color: "#0b4ea2",
    border: "none",
    padding: "12px 20px",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "bold",
  },

  section: {
    marginTop: "60px",
  },

  sectionTitle: {
    fontSize: "32px",
    color: "#ffffff",
    marginBottom: "30px",
  },

  sectionContent: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "40px",
    alignItems: "center",
  },

  text: {
    color: "rgba(255,255,255,0.85)",
    lineHeight: "1.8",
    marginBottom: "20px",
  },

  image: {
    width: "100%",
    borderRadius: "16px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
  },
};
