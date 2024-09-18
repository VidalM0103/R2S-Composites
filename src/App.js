import { Routes, Route } from "react-router-dom";
import Navbar from './composants/Navbar';
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import Expertise from './routes/Expertise';
import ExpertiseDevis from './routes/ExpertiseDevis';
import Naval from './routes/Naval';
import NavalAchievements from './routes/NavalAchievements';
import NavalDevis from './routes/NavalDevis';
import Piscine from './routes/Piscine';
import PiscineAchievements from './routes/PiscineAchievements'
import PiscineDevis from './routes/PiscineDevis';
import Industrie from './routes/Industrie';
import IndustrieAchievements from './routes/IndustrieAchievements';
import IndustrieDevis from './routes/IndustrieDevis';
import React from 'react';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/expertise" element={<Expertise />} />
        <Route path="/expertise/devis" element={<ExpertiseDevis />} />
        <Route path="/naval" element={<Naval />} />
        <Route path="/naval/realisations" element={<NavalAchievements />} />
        <Route path="/naval/devis" element={<NavalDevis />} />
        <Route path="/piscine" element={<Piscine />} />
        <Route path="/piscine/realisations" element={<PiscineAchievements />} />
        <Route path="/piscine/devis" element={<PiscineDevis />} />
        <Route path="/industrie" element={<Industrie />} />
        <Route path="/industrie/realisations" element={<IndustrieAchievements />} />
        <Route path="/industrie/devis" element={<IndustrieDevis />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
