import { Link } from 'react-router-dom'
import '../../styles/components/Header.css'
import logo from '../../assets/imgs/logo10_22_162944.png'
import { useContext } from 'react'
import { AuthContext } from '../../auth/Context'

export const Header = (props) => {
const {  logged, logout } = useContext( AuthContext );
let isAuth = logged;
const user = JSON.parse(localStorage.getItem('user'));
if(user){
  isAuth = true;
}
console.log(user);
  const HandleLogout = () => {
    logout();
  }

  return (

    <nav className="nav">
      <Link to="/" className='site-title'>
        <img src={ logo } alt="Logo KodifiKados" className='logo-header' />
      </Link>
      <ul>
        {isAuth?<li>
          <Link to='Cliente'>Clientes</Link>
          </li>:null}
          { isAuth && user.Admin?<li>
          <Link to='Admin'>Admin</Link>
        </li>:null}
        <li>
          <Link to='About'>Nosotros</Link>
        </li>
        { isAuth ? <li><Link>{ user.Nombre }</Link></li> : null }
        { isAuth ? <li onClick={HandleLogout}><Link to='/Login'> LogOut </Link></li> :<li><Link to='/Login'>Login</Link></li>}
       
      </ul>



    </nav>
  )
}


