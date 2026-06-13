import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../services/api";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const goByRole = (role) => {
    if (role === "Jugador") navigate("/dashboard-jugador");
    else if (role === "Entrenador") navigate("/dashboard-entrenador");
    else if (role === "Scout") navigate("/dashboard-scout");
    else if (role === "Admin") navigate("/dashboard-admin");
    else navigate("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const data = await loginUser(form);

      localStorage.setItem(
        "user",
        JSON.stringify({
          nombre: data.user.nombreCompleto,
          email: data.user.email,
          role: "Jugador",
        })
      );

      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <main className="auth-page">
      <section className="auth-main">
        <div className="auth-card auth-card--login">
          <h1 className="page-title login-title">Iniciar Sesión</h1>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Correo electrónico</label>
              <div className="form-input-wrapper">
                <input
                  type="email"
                  name="email"
                  className="form-input"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Ingresá tu correo"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Contraseña</label>
              <div className="form-input-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="form-input"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Ingresá tu contraseña"
                  required
                />
                <span
                  className="eye-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  title={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                >
                  {showPassword ? "🙈" : "👁️"}
                </span>
              </div>
            </div>

            <div className="login-extra">
              <button
                type="button"
                className="forgot-link"
                onClick={() => alert("Funcionalidad futura")}
              >
                ¿Olvidaste tu contraseña?
              </button>
            </div>

            {error && <p className="login-error">{error}</p>}

            <button type="submit" className="btn-primary login-btn">
              Iniciar Sesión
            </button>

            <p className="login-register-text">
              ¿No tenés una cuenta?{" "}
              <Link to="/register" className="login-register-link">
                Registrate
              </Link>
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}