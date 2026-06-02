const DashboardAdmin = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div style={{ padding: "40px" }}>
      <h1>Panel de Administración</h1>
      <p>Bienvenido, {user?.name}</p>
      <p>Acá después vamos a agregar:</p>
      <ul>
        <li>Gestión de usuarios</li>
        <li>Logs</li>
        <li>Moderación</li>
      </ul>
    </div>
  );
};

export default DashboardAdmin;