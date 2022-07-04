import React from 'react'
import axios from 'axios'
import { Formik } from 'formik'
import { BASE_URL } from '../../utils/BASE_URL'
import "./formmail.css"

const FormMail = () => {
    
    return (
        <>
            <Formik

                initialValues={{
                    nombre: 'mariano',
                    apellido: 'dominguez',
                    mensaje: "zzxz",
                }}




                onSubmit={(value) => {

                    axios.post(`${BASE_URL}/email`, {
                        nombre: value.nombre,
                        email: value.correo,
                        mensaje: value.mensaje,

                    }).then(res => console.log("se a creado el usuario", res))

                }}>
                {({ values, handleSubmit, handleChange }) => (

                    <div className='contenedor-forms'> 
                        <form className='formularios-email' onSubmit={handleSubmit}>

                            <div class="mb-3 ">
                                <label for="exampleFormControlInput1" class="form-label">Email</label>
                                <input type="email" class="form-control" placeholder="name@example.com"
                                    id='correo'
                                    name='correo'
                                    values={values.correo}
                                    onChange={handleChange}

                                />
                            </div>
                            <div className='mb-3'>
                                <label for="exampleFormControlTextarea1" className='form-label' >nombre</label>
                                <input className='form-control' type='text'
                                    id='nombre'
                                    name='nombre'
                                    values={values.nombre}
                                    onChange={handleChange}
                                >

                                </input>
                            </div>

                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Tu Consulta</label>
                                <textarea className="form-control" rows="8"
                                    id='mensaje'
                                    name='mensaje'
                                    values={values.mensaje}
                                    onChange={handleChange}

                                />
                            </div>
                            <button className='button-submit-email' type='submit'>enviar mail</button>
                        </form>
                    </div>
                )}
            </Formik>








        </>
    )
}

export default FormMail