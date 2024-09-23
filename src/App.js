import React from 'react';
import './index.css';
import { Routes, Route } from "react-router-dom";
import ScrollToTop from './composants/ScrollToTop';
import Navbar from './composants/Navbar';
import Home from './routes/Home';
import Contact from './routes/Contact';
import Expertise from './routes/Expertise/Expertise';
import ExpertiseDevis from './routes/Expertise/ExpertiseDevis';
import Naval from './routes/Naval/Naval';
import NavalAchievements from './routes/Naval/NavalAchievements';
import NavalDevis from './routes/Naval/NavalDevis';
import Piscine from './routes/Piscine/Piscine';
import PiscineAchievements from './routes/Piscine/PiscineAchievements'
import PiscineDevis from './routes/Piscine/PiscineDevis';
import Industrie from './routes/Industrie/Industrie';
import IndustrieAchievements from './routes/Industrie/IndustrieAchievements';
import IndustrieDevis from './routes/Industrie/IndustrieDevis';

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/expertise" element={<Expertise />} />
        <Route path="/expertise/devis" element={<ExpertiseDevis />} />
        <Route path="/naval" element={<Naval />} />
        <Route path="/naval/realisations" element={<NavalAchievements />} />
        <Route path="/naval/devis" element={<NavalDevis />} />
        <Route path="/piscine/" element={<Piscine />} />
        <Route path="/piscine/realisations" element={<PiscineAchievements />} />
        <Route path="/piscine/devis" element={<PiscineDevis />} />
        <Route path="/industrie" element={<Industrie />} />
        <Route path="/industrie/realisations" element={<IndustrieAchievements />} />
        <Route path="/industrie/devis" element={<IndustrieDevis />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
