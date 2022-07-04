import React, { useContext, useEffect } from 'react'

import Footer from '../../components/footer/Footer'
import Hero from '../../components/Hero/Hero'
import Info from '../../components/Info/Info'
import Navbar from '../../components/Navbar'
import Profecionales from '../../components/Profesionales/Profecionales'
import Servicios from '../../components/Servicios/Servicios'

import { Context } from '../../store/AppContext'

import "./home.css"

const Home = () => {


  const { usuario, setUsuario } = useContext(Context)




  window.localStorage.setItem( "correo", JSON.stringify(usuario)  )

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('correo')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUsuario(user)
    }
  }, [])






  return (
    <div>
      <Navbar />
      <Hero />
      <div>
        <Info />
      </div>
      <div className='servicios'>
        <Servicios />
   
      </div>
      <section className='profecionaless'>
        <Profecionales />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Home