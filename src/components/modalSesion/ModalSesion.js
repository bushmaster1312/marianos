
import React from 'react'
import styledComponents from 'styled-components'

const ModalSesion = ({ children, estado, cambiarestado }) => {

    return (
        <>
            {estado &&
                <Overlay>
                    <ContenedorModal>
                        <EncabezadoModal>
                            <h3>titulo</h3>
                        </EncabezadoModal>
                        <BotonCerrar onClick={()=>cambiarestado(false)}>X</BotonCerrar >
                        {children}
                    </ContenedorModal>
                </Overlay>

            }

        </>
    )
}



export default ModalSesion

const Overlay = styledComponents.div`
width:100vw;
height:100vh;
position: fixed;
top:0;
left:0;
background: rgba(0,0,0, .5);
padding: 40px;
display:flex;
aling-items: center;
justify-content:center;
`
const ContenedorModal = styledComponents.div`
width:500px;
height:900px;
background:#fff;
border-radius: 5px;
box-shadow: rgba(100,100,111, 0.2) 0px 7px 29px 0px;
padding:20px;

`

const EncabezadoModal = styledComponents.div`
display:flex;
aling-items:center;
justify-content:space-between;
margin-botton:20px;
padding-botton:20px;
border-botton: 1px solid #e8e8e8;

h3{
    font-weight:500;
    font-size: 25px;
    color: #f00;
    
}

`


const BotonCerrar = styledComponents.div`
position:absolute;
top:53px;
right:450px;
font-size:30px;
width:20px;
height:20px;
border: none;
color: yellow;
cursor:pointer;
transition: .3s ease all;
border-radius:5px;
&:hover {
    color:red;
}

`