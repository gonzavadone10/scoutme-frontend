import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";

import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import Players from "./pages/Players.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/nosotros" element={<About />} />
        <Route path="/jugadores" element={<Players />} />
      </Routes>
    </>
  );
}

export default App;