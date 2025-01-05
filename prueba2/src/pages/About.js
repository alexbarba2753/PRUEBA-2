import React from 'react';
import Header from '../componentes/Header';
import Footer from '../componentes/Footer';
import '../styles/About.css';
import '../styles/App.css';
import Cuerpo_about from '../componentes/Cuerpo_about';

const About = () => {
    return (
        <div className="about">
            <Header />
            <Cuerpo_about/>
            <Footer />
        </div>
    );
};

export default About;
