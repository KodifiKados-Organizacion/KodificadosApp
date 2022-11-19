import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/components/Header.css'
import logo from '../../assets/imgs/logo10_22_162944.png'
import { useContext } from 'react'
import { AuthContext } from '../../auth/Context'

export const Header = (props) => {
const { user, logged, logout } = useContext( AuthContext );

  const HandleLogout = () => {
    logout();
  }

  return (

    <nav className="nav">
      <Link to="/" className='site-title'>
        <img src={ logo } alt="Logo KodifiKados" className='logo-header' />
      </Link>
      <ul>
        {logged?<li>
          <Link to='Cliente'>Clientes</Link>
          </li>:null}
          { logged && user.admin?<li>
          <Link to='Admin'>Admin</Link>
        </li>:null}
        <li>
          <Link to='About'>Nosotros</Link>
        </li>
        { logged ? <li><Link>{ user.user }</Link></li> : null }
        { logged ? <li onClick={HandleLogout}><Link to='/Login'> LogOut </Link></li> :<li><Link to='/Login'>Login</Link></li>}
       
      </ul>



    </nav>
  )
}


