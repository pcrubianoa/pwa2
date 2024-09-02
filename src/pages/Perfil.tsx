import { useNavigate } from "react-router-dom";
import { useAuth } from "../provider/authProvider";
import { useApi } from "../hooks/useApi";
import React, { useState } from "react";
import FooterNav from "../components/FooterNav";
import SideNav from "../components/SideNav";

const Perfil = () => {
  return <>
    <div className="header-area" id="headerArea">
      <div className="container h-100 d-flex align-items-center justify-content-between rtl-flex-d-row-r">
        <div className="suha-navbar-toggler ms-2" data-bs-toggle="offcanvas" data-bs-target="#suhaOffcanvas" aria-controls="suhaOffcanvas">
          <div><span></span><span></span><span></span></div>
        </div>
        <div className="page-heading">
          <h6 className="mb-0">Sincronización</h6>
        </div>
        <div className="back-button me-2">

        </div>
      </div>
    </div>
    <SideNav/>
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
        <p>Esta operación puede borrar datos no enviados. Envíe o regístre una copia de seguridad antes de realizar este proceso.</p>
          <div className="alternative-search-options">
            <div className="dropdown"><a className="btn btn-primary dropdown-toggle" id="altSearchOption" href="home.html#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="ti ti-adjustments-horizontal"></i></a>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="altSearchOption">
                <li><a className="dropdown-item" href="home.html#"><i className="ti ti-microphone"> </i>General</a></li>
                <li><a className="dropdown-item" href="home.html#"><i className="ti ti-layout-collage"> </i>Image</a></li>
              </ul>
            </div>
          </div>
        <div className="checkout-wrapper-area py-3">
          <div className="choose-payment-method">
            <div className="row g-2 justify-content-center rtl-flex-d-row-r">
              <div className="col-6 col-md-5">
                <div className="single-payment-method"><a className="credit-card active" href="checkout-credit-card.html"><i className="ti ti-list"></i>
                    <h6>Familias</h6></a></div>
              </div>
              <div className="col-6 col-md-5">
                <div className="single-payment-method"><a className="bank" href="checkout-bank.html"><i className="ti ti-category-2"></i>
                    <h6>Categorias</h6></a></div>
              </div>
              <div className="col-6 col-md-5">
                <div className="single-payment-method"><a className="paypal" href="checkout-paypal.html"><i className="ti ti-brand-airtable"></i>
                    <h6>Mesas</h6></a></div>
              </div>
              <div className="col-6 col-md-5">
                <div className="single-payment-method"><a className="cash" href="checkout-cash.html"><i className="ti ti-tags"></i>
                    <h6>Productos</h6></a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
    <div className="internet-connection-status" id="internetStatus"></div>
    <FooterNav/>
    </>;
};

export default Perfil;
