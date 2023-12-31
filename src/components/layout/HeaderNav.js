import React from 'react'
import { NavLink } from 'react-router-dom';

export const HeaderNav = () => {
  return (
    <header className='header'>
        <div className='logo'>
        <span>DM</span>
        <h3> Alexander De Matteo </h3>
        </div>
        <nav>
            <ul>
                {/* <li>
                    <NavLink to="/inicio" className={({isActive}) => isActive ? "active" : ""}>Inicio</NavLink>
                </li> 
                el isActive se agrega automaticamente con el NavLink */}
                <li>
                    <NavLink to="/inicio">Inicio</NavLink>
                </li>
                <li>
                    <NavLink to="/portafolio">Portafolio</NavLink>
                </li>
                <li>
                    <NavLink to="/curriculum">Curriculum</NavLink>
                </li>
                <li>
                    <NavLink to="/contacto">Contacto</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}
