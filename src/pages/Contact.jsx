import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: ""
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await fetch("http://localhost:4000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Error al enviar");

      setMessage("Mensaje enviado correctamente.");
      setForm({ nombre: "", email: "", asunto: "", mensaje: "" });
    } catch (err) {
      setMessage(err.message);
    }
  };

  return (
    <main className="main-container">
      <section className="card">
        <h1 className="page-title" style={{ marginBottom: "2.5rem" }}>
          Contacto
        </h1>

        <div className="contact-layout">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label" htmlFor="nombre">
                Nombre
              </label>
              <input
                className="form-input"
                id="nombre"
                name="nombre"
                type="text"
                value={form.nombre}
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
              <label className="form-label" htmlFor="asunto">
                Asunto
              </label>
              <input
                className="form-input"
                id="asunto"
                name="asunto"
                type="text"
                value={form.asunto}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="mensaje">
                Mensaje
              </label>
              <textarea
                className="form-input"
                id="mensaje"
                name="mensaje"
                value={form.mensaje}
                onChange={handleChange}
              />
            </div>
            <button className="btn-primary" type="submit">
              Enviar
            </button>

            {message && (
              <p style={{ marginTop: "1rem", color: "#0f766e" }}>{message}</p>
            )}
          </form>

          <aside className="contact-info-block">
            <h2 className="section-title" style={{ marginBottom: "1rem" }}>
              Información de Contacto
            </h2>

            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <span>Dirección 123, Ciudad, País</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">✉️</span>
              <span>info@scoutme.org</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">☎️</span>
              <span>+34 000 000 000</span>
            </div>

            <div className="contact-map" />
          </aside>
        </div>
      </section>
    </main>
  );
}