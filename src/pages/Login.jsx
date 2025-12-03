import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const togglePassword = () => {
    const input = document.getElementById("loginPassword");
    if (!input) return;
    input.type = input.type === "password" ? "text" : "password";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await fetch("http://localhost:4000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Error al iniciar sesión");

      setMessage(`Bienvenido, ${data.user.nombreCompleto}`);
      setTimeout(() => navigate("/"), 1500);
    } catch (err) {
      setMessage(err.message);
    }
  };

  return (
    <main className="main-container auth-main">
      <section className="auth-card card" style={{ marginTop: "2rem" }}>
        <h1 className="page-title" style={{ marginBottom: "2rem" }}>
          Iniciar Sesión
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="email">
              Correo electrónico
            </label>
            <input
              className="form-input"
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="loginPassword">
              Contraseña
            </label>
            <div className="form-input-wrapper">
              <input
                className="form-input"
                id="loginPassword"
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
              />
              <span className="eye-toggle" onClick={togglePassword}>
                👁
              </span>
            </div>
          </div>

          <p className="text-center" style={{ marginBottom: "1.5rem" }}>
            <a href="#">¿Olvidaste tu contraseña?</a>
          </p>

          <button className="btn-primary" type="submit">
            Iniciar Sesión
          </button>
        </form>

        {message && (
          <p className="text-center" style={{ marginTop: "1rem", color: "#0f766e" }}>
            {message}
          </p>
        )}

        <p className="text-center" style={{ marginTop: "2rem" }}>
          <span className="text-muted">¿No tenes una cuenta?</span>{" "}
          <a href="/registro">Registrate</a>
        </p>
      </section>
    </main>
  );
}
