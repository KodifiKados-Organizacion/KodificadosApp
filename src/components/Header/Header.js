import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/components/Header.css'
import logo from '../../assets/imgs/logo10_22_162944.png'

export const Header = () => {
  const [LoginState, setLoginState] = useState(false)
  let LoginUser;

   if(LoginState == false){
          LoginUser=<li>
                      <Link to='Login'> Login </Link>
                    </li>
         
}else{
        LoginUser=<li>
                  <Link to='Login' onClick={ setLoginState(false) }>Logout</Link>
                  </li>
} 

 console.log(LoginState);

  return (

    <nav className="nav">
      <Link to="/" className='site-title'>
        <img src={ logo } alt="Logo KodifiKados" className='logo-header' />
      </Link>
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
        {LoginUser}
       
      </ul>



    </nav>
  )
}


