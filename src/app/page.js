'use client'

import styles from './page.module.css'
import Link from '../components/Link/Link.jsx';
import Button from '@/components/Button/Button';
import Form from 'react-bootstrap/Form';


  const basedatos = [{
      email: "Leo",
      password: "broder1843",
      nombre: "Leonardo",
      apellido:"Salazar",
      tipoDoc:"DNI",
      nDoc:"76569005",
      role:"alumno",
    },
    {
        email: "Alfredo",
        password: "michi123",
        nombre: "Alfred",
        apellido:"Pompeyo",
        tipoDoc:"DNI",
        nDoc:"12345678",
        role:"profesor",
        curso:"Programacion Web",
        horarios:"20/06/2023"
    }
  ];

localStorage.setItem('loggedIn', null)

const handleReset = (event) =>{
    event.preventDefault()
    localStorage.setItem('basedatos',JSON.stringify(basedatos))
}

export default function Home() {
  return (
    <div className={styles.inte}>
      <div className={styles.red}>
        <Link href="/login " text="BIENVENIDO AL MUNDO MAGICO DE GUMBALL" />
      </div>
    <Form onSubmit={handleReset}>
      <div className="op3">
        <Button variant="danger" type="submit"  texto="Reset base de datos"/>
      </div>
    </Form>

    </div>

  )
}

