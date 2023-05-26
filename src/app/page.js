'use client'

import styles from './page.module.css'
import Link from '../components/Link/Link.jsx';


/*
 const basedatos = [
   {
     username: "Leonardo@gmail.com",
     password: "broder1843",
     role: "profesor"
   },
   {
     username: "Alfredo",
     password: "michi123",
     role: "alumno"
   }
 ];

  localStorage.setItem('basedatos',JSON.stringify(basedatos))
*/

localStorage.setItem('loggedIn', null)

export default function Home() {
  return (
    <div className={styles.inte}>
      
        <div className={styles.red}>
        <Link href="/login " text="BIENVENIDO AL MUNDO MAGICO DE GUMBALL" />
        </div>

    </div>
  )
}

