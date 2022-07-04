import React from 'react'
import Footer from '../../../components/footer/Footer'
import FormularioLogRegister from '../../../components/FormularioLogin/FormularioLogRegister'
import Navbar from '../../../components/Navbar'
import './register.css'

const Register = () => {
  return (
    <div>
        <Navbar/>
        <div className='container register'>
            <div className='contenedor-register'>
              <FormularioLogRegister/>
            </div>
        </div>

        <Footer/>
    </div>
  )
}

export default Register