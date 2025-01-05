// src/pages/About.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/About.css';

const About = () => {
    return (
        <div className="about">
            <Header />
            <main className="about-main">
                <h1>Quiénes Somos</h1>
                <p>Somos una empresa dedicada a ofrecer soluciones energéticas sostenibles.</p>
            </main>
            <Footer />
        </div>
    );
};

export default About;
