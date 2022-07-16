import React from 'react'
import hero from "../../assets/hero.png"

import "../Hero/Hero.css"

const Hero = () => {
  return (
    <div className='hero-contenedor'>
      <div className="container">
        <div className="row">
          <div className=" col-xs-12  col-sm-12 col-lg-6 ">
            <h2 className='mb-5 hero-bienvenidos ' >
              <b>BIENVENIDOS</b>
              <div className='hr-hero'></div>
            </h2>

            <p className='mb-5 mt-5 hero-texto'>
              En Más miradas sabemos
              que tu imagen personal lo es todo
              para vos! Amamos completa
              tu estilo y compartimos la
              sensación de felicidad que sentís
              cuando te mirás al espejo y te ves perfecta
              , porque entendemos la seguridad que te transmite
              tu propia imagen en ese momento 🤍

            </p>
          </div>
          <div className="col-xs-12  col-sm-12 col-lg-6 contenedor-img ">
            <img className='imagen-hero' src={hero} alt="" />
          </div>

        </div>
      </div>

    </div>
  )
}

export default Hero