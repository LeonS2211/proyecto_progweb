'use client';
import { useEffect, useState } from 'react'
import Cards from '../../components/Cards/Cards.jsx'
import Button from 'react-bootstrap/Button';
import ProfesorApi from '@/api/profesor.js';
import styles from './page.modul.css';

function CitasAlumno() {
    const arr = ProfesorApi.getAll();
    const handleClick1 = () => {
        window.location.href = "/miscitasPa"
      }
    
    if(arr.length!=0){
        return(
            <div >
                <h1 class="letra">Mis citas</h1>
                <a class="btn btn-primary" href="#" id="Boton">Programar cita</a>  
                <Button  onClick={handleClick1} className='CPa'>Citas pasadas</Button>  
                <h5 class="letra">Citas de asesorias reservadas</h5>
                <div class="contenedor">
                {
                    arr.map ((elemento) => (
                        <div class="card">
                        <Cards
                            nombre = {elemento.nombre}
                            titulo = {elemento.titulo}
                            fecha = {elemento.fecha}
                            curso = {elemento.curso}
                            link = 'https://zoom.us/es'
                        /> 
                        </div>
                    ))
                }
                </div>
            </div>
        )
    }else{
        return(
            <div>
                <h1 class="letra">Mis citas</h1>
                <h3 class="letra">Actualmente no tiene citas de asesorias reservadas</h3>
                <a class="btn btn-primary" href="#">Programar cita</a>  
            </div>
        )
    }

    
}

export default CitasAlumno;