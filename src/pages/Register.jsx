import React, { useState } from "react";

export default function Register() {
  const [form, setForm] = useState({
    nombreCompleto: "",
    email: "",
    password: "",
    password2: ""
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const togglePassword = (id) => {
    const input = document.getElementById(id);
    if (!input) return;
    input.type = input.type === "password" ? "text" : "password";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (form.password !== form.password2) {
      setMessage("Las contraseñas no coinciden");
      return;
    }

    try {
      const res = await fetch("http://localhost:4000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombreCompleto: form.nombreCompleto,
          email: form.email,
          password: form.password
        })
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Error al registrarse");

      setMessage("Registro exitoso. Ahora puedes iniciar sesión.");
      setForm({ nombreCompleto: "", email: "", password: "", password2: "" });
    } catch (err) {
      setMessage(err.message);
    }
  };

  return (
    <main className="main-container auth-main">
      <section className="auth-card card" style={{ marginTop: "2rem" }}>
        <h1 className="page-title" style={{ marginBottom: "2rem" }}>
          Regístrate
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="nombreCompleto">
              Nombre completo
            </label>
            <input
              className="form-input"
              id="nombreCompleto"
              name="nombreCompleto"
              type="text"
              value={form.nombreCompleto}
              onChange={handleChange}
            />
          </div>

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
            <label className="form-label" htmlFor="password">
              Contraseña
            </label>
            <div className="form-input-wrapper">
              <input
                className="form-input"
                id="password"
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
              />
              <span
                className="eye-toggle"
                onClick={() => togglePassword("password")}
              >
                👁
              </span>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="password2">
              Confirmar contraseña
            </label>
            <div className="form-input-wrapper">
              <input
                className="form-input"
                id="password2"
                name="password2"
                type="password"
                value={form.password2}
                onChange={handleChange}
              />
              <span
                className="eye-toggle"
                onClick={() => togglePassword("password2")}
              >
                👁
              </span>
            </div>
          </div>

          <button className="btn-primary" type="submit">
            Registrarse
          </button>
        </form>

        {message && (
          <p className="text-center" style={{ marginTop: "1rem", color: "#b91c1c" }}>
            {message}
          </p>
        )}

        <p className="text-center" style={{ marginTop: "2rem" }}>
          <span className="text-muted">¿Ya tienes una cuenta?</span>{" "}
          <a href="/login">Iniciar sesión</a>
        </p>
      </section>
    </main>
  );
}