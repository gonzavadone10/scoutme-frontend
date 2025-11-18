import React from "react";

export default function About() {
  return (
    <main className="main-container">
      <section className="card">
        <div className="about-layout">
          <div className="about-image" />
          <div className="about-text">
            <h1
              className="page-title"
              style={{ textAlign: "left", marginBottom: "1.5rem" }}
            >
              Quiénes Somos
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua, lorem
              ipsum dolor sit amet.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        <section className="team-section">
          <h2 className="section-title" style={{ textAlign: "center" }}>
            Nuestro Equipo
          </h2>
          <p
            className="text-center text-muted"
            style={{ maxWidth: "650px", margin: "0 auto 2rem" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, morbi in
            tempor nibh, metus et eleifend, resue disse parturient montes.
          </p>

          <div className="team-grid">
            {[1, 2, 3].map((i) => (
              <article key={i} className="team-card">
                <div className="team-photo" />
                <div className="team-name">Nombre</div>
                <div className="team-role">Puesto</div>
                <p className="team-bio">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </p>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}