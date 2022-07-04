import React, { useContext } from 'react'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/Navbar'
import './login.css'
import FormularioLog from '../../components/FormularioLog'






const Login = () => {
    
    return (
        <div>
            <Navbar />
            <div className='container login'>

                <div className='contenedor-login'>

                    <FormularioLog />
                    

                </div>

            </div>

            <Footer />

        </div>
    )
}

export default Login