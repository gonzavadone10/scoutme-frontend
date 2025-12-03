import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";

import Home from "./pages/Home.jsx";
import Players from "./pages/Players.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";

export default function App() {
  return (
    <>
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
      </Routes>
    </>
  );
}