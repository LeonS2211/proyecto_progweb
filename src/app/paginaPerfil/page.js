'use client';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


import { useState } from 'react'
import { Button } from 'react-bootstrap';
import PersonaApi from '@/api/persona.js'
import TabBar from '@/components/TabBar/TabBar';

import Modal from 'react-bootstrap/Modal';




const paginaPerfil = () =>{
  
  const [showDatosPersona, setShowDatosPersona ] = useState(true)


  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };


  const handleSave = () => {
    // Aquí puedes realizar la lógica para guardar la imagen
    // Por ejemplo, puedes enviarla al servidor o procesarla de alguna forma

    handleCloseModal();
  };



    const defaultPersona = {
        nombres: "",
        apellidos: "",
        tipodocumento: "",
        numero: "",
        rol: ""
    }

    const [persona, setPersona] = useState(defaultPersona)

    const handleDatosPersonaChange = () => {
      PersonaApi.save(persona)
      const personas = PersonaApi.getAll()
      console.log(personas)
    }
    
    return(
      <div>

        <div>
                <DropdownButton 
                    id="dropdown-basic-button" 
                    title="Datos"
                    onSelect={e => handleOnDropdownChange(e)}>
                    <Dropdown.Item eventKey="persona">Datos de Persona</Dropdown.Item>
                    
                </DropdownButton>

        </div>
        {
          showDatosPersona ?
          <div>
              <h3>Datos de Persona</h3>
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
          :
          <div>
            <p>FALSO</p>
          </div>
        
          
                 
        }

        <div>
              <Button onClick={() => handleDatosPersonaChange()}>GUARDAR</Button>
        </div>
        
        <div>
        <img src="https://www.ulima.edu.pe/sites/default/files/styles/600x300/public/news/img/agenda-2-foromejoracontinua-may2022_0.jpg?itok=Z3bSJtG3" alt="Mi Imagen" />
          <p>Adjuntar foto</p>
        </div>

        <div>
          <TabBar>asdsa</TabBar>
        </div>


        <Button onClick={handleOpenModal}>Adjuntar imagen</Button>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Adjuntar imagen</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type="file" onChange={handleImageUpload} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleSave} disabled={!selectedImage}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>

        

      </div>
    )
}

export default paginaPerfil;
