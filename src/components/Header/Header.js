import React from 'react'
import About from '../../pages/About/About'
import admins from '../../pages/Admins/admins'
import clientes from '../../pages/clientes/clientes'
import index from '../../index'
import '../../styles/Header.css'

export const Header = () => {
  let Component
  switch (window.location.pathname){
    
    case "/":
      Component = <index/>
      break
      case "/clientes":
        Component = clientes
        break
        case "/admins":
          Component =  admins
          break
          case "/About":
            Component = About
            break
  }
  return (

    <nav className="nav">
      <a href="/" className='site-title'>Kodificados</a>
      <ul>
        <li>
          <a href="#">Clientes</a>
          </li>
          <li>
          <a href="#">Admin</a>
        </li>
        <li>
          <a href="/About">Nosotros</a>
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

