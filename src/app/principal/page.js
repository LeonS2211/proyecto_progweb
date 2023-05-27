'use client'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './page.modul.css'
import Chip from '../../components/Chip/Chip.jsx'
import { useState } from 'react'
import { useEffect } from 'react';
import BotonCalif from '@/components/BotonCalif/BotonCalif'

const pDocentes = () => {
    const name =["george"];
    const [arr, setArr] = useState([])
    const fechas =["12/06/2023  Hora: 8:00 Am"];
    useEffect(() => {
        setArr(["Alonzo", "Martin"])
    }, [])

    var loggedIn = JSON.parse(localStorage.getItem('loggedIn'))

    return(
        <div>
        {(loggedIn.role == "alumno") ? 
      <div className='welcome'>
      <p className='welcome-text'>¡Bienvenido , {loggedIn.nombre}!  </p>
      <div className='welcome-line'></div>
      <div className='block-citas'>
          <p>Proximas Citas</p>
          <div className='citas'>
                    {
                        arr.map(citas=>{
                            return (<div className='fr' key={citas}><Chip text={citas} fecha={fechas}/> </div>)
                        })
                    }
          </div>
      
        </div>
        <div className='espacio'></div>
        <BotonCalif/>

  </div> 
    :
        <div className='welcome'>
        <p className='welcome-text'>¡Bienvenido ,Profesor {loggedIn.nombre}!  </p>
        <div className='welcome-line'></div>
        <div className='block-citas'>
            <p>Proximas Citas</p>
        <ul className='citas'>
    <li>Elemento 1</li>
    <li>Elemento 2</li>
    <li>Elemento 3</li>
    {/* Agrega más elementos según sea necesario */}
  </ul>
  </div>
    </div> 
}
    </div>
    
    )
} 

export default pDocentes


