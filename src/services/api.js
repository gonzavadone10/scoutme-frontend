const API_URL = "http://localhost:5000/api";

export const registerUser = async (userData) => {
  const res = await fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.error || error.message || "Error al registrarse");
  }

  return res.json();
};

export const loginUser = async (credentials) => {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.error || error.message || "Error al iniciar sesión");
  }

  return res.json();
};

// PERFIL
export const getPlayerProfile = async (userId) => {
  const res = await fetch(`${API_URL}/players/${userId}`);
  if (!res.ok) throw new Error("Error al obtener perfil");
  return res.json();
};

export const createPlayerProfile = async (data) => {
  const res = await fetch(`${API_URL}/players`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Error al crear perfil");
  return res.json();
};

export const updatePlayerProfile = async (userId, data) => {
  const res = await fetch(`${API_URL}/players/${userId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Error al actualizar perfil");
  return res.json();
};

// STATS
export const getPlayerStats = async (userId) => {
  const res = await fetch(`${API_URL}/stats/${userId}`);
  if (!res.ok) throw new Error("Error al obtener estadísticas");
  return res.json();
};

export const createPlayerStat = async (data) => {
  const res = await fetch(`${API_URL}/stats`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Error al crear estadística");
  return res.json();
};