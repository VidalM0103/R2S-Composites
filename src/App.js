import { Routes, Route } from "react-router-dom";
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
import React from 'react';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/R2S-Composites/" element={<Home />} />
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
        <Route path="/R2S-Composites/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
