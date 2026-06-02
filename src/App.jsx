import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";

import Home from "./pages/Home.jsx";
import Players from "./pages/Players.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import PlayerProfile from "./pages/PlayerProfile";
import ComparePlayers from "./pages/ComparePlayers";

export default function App() {
  return (
    <div
        style={{
          minHeight: "100vh",
          background:
            "linear-gradient(135deg, #071a2d 0%, #0b4ea2 45%, #1694ff 100%)",
        }}
      >
      {/* Navbar visible en todas menos login/registro (lo manejamos en Navbar) */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jugadores" element={<Players />} />
        <Route path="/quienes-somos" element={<About />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* si escriben cualquier cosa, los mando a inicio */}
        <Route path="*" element={<Home />} />
        <Route path="/jugadores/:id" element={<PlayerProfile />} />
        <Route path="/compare" element={<ComparePlayers />} />
      </Routes>
    </div>
  );
}