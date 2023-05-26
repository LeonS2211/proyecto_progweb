"use client"
import 'bootstrap/dist/css/bootstrap.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.js' ;
import '../components/Style/Style.jsx'
import './globals.css'
import { Inter } from 'next/font/google'
import { useEffect } from 'react';
import dynamic from "next/dynamic";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

function RootLayout({ children }) {
const router = useRouter();
var loggedIn = JSON.parse(localStorage.getItem('loggedIn'))
const [asideVisible, setAsideVisible] = useState(false);
const handleClick = () => {
    setAsideVisible(!asideVisible);
  };


const handleClick1 = () => {
    alert('Hola')
}

const handleClick2 = () => {
    
    window.location.href = "/paginaComp"
}
const handleClick3 = () => {
  window.location.href = "/horario"

}
const handleClick4 = () => {
  window.location.href = "/miscitas"

}

  return (
    
    <html style={{maxWidth:'100vw' ,Height:'100vw', overflow:'auto'}}>
      <head>

      </head>
      <body className='body'>
      {(loggedIn === null) ? 
      <div>
        <header className='cabecera'>
          <main className='Titulo2'> Sistema de Citas para Atencion a Estudiantes</main>
        </header>
        <div className='container'>
          {children}
        </div>
      </div>
      :
      <div>
        <header className='cabecera'>
          <div className='menu-icon'onClick={handleClick}>&#9776;</div>
            <main className='Titulo'> Atencion al cliente</main>
          <div>Perfil</div>
        </header>
        <div className='container'>
          <aside className={`aside ${asideVisible ? 'show' : ''}`}>
            <ul>
              <button onClick={handleClick1} className='Bpri'>
                Principal
              </button>
              <button onClick={handleClick2} className='Bpri'>
                Perfil
              </button>
              {(loggedIn.role== "profesor") ? 
              <button onClick={handleClick3} className='Bpri'>
              Horarios
              </button>
              :
              <button onClick={handleClick4} className='Bpri'>
              Citas
              </button>}

              
            </ul>
          </aside>
          {children}
          </div>
        </div>
        }
      </body>        
    </html>
  )
}

export default dynamic(() => Promise.resolve(RootLayout), {
  ssr: false,
});