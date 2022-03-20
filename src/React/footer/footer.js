import React from "react";
import './footer.css';


const Footer = () => {
    return(
      <>
       <footer>
          <span className="footer__version"> v0.0.0</span>
          <p class="footer__text">Created with love ❤ by <a href="https://ja54312.com" target="_blank" rel="noopener noreferrer" alt="enlace a pagina JA54312">JA54312</a></p>
          <div className="container-nivel">
              {/* <a href="mailto:marcosclass.edu@gmail.com">
                  <img src="https://www.vectorlogo.zone/logos/gmail/gmail-icon.svg" alt="imagen correo"></img>
              </a> */}
          </div>
       </footer>
      </>
    )
}

export default Footer