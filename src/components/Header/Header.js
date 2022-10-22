import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/components/Header.css'

export const Header = () => {
  return (

    <nav className="nav">
      <Link to="/" className='site-title'>Kodificados</Link>
      <ul>
        <li>
          <Link to='Cliente'>Clientes</Link>
          </li>
          <li>
          <Link to='Admin'>Admin</Link>
        </li>
        <li>
          <Link to='About'>Nosotros</Link>
        </li>
      </ul>

    </nav>

    

    

    
/*     <div>
        <header>
            <h1>Bienvenidos</h1>
        </header>
    </div> */
  )
}


