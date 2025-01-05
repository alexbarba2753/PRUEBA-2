// src/pages/Tienda.js
import React from 'react';
import Header from '../componentes/Header';
import Footer from '../componentes/Footer';
import '../styles/Tienda.css';

const Tienda = () => {
    return (
        <div className="tienda">
            <Header />
            <main className="tienda-main">
                <h1>Nuestra Tienda</h1>
                <p>Descubre nuestros productos de energía confiable.</p>
            </main>
            <Footer />
        </div>
    );
};

export default Tienda;
