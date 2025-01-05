import React from 'react';

const Video_home = () => {
    return (
        <section className="video">
            <div className="text-vid" id="sec-vid">
                <h2>VIDEO</h2>
                <iframe 
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/gWsJ2lSeG7U?si=i163-ChcTuhRMNtW" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen>
                </iframe>
                <div className="line"></div>
            </div>
        </section>
    );
};

export default Video_home;
