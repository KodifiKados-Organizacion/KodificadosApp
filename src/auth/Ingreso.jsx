import Registro from "./Registro";
import {Login} from "./login";

import {  useState } from "react";


const Ingreso= () => {
 
  const [registerActive, setRegisterAcvive] = useState(true);


  return (
    <>
      <div
        className="container"
        style={{ backgroundColor: "#bfc5ff", height: "80vh", width: "80vw" }}
      >
        <div className="card col-8 mx-auto py-auto">
          <div className="card-header">Kodificados</div>

          <div className="card-body">
           
           
            {registerActive ? <Registro /> : <Login />}

            <div className="row mx-auto tp-4">
                
                
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <a
                    className="nav-link "
                    onClick={() => setRegisterAcvive(true)}
                    aria-current="page"
                    href="#nada"
                  >
                    Registro
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#nada"
                    onClick={() => setRegisterAcvive(false)}
                  >
                    Ingresar
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
  </div>
 
    </>
  );
};

export default Ingreso;
