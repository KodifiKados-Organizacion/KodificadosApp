import { useState } from "react";
import { useForm } from "../../hooks/useForm";
const Registro = () => {
  const [Registro, setRegistro] = useState({});
  const [formValues, hadleInputChange ] = useForm({
    Nombre: "",
    Apellidos: "",
    Identificacion: "",
    Password: "",
    VPassword: "",
    Celular: "",
    Telefono: "",
    Email: "",
    Ciudad: "",
    Direccion: "",
    CodPostal: ""
  });
  const { Nombre, Apellidos, Identificacion, Password, VPassword, Celular, Telefono, Email, Ciudad, Direccion, CodPostal }= formValues
  const HandleSubmit = (event) => {
    event.preventDefault();
  };
  const HandleClick = (e) => {
      e.preventDefault();
      setRegistro({formValues})
      console.log(Registro);
    };


  return (
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
                    <i className="ri-file-user-fill"></i>
                  </span>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Identificacion"
                    aria-label="Username"
                    name="Identificacion"
                    value={ Identificacion }
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
                    placeholder="celular"
                    aria-label="Username"
                    name="Celular"
                    value={Celular}
                    onChange={hadleInputChange}
                    aria-describedby="basic-addon1"
                  />
                </div>
                <div className="input-group mb-3 w-10">
                  <span className="input-group-text" id="basic-addon1">
                    <i className="ri-phone-fill"></i>
                  </span>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Telefono"
                    aria-label="Username"
                    name="Telefono"
                    value={ Telefono }
                    onChange={ hadleInputChange }
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
          <button onClick={HandleClick} className="btn btn-default" >Registrar</button>
       
        </form>
      </div>
      {/*<ul className="list-group list-group-flush">
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
  </ul>*/}
    </div>
  );
};

export default Registro;
