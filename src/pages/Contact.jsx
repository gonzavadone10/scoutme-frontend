import React from "react";

export default function Contact() {
  return (
    <main className="main-container">
      <h1 className="page-title">Contacto</h1>

      <section className="contact-layout">
        {/* Formulario */}
        <div className="card">
          <form>
            <div className="form-group">
              <label className="form-label">Nombre</label>
              <input className="form-input" type="text" />
            </div>

            <div className="form-group">
              <label className="form-label">Correo electrónico</label>
              <input className="form-input" type="email" />
            </div>

            <div className="form-group">
              <label className="form-label">Asunto</label>
              <input className="form-input" type="text" />
            </div>

            <div className="form-group">
              <label className="form-label">Mensaje</label>
              <textarea className="form-input" />
            </div>

            <button type="submit" className="btn-primary">
              Enviar
            </button>
          </form>
        </div>

        {/* Información de contacto + mapa */}
        <div className="card contact-info-block">
          <h2 className="section-title">Información de Contacto</h2>

          <div className="contact-item">
            <span className="contact-icon">📍</span>
            <span>Dirección: Av. Santa Fe 1452, CABA</span>
          </div>

          <div className="contact-item">
            <span className="contact-icon">✉️</span>
            <span>Email: contacto@scoutme.com</span>
          </div>

          <div className="contact-item">
            <span className="contact-icon">📞</span>
            <span>Teléfono: +54 11 4523-8871</span>
          </div>

          <div className="contact-item">
            <span className="contact-icon">⏰</span>
            <span>Horarios: Lunes a viernes de 9 a 18 hs</span>
          </div>

          <div className="contact-map">
            <iframe
              title="Mapa ScoutMe"
              src="https://www.google.com/maps?q=Av.+Santa+Fe+1452,+CABA&output=embed"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}
