'use client';
import React, { useState } from 'react';
import PersonalInfo from '../../components/PersonalInfo/PersonalInfo.jsx';
import UserData from '../../components/UserData/UserData.jsx';
import University from '../../components/University/University.jsx';
import Presentation from '../../components/Presentation/Presentation.jsx';
import './styles.css'
import { Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';

const paginaPerfil = () => {
  const [persona, setPersona] = useState({
    nombres: '',
    apellidos: '',
    tipodocumento: '',
    numero: '',
    rol: ''
  });

  const [usuario, setUsuario] = useState({
    usuario: '',
    constraseñaActual: '',
    nuevaContraseña: '',
    repetirContraseña: ''
  });

  const [presentacion, setPresentacion] = useState({
    titulo: '',
    presentacion: ''
  });


  const universidad =["ulima", "pucp", "up", "unmsm", "uni", "usmp"]
    const [arr1,setArr1] = useState(universidad)
    const [textBusqueda1, setTextBusqueda1] = useState("")

    const carrera = ["informatica", "software", "cienciaComp", "sistemas"]
    const [arr2,setArr2] = useState(carrera)
    const [textBusqueda2, setTextBusqueda2] = useState("")

    const curso = ["prograWeb", "SistOpe", "Lp", "ArqSoft"]
    const [arr3,setArr3] = useState(curso)
    const [textBusqueda3, setTextBusqueda3] = useState("")

    const handleUniversidadChange = (e) => {
      setTextBusqueda1(e.target.value);
    };
    const handleCarreraChange=(e)=>{
      setTextBusqueda2(e.target.value);

  }
  const handleCursoChange=(e)=>{
      setTextBusqueda3(e.target.value);

  }

  

  return (
    <div>

      <div>
                    <h3>MI PERFIL</h3>
                    <div>
                    <Button onClick={() => handleDatosPersonaChange()}>GUARDAR</Button>
                    </div>
      </div>
      <div>
        
        <PersonalInfo persona={persona} setPersona={setPersona} />
      </div>

      <div>
        <p>------------------------------------------------------------</p>
        <h3>Contenido de la página principal</h3>



        <Tab.Container defaultActiveKey="userData">
          <Nav variant="tabs">
            <Nav.Item>
              <Nav.Link eventKey="userData">User Data</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="university">University</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="presentation">Presentation</Nav.Link>
            </Nav.Item>
          </Nav>

          <Tab.Content>
            <Tab.Pane eventKey="userData">
              <UserData usuario={usuario} setUsuario={setUsuario} />
            </Tab.Pane>
            <Tab.Pane eventKey="university">
              <University
                arr1={arr1}
                arr2={arr2}
                arr3={arr3}
                textBusqueda1={textBusqueda1}
                setTextBusqueda1={setTextBusqueda1}
                textBusqueda2={textBusqueda2}
                setTextBusqueda2={setTextBusqueda2}
                textBusqueda3={textBusqueda3}
                setTextBusqueda3={setTextBusqueda3}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="presentation">
              <Presentation presentacion={presentacion} setPresentacion={setPresentacion} />
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </div>
  );
};

export default paginaPerfil;
