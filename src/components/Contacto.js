import React from 'react'

export const Contacto = () => {
  return (
    <div className='page'>
      <h1 className='heading'>Contacto</h1>

      <ul className='list'>
        <li><i className="fa-solid fa-envelope" id="mail"></i> aldml0201@gmail.com</li>
        <li><i className="fa-solid fa-mobile-screen" id="celphone"></i> 0414-5921641</li>
        <li><i className="fa-solid fa-location-dot"id="pointer"></i> Valencia,Venezuela</li>
        <a href={"https://github.com/AlexanderDeMatteo"} target="_blank" id="github"><i className="fa-brands fa-github"></i> Github</a>
        <a href={"https://github.com/AlexanderDeMatteo"} target="_blank" id="linkedin" ><i className="fa-brands fa-linkedin-in"></i> LinkedIn</a>
      </ul>



      {/* <form className='contact' action="aldml0201@gmail.com">
          <input type="text" placeholder='Nombre' />
          <input type="text" placeholder='Apellidos' />
          <input type="text" placeholder='Email' />
          <textarea placeholder='Motivo de contacto'/>
          <input type="submit" value="Enviar"/>
          

      </form> */}

    </div>
  )
}
