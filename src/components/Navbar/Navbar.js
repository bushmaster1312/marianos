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
 
  let user = { usuario }


  console.log(usuario)
  const handleLoggOut = () => {
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
              <Link className='nav-link' to={"/"}><b>Inicio</b></Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to={"/#servicioshome"}><b>servicios</b></Link>

            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/contacto"}> <b> contacto</b> </Link>
            </li>
            <li className="nav-item">
              {
                usuario === null ?
                  <Link className='nav-link' to="/login">
                    <button className='nav-link button-sesion' ><b>Iniciar sesion</b>  <FontAwesomeIcon className='icon-sesion' icon={faUser} />
                    </button>
                  </Link>
                  :
                  <Link className='nav_link' to="/login">
                    <button className=' button-sesion'  onClick={() => handleLoggOut()}> <b>cerrar sesion</b>  <FontAwesomeIcon className='icon-sesion' icon={faUser} />
                    </button>
                  </Link>
              }
            </li>
            <li className="nav-item">
              {
                usuario=== null ? <p></p> : 
                user.usuario.type === 'Cliente' ?<Link className="nav-link" to={"/admin"}> <b>Admin</b></Link> :
                <p></p>
                  
              }
            </li>

          </ul>

        </div>

      </div>
    </nav>
  )
}

export default Navbar