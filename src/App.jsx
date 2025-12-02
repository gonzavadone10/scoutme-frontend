import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import Players from "./pages/Players.jsx";

function App() {
  const location = useLocation();
  const hideNavbar =
    location.pathname === "/login" || location.pathname === "/registro";

  return (
    <>
      {!hideNavbar && <Navbar />}
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