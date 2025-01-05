import React from 'react';
import Header from '../componentes/Header';
import Footer from '../componentes/Footer';
import Main_tienda from '../componentes/Main_tienda'
import '../styles/Tienda.css';

const Tienda = () => {
    return (
        <div className="tienda">
            <Header />
            <Main_tienda/>
            <Footer />
        </div>
    );
};

export default Tienda;
