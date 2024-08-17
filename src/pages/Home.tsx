import { useNavigate } from "react-router-dom";
import { useAuth } from "../provider/authProvider";
import { useApi } from "../hooks/useApi";
import React, { useState } from "react";

const Home = () => {
  return <>
    <div className="header-area" id="headerArea">
      <div className="container h-100 d-flex align-items-center justify-content-between d-flex rtl-flex-d-row-r">
        <div className="logo-wrapper"><a href="home.html"><img src="img/core-img/logo-small.png" alt=""></img></a></div>
        <div className="navbar-logo-container d-flex align-items-center">
          <div className="cart-icon-wrap"><a href="cart.html"><i className="ti ti-basket-bolt"></i><span>13</span></a></div>
          <div className="user-profile-icon ms-2"><a href="profile.html"><img src="img/bg-img/9.jpg" alt=""></img></a></div>
          <div className="suha-navbar-toggler ms-2" data-bs-toggle="offcanvas" data-bs-target="#suhaOffcanvas" aria-controls="suhaOffcanvas">
            <div><span></span><span></span><span></span></div>
          </div>
        </div>
      </div>
    </div>
    <div className="offcanvas offcanvas-start suha-offcanvas-wrap" id="suhaOffcanvas" aria-labelledby="suhaOffcanvasLabel">
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
          <div className="section-heading d-flex align-items-center justify-content-between dir-rtl">
            <h6>Lista de Mesas</h6><a className="btn btn-sm btn-light" href="featured-products.html">View all<i className="ms-1 ti ti-arrow-right"></i></a>
          </div>
          <div className="row g-2">
            <div className="col-4">
              <div className="card featured-product-card">
                <div className="card-body">
                  <span className="badge badge-warning custom-badge"><i className="ti ti-star-filled"></i></span>
                  <div className="product-thumbnail-side">
                    <a className="product-thumbnail d-block" href="single-product.html"><img src="img/product/14.png" alt=""></img></a>
                  </div>
                  <div className="product-description">
                    <a className="product-title d-block" href="single-product.html">Mesa 1</a>
                    <p className="sale-price">$10.000</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card featured-product-card">
                <div className="card-body">
                  <span className="badge badge-warning custom-badge"><i className="ti ti-star-filled"></i></span>
                  <div className="product-thumbnail-side">
                    <a className="product-thumbnail d-block" href="single-product.html"><img src="img/product/15.png" alt=""></img></a>
                  </div>
                  <div className="product-description">
                    <a className="product-title d-block" href="single-product.html">Travel Bag</a>
                    <p className="sale-price">$14.7<span>$21</span></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card featured-product-card">
                <div className="card-body">
                  <span className="badge badge-warning custom-badge"><i className="ti ti-star-filled"></i></span>
                  <div className="product-thumbnail-side">
                    <a className="product-thumbnail d-block" href="single-product.html"><img src="img/product/16.png" alt=""></img></a>
                  </div>
                  <div className="product-description">
                    <a className="product-title d-block" href="single-product.html">Cotton T-shirts</a>
                    <p className="sale-price">$3.69<span>$5</span></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card featured-product-card">
                <div className="card-body">
                  <span className="badge badge-warning custom-badge"><i className="ti ti-star-filled"></i></span>
                  <div className="product-thumbnail-side">
                    <a className="product-thumbnail d-block" href="single-product.html"><img src="img/product/21.png" alt=""></img></a>
                  </div>
                  <div className="product-description">
                    <a className="product-title d-block" href="single-product.html">ECG Rice Cooker</a>
                    <p className="sale-price">$9.33<span>$13</span></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card featured-product-card">
                <div className="card-body">
                  <span className="badge badge-warning custom-badge"><i className="ti ti-star-filled"></i></span>
                  <div className="product-thumbnail-side">
                    <a className="product-thumbnail d-block" href="single-product.html"><img src="img/product/20.png" alt=""></img></a>
                  </div>
                  <div className="product-description">
                    <a className="product-title d-block" href="single-product.html">Beauty Cosmetics</a>
                    <p className="sale-price">$5.99<span>$8</span></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card featured-product-card">
                <div className="card-body">
                  <span className="badge badge-warning custom-badge"><i className="ti ti-star-filled"></i></span>
                  <div className="product-thumbnail-side">
                    <a className="product-thumbnail d-block" href="single-product.html"><img src="img/product/19.png" alt=""></img></a>
                  </div>
                  <div className="product-description">
                    <a className="product-title d-block" href="single-product.html">Basketball</a>
                    <p className="sale-price">$16<span>$20</span></p>
                  </div>
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

export default Home;
