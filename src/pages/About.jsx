import React from "react";
import pelota from "../assets/estadio.jpg"; // la de la cancha que ya tenés

const equipo = [
  {
    nombre: "Gonzalo Vadone",
    puesto: "Fundador · Product Owner",
    descripcion:
      "Define la visión de ScoutMe, coordina el desarrollo del producto y se asegura de que la plataforma responda a las necesidades de jugadores y reclutadores.",
    foto:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    nombre: "Lucía Fernández",
    puesto: "Ojeadora Principal",
    descripcion:
      "Responsable del área de scouting. Analiza jugadores, revisa estadísticas, videos y reportes para recomendar talentos a clubes y academias.",
    foto:
      "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    nombre: "Martín López",
    puesto: "Analista de Datos Deportivos",
    descripcion:
      "Procesa los datos de rendimiento, genera informes y métricas clave para que entrenadores y reclutadores puedan tomar mejores decisiones.",
    foto:
      "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

export default function About() {
  return (
    <main className="main-container">
      <h1 className="page-title">Quiénes Somos</h1>

      {/* Bloque superior con imagen grande + texto */}
      <section className="about-layout">
        <div
          className="about-image"
          style={{
            backgroundImage: `url(${pelota})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        <div className="about-text">
          <p>
            ScoutMe nace con el objetivo de darle visibilidad a jugadores
            amateurs que, a pesar de su talento, no tienen un canal formal para
            mostrar su rendimiento a clubes, academias u ojeadores.
          </p>
          <p>
            Combinamos tecnología, datos y scouting tradicional para construir
            perfiles completos: estadísticas, videos, historial deportivo y
            referencias de entrenadores.
          </p>
          <p>
            Nuestro equipo está formado por personas del mundo del fútbol y de
            la tecnología, trabajando juntos para profesionalizar la búsqueda de
            talento y hacer el proceso más justo y transparente.
          </p>
        </div>
      </section>

      {/* Equipo */}
      <section className="team-section">
        <h2 className="section-title">Nuestro Equipo</h2>
        <p style={{ textAlign: "center", maxWidth: "720px", margin: "0 auto 2rem" }}>
          Detrás de ScoutMe hay un equipo que combina experiencia en scouting,
          análisis de datos y desarrollo de software. Ellos son los responsables
          de que la plataforma evolucione y se mantenga orientada a los
          jugadores.
        </p>

        <div className="team-grid">
          {equipo.map((persona) => (
            <article className="team-card" key={persona.nombre}>
              <div
                className="team-photo"
                style={{
                  backgroundImage: `url(${persona.foto})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <h3 className="team-name">{persona.nombre}</h3>
              <p className="team-role">{persona.puesto}</p>
              <p className="team-bio">{persona.descripcion}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}