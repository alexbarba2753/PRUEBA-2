import React from 'react';
import fondo from '../assets/imagenes/fondo.jpg'; // Importación de la imagen de fondo

const Mapa_ubicacion = () => {
    return (
        <section className="opaco" style={{ backgroundImage: `url(${fondo})` }}>
            <div className="titulo">
                <h2 className="titulo_mapa">Mapa de Nuestras Sucursales</h2>
            </div>
            <div className="cuadros-junt">
                <div className="mapa-recuadro">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2045.906438598519!2d-78.48942839363873!3d-0.2109053428077691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1ses-419!2sec!4v1731215019406!5m2!1ses-419!2sec"
                        className="mapa"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                    <div className="recuadro">
                        <h3 className="titulo_info1">
                            <i className="fa-solid fa-location-dot"></i>
                            EPN QUITO
                        </h3>
                        <ul>
                            <li>Av Ladrón de Guevara y Toledo</li>
                            <li>La EPN ocupa un área aproximada de 152 mil metros cuadrados y su entrada principal colinda al Coliseo Rumiñahui en la calle Ladrón de Guevara E11 – 253.</li>
                            <li><b>Teléfono:</b> (02) 297-6300</li>
                        </ul>
                    </div>
                </div>
                <div className="mapa-recuadro">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4724.203424501016!2d-79.97035361114506!3d-2.146014300000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x902d7302273e3d89%3A0x618cd92aad3b91f7!2sV23M%2BHJX%2C%20V%C3%ADa%20del%20Lago%20Espol%2C%20Guayaquil!5e1!3m2!1ses-419!2sec!4v1731217733311!5m2!1ses-419!2sec"
                        className="mapa"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                    <div className="recuadro">
                        <h3 className="titulo_info1">
                            <i className="fa-solid fa-location-dot"></i>
                            EPN DEL LITORAL
                        </h3>
                        <ul>
                            <li>Gustavo Galindo Velasco, ubicado en el Km. 30.5 de la Vía Perimetral</li>
                            <li>La Escuela Superior Politécnica del Litoral (ESPOL) se encuentra en las calles Av. 6 de Diciembre N°3355 y Eloy Alfaro en Quito</li>
                            <li><b>Teléfono:</b> (04) 226-9269</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mapa_ubicacion;
