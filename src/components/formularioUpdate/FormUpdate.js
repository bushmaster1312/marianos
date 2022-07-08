import axios from 'axios'
import { Formik } from 'formik'
import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Context } from '../../store/AppContext'
import { BASE_URL } from '../../utils/BASE_URL'
import "./formupadate.css"


const FormUpdate = () => {
    

    const { id } = useParams()
    const { getServicios, servicios, getServiciosAdmin } = useContext(Context)
    useEffect(() => {
        getServicios(`${BASE_URL}/servicios`)

    }, [])

  



    return (
        <>

            <Formik
                initialValues={{
                    descripcion: '',
                    precio: '',
                    file: null,



                }}
                onSubmit={(value) => {
                    console.log(value)
                    let formdata = new FormData()
                    formdata.append('idservicios', value.idservicios)
                    formdata.append('categoria', value.categoria)
                    formdata.append('precio', value.precio)
                    formdata.append('descripcion', value.descripcion)
                    formdata.append('imagencategoria', value.file)
                    console.log(formdata)
                    if (id) {
                        axios({
                            url: `${BASE_URL}/servicios/${id}`, method: "PUT",
                            headers: {
                               
                            },
                            data: `${id}` && formdata
                        }).then(res => console.log(res.data))

                    } else {
                        axios({
                            url: `${BASE_URL}/servicios`, method: "POST",
                            headers: {
                                
                            },
                            data: formdata
                        }).then(() => getServiciosAdmin(`${BASE_URL}/admin`))
                    }
                }}>


                {({ setFieldValue, values, handleSubmit, handleChange, handleBlur }) => (

                    <form className='formulario' onSubmit={handleSubmit}>
                        <div className='form-servicio'>
                            <div className='title'> <h2>Crear categoria</h2></div>
                            <div className='subtitle'><p>
                                crea las categorias en el siguiente formulario</p> </div>
                            <div className='input-container ic2'>
                                <label className='label' htmlFor="nombre">descripcion</label>
                                <input className=' inputs' type='text'
                                    id='descripcion'
                                    name='descripcion'
                                    values={values.descripcion}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                >
                                </input>
                            </div>
                            <div className="input-container ic2">
                                <label className='label' htmlFor='apellido'>precio</label>
                                <input className='inputs' type='text'
                                    id='precio'
                                    name='precio'

                                    values={values.precio}
                                    onChange={handleChange}
                                    onBlur={handleBlur}>

                                </input>
                            </div>

                            <div className='form-selects'>
                               
                                <select
                                    className='select'
                                    name="idservicios"
                                    value={values.idservicios}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    

                                >
                                    <option  value={" "} label="seleccion categoria"></option>
                                    {
                                        servicios.length === 0 ? <div><p >nos hay datos</p></div> : servicios.map((servicio, idx) => (
                                            <option key={idx} value={`${servicio.idservicios}`} label={`${servicio.idservicios}.${servicio.categorias}`}>
                                                {Number(`${servicio.idservicios}`)}
                                            </option>
                                        ))}
                                </select>
                            </div>


                            <div className='input-container'>
                                <label className='label'>categoria</label>
                                <input className='inputs' type='text'
                                    id='categoria '
                                    name='categoria'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                >
                                </input>
                            </div>
                            <div className='input-boton'>
                                <label className='label-imagen'>Selecciona una imagen</label>
                                <input className='input-file' type='file'
                                    id='file'
                                    name='file'
                                    values='file'
                                    onChange={(event) => {
                                        setFieldValue("file", event.target.files[0])
                                    }}
                                    onBlur={handleBlur}>

                                </input>
                            </div>


                            <button
                            className='submit-2' type='submit'>subir</button>
                        </div>
                        
                    </form>
                )}




            </Formik>



        </>
    )
}

export default FormUpdate