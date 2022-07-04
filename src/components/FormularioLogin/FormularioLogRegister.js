import axios from 'axios'
import { Formik } from 'formik'
import React from 'react'
import "./Fregister.css"
import { BASE_URL } from '../../utils/BASE_URL'

const FormularioLogRegister = () => {


    return (
        <>
            <Formik

                initialValues={{
                    nombre: 'mariano',
                    apellido: 'dominguez',
                    email:"",
                    password:""
                   
                }}





                onSubmit={(value) => {
                    axios.post(`${BASE_URL}/login/registro`, {
                        email: value.correo,
                        nombre: value.nombre,
                        apellido: value.apellido,
                        password: value.password
                    }).then(res => console.log("se a creado el usuario", res))

                }}>
                {({ values, handleSubmit, handleChange, handleBlur }) => (
                    <form className='formulario' onSubmit={handleSubmit}>
                        <div className='form-s'>
                            <div className='form'>
                                <label className='label' htmlFor="nombre">NOMBRE</label>
                                <input className='input' type='text'
                                    id='nombre'
                                    name='nombre'
                                    values={values.nombre}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                >
                                </input>
                            </div>
                            <div className="form">
                                <label className='label' htmlFor='apellido'>apellido</label>
                                <input className='input' type='text'
                                    id='apellido'
                                    name='apellido'
                                    values={values.apellido}
                                    onChange={handleChange}
                                    onBlur={handleBlur}>
                                </input>
                            </div>
                            <div className='form'>
                                <label className='label' htmlFor="correo">correo</label>
                                <input className='input' type='text'
                                    id='correo'
                                    name='correo'
                                    values={values.correo}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                >
                                </input>
                            </div>
                            <div className='form'>
                                <label className='label' htmlFor="password">CONTRASEÑA</label>
                                <input className='input' type='password'
                                    id='password'
                                    name='password'
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}>
                                    

                                </input>
                            </div>
                        </div>
                        <button className='button-submit' type='submit'>REGISTRAR</button>
                    </form>




                )}
            </Formik>
        </>
    )
}

export default FormularioLogRegister