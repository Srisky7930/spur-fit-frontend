import './App.css';
import Navbar from './components/Navbar';
import Emotions from './components/Emotions';
import WorkWithUs from './components/WorkWithUs';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Manifesto from './components/Manifesto';
import SelfAwareNess from './components/SelfAwareNess';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={ <Emotions /> } />
      <Route path="/work" element={ <WorkWithUs/>} />
      <Route path="/manifesto" element={ <Manifesto/>} />
      <Route path="/aware" element={ <SelfAwareNess/>} />
    </Routes>
    </BrowserRouter>

  );
}

export default App;
