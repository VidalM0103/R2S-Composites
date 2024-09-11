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
        <Route path="/R2S-Composites" element={<Home />} />
        <Route path="/R2S-Composites/expertise" element={<Expertise />} />
        <Route path="/R2S-Composites/expertise/devis" element={<ExpertiseDevis />} />
        <Route path="/R2S-Composites/naval" element={<Naval />} />
        <Route path="/R2S-Composites/naval/realisations" element={<NavalAchievements />} />
        <Route path="/R2S-Composites/naval/devis" element={<NavalDevis />} />
        <Route path="/R2S-Composites/piscine" element={<Piscine />} />
        <Route path="/R2S-Composites/piscine/realisations" element={<PiscineAchievements />} />
        <Route path="/R2S-Composites/piscine/devis" element={<PiscineDevis />} />
        <Route path="/R2S-Composites/industrie" element={<Industrie />} />
        <Route path="/R2S-Composites/industrie/realisations" element={<IndustrieAchievements />} />
        <Route path="/R2S-Composites/industrie/devis" element={<IndustrieDevis />} />
        <Route path="/R2S-Composites/about" element={<About />} />
        <Route path="/R2S-Composites/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
