import { useNavigate } from "react-router-dom";
import { useAuth } from "../provider/authProvider";
import { useApi } from "../hooks/useApi";
import React, { useState, useEffect } from "react";
import FooterNav from "../components/FooterNav";
import SideNav from "../components/SideNav";

const Productos = () => {

  useEffect(() => {
    $(document).ready(function () {
      $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
      });
    });
  }, []);

  return <>
    <div className="header-area" id="headerArea">
      <div className="container h-100 d-flex align-items-center justify-content-between rtl-flex-d-row-r">
        <div className="back-button me-2"><a href="checkout.html"><i className="ti ti-arrow-left"></i></a></div>
        <div className="page-heading">
          <h6 className="mb-0">Productos</h6>
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
    <div className="page-content-wrapper">
    <div className="py-3">
        <div className="container">
          <div className="row g-1 align-items-center rtl-flex-d-row-r">
            <div className="col-8">
              <div className="product-catagories owl-carousel catagory-slides">
                <a className="shadow-sm" href="shop-list.html#"><img src="../suha-3.2.0/img/product/9.png" alt=""></img>Shoes</a>
                <a className="shadow-sm" href="shop-list.html#"><img src="../suha-3.2.0/img/product/4.png" alt=""></img>Dress</a>
                <a className="shadow-sm" href="shop-list.html#"><img src="../suha-3.2.0/img/product/9.png" alt=""></img>Shoes</a>
                <a className="shadow-sm" href="shop-list.html#"><img src="../suha-3.2.0/img/product/4.png" alt=""></img>Dress</a>
              </div>
            </div>
            <div className="col-4">
              <div className="select-product-catagory">
                <select className="right small border-0" id="selectProductCatagory" name="selectProductCatagory" aria-label="Default select example">
                  <option selected>Short by</option>
                  <option value="1">Newest</option>
                  <option value="2">Popular</option>
                  <option value="3">Ratings</option>
                </select>
              </div>
            </div>
          </div>
          <div className="mb-3"></div>
          <div className="row g-2">
            <div className="col-12">
              <div className="card horizontal-product-card">
                <div className="d-flex align-items-center">
                  <div className="product-thumbnail-side">
                    <a className="product-thumbnail d-block" href="single-product.html"><img src="../suha-3.2.0/img/product/12.png" alt=""></img></a>
                    <a className="wishlist-btn" href="shop-list.html#"><i className="ti ti-heart"></i></a>
                  </div>
                  <div className="product-description">
                    <a className="product-title d-block" href="single-product.html">Beach Sunglasses</a>
                    <p className="sale-price"><i className="ti ti-currency-dollar"></i>$24<span>$32</span></p>
                    <div className="product-rating"><i className="ti ti-star-filled"></i>4.79 <span className="ms-1">(63 review)</span></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="card horizontal-product-card">
                <div className="d-flex align-items-center">
                  <div className="product-thumbnail-side">
                    <a className="product-thumbnail d-block" href="single-product.html"><img src="../suha-3.2.0/img/product/12.png" alt=""></img></a>
                    <a className="wishlist-btn" href="shop-list.html#"><i className="ti ti-heart"></i></a>
                  </div>
                  <div className="product-description">
                    <a className="product-title d-block" href="single-product.html">Beach Sunglasses</a>
                    <p className="sale-price"><i className="ti ti-currency-dollar"></i>$24<span>$32</span></p>
                    <div className="product-rating"><i className="ti ti-star-filled"></i>4.79 <span className="ms-1">(63 review)</span></div>
                  </div>
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

export default Productos;
