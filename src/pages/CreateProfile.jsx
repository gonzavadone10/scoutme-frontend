import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateProfile.css";

export default function CreateProfile() {
  const navigate = useNavigate();

  const perfilGuardado = JSON.parse(
    localStorage.getItem("miPerfil")
  );

  const [nombre, setNombre] = useState(
    perfilGuardado?.nombre || ""
  );

  const [edad, setEdad] = useState(
    perfilGuardado?.edad || ""
  );

  const [posicion, setPosicion] = useState(
    perfilGuardado?.posicion || ""
  );

  const [club, setClub] = useState(
    perfilGuardado?.club || ""
  );

  const [pie, setPie] = useState(
    perfilGuardado?.pie || ""
  );

  const [biografia, setBiografia] = useState(
    perfilGuardado?.biografia || ""
  );

  const guardarPerfil = () => {
    const perfil = {
      nombre,
      edad,
      posicion,
      club,
      pie,
      biografia,
    };

    localStorage.setItem(
      "miPerfil",
      JSON.stringify(perfil)
    );

    navigate("/mi-perfil");
  };

  return (
    <main className="create-profile-container">
      <section className="create-profile-card">
        <h1>
          {perfilGuardado
            ? "Editar perfil deportivo"
            : "Crear perfil deportivo"}
        </h1>

        <div className="create-profile-grid">
          <input
            type="text"
            placeholder="Nombre completo"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />

          <input
            type="number"
            placeholder="Edad"
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
          />

          <input
            type="text"
            placeholder="Posición"
            value={posicion}
            onChange={(e) => setPosicion(e.target.value)}
          />

          <input
            type="text"
            placeholder="Club actual"
            value={club}
            onChange={(e) => setClub(e.target.value)}
          />

          <input
            type="text"
            placeholder="Pie hábil"
            value={pie}
            onChange={(e) => setPie(e.target.value)}
          />
        </div>

        <textarea
          placeholder="Biografía deportiva"
          value={biografia}
          onChange={(e) => setBiografia(e.target.value)}
        />

        <button onClick={guardarPerfil}>
          {perfilGuardado ? "Guardar cambios" : "Guardar perfil"}
        </button>
      </section>
    </main>
  );
}