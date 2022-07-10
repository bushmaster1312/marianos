import { faFacebook, faInstagram, faTiktok, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../store/AppContext'


import "./Footer.css"


const Footer = () => {
    const { servicios } = useContext(Context)
    console.log(servicios)
    return (
        <div className='footer'>
            <div className="container ">
                <div className="contenedor-footer">
                    <div className=" footer-miradas ">
                        <h5>MÁS MIRADAS</h5>
                        <p>mas miradas es una marca <br /> registrada
                            con fines de lucro
                        </p>
                    </div>
                    <div className="footer-categorias">
                        <h5>CATEGORIAS</h5>

                        <ul>
                            {
                                servicios.lenght === 0 ? <li></li> :
                                    servicios.map((servicio, idx) => (

                                        <li key={idx}><Link to={servicio.categorias}><button>{servicio.categorias}</button></Link></li>

                                    ))
                            }

                        </ul>


                    </div>
                    <div className="footer-privacidad">
                        <h5>PRIVACIDAD</h5>
                        <div>
                            <p>mas miradas se reserva el
                                derecho de admision
                            </p>

                        </div>
                    </div>
                    <div className="footer-redes">
                       
                            <h5>REDES</h5>
                      
                        <div className='redes'>
                            <ul>
                                <li className='icon'> <a href='https://instagram.com/mas_miradas?igshid=YmMyMTA2M2Y=' ><button><FontAwesomeIcon icon={faInstagram} /></button></a></li>
                                <li className='icon'> <a href='https://m.facebook.com/Mas-miradas-111828666915446/?ref=py_c' ><button><FontAwesomeIcon icon={faFacebook} /></button></a></li>
                                <li className='icon'> <a href='https://m.facebook.com/Mas-miradas-111828666915446/?ref=py_c'><button><FontAwesomeIcon icon={faTiktok} /></button></a></li>
                                <li className='icon'> <a href='https://m.facebook.com/Mas-miradas-111828666915446/?ref=py_c'><button><FontAwesomeIcon icon={faWhatsapp} /></button></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="">
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