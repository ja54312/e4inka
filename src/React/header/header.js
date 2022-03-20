import React from "react";
import logo from '../../assets/PERFIL_E4INKA.png';
import './header.css';


const Header = () => {
    return(
      <>
        <header>
            <div className="header__container-logo">
                <img src={logo} className="header__img-logo"/>
                <span className='header__title'>e4inka</span>
            </div>
            <div className="header__container-navbar">
                <nav></nav>
            </div>
        </header>
      </>
    )
}

export default Header