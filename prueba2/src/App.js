import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Tienda from './pages/Tienda';
import QuienesSomos from './pages/About';
import Ubicacion from './pages/Ubicacion';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} /> 
                <Route path="/tienda" element={<Tienda />} />
                <Route path="/quienes-somos" element={<QuienesSomos />} />
                <Route path="/ubicacion" element={<Ubicacion />} />
            </Routes>
        </Router>
    );
};

export default App;
