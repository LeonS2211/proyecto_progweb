'use client'

import styles from './page.module.css'
import Link from '../components/Link/Link.jsx';

export default function Home() {
  return (
    <main >
      <ul>
        <li>
        <Link href="/perfil" text="perfil" />
        </li>
	<li>
          <Link href="/paginaPerfil" text="paginaPerfil" />
        </li>
      </ul>
    </main>
  )
}
