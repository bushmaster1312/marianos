import axios from 'axios'
import React, { createContext,  useState } from 'react'
export const Context = createContext(null)

const AppContext = ({ children }) => {





  const [servicios, setServicios] = useState([])
  const getServicios = (ruta) => {
    axios.get(`${ruta}`)
      .then(data => {
        setServicios(data.data.servicios)
      })
  }





  const [serviciosadmin, setServiciosAdmin] = useState([])
  const getServiciosAdmin = (ruta) => {
    axios.get(`${ruta}`)
      .then(data => {
        setServiciosAdmin(data.data.servicios)
      })
  }



  const [usuario, setUsuario] = useState(null)

  // estado login

  const [logeed, setLogeed] = useState()






  return (
    <Context.Provider value={{
      servicios,
      logeed,
      setLogeed,
      usuario,
      setUsuario,
      getServicios,
      serviciosadmin,
      getServiciosAdmin,
    }}>
      {children}
    </Context.Provider>
  )
}

export default AppContext