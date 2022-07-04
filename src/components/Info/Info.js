import "./Info.css"
import React from 'react'



const Info = () => {
  return (
    <div className="">
      <div className="contenedor-info">
        <h2>Nuestros Servicios</h2>
      </div>
      <div className="container mb-5">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-lg-4   info-servicios">
            <img src="https://img.icons8.com/carbon-copy/100/undefined/nail-polish.png" alt="sss" />
            <div>
              <h3> Manicura </h3>
              <p>
                Incluso el Señalador todopoderoso
                no tiene control sobre los textos ciegos,
                es casi unortográfico.
              </p>
            </div>
          </div>
          <div className="col-xs-12col-sm-12 col-lg-4   info-servicios">
            <img src="https://img.icons8.com/ios/100/undefined/scissors.png" alt="sss" />
            <div>
              <h3> Peluqueria</h3>
              <p>
                Incluso el Señalador todopoderoso
                no tiene control sobre los textos ciegos,
                es casi unortográfico.
              </p>
            </div>
          </div>
          <div className=" col-xs-12 col-sm-12 col-lg-4  info-servicios">
            <img src="https://img.icons8.com/ios/100/undefined/eyebrow.png" alt="sss" />
            <div>
              <h3>pestañas</h3>
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