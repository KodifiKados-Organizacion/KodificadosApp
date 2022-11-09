import { useContext, useState } from 'react';
import { Link } from 'react-router-dom'
import { useForm } from '../hooks/useForm';
import '../styles/pages/login.css'
import { AuthContext } from './Context';

export const Login = () => {

  const { login } = useContext( AuthContext )

  const [Dato , setDato] = useState();
  const [Login, setLogin] = useState(false);
  const [formValues, handleInputChange] = useForm({
        Email: "",
        Password: ""
  })   
  const { Email, Password } = formValues;

  const HandleSubmit = (e) => {
    e.preventDefault();
  }
  const exampleFetch = async  (email) => {
    await fetch('http://localhost:5000/api/registers')
       .then(res => res.json())
       .then(data => {
              console.log(data)
          let dato =  data.filter(param => param.Email === email);
          console.log([dato])
          setDato(dato);
          console.log(Dato[0].Email);
          return dato;
      })
      .catch(err => console.log(err))
    
}

  const HandleClick = (e) => {
    e.preventDefault();
    console.log(formValues);
    exampleFetch(formValues.Email);
    console.log(Dato);
    if(Dato[0].Email == formValues.Email && Dato[0].Password == formValues.Password){
      setLogin(true);
    console.log(Login);
    window.location.href = "/home";
    }else{
      console.log('no existe');
    }
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
