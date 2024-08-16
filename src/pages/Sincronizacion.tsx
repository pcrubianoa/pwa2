import { useNavigate } from "react-router-dom";
import { useAuth } from "../provider/authProvider";
import { useApi } from "../hooks/useApi";
import React, { useState } from "react";

const Sincronizacion = () => {
  return <>
    <div className="header-area" id="headerArea">
      <div className="container h-100 d-flex align-items-center justify-content-between rtl-flex-d-row-r">
        <div className="back-button me-2"><a href="checkout.html"><i className="ti ti-arrow-left"></i></a></div>
        <div className="page-heading">
          <h6 className="mb-0">Sincronización</h6>
        </div>
        <div className="suha-navbar-toggler ms-2" data-bs-toggle="offcanvas" data-bs-target="#suhaOffcanvas" aria-controls="suhaOffcanvas">
          <div><span></span><span></span><span></span></div>
        </div>
      </div>
    </div>
    <div className="offcanvas offcanvas-start suha-offcanvas-wrap" tabindex="-1" id="suhaOffcanvas" aria-labelledby="suhaOffcanvasLabel">
      <button className="btn-close btn-close-white" type="button" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      <div className="offcanvas-body">
        <div className="sidenav-profile">
          <div className="user-profile"><img src="../../suha-3.2.0/img/bg-img/9.jpg" alt=""></img></div>
          <div className="user-info">
            <h5 className="user-name mb-1 text-white">Tercero Axiliar</h5>
            <p className="available-balance text-white">EL AGRADO<span className="counter"></span></p>
          </div>
        </div>
        <ul className="sidenav-nav ps-0">
          <li><a href="profile.html"><i className="ti ti-user"></i>Mesas</a></li>
          <li><a href="notifications.html"><i className="ti ti-bell-ringing lni-tada-effect"></i>Productos<span className="ms-1 badge badge-warning">3</span></a></li>
          <li><a href="settings.html"><i className="ti ti-adjustments-horizontal"></i>Perfil</a></li>
          <li><a href="settings.html"><i className="ti ti-adjustments-horizontal"></i>Sincronización</a></li>
          <li><a href="settings.html"><i className="ti ti-adjustments-horizontal"></i>Terminos del servicio</a></li>
          <li><a href="intro.html"><i className="ti ti-logout"></i>Cerrar sesión</a></li>
        </ul>
      </div>
    </div>
    <div className="toast pwa-install-alert shadow bg-white" role="alert" aria-live="assertive" aria-atomic="true" data-bs-delay="5000" data-bs-autohide="true">
      <div className="toast-body">
        <div className="content d-flex align-items-center mb-2"><img src="img/icons/icon-72x72.png" alt=""></img>
          <h6 className="mb-0">Add to Home Screen</h6>
          <button className="btn-close ms-auto" type="button" data-bs-dismiss="toast" aria-label="Close"></button>
        </div><span className="mb-0 d-block">Click the<strong className="mx-1">Add to Home Screen</strong>button &amp; enjoy it like a regular app.</span>
      </div>
    </div>
    <div className="page-content-wrapper">
      <div className="featured-products-wrapper py-3">
      <div className="container">
        <div className="checkout-wrapper-area py-3">
          <div className="choose-payment-method">
            <div className="row g-2 justify-content-center rtl-flex-d-row-r">
              <div className="col-6 col-md-5">
                <div className="single-payment-method"><a className="credit-card active" href="checkout-credit-card.html"><i className="ti ti-brand-mastercard"></i>
                    <h6>Familias</h6></a></div>
              </div>
              <div className="col-6 col-md-5">
                <div className="single-payment-method"><a className="bank" href="checkout-bank.html"><i className="ti ti-building"></i>
                    <h6>Categorias</h6></a></div>
              </div>
              <div className="col-6 col-md-5">
                <div className="single-payment-method"><a className="paypal" href="checkout-paypal.html"><i className="ti ti-brand-paypal"></i>
                    <h6>Mesas</h6></a></div>
              </div>
              <div className="col-6 col-md-5">
                <div className="single-payment-method"><a className="cash" href="checkout-cash.html"><i className="ti ti-shield-dollar"></i>
                    <h6>Productos</h6></a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
    <div className="internet-connection-status" id="internetStatus"></div>
    <div className="footer-nav-area" id="footerNav">
      <div className="suha-footer-nav">
        <ul className="h-100 d-flex align-items-center justify-content-between ps-0 d-flex rtl-flex-d-row-r">
          <li><a href="home.html"><i className="ti ti-home"></i>Home</a></li>
          <li><a href="message.html"><i className="ti ti-message"></i>Chat</a></li>
          <li><a href="cart.html"><i className="ti ti-basket"></i>Cart</a></li>
          <li><a href="settings.html"><i className="ti ti-settings"></i>Settings</a></li>
          <li><a href="pages.html"><i className="ti ti-heart"></i>Pages</a></li>
        </ul>
      </div>
    </div>
</>;
};

export default Sincronizacion;
