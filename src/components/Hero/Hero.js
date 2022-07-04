import React from 'react'
import hero from "../../assets/hero.png"

import "../Hero/Hero.css"

const Hero = () => {
  return (
    <div className='hero-contenedor'>
      <div className="container">
        <div className="row">
          <div className=" col-xs-12  col-sm-12 col-lg-6 ">
            <h2 className='mb-5' >BIENVENIDOS</h2>
            <p className='mb-5 mt-5'> 
              estamos orgullosas de que elijas mas miradas para el cuidado de tu
              Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos
              de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias
              desde el año 1500, cuando un impresor N. del T. persona que se dedica a la imprenta
              desconocido usó una galería de textos y los mezcló de tal manera que logró hacer
              un libro de textos especimen.
              No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documento

            </p>
          </div>
          <div className="col-xs-12  col-sm-12 col-lg-6  ">
            <img className='imagen-hero' src={hero} alt=""/>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Hero