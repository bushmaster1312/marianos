import React from 'react'
import axios from 'axios'
import { Formik } from 'formik'
import { BASE_URL } from '../../utils/BASE_URL'
import './formPro.css'



const FormProfecionales = () => {
    return (
        <>
            <div className='container contenedor-form-profecionales'>
                <Formik className=""
                    initialValues={{
                        categorias: "",
                        file: null
                    }}
                    onSubmit={(value) => {
                        console.log(value)
                        let formdata = new FormData()
                        formdata.append('nombre', value.nombre)
                        formdata.append('apellido', value.apellido)
                        formdata.append('descripcion', value.descripcion)                        
                        formdata.append('imagen', value.file)

                        axios({
                            url: ` ${BASE_URL}/profecionales `, method: "POST",
                            headers: {
                            },
                            data: formdata
                        }).then(res => console.log(res.data))

                    }}>

                    {({ setFieldValue, values, handleSubmit, handleChange, handleBlur }) => (
                        <form className=' creaservicio-form' onSubmit={handleSubmit}>
                            <div className='form-servicio creacion'>
                                <div className='title'> <h2>Crear nuevo personal</h2></div>
                                <div className='subtitle'><p>
                                    formulario para personal</p>
                                </div>
                                <div className=''>
                                    <label className='label label-2' htmlFor="nombre">Nombre</label>
                                    <input className='inputs' type='text'
                                        id='nombre'
                                        name='nombre'
                                        values={values.nombre}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    >
                                    </input>
                                </div>
                                <div className=''>
                                    <label className='label label-2' >Apellido</label>
                                    <input className='inputs' type='text'
                                        id='apellido'
                                        name='apellido'
                                        values={values.apellido}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    >
                                    </input>
                                </div>
                                <div className=''>
                                    <label className='label label-2' >Descripcion</label>
                                    <input className='inputs' type='text'
                                        id='descripcion'
                                        name='descripcion'
                                        values={values.descripcion}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    >
                                    </input>
                                </div>
                                <div className='input-form'>
                                    <label className='labels label-2' >imagen</label>
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
            </div>
        </>
    )
}

export default FormProfecionales