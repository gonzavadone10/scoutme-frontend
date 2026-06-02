const DashboardScout = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div style={{ padding: "40px" }}>
      <h1>Panel del Scout</h1>
      <p>Bienvenido, {user?.name}</p>
      <p>Acá después vamos a agregar búsqueda avanzada y favoritos.</p>
    </div>
  );
};

export default DashboardScout;