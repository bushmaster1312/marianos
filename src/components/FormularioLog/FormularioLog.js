import React, { useContext } from 'react'
import axios from 'axios'
import { Formik } from 'formik'
import "./FormularioLog.css"
import { Context } from '../../store/AppContext'
import Swal from 'sweetalert2'
import { BASE_URL } from '../../utils/BASE_URL'


const FormularioLog = () => {
    const { usuario,setUsuario } = useContext(Context)
       console.log(usuario)
    return (
        <>
            <Formik
                initialValues={{
                    correo: '',
                    password: ''
                }}
                onSubmit={(value) => {
                    axios.post(`${BASE_URL}/login`, {
                        email: value.correo,
                        password: value.password
                    }).then(res =>  {

                        if (res.data.error) {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: res.data.msg
                            })
                        } else {
                         setUsuario({
                            correo: res.data.user.email,
                            nombre: res.data.user.nombre,
                            apellido: res.data.user.apellido,
                            type: res.data.user.type
                         })
                          
                        }
                    })
                }}>
                {({ values, handleSubmit, handleChange, handleBlur }) => (
                    <form className='formulario' onSubmit={handleSubmit}>
                        <div className='form-a'>
                            <div className='form-b'>
                                <label className='label' htmlFor="correo">CORREO</label>
                                <input className='input' type='text'
                                    id='correo'
                                    name='correo'
                                    value={values.correo}
                                    onChange={handleChange}
                                    onBlur={handleBlur} >
                                    
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
                        <button  className='button-submit' type='submit'>Iniciar sesion</button>
                    </form>
                )}
            </Formik>
        </>
    )
}

export default FormularioLog