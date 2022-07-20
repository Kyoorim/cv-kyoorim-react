import logo from "./logo.svg";
import { Routes, Route } from "react-router-dom";
import "./App.css";
// 페이지 연결해주기
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Project from "./pages/Project";
import Contact from "./pages/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/aboutme" element={<AboutMe />}></Route>
      <Route path="/project" element={<Project />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
    </Routes>
  );
}

export default App;
