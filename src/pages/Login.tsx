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
  const [configuracion, setConfiguracion] = useState(null);

  useEffect(() => {
    const offcanvasElement = document.querySelector('.offcanvas-backdrop');
    if (offcanvasElement) {
      offcanvasElement.classList.remove('show');
      offcanvasElement.classList.add('hide');
    }

  }, []);

  const fetchConfiguracion = async () => {
    try {
      // Puedes ajustar la consulta según necesites
      const configuracionData = await db.configuracion.toArray();
      setConfiguracion(configuracionData);
      return configuracionData;
    } catch (error) {
      console.error('Error al obtener los datos de configuración:', error);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const signin = async (username: string, password: string, application:string) => {
      const data = await api.signin(username, password, application);
      if (data.success === true) {
          db.open();
          setToken(data.apiKey);
          fetchConfiguracion().then(configuracion => {
          if (configuracion.length != 0) {
            db.configuracion.where("id")
                .equals(1)
                .modify({
                    apiKey: data.apiKey,
                    usuario: data.user.usuario,
                    empresa: data.empresa,
                    pw: password,
                    id_usuario: data.user.id,
                    nombre: data.user.nombre,
                    id_almacen: data.config.id_almacen,
                    id_tercero: data.config.id_tercero,
                    establecimiento: data.config.establecimiento,
                    direccion: data.config.direccion,
                    telefono: data.config.telefono
                });
        } else {
            let item = {
                id_usuario: data.user.id,
                usuario: data.user.usuario,
                empresa: data.empresa,
                pw: password,
                nombre: data.user.nombre,
                id_almacen: data.config.id_almacen,
                id_tercero: data.config.id_tercero,
                establecimiento: data.config.establecimiento,
                direccion: data.config.direccion,
                telefono: data.config.telefono,
                consecutivo: 1,
                doc_activo: 0,
                apiKey: data.apiKey,
                servidor_impresion: '',
                created_at: new Date().toLocaleString("es-CO", { timeZone: "America/Bogota" })
            }
            db.configuracion.add(item);
        }
          });

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
          <h5>Bares y restaurantes</h5>
          <span>Ingresa a tu cuenta</span>
          <form onSubmit={handleLogin} className="mt-5">
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
