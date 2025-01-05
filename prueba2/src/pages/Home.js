import React from 'react';
import Header_home from '../componentes/componentes home/Header_home';
import Formulario from '../componentes/componentes home/Formulario';
import Productos_home from '../componentes/componentes home/Productos_home';
import Video_home from '../componentes/componentes home/Video_home';
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
