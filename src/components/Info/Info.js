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
        <div className="info-contenedor">
          <div className=" info-servicios">
            <img src={esmalte} alt="sss" />
            <div>
              <h3 className="subtitulo-info"> Manicura </h3>
              <p>
                Incluso el Señalador todopoderoso
                no tiene control sobre los textos ciegos,
                es casi unortográfico.
              </p>
            </div>
          </div>
          <div className="   info-servicios">
            <img src={corte} alt="sss" />
            <div>
              <h3 className="subtitulo-info"> Peluqueria</h3>
              <p>
                Incluso el Señalador todopoderoso
                no tiene control sobre los textos ciegos,
                es casi unortográfico.
              </p>
            </div>
          </div>
          <div className="   info-servicios">
            <img src={esmalte} alt="ss" />

            <div>
              <h3 className="subtitulo-info">pestañas</h3>
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