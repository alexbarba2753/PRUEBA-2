import React from 'react';
import Header from '../componentes/Header';
import Footer from '../componentes/Footer';
import Mapa_ubicacion from '../componentes/Mapa_ubicacion';
import '../styles/Ubicacion.css';

const Ubicacion = () => {
    return (
        <div className="ubicacionxd">
            <Header />
            <Mapa_ubicacion/>
            <Footer />
        </div>
    );
};

export default Ubicacion;
