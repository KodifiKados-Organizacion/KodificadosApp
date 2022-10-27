const Login = () => {
  return (
    <>
      <form action="" className="row">
        <h1>Bienvenido a Kodificados</h1>
        <div class="input-group flex-nowrap mb-3">
          <span class="input-group-text" id="addon-wrapping">
            <i class="ri-user-2-line"></i>
          </span>
          <input
            type="text"
            class="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="addon-wrapping"
          />
        </div>
        <div class="input-group flex-nowrap mb-3">
          <span class="input-group-text" id="addon-wrapping">
            <i class="ri-lock-password-line"></i>
          </span>
          <input
            type="password"
            class="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="addon-wrapping"
          />
        </div>
        <button
          class="btn"
          style={{ backgroundColor: "#7487f2", color: "white" }}
        >
          Ingresar
        </button>
      </form>
    </>
  );
};

export default Login;
