'use client'

import principal from '../page.js'
import Button from '../../components/Button/Button.jsx';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Select from '../../components/Select/Select.jsx'

const Registro = () => {

  const basedatosL=JSON.parse(localStorage.getItem('basedatos'))


  const handleRegistro = () =>{
    
  }
    return (
        <div>
        <Form onSubmit={handleRegistro}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="EmailR">
          <Form.Label>Correo electronico</Form.Label>
          <Form.Control type="email" placeholder="|" required id="EmailR"/>
        </Form.Group>

        <Form.Group as={Col} controlId="PasswordR">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="|" id="PasswordR"/>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="space">
        </Form.Group>
        <Form.Group as={Col} controlId="PasswordConfirmR">
          <Form.Label>Ingrese Password nuevamente</Form.Label>
          <Form.Control type="password" placeholder="|" id="PasswordConfirmR"/>
        </Form.Group>
      </Row>


      <h6>Datos personales</h6>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="NombresR">
          <Form.Label>Nombres</Form.Label>
          <Form.Control type="text" placeholder="|" required id="NombresR"/>
        </Form.Group>

        <Form.Group as={Col} controlId="ApellidosR">
          <Form.Label>Apellidos</Form.Label>
          <Form.Control type="text" placeholder="|" required id="ApellidosR"/>
        </Form.Group>
      </Row>
      <Row className="mb-3">
      <Form.Group as={Col} controlId="TipoDocR">
      <Form.Label>Tipo de documento</Form.Label>
        <Select optDefault ="DNI" opt1="Carnet Extranjero" opt2 ="Pasaporte" required id="TipoDocR"></Select>
      </Form.Group>

        <Form.Group as={Col} controlId="NroDocR">
          <Form.Label>Nro de documento</Form.Label>
          <Form.Control type="text" placeholder="|" required id ="NroDocR"/>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        
        <Form.Group as={Col} controlId="RoleR">
          <Form.Label>Rol</Form.Label>
          <Form.Control type="text" placeholder="|" required id="RoleR"/>
        </Form.Group>
        <Form.Group as={Col} controlId="space">
        </Form.Group>
      </Row>
      

      <Button variant="primary" type="submit" text ="Registrar"></Button>
    </Form>
    </div>
    )
}

export default Registro