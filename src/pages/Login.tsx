import { useNavigate } from "react-router-dom";
import { useAuth } from "../provider/authProvider";
import { useApi } from "../hooks/useApi";
import React, { useState, useEffect } from "react";
import { db } from "../db/db";

const Login = () => {
  const { setToken } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const api = useApi();

  useEffect(() => {

    const offcanvasElement = document.querySelector('.offcanvas-backdrop');
    if (offcanvasElement) {
      offcanvasElement.classList.remove('show');
      offcanvasElement.classList.add('hide');
    }

    const fetchTodos = async () => {
        //const allTodos = await db.productos.toArray();
    };

    fetchTodos();
  }, []);


  const handleLogin = (e) => {
    e.preventDefault();
    const signin = async (username: string, password: string, application:string) => {
      const data = await api.signin(username, password, application);
      if (data.success === true) {
          //setUser(data.user.usuario);
          setToken(data.apiKey);
          //setToken("this is a test token");
          navigate("/sincronizacion", { replace: true });
      }
      setError('Usuario o contraseña incorrectos');
      return false;
  }

  signin(username, password, "bares");

  };

  return <>
  <div className="login-wrapper d-flex align-items-center justify-content-center text-center">
  <div className="background-shape"></div>
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-10 col-lg-8"><img className="big-logo" src="https://logis.com.co/login/images/logo-text.png" width="60%" alt=""></img>
        <div className="register-form mt-5">
          <form onSubmit={handleLogin}>
            <div className="form-group text-start mb-4"><span>Usuario</span>
              <label htmlFor="username"><i className="ti ti-user"></i></label>
              <input
                className="form-control"
                id="username"
                type="text"
                placeholder="usuario.negocio"
                value={username}
                onChange={(e) => setUsername(e.target.value)}>
                </input>
            </div>
            <div className="form-group text-start mb-4"><span>Contraseña</span>
              <label htmlFor="password"><i className="ti ti-key"></i></label>
              <input
                className="form-control"
                id="password"
                type="password"
                placeholder="constraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                ></input>
            </div>
            {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}
            <button className="btn btn-warning btn-lg w-100" type="submit">Ingresar</button>
          </form>
        </div>
        <div className="login-meta-data"><a className="forgot-password d-block mt-3 mb-1">Olvide la contraseña?</a>
          <p className="mb-0">¿No tienes una cuenta?<a className="mx-1" href="register.html">Registrate ahora</a></p>
        </div>
      </div>
    </div>
  </div>
</div>
</>;
};

export default Login;
