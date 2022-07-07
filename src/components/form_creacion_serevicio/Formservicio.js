import React from 'react'
import axios from 'axios'
import { Formik } from 'formik'
import { BASE_URL } from '../../utils/BASE_URL'

import "./formservicios.css"

const Formservicio = () => {

    return (
        <>
            <Formik className=""
                initialValues={{
                    categorias: "",
                    file: null
                }}
                onSubmit={(value) => {
                    console.log(value)
                    let formdata = new FormData()
                    formdata.append('categorias', value.categorias)
                    formdata.append('imagen', value.file)

                    axios({
                        url: `${BASE_URL}/admin/create`, method: "POST",
                        headers: {
                        },
                        data: formdata
                    }).then(res => console.log(res.data))

                }}>

                {({ setFieldValue, values, handleSubmit, handleChange, handleBlur }) => (
                    <form className=' creaservicio-form' onSubmit={handleSubmit}>
                        <div className='form-servicio creacion'>
                            <div className='title'> <h2>Crear servicio</h2></div>
                            <div className='subtitle'><p>
                                crea las servicio en el siguiente formulario</p> </div>
                            <div className=''>
                                <label className='label' htmlFor="nombre">categoria</label>
                                <input className='inputs' type='text'
                                    id='categorias'
                                    name='categorias'
                                    values={values.categorias}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                >
                                </input>
                            </div>
                            <div className='input-form'>
                                <label className='labels' htmlFor="password">imagen</label>
                                <div className='input boton-input'>
                                    <p> SELECCIONAR</p>
                                    <input className='input file' type='file'
                                        id='file'
                                        name='file'
                                        values='file'
                                        onChange={(event) => {
                                            setFieldValue("file", event.target.files[0])
                                        }}
                                        onBlur={handleBlur}>
                                    </input>
                                </div>
                            </div>

                            <button className='boton-submit' type='submit'>CREAR</button>

                        </div>
                    </form>
                )}
            </Formik>
        </>
    )
}
export default Formservicio