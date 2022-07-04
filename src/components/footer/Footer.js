import { faFacebook, faInstagram, faTiktok, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

import "./Footer.css"


const Footer = () => {
    return (
        <div className='footer'>
            <div className="container ">
                <div className="row mt-4">
                    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 ">
                        <h5>MÁS MIRADAS</h5>
                        <p>mas miradas es una marca <br /> registrada
                            con fines de lucro
                        </p>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-2 col-xl-2 ">
                        <h5>CATEGORIAS</h5>
                        <div className='categorias'>
                            <ul>
                                <li><Link to={`/peluqueria`}><button>peluqueria</button></Link></li>
                                <li><Link to={`/peluqueria`}><button>peluqueria</button></Link></li>
                                <li><Link to={`/peluqueria`}><button>peluqueria</button></Link></li>
                                <li><Link to={`/peluqueria`}><button>peluqueria</button></Link></li>

                            </ul>
                        </div>

                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-2 col-xl-2">
                        <h5>PRIVACIDAD</h5>
                        <div>
                            <p>mas miradas se reserva el
                                derecho de admision
                            </p>

                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-2 col-xl-2">

                        <div> <h5>REDES</h5></div>
                        <div className='redes'>
                            <ul>
                                
                                <li className='icon'> <a href='https://instagram.com/mas_miradas?igshid=YmMyMTA2M2Y=' ><button><FontAwesomeIcon icon={faInstagram} /></button></a></li>
                                <li className='icon'> <a href='https://m.facebook.com/Mas-miradas-111828666915446/?ref=py_c' ><button><FontAwesomeIcon icon={faFacebook} /></button></a></li>
                                <li className='icon'> <a href='https://m.facebook.com/Mas-miradas-111828666915446/?ref=py_c'><button><FontAwesomeIcon icon={faTiktok} /></button></a></li>
                                <li className='icon'> <a href='https://m.facebook.com/Mas-miradas-111828666915446/?ref=py_c'><button><FontAwesomeIcon icon={faWhatsapp} /></button></a></li>



                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-12  col-md-12 col-lg-2 col-xl-2 mapa">
                        <h5>UBICACÍON</h5>
                      
                    </div>
                    <hr className='mt-2'></hr>
                    <div className='copyright'>
                        <p> Copyright© Más miradas 2022</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer