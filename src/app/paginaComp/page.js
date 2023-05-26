'use client';

import TabBar from '@/components/TabBar/TabBar';
import Form from 'react-bootstrap/Form';
import { useState } from 'react'
import { Button } from 'react-bootstrap';
import PersonaApi from '@/api/persona.js'

import TabContent from 'react-bootstrap/TabContent';
import { Tab, Tabs, TabPane  } from 'react-bootstrap';
import TabContainer from 'react-bootstrap/TabContainer';

import Chip from '../../components/ChipG/ChipG.jsx'
import './styles.css'

const paginaComp=()=>{

    
    
    const [showDatosPersona, setShowDatosPersona ] = useState(true)
    const defaultPersona = {
        nombres: "",
        apellidos: "",
        tipodocumento: "",
        numero: "",
        rol: ""
    }
    const [persona, setPersona] = useState(defaultPersona)


    const [showDatosUsuario, setShowDatosUsuario ] = useState(true)
    const defaultUsuario = {
        usuario:"",
        constraseñaActual:"",
        nuevaContraseña:"",
        repetirContraseña:""
    }
    const [usuario, setUsuario] = useState(defaultUsuario)

    const universidad =["ulima", "pucp", "up", "unmsm", "uni", "usmp"]
    const [arr1,setArr1] = useState(universidad)
    const [textBusqueda1, setTextBusqueda1] = useState("")

    const carrera = ["informatica", "software", "cienciaComp", "sistemas"]
    const [arr2,setArr2] = useState(carrera)
    const [textBusqueda2, setTextBusqueda2] = useState("")

    const curso = ["prograWeb", "SistOpe", "Lp", "ArqSoft"]
    const [arr3,setArr3] = useState(curso)
    const [textBusqueda3, setTextBusqueda3] = useState("")

    const [showPresentacion, setShowPresentacion] = useState(true)
    const defaultPresentacion = {
        titulo:"",
        presentacion:""
    }
    const [presentacion, setPresentacion]=useState(defaultPresentacion)

    const handleDatosPersonaChange = () => {
      PersonaApi.save(persona)
      const personas = PersonaApi.getAll()
      console.log(personas)
    }

    const handleDatosUsuarioChange = ()=>{
        PersonaApi.save(usuario)
        const usuarios = PersonaApi.getAll()
        console.log(usuarios)
    }

    const handlePresentacionChange =()=>{
        PersonaApi.save(presentacion)
        const presentaciones = PersonaApi.getAll()
        console.log(presentaciones)
    }

    function TabBar() {
        return (
          <Tabs defaultActiveKey="datosUsuario" id="fill-tab-example" className="mb-3" fill>
            <Tab eventKey="datosUsuario" title="Datos de Usuario">

                <div>
                    <Form.Label htmlFor="usuario">Usuario</Form.Label>
                    <Form.Control type="text" id="usuario"
                                            value={usuario.usuario}
                                            onChange={e => setPersona({...usuario, usuario: e.target.value})}/>

                    <Form.Label htmlFor="constraseñaActual">constraseñaActual</Form.Label>
                    <Form.Control type="text" id="constraseñaActual"
                                            value={usuario.constraseñaActual}
                                            onChange={e => setPersona({...usuario, constraseñaActual: e.target.value})}/>

                    <Form.Label htmlFor="nuevaContraseña">nuevaContraseña</Form.Label>
                    <Form.Control type="text" id="nuevaContraseña"
                                            value={usuario.nuevaContraseña}
                                            onChange={e => setPersona({...usuario, nuevaContraseña: e.target.value})}/>

                    <Form.Label htmlFor="repetirContraseña">repetirContraseña</Form.Label>
                    <Form.Control type="text" id="repetirContraseña"
                                            value={usuario.repetirContraseña}
                                            onChange={e => setPersona({...usuario, repetirContraseña: e.target.value})}/>

                </div>
              

                


            </Tab>
            <Tab eventKey="universidad" title="Universidad">
                <div>
                    <div>
                        <Form.Control 
                            type="text"
                            value={textBusqueda1}
                            onChange={e => setTextBusqueda1(e.target.value)}
                        ></Form.Control>
                        <ul className="nobullets">
                            { arr1.filter(f => f.includes(textBusqueda1))
                                .map(universidad =>{
                                return (<li key={universidad} >
                                    <Chip text={universidad} />
                                    </li>)
                            }) } 
                        </ul>
                    </div>

                    <div>
                        <Form.Control 
                            type="text"
                            value={textBusqueda2}
                            onChange={e => setTextBusqueda2(e.target.value)}
                        ></Form.Control>
                        <ul className="nobullets">
                            { arr2.filter(f => f.includes(textBusqueda2))
                                .map(carrera =>{
                                return (<li key={carrera} >
                                    <Chip text={carrera} />
                                    </li>)
                            }) } 
                        </ul>
                    </div>

                    <div>
                        <Form.Control 
                            type="text"
                            value={textBusqueda3}
                            onChange={e => setTextBusqueda3(e.target.value)}
                        ></Form.Control>
                        <ul className="nobullets">
                            { arr3.filter(f => f.includes(textBusqueda3))
                                .map(curso =>{
                                return (<li key={curso} >
                                    <Chip text={curso} />
                                    </li>)
                            }) } 
                        </ul>
                    </div>

                </div>

              
            </Tab>


            <Tab eventKey="presentacion" title="Presentación">
                <div>
                    <Form.Label htmlFor="titulo">titulo</Form.Label>
                    <Form.Control type="text" id="titulo"
                                            value={presentacion.titulo}
                                            onChange={e => setPersona({...presentacion, titulo: e.target.value})}/>

                    <Form.Label htmlFor="presentacion">presentacion</Form.Label>
                    <Form.Control type="text" id="presentacion"
                                            value={presentacion.presentacion}
                                            onChange={e => setPersona({...presentacion, presentacion: e.target.value})}/>
                </div>
              
            </Tab>
          </Tabs>
        );
      }

    return(
        
        <div>
            <div>
                <div>
                    <h3>MI PERFIL</h3>
                    <div>
                    <Button onClick={() => handleDatosPersonaChange()}>GUARDAR</Button>
                    </div>
                </div>

                <div>
                    <h3>Información Personal</h3>
                    <Form.Label htmlFor="Nombres">Nombres</Form.Label>
                    <Form.Control type="text" id="Nombres"
                        value={persona.nombres}
                        onChange={e => setPersona({...persona, nombres: e.target.value})}/>

                    <Form.Label htmlFor="Apellidos">Apellidos</Form.Label>
                    <Form.Control type="text" id="Apellidos"
                        value={persona.apellidos}
                        onChange={e => setPersona({...persona, apellidos: e.target.value})}/>

                    <Form.Label htmlFor="Tipo de documento">Tipo de documento</Form.Label>
                    <Form.Control type="text" id="Tipo de documento"
                        value={persona.tipodocumento}
                        onChange={e => setPersona({...persona, tipodocumento: e.target.value})}/>
              
                    <Form.Label htmlFor="Numero">Numero</Form.Label>
                    <Form.Control type="text" id="Numero"
                        value={persona.numero}
                        onChange={e => setPersona({...persona, numero: e.target.value})}/>

                    <Form.Label htmlFor="Rol">rol</Form.Label>
                    <Form.Control type="text" id="Rol"
                        value={persona.rol}
                        onChange={e => setPersona({...persona, rol: e.target.value})}/>

                </div>
            
              

              
                
            </div>
            <div>
                <p>------------------------------------------------------------</p>
                <h3>Contenido de la página principal</h3>

                <TabBar />
            </div>
          
        </div>
    )
}

export default paginaComp;