const DashboardEntrenador = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div style={{ padding: "40px" }}>
      <h1>Panel del Entrenador</h1>
      <p>Bienvenido, {user?.name}</p>
      <p>Acá después vamos a agregar búsqueda y validación de jugadores.</p>
    </div>
  );
};

export default DashboardEntrenador;