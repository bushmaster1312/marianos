import React, { useEffect, useState } from 'react'
import "./Profecionales.css"
import axios from 'axios'
import { BASE_URL, BASE_IMG } from '../../utils/BASE_URL'
import imagen from "../../assets/acas.png"







const Profecionales = () => {
    

    const getProfecionale = (ruta) => {
        axios.get(`${ruta}`)
            .then(data => {
                setGetProfecio(data.data.profecionales)
            })
    }

    useEffect(() => {
        getProfecionale(`${BASE_URL}/profecionales`)
    }, [])
   const [getProfecio, setGetProfecio] = useState([])



    return (
        <div className='profecionales'>
            <div className="mb-5">
                <h2>NUESTRAS EXPERTAS EN BELLEZA</h2>
            </div>
            <div className='container'>

                {
                    getProfecio.length === 0 ?
                        <h1> cargando </h1> :
                        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">

                                <div className='carousel-item active'>
                                 <img className='imagen-carousel' src={imagen}  alt="dsdsdd" / >
                                
                                </div>
                                {getProfecio.map((profecionales, idx) => (
                                    <div key={idx} className='carousel-item '>
                                        <div  className="profile-card-4 text-center ">
                                            <img src={`${BASE_IMG}/${profecionales.imagen}`}  alt="asadsasd"/>
                                            <div className="profile-content">
                                                <div className="profile-description">
                                                    <h2>{profecionales.nombre}</h2>
                                                    <h4> {profecionales.apellidorder}</h4>
                                                    <p>{profecionales.descripcion}</p>
                                                </div>
                                                <div className="row">

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>

                        </div>
                }
            </div>
        </div>
    )
}

export default Profecionales