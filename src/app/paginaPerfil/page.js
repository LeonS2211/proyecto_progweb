'use client';
import React, { useState } from 'react';
import PersonalInfo from '../../components/PersonalInfo/PersonalInfo.jsx';
import UserData from '../../components/UserData/UserData.jsx';
import University from '../../components/University/University.jsx';
import Presentation from '../../components/Presentation/Presentation.jsx';
import './styles.css'

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
      setUniversidad(e.target.value);
    };
    const handleCarreraChange=(e)=>{
      setTextBusqueda2(e.target.value);

  }
  const handleCursoChange=(e)=>{
      setTextBusqueda3(e.target.value);

  }

  // Handlers y funciones de búsqueda aquí

  return (
    <div>
      <div>
        {/* Componente PersonalInfo */}
        <PersonalInfo persona={persona} setPersona={setPersona} />
      </div>

      <div>
        <p>------------------------------------------------------------</p>
        <h3>Contenido de la página principal</h3>

        {/* Componentes UserData, University y Presentation */}
        <UserData usuario={usuario} setUsuario={setUsuario} />
        <University
          arr1={arr1}
          arr2={arr2}
          arr3={arr3}
          textBusqueda1={textBusqueda1}
          textBusqueda2={textBusqueda2}
          textBusqueda3={textBusqueda3}
          handleUniversidadChange={handleUniversidadChange}
          handleCarreraChange={handleCarreraChange}
          handleCursoChange={handleCursoChange}
        />
        <Presentation presentacion={presentacion} setPresentacion={setPresentacion} />
      </div>
    </div>
  );
};

export default paginaPerfil;
