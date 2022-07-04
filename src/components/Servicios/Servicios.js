import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { Context } from '../../store/AppContext'
import { BASE_URL } from '../../utils/BASE_URL'
import "./Servicios.css"

const Servicios = () => {
    const { servicios, getServicios } = useContext(Context)
    useEffect(() => {
        getServicios(`${BASE_URL}/servicios`)
    }, [])



    return (

        <div className=' servicios-contenedor ' id="servicioshome">
            <div className='contenedor-serv'>
                {
                    servicios.length === 0 ?
                        <div className='loading-contenedor'>
                            <button className="boton-loading" type="button" disabled>
                                <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                                Cargando...
                            </button>
                        </div>
                        :
                        servicios.map((servicio, idx) => (
                            <div className='cardss-contenedor ' key={idx} >
                                <div className="cards-home" >
                                    <img className='imagen' src={`${BASE_URL}/servicios/aws/imagen/${servicio.imagen}`} alt="sdasd" />
                                    <div className='boton-servicios'>
                                        <Link to={`${servicio.categorias}`}><button>Mostrar Mas</button>    </Link>
                                    </div>
                                </div>

                            </div>))
                }
            </div>
        </div>

    )
}

export default Servicios