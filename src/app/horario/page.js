'use client'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../horario/page.modul.css'
import Chip from '../../components/Chip/Chip.jsx'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react';
import Link from '../../components/Link/Link.jsx';
import Dropdown  from 'react-bootstrap/Dropdown'
import DropdownButton  from 'react-bootstrap/DropdownButton'

var loggedIn = JSON.parse(localStorage.getItem('loggedIn'))
const hDocentes = () => {
    
    


    return (
    <div>
    {(loggedIn.role == "profesor") ? 
      <div>
        aaaaaaaaaaaaa
      </div>
    :
      <div className='sec'>
        <div className='welcome-text2'>Mis horarios  </div>
        <div className='welcome-line2'></div>
        
        <div className='secHoras'>
            Agrege sus horarios disponibles durante la semana
        </div>
        <div className='Gdatos'>
        <Form.Label htmlFor="Nombres">Nombres</Form.Label>
                    <Form.Control type="text" id="Nombres"/>
        </div>
        <div className='Infor'>aaaaaaaaaaaa</div>
        </div>
        
        
    }
    </div>



        
    )

    
} 

export default hDocentes