import React from 'react';
import 'src/index.css';
import { Routes, Route } from "react-router-dom";
import ScrollToTop from 'src/composants/ScrollToTop';
import Navbar from 'src/composants/Navbar';
import Home from 'src/routes/Home';
import Contact from 'src/routes/Contact';
import Expertise from 'src/routes/Expertise/Expertise';
import ExpertiseDevis from 'src/routes/Expertise/ExpertiseDevis';
import Naval from 'src/routes/Naval/Naval';
import NavalAchievements from 'src/routes/Naval/NavalAchievements';
import NavalDevis from 'src/routes/Naval/NavalDevis';
import Piscine from 'src/routes/Piscine/Piscine';
import PiscineAchievements from 'src/routes/Piscine/PiscineAchievements'
import PiscineDevis from 'src/routes/Piscine/PiscineDevis';
import Industrie from 'src/routes/Industrie/Industrie';
import IndustrieAchievements from 'src/routes/Industrie/IndustrieAchievements';
import IndustrieDevis from 'src/routes/Industrie/IndustrieDevis';
import Error from 'src/routes/Error';
import Test from 'src/routes/Test';
import { BrowserRouter } from 'react-router-dom'


export default function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes basename={import.meta.env}>
          <Route path='*' element={<Error />} />
          <Route index path="/" element={<Home />} />
          <Route path="/test/" element={<Test />} />
          <Route path="/expertise/" element={<Expertise />} />
          <Route path="/expertise/devis/" element={<ExpertiseDevis />} />
          <Route path="/naval/" element={<Naval />} />
          <Route path="/naval/realisations/" element={<NavalAchievements />} />
          <Route path="/naval/devis/" element={<NavalDevis />} />
          <Route path="/piscine/" element={<Piscine />} />
          <Route path="/piscine/realisations/" element={<PiscineAchievements />} />
          <Route path="/piscine/devis/" element={<PiscineDevis />} />
          <Route path="/industrie/" element={<Industrie />} />
          <Route path="/industrie/realisations/" element={<IndustrieAchievements />} />
          <Route path="/industrie/devis/" element={<IndustrieDevis />} />
          <Route path="/contact/" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}