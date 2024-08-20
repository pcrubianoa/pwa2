import { useNavigate } from "react-router-dom";
import { useAuth } from "../provider/authProvider";
import { useApi } from "../hooks/useApi";
import React, { useState } from "react";
import FooterNav from "../components/FooterNav";
import SideNav from "../components/SideNav";

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
    <SideNav/>
    <div className="toast pwa-install-alert shadow bg-white" role="alert" aria-live="assertive" aria-atomic="true" data-bs-delay="5000" data-bs-autohide="true">
      <div className="toast-body">
        <div className="content d-flex align-items-center mb-2"><img src="img/icons/icon-72x72.png" alt=""></img>
          <h6 className="mb-0">Add to Home Screen</h6>
          <button className="btn-close ms-auto" type="button" data-bs-dismiss="toast" aria-label="Close"></button>
        </div><span className="mb-0 d-block">Click the<strong className="mx-1">Add to Home Screen</strong>button &amp; enjoy it like a regular app.</span>
      </div>
    </div>
    <div className="my-order-wrapper" style={{backgroundImage: 'url(../../suha-3.2.0/img/bg-img/21.jpg)'}}>
      <div className="container">
        <div className="card">
          <div className="card-body p-4">
            <div className="single-order-status active">
              <div className="order-icon"><i className="ti ti-basket"></i></div>
              <div className="order-text">
                <h6>Order placed</h6><span>2 Feb 2024 - 12:38 PM</span>
              </div>
              <div className="order-status"><i className="ti ti-circle-check"></i></div>
            </div>
            <div className="single-order-status active">
              <div className="order-icon"><i className="ti ti-box"></i></div>
              <div className="order-text">
                <h6>Product packaging</h6><span>3 Feb 2024</span>
              </div>
              <div className="order-status"><i className="ti ti-circle-check"></i></div>
            </div>
            <div className="single-order-status active">
              <div className="order-icon"><i className="ti ti-trolley"></i></div>
              <div className="order-text">
                <h6>Ready for shipment</h6><span>3 Feb 2024</span>
              </div>
              <div className="order-status"><i className="ti ti-circle-check"></i></div>
            </div>
            <div className="single-order-status">
              <div className="order-icon"><i className="ti ti-truck-delivery"></i></div>
              <div className="order-text">
                <h6>On the way</h6><span>Estimate: 4 Feb 2024</span>
              </div>
              <div className="order-status"><i className="ti ti-circle-check"></i></div>
            </div>
            <div className="single-order-status">
              <div className="order-icon"><i className="ti ti-building-store"></i></div>
              <div className="order-text">
                <h6>Dropped in the delivery station</h6><span>Estimate: 6 Feb 2024</span>
              </div>
              <div className="order-status"><i className="ti ti-circle-check"></i></div>
            </div>
            <div className="single-order-status">
              <div className="order-icon"><i className="ti ti-heart-check"></i></div>
              <div className="order-text">
                <h6>Delivered</h6><span>Estimate: 7 Feb 2024</span>
              </div>
              <div className="order-status"><i className="ti ti-circle-check"></i></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="internet-connection-status" id="internetStatus"></div>
    <FooterNav/>
    </>;
};

export default Sincronizacion;
