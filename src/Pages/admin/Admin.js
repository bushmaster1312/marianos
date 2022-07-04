
import React, { useContext, useEffect, useState } from 'react'

import { Context } from '../../store/AppContext'

import AdminaNav from '../../components/admin_nav/AdminaNav'
import Formservicio from '../../components/form_creacion_serevicio/Formservicio'

import FormUpdate from '../../components/formularioUpdate/FormUpdate'
import { BASE_URL } from '../../utils/BASE_URL'
import "./admin.css"
import MostrarServicios from '../../components/mostrar_servicios_admin/MostrarServicios'
import MostrarServicios2 from '../../components/mostrar_servicios_2_admin/MostrarServicios2'
import FormProfecionales from '../../components/formProfecionales/FormProfecionales'




const Admin = () => {

  const elements = ["crear servicios", "crear categorias", "crear profecionales"]
  const [cambiarElemento, setCambiarElemento] = useState("")
  const {  getServiciosAdmin, getServicios } = useContext(Context)
  // const deleteServicio = async (id) => {
  //   await axios.delete(`${BASE_URL}/servicios/${id}`)
  //   getServiciosAdmin(`${BASE_URL}/admin`)
  // }
  useEffect(() => {
    getServiciosAdmin(`${BASE_URL}/admin`)
    getServicios(`${BASE_URL}/servicios`)
  }, [])





  return (
    <div className='admin'>
      <AdminaNav />

      <div className='grup-select' >



        {
          elements.map(element => (
            <button
              type='button'
              key={element}
              className="select-creacion"
              onClick={() => setCambiarElemento(element)}
            >

              {element.toLocaleUpperCase()}
            </button>
          ))}

      </div>



      <>

        {cambiarElemento === "crear categorias" &&
          <div>
            <FormUpdate />
            <MostrarServicios />
          </div>
        }
        {cambiarElemento === "crear servicios" &&

          <div className='container modificar-servicios '>
            <div className='row row-servicio'>

              <div className='col-12 columna-crear-servicio' >

                <Formservicio />
                <MostrarServicios2 />
              </div>
            </div>
          </div>
        }
        <FormProfecionales/>

      </>
    </div>
  )
}

export default Admin