import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import "../Navbar/Navbar.css"
import navImagen from "../../assets/portada.png"
import { useContext } from 'react'
import { Context } from '../../store/AppContext'
import React from 'react'


const Navbar = () => {
  const { usuario, setUsuario } = useContext(Context)

  const handleLoggOut= ( )=>{
   window.localStorage.removeItem('correo')
   setUsuario(null)
  } 
  return (
    <nav className="nav1  navbar-expand-lg navbar-light  mb-2  " style={{ backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed', backgroundImage: `url(${navImagen})`, height: '67vh' }}>
      <div className="container-fluid ">

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse list-pages " id="navbarNav">
          <ul className="navbar-nav mt-3">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Inicio</a>
            </li>
            <li className="nav-item">
              <Link className="nav-link"to={"/#servicioshome"}>servicios</Link>
            
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/contacto"}>   contacto</Link>
            </li>
            <li className="nav-item">
              {
                usuario === null ?
                  <Link to="/login">
                    <button className='nav-link button-sesion' >Iniciar sesion <FontAwesomeIcon className='icon-sesion' icon={faUser} />
                    </button>
                  </Link>
                  :
                  <Link to="/login">
                    <button onClick={() => handleLoggOut() } className='nav-link button-sesion' >cerrar sesion {usuario.nombre} <FontAwesomeIcon className='icon-sesion' icon={faUser} />
                    </button>
                  </Link>
              }
            </li>

          </ul>

        </div>

      </div>
    </nav>
  )
}

export default Navbar