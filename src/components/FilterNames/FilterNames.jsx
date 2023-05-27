import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Chip from '../ChipL/ChipL.jsx'
import './style.css'




const FilterNames =()=>{
    const baseDatos = JSON.parse(localStorage.getItem('basedatos'))
    const profesores = baseDatos.filter(f => (f.role)=="profesor")
    const [arr, setArr] = useState(profesores)
    const [textBusqueda, setTextBusqueda] = useState("")

    const handleCita =({profesor},event)=>{
        event.preventDefault()
        localStorage.setItem('citaVision',JSON.stringify(profesor))
    }

    return (
        <div>
            <Form.Control 
                type="text"
                value={textBusqueda}
                onChange={e => setTextBusqueda(e.target.value)}
                ></Form.Control>
            <ul className="nobullets">
                    { arr.filter(f => (f.nombre).includes(textBusqueda))
                        .map(profesor =>{
                        return (<li key={profesor.nombre} >
                            <Chip nombre={profesor.nombre} curso={profesor.curso} handleCita={(event) => handleCita(event, { profesor })}/>
                            </li>)
                    }) } 
            </ul>
        </div>
    )
}

export default FilterNames