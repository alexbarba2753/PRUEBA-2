import React from 'react';
import imagenFormulario from '../imagenes/cargadores del formulario.jpg'; 

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
                    <img src={imagenFormulario} alt="Imagen de contacto" />  {/* Usar la variable importada */}
                </div>
            </div>
        </section>
    );
};

export default Formulario;

