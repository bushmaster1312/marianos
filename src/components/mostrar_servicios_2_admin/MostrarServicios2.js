import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../store/AppContext'
import { BASE_URL } from '../../utils/BASE_URL'



const MostrarServicios2 = () => {

    const [gets, setGets] = useState([])
    const getS = (ruta) => {
        axios.get(`${ruta}`)
            .then(data => {
                setGets(data.data.servicios)
            })
    }
    useEffect(() => {
        getS(`${BASE_URL}/servicios`)
    }, [])
    return (

        <div className='container mostrar-servicios '>
            <div className='mt-5 modificar-servicios' >
                <h2>MODIFICAR CATEGORIA</h2>
            </div>
            <div className='row '>
                {
                    gets.length === 0 ?
                        <h1>No hay contenido</h1> :
                        gets.map((servicio, idx) => (
                            <div className="card admincard mt-5" style={{ width: "13rem" }} key={idx}>
                                <img src={`${BASE_URL}/servicios/aws/imagen/${servicio.imagen}`} />
                                <div className="card-body">
                                    <h5 className="card-title">{servicio.categorias}</h5>
                                    <Link to={"/edit/" + servicio.idcategorias} className='btn btn-warning'>editar</Link>
                                    <button  className='btn btn-danger'> eliminar </button>
                                </div>
                            </div>
                        ))
                }
            </div>
        </div>







    )
}

export default MostrarServicios2