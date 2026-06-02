import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../services/api";

const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "Jugador",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      await registerUser(form);
      setSuccess("Usuario registrado correctamente");
      setTimeout(() => navigate("/login"), 1200);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.overlay}>
        <div style={styles.card}>
          <div style={styles.left}>
            <p style={styles.badge}>SCOUTME</p>
            <h1 style={styles.title}>Creá tu cuenta</h1>
            <p style={styles.subtitle}>
              Armá tu perfil deportivo, cargá estadísticas y empezá a mostrar tu
              talento dentro del fútbol amateur.
            </p>

            <div style={styles.infoBox}>
              <p style={styles.infoTitle}>¿Qué podés hacer?</p>
              <ul style={styles.list}>
                <li>Crear tu perfil deportivo</li>
                <li>Cargar estadísticas de partidos</li>
                <li>Subir videos y logros</li>
                <li>Conectar con scouts y entrenadores</li>
              </ul>
            </div>
          </div>

          <div style={styles.right}>
            <form onSubmit={handleSubmit} style={styles.form}>
              <h2 style={styles.formTitle}>Registrate</h2>

              <input
                type="text"
                name="name"
                placeholder="Nombre completo"
                value={form.name}
                onChange={handleChange}
                style={styles.input}
              />

              <input
                type="email"
                name="email"
                placeholder="Correo electrónico"
                value={form.email}
                onChange={handleChange}
                style={styles.input}
              />

              <input
                type="password"
                name="password"
                placeholder="Contraseña"
                value={form.password}
                onChange={handleChange}
                style={styles.input}
              />

              <select
                name="role"
                value={form.role}
                onChange={handleChange}
                style={styles.input}
              >
                <option value="Jugador">Jugador</option>
                <option value="Entrenador">Entrenador</option>
                <option value="Scout">Scout</option>
              </select>

              <button type="submit" style={styles.button}>
                Crear cuenta
              </button>

              {error && <p style={styles.error}>{error}</p>}
              {success && <p style={styles.success}>{success}</p>}

              <p style={styles.loginText}>
                ¿Ya tenés una cuenta?{" "}
                <Link to="/login" style={styles.link}>
                  Iniciá sesión
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    background:
      "linear-gradient(135deg, #071a2d 0%, #0b4ea2 45%, #1694ff 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px 20px",
  },
  overlay: {
    width: "100%",
    maxWidth: "1150px",
  },
  card: {
    display: "grid",
    gridTemplateColumns: "1.1fr 0.9fr",
    background: "#ffffff",
    borderRadius: "24px",
    overflow: "hidden",
    boxShadow: "0 20px 50px rgba(0,0,0,0.18)",
  },
  left: {
    padding: "60px 50px",
    background:
      "linear-gradient(160deg, rgba(11,78,162,1) 0%, rgba(7,26,45,1) 100%)",
    color: "#fff",
  },
  right: {
    padding: "50px 40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#f8fbff",
  },
  badge: {
    display: "inline-block",
    margin: 0,
    marginBottom: "18px",
    padding: "8px 14px",
    borderRadius: "999px",
    background: "rgba(255,255,255,0.14)",
    fontSize: "13px",
    fontWeight: "700",
    letterSpacing: "1px",
  },
  title: {
    margin: 0,
    fontSize: "42px",
    lineHeight: 1.1,
  },
  subtitle: {
    marginTop: "18px",
    fontSize: "17px",
    lineHeight: 1.7,
    opacity: 0.95,
    maxWidth: "500px",
  },
  infoBox: {
    marginTop: "34px",
    padding: "24px",
    borderRadius: "18px",
    background: "rgba(255,255,255,0.10)",
    border: "1px solid rgba(255,255,255,0.15)",
  },
  infoTitle: {
    margin: 0,
    marginBottom: "14px",
    fontWeight: "700",
    fontSize: "18px",
  },
  list: {
    margin: 0,
    paddingLeft: "18px",
    lineHeight: 1.9,
    fontSize: "15px",
  },
  form: {
    width: "100%",
    maxWidth: "380px",
    display: "flex",
    flexDirection: "column",
    gap: "14px",
  },
  formTitle: {
    margin: 0,
    marginBottom: "8px",
    fontSize: "30px",
    color: "#071a2d",
  },
  input: {
    padding: "14px 16px",
    fontSize: "15px",
    borderRadius: "12px",
    border: "1px solid #d7e2ee",
    outline: "none",
    background: "#fff",
  },
  button: {
    marginTop: "8px",
    background: "linear-gradient(135deg, #0b4ea2 0%, #1694ff 100%)",
    color: "#fff",
    border: "none",
    padding: "14px",
    borderRadius: "12px",
    fontSize: "15px",
    fontWeight: "700",
    cursor: "pointer",
    boxShadow: "0 10px 24px rgba(22,148,255,0.25)",
  },
  error: {
    margin: 0,
    color: "#c62828",
    fontSize: "14px",
    fontWeight: "600",
  },
  success: {
    margin: 0,
    color: "#2e7d32",
    fontSize: "14px",
    fontWeight: "600",
  },
  loginText: {
    marginTop: "6px",
    fontSize: "14px",
    color: "#44556a",
  },
  link: {
    color: "#0b4ea2",
    fontWeight: "700",
    textDecoration: "none",
  },
};

export default Register;