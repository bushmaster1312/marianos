import React from 'react'
import Footer from '../../components/footer/Footer'
import FormMail from '../../components/formularioMail/FormMail'

const Contacto = () => {
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="/home">
                      <p>MÁS MIRADAS</p>
                    </a>
                </div>
            </nav>
            <FormMail/>
            <Footer />
        </div>
    )
}

export default Contacto