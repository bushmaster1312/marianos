import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../store/AppContext'
import { BASE_URL } from '../../utils/BASE_URL'


import './mostrarservicios.css'


const MostrarServicios = () => {
    const { serviciosadmin, getServiciosAdmin ,  servicios, getServicios } = useContext(Context)
  const deleteServicio = async (id) => {
    await axios.delete(`${BASE_URL}/servicios/${id}`)
    getServiciosAdmin(`${BASE_URL}/admin`)
  }
  useEffect(() => {
    getServiciosAdmin(`${BASE_URL}/admin`)
    getServicios(`${BASE_URL}/servicios`)
  }, [])
   

    return (
        <div className='container mostrar-servicios '>
            <div className='mt-5 modificar-servicios' >
                <h2>MODIFICAR CATEGORIA</h2>
            </div>
            <div className='row '>
                {
                    serviciosadmin.length === 0 ?
                        <h1>No hay contenido</h1> :
                        serviciosadmin.map((servicio, idx) => (
                            <div className="card admincard mt-5" style={{ width: "13rem" }} key={idx}>
                                <img src={`${BASE_URL}/servicios/aws/imagen/${servicio.imagencategoria}`}  />
                                <div className="card-body">
                                    <h5 className="card-title">{servicio.categoria}</h5>
                                    <p className="card-text">{servicio.descripcion}</p>
                                    <p className='card-text'>precio:${servicio.precio}</p>
                                    <Link to={"/edit/" + servicio.idcategorias} className='btn btn-warning'>editar</Link>
                                    <button onClick={() => deleteServicio(servicio.idcategorias)} className='btn btn-danger'> eliminar </button>
                                </div>
                            </div>
                        ))
                }
            </div>
        </div>

    )
}

export default MostrarServicios