import React from 'react';
import './styles/Formulario.css'; // Asegúrate de tener el archivo de estilos correspondiente

const Formulario = () => {
    return (
        <section className="formulario">
            <h2>FORMULARIO</h2>
            <div className="container">
                <form className="contact-form">
                    <label htmlFor="name">Nombre</label>
                    <input type="text" id="name" name="name" required />

                    <label htmlFor="email">Correo</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="message">Comentario</label>
                    <textarea id="message" name="message" required></textarea>

                    <button type="submit">Enviar</button>
                </form>
                <div className="image-container">
                    <img src="imagenes/cagadores del formulario.jpg" alt="Imagen de contacto" />
                </div>
            </div>
        </section>
    );
};

export default Formulario;
