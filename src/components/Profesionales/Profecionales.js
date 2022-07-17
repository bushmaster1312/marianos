import React, { useEffect, useState } from 'react'
import "./Profecionales.css"
import axios from 'axios'
import { BASE_URL, BASE_IMG } from '../../utils/BASE_URL'

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"







const Profecionales = () => {

    const [getProfecio, setGetProfecio] = useState([])
    const getProfecionale = (ruta) => {
        axios.get(`${ruta}`)
            .then(data => {
                setGetProfecio(data.data.profecionales)
            })
    }

    useEffect(() => {
        getProfecionale(`${BASE_URL}/profecionales`)
    }, [])


    const [sliderRef] = useKeenSlider({
        loop: true,
        mode: "free",
        slides: {
            perView: 1,
            spacing: 15,
        },
    })

    return (


        <div className='profecionales'>
            <div className=" mt-2">
                <h2>NUESTRAS EXPERTAS EN BELLEZA</h2>
            </div>
            <div className='container'>
                <div ref={sliderRef} className="keen-slider ">

                    {
                        getProfecio.length === 0 ? <div className="text-center">
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div> : getProfecio.map((profecional, idx) => (

                            <div className="keen-slider__slide">
                                <div className='cards' >
                                    <img src={`${BASE_IMG}/${profecional.imagen}`} alt={profecional.descripcion} />
                                    <h3>{profecional.nombre} {profecional.apellido}</h3>
                                    <p> {profecional.descripcion}</p>
                                    <button>ver mas</button>
                                </div>
                            </div>

                        ))

                    }
                </div>
            </div>
        </div >
    )
}

export default Profecionales