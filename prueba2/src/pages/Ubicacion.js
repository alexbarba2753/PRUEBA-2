// src/pages/Ubicacion.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Ubicacion.css';

const Ubicacion = () => {
    return (
        <div className="ubicacion">
            <Header />
            <main className="ubicacion-main">
                <h1>Ubicación</h1>
                <p>Visítanos en nuestra sede para más información.</p>
                <div id="mapa">
                {/* Aquí podría ir un mapa embebido */}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Ubicacion;
