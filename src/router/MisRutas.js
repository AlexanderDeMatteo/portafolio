import React from 'react'
import {Routes, Route, BrowserRouter, Navigate } from "react-router-dom"
import { Inicio } from '../components/Inicio'
import { Portafolio } from '../components/Portafolio'
import { Servicio } from '../components/Servicio'
import { Curriculum } from '../components/Curriculum'
import { Contacto } from '../components/Contacto'
import { HeaderNav } from '../components/layout/HeaderNav'
import { Footer } from '../components/layout/Footer'
import { Proyecto } from '../components/Proyecto'

export const MisRutas = () => {
  return (
    <BrowserRouter>
        {/* header y Navegacion */}
            <HeaderNav/>
        {/* contenido central */}
        <section className='content'>
            <Routes>
                <Route path="/" element={<Navigate to="/Inicio"/>} />
                <Route path="/inicio" element={<Inicio/>} />
                <Route path="/portafolio" element={<Portafolio/>} />
                <Route path="/Curriculum" element={<Curriculum/>} />
                <Route path="/contacto" element={<Contacto/>} />
                <Route path="/proyecto/:id" element={<Proyecto/>} />
                <Route path="*" element={
                  <div className='page'>
                    <h1 className='heading'>error 404 </h1>
                  </div>
                } />

            </Routes>
        </section>
        
        {/* pie de pagina */}
        <Footer/>
    </BrowserRouter>
  )
}
