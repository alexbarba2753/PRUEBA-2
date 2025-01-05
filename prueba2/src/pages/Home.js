// src/pages/Home.js
import React from 'react';
import Header from '../componentes/Header';  // Importando el Header
import Footer from '../componentes/Footer';  // Importando el Footer
import '../styles/Home.css';  // Importando los estilos específicos para la página

const Home = () => {
    return (
        <div className="home">
            <Header />  {/* Header que se muestra en todas las páginas */}
                <main className="home-main">
                    <h1>Bienvenido a EnerGy Pure</h1>
                    <p>Tu fuente de energía confiable</p>
                    <img src={require('../assets/imagenes/fondo.png')} alt="Fondo Energía" className="home-image" />
                </main>
            <Footer />  {/* Footer que se muestra en todas las páginas */}
        </div>
    );
};

export default Home;
