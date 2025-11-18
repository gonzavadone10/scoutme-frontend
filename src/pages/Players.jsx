import React from "react";

export default function Players() {
  const players = [
    {
      name: "Juan Pérez",
      info: "Delantero · 19 años",
      club: "Amateur FC"
    },
    {
      name: "Lucas Gómez",
      info: "Mediocampista · 21 años",
      club: "Barrio Unido"
    },
    {
      name: "Martín Díaz",
      info: "Defensor · 20 años",
      club: "Juventud FC"
    }
  ];

  return (
    <main className="main-container">
      <h1 className="page-title" style={{ marginBottom: "2rem" }}>
        Jugadores
      </h1>

      <section className="players-grid">
        {players.map((p) => (
          <article key={p.name} className="player-card">
            <div className="player-photo" />
            <div className="player-name">{p.name}</div>
            <div className="player-pos">{p.info}</div>
            <div className="player-meta">Club actual: {p.club}</div>
          </article>
        ))}
      </section>
    </main>
  );
}