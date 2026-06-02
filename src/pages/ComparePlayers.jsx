import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    Legend,
} from "recharts";

const jugadores = [
    {
        id: 1,
        nombre: "Matías Romero",
        posicion: "Extremo derecho",
        club: "Club Atlético Norte",
        validado: true,
        goles: 12,
        asistencias: 7,
        partidos: 18,
        minutos: 840,
    },
    {
        id: 2,
        nombre: "Franco Pérez",
        posicion: "Volante central",
        club: "Deportivo Sur",
        validado: true,
        goles: 4,
        asistencias: 11,
        partidos: 20,
        minutos: 1020,
    },
    {
        id: 3,
        nombre: "Lucas Torres",
        posicion: "Defensor central",
        club: "Atlético Oeste",
        validado: false,
        goles: 2,
        asistencias: 1,
        partidos: 21,
        minutos: 1150,
    },
    {
        id: 4,
        nombre: "Tomás Aguirre",
        posicion: "Delantero centro",
        club: "Barrio Norte FC",
        validado: true,
        goles: 18,
        asistencias: 3,
        partidos: 19,
        minutos: 970,
    },
    {
        id: 5,
        nombre: "Nicolás Silva",
        posicion: "Lateral izquierdo",
        club: "Juventud Sur",
        validado: false,
        goles: 1,
        asistencias: 6,
        partidos: 16,
        minutos: 760,
    },
    {
        id: 6,
        nombre: "Bruno Medina",
        posicion: "Arquero",
        club: "San Martín FC",
        validado: true,
        goles: 0,
        asistencias: 0,
        partidos: 22,
        minutos: 1200,
    },
    {
        id: 7,
        nombre: "Santiago López",
        posicion: "Enganche",
        club: "Estrella del Sur",
        validado: true,
        goles: 9,
        asistencias: 10,
        partidos: 18,
        minutos: 930,
    },
    {
        id: 8,
        nombre: "Agustín Herrera",
        posicion: "Lateral derecho",
        club: "Defensores Unidos",
        validado: false,
        goles: 1,
        asistencias: 5,
        partidos: 17,
        minutos: 880,
    },
    {
        id: 9,
        nombre: "Joaquín Morales",
        posicion: "Delantero centro",
        club: "Atlético Barrio Sur",
        validado: true,
        goles: 15,
        asistencias: 4,
        partidos: 20,
        minutos: 1010,
    },
];

export default function ComparePlayers() {
    const [player1Id, setPlayer1Id] = useState(1);
    const [player2Id, setPlayer2Id] = useState(9);
    const navigate = useNavigate();
    const player1 = jugadores.find((j) => j.id === Number(player1Id));
    const player2 = jugadores.find((j) => j.id === Number(player2Id));

    const comparisonData = [
        {
            estadistica: "Goles",
            [player1.nombre]: player1.goles,
            [player2.nombre]: player2.goles,
        },
        {
            estadistica: "Asistencias",
            [player1.nombre]: player1.asistencias,
            [player2.nombre]: player2.asistencias,
        },
        {
            estadistica: "Partidos",
            [player1.nombre]: player1.partidos,
            [player2.nombre]: player2.partidos,
        },
    ];

    return (
        <main className="compare-page">
            <button className="back-btn" onClick={() => navigate("/jugadores")}>
                ← Volver a jugadores
            </button>
            <h1 className="compare-title">
                Comparación de Jugadores
            </h1>

            <div className="compare-selects">

                <select
                    value={player1Id}
                    onChange={(e) => setPlayer1Id(e.target.value)}
                >
                    {jugadores.map((j) => (
                        <option key={j.id} value={j.id}>
                            {j.nombre}
                        </option>
                    ))}
                </select>

                <select
                    value={player2Id}
                    onChange={(e) => setPlayer2Id(e.target.value)}
                >
                    {jugadores.map((j) => (
                        <option key={j.id} value={j.id}>
                            {j.nombre}
                        </option>
                    ))}
                </select>

            </div>

            <div className="compare-profile-cards">
                <div className="compare-profile-card">
                    <span className={player1.validado ? "profile-badge ok" : "profile-badge pending"}>
                        {player1.validado ? "✓ Validado" : "⏳ Pendiente"}
                    </span>

                    <h2>{player1.nombre}</h2>
                    <p>{player1.posicion}</p>

                    <div className="compare-profile-info">
                        <span>{player1.club}</span>
                    </div>
                </div>

                <div className="compare-profile-card">
                    <span className={player2.validado ? "profile-badge ok" : "profile-badge pending"}>
                        {player2.validado ? "✓ Validado" : "⏳ Pendiente"}
                    </span>

                    <h2>{player2.nombre}</h2>
                    <p>{player2.posicion}</p>

                    <div className="compare-profile-info">
                        <span>{player2.club}</span>
                    </div>
                </div>
            </div>


            <div className="compare-table">

                <div className="compare-header">
                    <div>Estadística</div>
                    <div>{player1.nombre}</div>
                    <div>{player2.nombre}</div>
                </div>

                <div className="compare-row">
                    <div>Goles</div>

                    <div className={player1.goles > player2.goles ? "winner" : ""}>
                        {player1.goles}
                    </div>

                    <div className={player2.goles > player1.goles ? "winner" : ""}>
                        {player2.goles}
                    </div>
                </div>

                <div className="compare-row">
                    <div>Asistencias</div>

                    <div className={player1.asistencias > player2.asistencias ? "winner" : ""}>
                        {player1.asistencias}
                    </div>

                    <div className={player2.asistencias > player1.asistencias ? "winner" : ""}>
                        {player2.asistencias}
                    </div>
                </div>

                <div className="compare-row">
                    <div>Partidos</div>

                    <div className={player1.partidos > player2.partidos ? "winner" : ""}>
                        {player1.partidos}
                    </div>

                    <div className={player2.partidos > player1.partidos ? "winner" : ""}>
                        {player2.partidos}
                    </div>
                </div>

                <div className="compare-row">
                    <div>Minutos</div>

                    <div className={player1.minutos > player2.minutos ? "winner" : ""}>
                        {player1.minutos}
                    </div>

                    <div className={player2.minutos > player1.minutos ? "winner" : ""}>
                        {player2.minutos}
                    </div>
                </div>

            </div>
            <div className="compare-chart-card">
                <h2>Comparación visual</h2>

                <ResponsiveContainer width="100%" height={420}>
                    <BarChart data={comparisonData}>
                        <CartesianGrid strokeDasharray="3 3" />

                        <XAxis
                            dataKey="estadistica"
                            tick={{
                                fill: "#ffffff",
                                fontSize: 14,
                                fontWeight: 600,
                            }}
                        />

                        <YAxis
                            tick={{
                                fill: "#ffffff",
                                fontSize: 13,
                            }}
                        />

                        <Tooltip
                            cursor={{ fill: "transparent" }}
                            contentStyle={{
                                background: "#0b4ea2",
                                border: "none",
                                borderRadius: "12px",
                                color: "#fff",
                            }}
                        />

                        <Legend
                            wrapperStyle={{
                                color: "#ffffff",
                                fontSize: "14px",
                                fontWeight: "600",
                            }}
                        />

                        <Bar
                            dataKey={player1.nombre}
                            fill="#1694ff"
                            radius={[6, 6, 0, 0]}
                        />

                        <Bar
                            dataKey={player2.nombre}
                            fill="#7dd3fc"
                            radius={[6, 6, 0, 0]}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>

        </main>
    );
}