import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Registro.css"; // si tenés un CSS separado (opcional)

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nombreCompleto: "",
    email: "",
    password: ""
  });

  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación básica frontend
    if (!form.nombreCompleto || !form.email || !form.password) {
      setMsg("Por favor completá todos los campos.");
      return;
    }

    fetch("http://localhost:4000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setMsg(data.error);
        } else {
          setMsg("Registro exitoso. Redirigiendo al inicio de sesión...");
          setTimeout(() => navigate("/login"), 1500);
        }
      })
      .catch(() => {
        setMsg("Error al conectarse con el servidor.");
      });
  };

  return (
    <main className="auth-container">
      <h1 className="auth-title">Registrate</h1>

      <form className="auth-form" onSubmit={handleSubmit}>
        {/* Nombre */}
        <label>Nombre completo</label>
        <input
          type="text"
          name="nombreCompleto"
          placeholder="Tu nombre"
          value={form.nombreCompleto}
          onChange={handleChange}
        />

        {/* Email */}
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="tunombre@example.com"
          value={form.email}
          onChange={handleChange}
        />

        {/* Contraseña */}
        <label>Contraseña</label>
        <input
          type="password"
          name="password"
          placeholder="*******"
          value={form.password}
          onChange={handleChange}
        />

        {/* Botón */}
        <button type="submit" className="auth-btn">
          Registrate
        </button>
      </form>

      {/* Mensajes */}
      {msg && <p className="auth-msg">{msg}</p>}

      {/* Ir a Login */}
      <p className="auth-switch">
        ¿Ya tenés cuenta?{" "}
        <span onClick={() => navigate("/login")} className="link">
          Iniciar sesión
        </span>
      </p>
    </main>
  );
}