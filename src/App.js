import { Routes, Route } from "react-router-dom";
import Navbar from './composants/Navbar';
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import Expertise from './routes/Expertise';
import Naval from './routes/Naval';
import NavalAchievements from './routes/NavalAchievements'
import Piscine from './routes/Piscine';
import PiscineAchievements from './routes/PiscineAchievements'
import Industrie from './routes/Industrie';
import IndustrieAchievements from './routes/IndustrieAchievements'
import React from 'react';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/expertise" element={<Expertise />} />
        <Route path="/naval" element={<Naval />} />
        <Route path="/naval/realisations" element={<NavalAchievements />} />
        <Route path="/piscine" element={<Piscine />} />
        <Route path="/piscine/realisations" element={<PiscineAchievements />} />
        <Route path="/industrie" element={<Industrie />} />
        <Route path="/industrie/realisations" element={<IndustrieAchievements />} />
      </Routes>
    </>
  );
}

export default App;
