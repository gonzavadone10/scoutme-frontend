import { useEffect, useState } from "react";
import {
  getPlayerProfile,
  createPlayerProfile,
  updatePlayerProfile,
  getPlayerStats,
  createPlayerStat,
} from "../services/api";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const DashboardJugador = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const [profile, setProfile] = useState({
    edad: "",
    nacionalidad: "",
    posicion: "",
    club: "",
    altura: "",
    peso: "",
    pie_habil: "",
    biografia: "",
  });

  const [stats, setStats] = useState([]);
  const [hasProfile, setHasProfile] = useState(false);
  const [message, setMessage] = useState("");

  const [statForm, setStatForm] = useState({
    goles: "",
    asistencias: "",
    minutos: "",
    tarjetas: "",
    rival: "",
    fecha: "",
  });

  const loadProfile = async () => {
    try {
      const data = await getPlayerProfile(user.id);

      if (data) {
        setProfile({
          edad: data.edad || "",
          nacionalidad: data.nacionalidad || "",
          posicion: data.posicion || "",
          club: data.club || "",
          altura: data.altura || "",
          peso: data.peso || "",
          pie_habil: data.pie_habil || "",
          biografia: data.biografia || "",
        });
        setHasProfile(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const loadStats = async () => {
    try {
      const data = await getPlayerStats(user.id);
      setStats(data || []);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadProfile();
    loadStats();
  }, []);

  const handleProfileChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleStatChange = (e) => {
    setStatForm({
      ...statForm,
      [e.target.name]: e.target.value,
    });
  };

  const saveProfile = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const payload = {
        user_id: user.id,
        ...profile,
      };

      if (hasProfile) {
        await updatePlayerProfile(user.id, payload);
        setMessage("Perfil actualizado correctamente");
      } else {
        await createPlayerProfile(payload);
        setHasProfile(true);
        setMessage("Perfil creado correctamente");
      }
    } catch (error) {
      setMessage("Error al guardar el perfil");
    }
  };

  const saveStat = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      await createPlayerStat({
        jugadorId: user.id,
        goles: Number(statForm.goles || 0),
        asistencias: Number(statForm.asistencias || 0),
        minutos: Number(statForm.minutos || 0),
        tarjetas: statForm.tarjetas,
        rival: statForm.rival,
        fecha: statForm.fecha,
      });

      setStatForm({
        goles: "",
        asistencias: "",
        minutos: "",
        tarjetas: "",
        rival: "",
        fecha: "",
      });

      await loadStats();
      setMessage("Estadística cargada correctamente");
    } catch (error) {
      setMessage("Error al cargar estadística");
    }
  };

  const totalPartidos = stats.length;
  const totalGoles = stats.reduce((acc, item) => acc + Number(item.goles || 0), 0);
  const totalAsistencias = stats.reduce(
    (acc, item) => acc + Number(item.asistencias || 0),
    0
  );
  const totalMinutos = stats.reduce(
    (acc, item) => acc + Number(item.minutos || 0),
    0
  );

  const chartData = stats.map((item) => ({
    partido: item.rival || "Partido",
    goles: Number(item.goles || 0),
    asistencias: Number(item.asistencias || 0),
  }));

  return (
    <main className="dashboard-page">
      <section className="dashboard-header">
        <div>
          <p className="dashboard-kicker">Panel del jugador</p>
          <h1>Hola, {user?.name}</h1>
          <p>
            Gestioná tu perfil deportivo, cargá estadísticas y mostrale tu
            rendimiento a entrenadores y ojeadores.
          </p>
        </div>

        <div className="dashboard-profile-badge">
          <span>{profile.posicion || "Jugador"}</span>
          <strong>{profile.club || "Sin club cargado"}</strong>
        </div>
      </section>

      {message && <p className="dashboard-message">{message}</p>}

      <section className="stats-summary-grid">
        <article className="summary-card">
          <span>Partidos cargados</span>
          <strong>{totalPartidos}</strong>
        </article>

        <article className="summary-card">
          <span>Goles</span>
          <strong>{totalGoles}</strong>
        </article>

        <article className="summary-card">
          <span>Asistencias</span>
          <strong>{totalAsistencias}</strong>
        </article>

        <article className="summary-card">
          <span>Minutos jugados</span>
          <strong>{totalMinutos}</strong>
        </article>
      </section>

      <section className="dashboard-grid">
        <article className="dashboard-card">
          <h2>Perfil deportivo</h2>

          <form onSubmit={saveProfile} className="dashboard-form">
            <input name="edad" placeholder="Edad" value={profile.edad} onChange={handleProfileChange} />
            <input name="nacionalidad" placeholder="Nacionalidad" value={profile.nacionalidad} onChange={handleProfileChange} />
            <input name="posicion" placeholder="Posición" value={profile.posicion} onChange={handleProfileChange} />
            <input name="club" placeholder="Club" value={profile.club} onChange={handleProfileChange} />
            <input name="altura" placeholder="Altura" value={profile.altura} onChange={handleProfileChange} />
            <input name="peso" placeholder="Peso" value={profile.peso} onChange={handleProfileChange} />
            <input name="pie_habil" placeholder="Pie hábil" value={profile.pie_habil} onChange={handleProfileChange} />
            <textarea name="biografia" placeholder="Biografía deportiva" value={profile.biografia} onChange={handleProfileChange} />

            <button type="submit">
              {hasProfile ? "Actualizar perfil" : "Guardar perfil"}
            </button>
          </form>
        </article>

        <article className="dashboard-card">
          <h2>Cargar estadística</h2>

          <form onSubmit={saveStat} className="dashboard-form">
            <input name="goles" placeholder="Goles" value={statForm.goles} onChange={handleStatChange} />
            <input name="asistencias" placeholder="Asistencias" value={statForm.asistencias} onChange={handleStatChange} />
            <input name="minutos" placeholder="Minutos" value={statForm.minutos} onChange={handleStatChange} />
            <input name="tarjetas" placeholder="Tarjetas" value={statForm.tarjetas} onChange={handleStatChange} />
            <input name="rival" placeholder="Rival" value={statForm.rival} onChange={handleStatChange} />
            <input type="date" name="fecha" value={statForm.fecha} onChange={handleStatChange} />

            <button type="submit">Guardar estadística</button>
          </form>
        </article>
      </section>

      <section className="dashboard-grid dashboard-grid-wide">
        <article className="dashboard-card">
          <h2>Rendimiento por partido</h2>

          {chartData.length === 0 ? (
            <p className="empty-text">Todavía no hay estadísticas cargadas.</p>
          ) : (
            <div className="chart-box">
              <ResponsiveContainer width="100%" height={260}>
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="partido" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="goles" />
                  <Bar dataKey="asistencias" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}
        </article>

        <article className="dashboard-card">
          <h2>Logros y validaciones</h2>

          <div className="validation-list">
            <div className="validation-item validated">
              <span>✔</span>
              <div>
                <strong>Perfil deportivo creado</strong>
                <p>Información principal cargada en la plataforma.</p>
              </div>
            </div>

            <div className="validation-item pending">
              <span>!</span>
              <div>
                <strong>Validación de logros pendiente</strong>
                <p>Un entrenador u ojeador podrá validar tus logros deportivos.</p>
              </div>
            </div>

            <div className="validation-item pending">
              <span>!</span>
              <div>
                <strong>Videos destacados pendientes</strong>
                <p>Sumá contenido audiovisual para reforzar tu perfil.</p>
              </div>
            </div>
          </div>
        </article>
      </section>

      <section className="dashboard-card">
        <h2>Historial de estadísticas</h2>

        {stats.length === 0 ? (
          <p className="empty-text">No hay estadísticas cargadas todavía.</p>
        ) : (
          <div className="table-wrapper">
            <table className="stats-table">
              <thead>
                <tr>
                  <th>Fecha</th>
                  <th>Rival</th>
                  <th>Goles</th>
                  <th>Asistencias</th>
                  <th>Minutos</th>
                  <th>Tarjetas</th>
                </tr>
              </thead>
              <tbody>
                {stats.map((item) => (
                  <tr key={item.id}>
                    <td>{item.fecha}</td>
                    <td>{item.rival}</td>
                    <td>{item.goles}</td>
                    <td>{item.asistencias}</td>
                    <td>{item.minutos}</td>
                    <td>{item.tarjetas}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </main>
  );
};

export default DashboardJugador;