import { useState } from 'react';
import { Link } from 'react-router-dom'
import { useForm } from '../hooks/useForm';
import '../styles/pages/login.css'

export const Login = () => {
  const [Login, setLogin] = useState({});
  const [formValues, handleInputChange] = useForm({
        Email: "",
        Password: ""
  })
  const { Email, Password } = formValues;

  const HandleSubmit = (e) => {
    e.preventDefault();
  }

  const HandleClick = (e) => {
    e.preventDefault();
    setLogin({formValues})
    console.log(Login);
  };

  return (
    <div className='container-login'>
      <h1>Login</h1>
      <form onChange={ HandleSubmit } className='form-login'>
        <span className='container-input-login'>
          <label htmlFor="">
        <ion-icon name="mail-outline"></ion-icon> Email
        </label>
        <input 
        type="email"
        placeholder='Ingrese su Email'
        id='Email'
        name='Email'
        value={ Email }
        onChange={ handleInputChange}
        />
        </span>
        <span className='container-input-login'>
          <label htmlFor="Passwor">
        <ion-icon name="lock-closed-outline"></ion-icon> Contraseña
        </label>
          <input 
          type="password" 
          id='Password'
          placeholder='ingrese su contraseña'
          name="Password"
          value={ Password }
          onChange={ handleInputChange }
          />
        </span>
        <span className='container-butons-login'>
          <button onClick={ HandleClick } className='btn btn-primary'> <ion-icon name="log-in-outline"></ion-icon> Ingresar</button>
          <Link to="Registro"  className="btn btn-primary"><ion-icon name="person-add-outline"></ion-icon> Registrate</Link>
        </span>
      </form>
    </div>
  )
}
