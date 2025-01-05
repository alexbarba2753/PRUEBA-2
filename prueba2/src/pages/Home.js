import React from 'react';
import Header_home from '../componentes/Header_home';
import Formulario from '../componentes/Formulario';
import Productos_home from '../componentes/Productos_home';
import Video_home from '../componentes/Video_home';
import Footer from '../componentes/Footer';
import '../styles/Home.css'; 

const Home = () => {
    return (
        <div className='landingpage'>
            <Header_home />
            <Video_home />
            <Productos_home />  
            <Formulario />
            <Footer />
        </div>
    );
};

export default Home;
