const Login = () => {
  return (
    <>
      <form action="" className="row">
        <h1>Bienvenido a Kodificados</h1>
        <div className="input-group flex-nowrap mb-3">
          <span className="input-group-text" id="addon-wrapping">
            <i className="ri-user-2-line"></i>
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="addon-wrapping"
          />
        </div>
        <div className="input-group flex-nowrap mb-3">
          <span className="input-group-text" id="addon-wrapping">
            <i className="ri-lock-password-line"></i>
          </span>
          <input
            type="password"
            className="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="addon-wrapping"
          />
        </div>
        <button
          className="btn"
          style={{ backgroundColor: "#7487f2", color: "white" }}
        >
          Ingresar
        </button>
      </form>
    </>
  );
};

export default Login;
