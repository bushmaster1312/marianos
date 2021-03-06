import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../store/AppContext'
import { BASE_URL } from '../../utils/BASE_URL'
import "./Servicios.css"
import loreal from "../../assets/iconos/loreal.svg"
import hairsime from "../../assets/iconos/hair.png"

const Servicios = () => {
    const { servicios, getServicios } = useContext(Context)
    useEffect(() => {
        getServicios(`${BASE_URL}/servicios`)
    }, [])



    return (
        <div>
            <div className='  servicios-contenedor  ' id="servicioshome">

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
                            <div className="cards-home " key={idx} >
                                <img className='imagen' src={`${BASE_URL}/servicios/aws/imagen/${servicio.imagen}`} alt="sdasd" />
                                <p>{servicio.categorias} </p>
                                <div className='boton-servicios'>
                                    <Link to={`${servicio.categorias}`}><button>Mostrar Mas</button>    </Link>
                                </div>
                            </div>

                        ))
                }


            </div>
            <div className=' productos'>
                <img className='loreal' src={loreal} alt="sss" />
                <img className='hair' src={hairsime} alt="ss"/>
            </div>
            </div>


    )
}

export default Servicios