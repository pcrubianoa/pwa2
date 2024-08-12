import { useNavigate } from "react-router-dom";
import { useAuth } from "../provider/authProvider";
import { useApi } from "../hooks/useApi";
import React from "react";

const Login = () => {
  const { setToken } = useAuth();
  const navigate = useNavigate();
  const api = useApi();

  const handleLogin = () => {
    const signin = async (email: string, password: string, application:string) => {
      const data = await api.signin(email, password, application);
      if (data.success === true) {
          //setUser(data.user.usuario);
          //setToken(data.apiKey);
          setToken("this is a test token");
          navigate("/", { replace: true });
          //return true;
      }
      return false;
  }

  //signin("vendedor.dev", "123123", "bares");

  };

  setTimeout(() => {
    handleLogin();
  }, 3 * 1000);

  return <><div className="login-wrapper d-flex align-items-center justify-content-center text-center">
  <div className="background-shape"></div>
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-10 col-lg-8"><img className="big-logo" src="img/core-img/logo-white.png" alt=""></img>
        <div className="register-form mt-5">
          <form action="home.html" method="">
            <div className="form-group text-start mb-4"><span>Username</span>
              <label htmlFor="username"><i className="ti ti-user"></i></label>
              <input className="form-control" id="username" type="text" placeholder="info@example.com"></input>
            </div>
            <div className="form-group text-start mb-4"><span>Password</span>
              <label htmlFor="password"><i className="ti ti-key"></i></label>
              <input className="form-control" id="password" type="password" placeholder="Password"></input>
            </div>
            <button className="btn btn-warning btn-lg w-100" type="submit">Log In</button>
          </form>
        </div>
        <div className="login-meta-data"><a className="forgot-password d-block mt-3 mb-1" href="forget-password.html">Forgot Password?</a>
          <p className="mb-0">Didn't have an account?<a className="mx-1" href="register.html">Register Now</a></p>
        </div>
        <div className="view-as-guest mt-3"><a className="btn btn-primary btn-sm" href="home.html">View as guest<i className="ps-2 ti ti-arrow-right"></i></a></div>
      </div>
    </div>
  </div>
</div></>;
};

export default Login;
