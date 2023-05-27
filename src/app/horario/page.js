'use client';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import HorarioApi from '@/api/horario.js';
import ListGroups from '../../components/ListGroup/ListGroup.jsx';

const hDocentes = () => {
    
  const defaultHorario = {
    diasem: "",
    hinicio: "",
    hfin: "",
    link: ""
}

const horarios = HorarioApi.getAll();

const [horario, setHorario] = useState(defaultHorario)

const handleOnClick = () => {

    HorarioApi.save(horario);
    const horarios = HorarioApi.getAll();
    console.log(horarios);
}

return(
    <div>
        <h1>MIS HORARIOS</h1>
        <h5>Agregue sus horarios según su disponibilidad</h5>
        <div>
            <Form.Label htmlfor="diasem">Dia de semana</Form.Label>
            <Form.Control type="text" id="diasem"
                value={horario.diasem}
                onChange={e=>setHorario({...horario, diasem: e.target.value})}/>
            
            <Form.Label htmlfor="hinicio">Hora de inicio</Form.Label>
            <Form.Control type="text" id="hinicio"
                value={horario.hinicio}
                onChange={e=>setHorario({...horario, hinicio: e.target.value})}/>
            
            <Form.Label htmlfor="hfin">Hora de fin</Form.Label>
            <Form.Control type="text" id="hfin"
                value={horario.hfin}
                onChange={e=>setHorario({...horario, hfin: e.target.value})}/>
            
            <Form.Label htmlfor="link">Enlace de asesoria</Form.Label>
            <Form.Control type="text" id="link"
                value={horario.link}
                onChange={e=>setHorario({...horario, link: e.target.value})}/>
        </div>
        <br/>
        <Button onClick={()=>handleOnClick()} >GUARDAR</Button>
        {
            horarios.map ((elemento) => (
                <div>
                <br/>
                <ListGroups
                    
                    diasem = {elemento.diasem}
                    hinicio = {elemento.hinicio}
                    hfin = {elemento.hfin}
                    link = {elemento.link}
                />
                </div>
            ))            
        }
     </div>
);
}

export default hDocentes