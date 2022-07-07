import "./Info.css"
import React from 'react'
import esmalte from "../../assets/iconos/esmalte.png"
import corte from  "../../assets/iconos/corte.png"



const Info = () => {
  return (
    <div className="">
      <div className="contenedor-info">
        <h2>Nuestros Servicios</h2>
      </div>
      <div className="container mb-5">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-lg-4   info-servicios">
            <img src={esmalte} alt="sss" />
            <div>
              <h3 className="subtitulo-hero"> Manicura </h3>
              <p>
                Incluso el Señalador todopoderoso
                no tiene control sobre los textos ciegos,
                es casi unortográfico.
              </p>
            </div>
          </div>
          <div className="col-xs-12col-sm-12 col-lg-4   info-servicios">
            <img src={corte} alt="sss" />
            <div>
              <h3 className="subtitulo-hero"> Peluqueria</h3>
              <p>
                Incluso el Señalador todopoderoso
                no tiene control sobre los textos ciegos,
                es casi unortográfico.
              </p>
            </div>
          </div>
          <div className=" col-xs-12 col-sm-12 col-lg-4  info-servicios">
            <img src={esmalte} alt="ss" />

            <div>
              <h3 className="subtitulo-hero">pestañas</h3>
              <p>
                Incluso el Señalador todopoderoso
                no tiene control sobre los textos ciegos,
                es casi unortográfico.
              </p>
            </div>
          </div>
        </div>
      </div>





    </div>
  )
}

export default Info