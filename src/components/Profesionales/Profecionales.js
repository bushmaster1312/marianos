import React, { useEffect, useState } from 'react'
import "./Profecionales.css"
import axios from 'axios'
import { BASE_URL, BASE_IMG } from '../../utils/BASE_URL'
import imagen from "../../assets/acas.png"
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
                    
                    <div class="keen-slider__slide">
                        <div className='cards' >
                            <img src='https://image.shutterstock.com/image-photo/smiling-small-beauty-salon-owner-600w-2059364630.jpg'/>
                            <h3>Nombre</h3>
                            <p> profecion</p>
                            <button>ver mas</button>
                        </div>                     
                    </div>
                    <div class="keen-slider__slide">
                        <div className='cards' >
                            <img src='https://image.shutterstock.com/image-photo/smiling-small-beauty-salon-owner-600w-2059364630.jpg'/>
                           
                        </div>                     
                    </div>
                    <div class="keen-slider__slide">
                        <div className='cards' >
                            <img src='https://image.shutterstock.com/image-photo/smiling-small-beauty-salon-owner-600w-2059364630.jpg'/>
                           
                        </div>                     
                    </div>
            </div>
        </div>
        </div >
    )
}

export default Profecionales