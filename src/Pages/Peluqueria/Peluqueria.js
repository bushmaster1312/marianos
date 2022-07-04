import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/Navbar'

import { BASE_URL } from '../../utils/BASE_URL'
import "./Peluqueria.css"

const Peluqueria = () => {
  const { servicio } = useParams()
  const [gets, setGets] = useState([])
  const getS = (ruta) => {
    axios.get(`${ruta}`)
      .then(data => {
        setGets(data.data.servicios)
      })
  }
  useEffect(() => {
    getS(`${BASE_URL}/servicios/${servicio}`)
  }, [])
  return (
    <div>
      <Navbar />

      <div className='contenedor-categoria'>
        <h1 className='peluqueria-h1'>{servicio}</h1>
        <div className='container espacio-peluqueria '>
          <div className='row'>
            {
              getS.length === 0 ?
                <div className='loading-contenedor'>
                  <button className="boton-loading" type="button" disabled>
                    <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                    Cargando...
                  </button>
                </div>
                :


                gets.map((servicio, idx) => (



                  <div className='col-md-6 col-xl-4' key={idx}>
                    <div className="card-s mb-5 " style={{
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundImage: `url(${BASE_URL}/servicios/aws/imagen/${servicio.imagencategoria})`
                       }}>

                      <div className="cardss-peluqueria">
                        <div>
                          <p>{servicio.categoria}</p>
                          <h2> Precio</h2>
                          <p>${servicio.precio}</p>
                        </div>
                      </div>
                      <div className='boton-turno'>
                        <button>Turno</button>
                      </div>
                    </div>



                  </div>


                ))
            }
          </div>




        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Peluqueria