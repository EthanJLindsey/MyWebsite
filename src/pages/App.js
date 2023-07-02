import "../css/App.css";
import { Route, Routes } from "react-router-dom";

import Navbar from "./Navbar";
import Projects from "./Projects";
import Contact from "./Contact";
import Resume from "./Resume";
import Home from "./Home";

export default function App() {
  return (
    <div className="App">
      <Navbar style={{ flex: 0 }} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </div>
  );
}