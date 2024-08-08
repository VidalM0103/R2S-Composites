import { Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import Home from './routes/Home';
import About from './routes/About';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
