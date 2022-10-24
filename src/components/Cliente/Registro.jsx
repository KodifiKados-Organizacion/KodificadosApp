import { useState } from "react";

const Registro = () => {
  const [nombre, setnombre] = useState();
  const [identificacion, setidentificacion] = useState();
  const [apellidos, setapellidos] = useState();
  const [edad, setEdad] = useState();
  const [telefono, setTelefono] = useState([]);
  const [direccion, setDireccion] = useState([]);
  const HandleSubmit = (event) => {
    event.preventDefault();
    
     if (nombre==""||nombre==undefined){
        alert("nombre es requerido")

     }

    
   
  };
  return (
    <div className="card col-8 my-3 mx-auto">
      <div className="card-header">Registro</div>

      <div className="card-body">
        <form onSubmit={HandleSubmit}>
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
                    onChange={(e)=>setnombre(e.target.value)}
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
                    onChange={(e)=>setapellidos(e.target.value)}
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
                    onChange={(e) => setidentificacion(e.target.value)}
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
                    <i class="ri-cellphone-fill"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="celular"
                    aria-label="Username"
                    onChange={(e) => setTelefono(e.target.value)}
                    aria-describedby="basic-addon1"
                  />
                </div>
                <div className="input-group mb-3 w-10">
                  <span className="input-group-text" id="basic-addon1">
                    <i class="ri-phone-fill"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Fijo"
                    aria-label="Username"
                    onChange={(e) => setidentificacion(e.target.value)}
                    aria-describedby="basic-addon1"
                  />
                </div>
                <div className="input-group mb-3 ">
                  <span className="input-group-text" id="basic-addon1">
                    <i className="ri-file-user-fill"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="fax"
                    aria-label="Username"
                    onChange={(e) => setidentificacion(e.target.value)}
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
            </div>

            <div className="row d-flex">
              <span>Direccion de Contacto</span>
              <div className="input-group mb-3 col-sm-3">
                <span className="input-group-text" id="basic-addon1">
                  <i class="ri-map-2-line"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="ciudad"
                  aria-label="Username"
                  onChange={(e) => setidentificacion(e.target.value)}
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="input-group mb-3 col-2">
                <span className="input-group-text" id="basic-addon1">
                  <i class="ri-map-pin-2-fill"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Direccion"
                  aria-label="Username"
                  onChange={(e) => setidentificacion(e.target.value)}
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="input-group mb-3 col-3">
                <span className="input-group-text" id="basic-addon1">
                  <i class="ri-map-pin-add-line"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Codigo Postal"
                  aria-label="Username"
                  onChange={(e) => setidentificacion(e.target.value)}
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>
          </div>

          <input type="submit" value="Submit" className="btn btn-default" />
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
