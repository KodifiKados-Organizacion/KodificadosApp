import '../styles/components/Registro.css'
import { useContext, useState } from "react";
import { useForm } from "../hooks/useForm";
import { useNavigate } from 'react-router';
import { AuthContext } from './Context';




const Registro = () => {
  const Navigate = useNavigate();
  const { register } = useContext(AuthContext);
  const [Registro, setRegistro] = useState({});
  var url= "";
  const [formValues, hadleInputChange ] = useForm({
    Nombre: "",
    Apellidos: "",
    Password: "",
    VPassword: "",
    Telefono: "",
    Email: "",
    Ciudad: "",
    Departamento: "",
    Direccion: "",
    CodPostal: ""
  });
  const { Nombre, Apellidos,  Password, VPassword,  Telefono, Email, Ciudad, Departamento, Direccion, CodPostal }= formValues
  const HandleSubmit = (event) => {
    event.preventDefault();
  };
  const HandleClick = (e) => {
      e.preventDefault();
      if (Password !== VPassword) {
        return alert("Las contraseñas no coinciden");
      }
      if(Password.length < 8){
        return alert("La contraseña debe tener al menos 8 caracteres");
      }
      if(Telefono.length < 8){
        return alert("El telefono debe tener al menos 8 caracteres");
      }
      if(CodPostal.length < 5){
        return alert("El codigo postal debe tener al menos 5 caracteres");
      }
      if(Nombre.length < 3){
        return alert("El nombre debe tener al menos 3 caracteres");
      }
      if(Apellidos.length < 3){
        return alert("El apellido debe tener al menos 3 caracteres");
      }
      if(Email.length < 3 && Email.includes("@")){
        return alert("El email debe tener al menos 3 caracteres y debe incluir @");
      }
      if(Ciudad.length < 3){
        return alert("La ciudad debe tener al menos 3 caracteres");
      }
      if(Departamento.length < 3){
        return alert("El departamento debe tener al menos 3 caracteres");
      }
      if(Direccion.length < 3){
        return alert("La direccion debe tener al menos 3 caracteres");
      }
      
      console.log(formValues);
      setRegistro(formValues);
      console.log(Registro);
      
    url = "http://localhost:5000/api/register";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Registro),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      alert("Registro exitoso");
      register(data);
      Navigate('/Home');
      })
      .catch((err) => {
      alert("Error "+ err +" al registrar");
    })
  };


  return (
    <div className="container-registro">
    <div className="card col-8 my-3 mx-auto">
      <div className="card-header">Registro</div>

      <div className="card-body">
        <form onChange={HandleSubmit}>
          <div className=" ">
            {/**Informacion de contacto*/}
            <div className="row">
              <span>Datos Personales</span>
              <p>Campos requeridos(*)</p>
              <div className="">
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    <p>*</p>
                    <i className="ri-user-line"></i>
                    
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    name="Nombre"
                    value={ Nombre }
                    onChange={ hadleInputChange }
                  />
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                  <p>*</p>
                    <i className="ri-user-line"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Apellidos"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    name="Apellidos"
                    value={Apellidos}
                    onChange={hadleInputChange}
                  />
                </div>
               
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                  <p>*</p>
                  <ion-icon name="lock-closed-outline"></ion-icon>
                  </span>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Contraseña"
                    aria-label="Username"
                    name="Password"
                    value={ Password }
                    onChange={ hadleInputChange }
                    aria-describedby="basic-addon1"
                  />
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                  <p>*</p>
                  <ion-icon name="lock-closed-outline"></ion-icon>
                  </span>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Verifica tu contraseña"
                    aria-label="Username"
                    name="VPassword"
                    value={ VPassword }
                    onChange={ hadleInputChange }
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
            </div>
            <div className="row ">
              <span>Informacion de Contacto</span>
              <div className="d-flex ">
                <div className="input-group mb-3  w-3">
                  <span className="input-group-text" id="basic-addon1">
                    <i className="ri-cellphone-fill"></i>
                  </span>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Nro Telefono"
                    aria-label="Username"
                    name="Telefono"
                    value={Telefono}
                    onChange={hadleInputChange}
                    aria-describedby="basic-addon1"
                  />
                </div>
                <div className="input-group mb-3 ">
                  <span className="input-group-text" id="basic-addon1">
                    <i className="ri-file-user-fill"></i>
                  </span>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    aria-label="Username"
                    name="Email"
                    value={ Email }
                   onChange={hadleInputChange}
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
            </div>

            <div className="row d-flex">
              <span>Direccion de Contacto</span>
              <div className="input-group mb-3 col-sm-3">
                <span className="input-group-text" id="basic-addon1">
                  <i className="ri-map-2-line"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="ciudad"
                  aria-label="Username"
                  name="Ciudad"
                  value={ Ciudad }
                  onChange={ hadleInputChange }
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="input-group mb-3 col-sm-3">
                <span className="input-group-text" id="basic-addon1">
                  <i className="ri-map-2-line"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="departamento"
                  aria-label="Username"
                  name="Departamento"
                  value={ Departamento }
                  onChange={ hadleInputChange }
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="input-group mb-3 col-2">
                <span className="input-group-text" id="basic-addon1">
                  <i className="ri-map-pin-2-fill"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Direccion"
                  aria-label="Username"
                  name="Direccion"
                  value={ Direccion }
                  onChange={ hadleInputChange }
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="input-group mb-3 col-3">
                <span className="input-group-text" id="basic-addon1">
                  <i className="ri-map-pin-add-line"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Codigo Postal"
                  aria-label="Username"
                  name="CodPostal"
                  value={ CodPostal }
                  onChange={ hadleInputChange }
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>
          </div>
          <button onClick={HandleClick}  className="btn btn-default" >Registrar</button>
       
        </form>
      </div>

    </div>
    </div>
  );
};

export default Registro;
