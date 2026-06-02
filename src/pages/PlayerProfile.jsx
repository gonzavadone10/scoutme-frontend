import { useParams, useNavigate } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const jugadores = [
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
    partidos: 18,
    descripcion: "Rápido, desequilibrante, buen uno contra uno y buena aceleración en espacios cortos.",
    logros: ["Goleador torneo regional 2025", "Jugador destacado Sub-20", "Perfil validado por entrenador"],
    videos: ["Highlights ofensivos", "Jugadas 1 vs 1"],
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
    partidos: 20,
    descripcion: "Volante con buena visión de juego, distribución clara y orden táctico.",
    logros: ["Mayor cantidad de asistencias del torneo", "Capitán del equipo", "Perfil validado por entrenador"],
    videos: ["Pases filtrados", "Recuperaciones y distribución"],
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
    partidos: 21,
    descripcion: "Defensor fuerte en el mano a mano, sólido en el juego aéreo y buena salida desde el fondo.",
    logros: ["Mejor defensa del campeonato", "Titular en 21 partidos"],
    videos: ["Juego aéreo", "Cruces defensivos"],
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
    partidos: 19,
    descripcion: "Delantero de área, con buena definición y capacidad para posicionarse entre centrales.",
    logros: ["Goleador del club", "Jugador destacado del mes", "Perfil validado por scout"],
    videos: ["Definiciones", "Movimientos en el área"],
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
    partidos: 16,
    descripcion: "Lateral con recorrido largo, buen centro y velocidad para sumarse al ataque.",
    logros: ["Proyección destacada Sub-18", "6 asistencias en la temporada"],
    videos: ["Centros al área", "Proyecciones ofensivas"],
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
    partidos: 22,
    descripcion: "Arquero con reflejos rápidos, buen juego con los pies y liderazgo defensivo.",
    logros: ["Valla menos vencida", "Perfil validado por entrenador", "Capitán defensivo"],
    videos: ["Atajadas destacadas", "Salidas con los pies"],
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
    partidos: 18,
    descripcion: "Volante creativo, buen pase entre líneas y llegada al área.",
    logros: ["10 asistencias en la temporada", "Mejor jugador del partido en 4 fechas", "Perfil validado por entrenador"],
    videos: ["Pases clave", "Jugadas entre líneas"],
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
    partidos: 17,
    descripcion: "Rápido para proyectarse, intenso en marca y recuperación.",
    logros: ["Jugador con mayor recuperación del equipo", "Proyección destacada"],
    videos: ["Recuperaciones", "Subidas por banda"],
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
    partidos: 20,
    descripcion: "Potente, buen juego de espaldas y definición dentro del área.",
    logros: ["15 goles en la temporada", "Perfil validado por scout", "Jugador destacado del torneo"],
    videos: ["Goles destacados", "Juego de espaldas"],
  },
];


export default function PlayerProfile() {
  const { id } = useParams();
  const navigate = useNavigate();

  const jugador = jugadores.find((j) => j.id === Number(id)) || jugadores[0];
  const statsChartData = [
    {
      nombre: "Goles",
      valor: jugador.goles,
    },
    {
      nombre: "Asistencias",
      valor: jugador.asistencias,
    },
    {
      nombre: "Partidos",
      valor: jugador.partidos,
    },
  ];

  return (
    <main className="profile-page">
      <button className="back-btn" onClick={() => navigate("/jugadores")}>
        ← Volver a jugadores
      </button>

      <section className="profile-hero-card">
        <div className="profile-avatar">⚽</div>

        <div>
          <span className={jugador.validado ? "profile-badge ok" : "profile-badge pending"}>
            {jugador.validado ? "Perfil validado" : "Pendiente de validación"}
          </span>

          <h1>{jugador.nombre}</h1>
          <p>{jugador.posicion} · {jugador.edad} años · {jugador.club}</p>
        </div>
      </section>

      <section className="profile-grid">
        <article className="profile-card">
          <h2>Resumen deportivo</h2>
          <p>{jugador.descripcion}</p>

          <div className="profile-info-list">
            <div><span>Pie hábil</span><strong>{jugador.pie}</strong></div>
            <div><span>Estado físico</span><strong>{jugador.estado}</strong></div>
            <div><span>Club actual</span><strong>{jugador.club}</strong></div>
          </div>
        </article>

        <article className="profile-card">
          <h2>Estadísticas principales</h2>

          <div className="profile-stats">
            <div><strong>{jugador.partidos}</strong><span>Partidos</span></div>
            <div><strong>{jugador.goles}</strong><span>Goles</span></div>
            <div><strong>{jugador.asistencias}</strong><span>Asistencias</span></div>
            <div><strong>{jugador.minutos}</strong><span>Minutos</span></div>
          </div>
          <div className="profile-chart">
            <ResponsiveContainer width="100%" height={180}>
              <BarChart data={statsChartData}>
                <CartesianGrid
                  stroke="rgba(0,0,0,0.08)"
                  strokeDasharray="3 3"
                />
                <XAxis
                  dataKey="nombre"
                  tick={{ fill: "#374151", fontSize: 13 }}
                />

                <YAxis
                  tick={{ fill: "#374151", fontSize: 13 }}
                />
                <Tooltip
                  formatter={(value) => [`${value}`, "Cantidad"]}
                  contentStyle={{
                    background: "#0b4ea2",
                    border: "none",
                    borderRadius: "12px",
                    color: "#fff",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
                  }}
                />
                <Bar
                  dataKey="valor"
                  fill="#1694ff"
                  radius={[6, 6, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </article>
      </section>

      <section className="profile-grid">
        <article className="profile-card">
          <h2>Videos destacados</h2>

          <div className="video-list">
            {jugador.videos.map((video) => (
              <div className="video-item" key={video}>
                🎥 {video}
              </div>
            ))}
          </div>
        </article>

        <article className="profile-card">
          <h2>Logros y validaciones</h2>

          <div className="achievement-list">
            {jugador.logros.map((logro) => (
              <div className="achievement-item" key={logro}>
                ✔ {logro}
              </div>
            ))}
          </div>
        </article>
      </section>
    </main>
  );
}