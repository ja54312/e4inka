import React from 'react';
import '../body.css';

const Contacto = () =>{
    return(
        <>
            <div className='contacto__container' id='contacto'>
                <div className='contacto_container-container'>
                    <span className='contacto__title'>Contactame</span>
                    <div className='contacto__container-redes'>
                        <div class="contacto__redes"><a href="https://www.facebook.com/erick.alatorre.90" target="_blank" rel="noopener noreferrer"><img src="https://www.vectorlogo.zone/logos/facebook/facebook-tile.svg" alt="logo de facebook" class="contacto__image"/></a></div>
                        <div class="contacto__redes"><a href="https://www.instagram.com/e4inka/" target="_blank" rel="noopener noreferrer"><img src="https://www.vectorlogo.zone/logos/instagram/instagram-icon.svg" alt="logo de instagram" class="contacto__image"/></a></div>
                    </div>
                    <span className='contacto__message'>Trabajemos juntos</span>
                </div>
            </div>
        </>
    )
} 

export default Contacto
