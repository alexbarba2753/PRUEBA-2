import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Tienda from './pages/Tienda';
import QuienesSomos from './pages/About';
import Ubicacion from './pages/Ubicacion';
import Login from './pages/Login';
import Register from './pages/Register';



const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} /> 
                <Route path="/tienda" element={<Tienda />} />
                <Route path="/quienes-somos" element={<QuienesSomos />} />
                <Route path="/ubicacion" element={<Ubicacion />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
               
            </Routes>
        </Router>
    );
};

export default App;
