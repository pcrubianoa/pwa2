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
    <div className="offcanvas offcanvas-start suha-offcanvas-wrap" tabindex="-1" id="suhaOffcanvas" aria-labelledby="suhaOffcanvasLabel">
      <button className="btn-close btn-close-white" type="button" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      <div className="offcanvas-body">
        <div className="sidenav-profile">
          <div className="user-profile"><img src="img/bg-img/9.jpg" alt=""></img></div>
          <div className="user-info">
            <h5 className="user-name mb-1 text-white">Suha Sarah</h5>
            <p className="available-balance text-white">Current Balance $<span className="counter">99</span></p>
          </div>
        </div>
        <ul className="sidenav-nav ps-0">
          <li><a href="profile.html"><i className="ti ti-user"></i>My Profile</a></li>
          <li><a href="notifications.html"><i className="ti ti-bell-ringing lni-tada-effect"></i>Notifications<span className="ms-1 badge badge-warning">3</span></a></li>
          <li className="suha-dropdown-menu"><a href="home.html#"><i className="ti ti-building-store"></i>Shop Pages</a>
            <ul>
              <li><a href="shop-grid.html">Shop Grid</a></li>
              <li><a href="shop-list.html">Shop List</a></li>
              <li><a href="single-product.html">Product Details</a></li>
              <li><a href="featured-products.html">Featured Products</a></li>
              <li><a href="flash-sale.html">Flash Sale</a></li>
            </ul>
          </li>
          <li><a href="pages.html"><i className="ti ti-notebook"></i>All Pages</a></li>
          <li className="suha-dropdown-menu"><a href="wishlist-grid.html"><i className="ti ti-heart"></i>My Wishlist</a>
            <ul>
              <li><a href="wishlist-grid.html">Wishlist Grid</a></li>
              <li><a href="wishlist-list.html">Wishlist List</a></li>
            </ul>
          </li>
          <li><a href="settings.html"><i className="ti ti-adjustments-horizontal"></i>Settings</a></li>
          <li><a href="intro.html"><i className="ti ti-logout"></i>Sign Out</a></li>
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
      <div className="container">
        <div className="search-form pt-3 rtl-flex-d-row-r">
          <form action="#" method="">
            <input className="form-control" type="search" placeholder="Search in Suha"></input>
            <button type="submit"><i className="ti ti-search"></i></button>
          </form>
          <div className="alternative-search-options">
            <div className="dropdown"><a className="btn btn-primary dropdown-toggle" id="altSearchOption" href="home.html#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="ti ti-adjustments-horizontal"></i></a>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="altSearchOption">
                <li><a className="dropdown-item" href="home.html#"><i className="ti ti-microphone"> </i>Voice</a></li>
                <li><a className="dropdown-item" href="home.html#"><i className="ti ti-layout-collage"> </i>Image</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-wrapper">
      </div>
      <div className="product-catagories-wrapper py-3">
        <div className="container">
          <div className="row g-2 rtl-flex-d-row-r">
            <div className="col-3">
              <div className="card catagory-card">
                <div className="card-body px-2"><a href="catagory.html"><img src="img/core-img/woman-clothes.png" alt=""></img><span>Women's Fashion</span></a></div>
              </div>
            </div>
            <div className="col-3">
              <div className="card catagory-card">
                <div className="card-body px-2"><a href="catagory.html"><img src="img/core-img/grocery.png" alt=""></img><span>Groceries &amp; Pets</span></a></div>
              </div>
            </div>
            <div className="col-3">
              <div className="card catagory-card">
                <div className="card-body px-2"><a href="catagory.html"><img src="img/core-img/shampoo.png" alt=""></img><span>Health &amp; Beauty</span></a></div>
              </div>
            </div>
            <div className="col-3">
              <div className="card catagory-card">
                <div className="card-body px-2"><a href="catagory.html"><img src="img/core-img/rowboat.png" alt=""></img><span>Sports &amp; Outdoors</span></a></div>
              </div>
            </div>
            <div className="col-3">
              <div className="card catagory-card">
                <div className="card-body px-2"><a href="catagory.html"><img src="img/core-img/tv-table.png" alt=""></img><span>Home Appliance</span></a></div>
              </div>
            </div>
            <div className="col-3">
              <div className="card catagory-card">
                <div className="card-body px-2"><a href="catagory.html"><img src="img/core-img/beach.png" alt=""></img><span>Tour &amp; Travels</span></a></div>
              </div>
            </div>
            <div className="col-3">
              <div className="card catagory-card">
                <div className="card-body px-2"><a href="catagory.html"><img src="img/core-img/baby-products.png" alt=""></img><span>Mother &amp; Baby</span></a></div>
              </div>
            </div>
            <div className="col-3">
              <div className="card catagory-card active">
                <div className="card-body px-2"><a href="catagory.html"><img src="img/core-img/price-tag.png" alt=""></img><span>Clearance Sale</span></a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flash-sale-wrapper">
        <div className="container">
          <div className="section-heading d-flex align-items-center justify-content-between rtl-flex-d-row-r">
            <h6 className="d-flex align-items-center rtl-flex-d-row-r"><i className="ti ti-bolt-lightning me-1 text-danger lni-flashing-effect"></i>Cyclone Offer</h6>
            <ul className="sales-end-timer ps-0 d-flex align-items-center rtl-flex-d-row-r" data-countdown="2024/12/31 14:21:59">
              <li><span className="days">0</span>d</li>
              <li><span className="hours">0</span>h</li>
              <li><span className="minutes">0</span>m</li>
              <li><span className="seconds">0</span>s</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="dark-mode-wrapper mt-3 bg-img p-4 p-lg-5">
          <p className="text-white">You can change your display to a dark background using a dark mode.</p>
          <div className="form-check form-switch mb-0">
            <label className="form-check-label text-white h6 mb-0" for="darkSwitch">Switch to Dark Mode</label>
            <input className="form-check-input" id="darkSwitch" type="checkbox" role="switch"></input>
          </div>
        </div>
      </div>
      <div className="top-products-area py-3">
        <div className="container">
          <div className="section-heading d-flex align-items-center justify-content-between dir-rtl">
            <h6>Top Products</h6><a className="btn btn-sm btn-light" href="shop-grid.html">View all<i className="ms-1 ti ti-arrow-right"></i></a>
          </div>
          <div className="row g-2">
            <div className="col-6 col-md-4">
              <div className="card product-card">
                <div className="card-body">
                  <span className="badge rounded-pill badge-warning">Sale</span>
                  <a className="wishlist-btn" href="home.html#"><i className="ti ti-heart">                       </i></a>
                  <a className="product-thumbnail d-block" href="single-product.html"><img className="mb-2" src="img/product/11.png" alt=""></img>
                    <ul className="offer-countdown-timer d-flex align-items-center shadow-sm" data-countdown="2024/12/31 23:59:59">
                      <li><span className="days">0</span>d</li>
                      <li><span className="hours">0</span>h</li>
                      <li><span className="minutes">0</span>m</li>
                      <li><span className="seconds">0</span>s</li>
                    </ul></a>
                  <a className="product-title" href="single-product.html">Beach Cap</a>
                  <p className="sale-price">$13<span>$42</span></p>
                  <div className="product-rating"><i className="ti ti-star-filled"></i><i className="ti ti-star-filled"></i><i className="ti ti-star-filled"></i><i className="ti ti-star-filled"></i><i className="ti ti-star-filled"></i></div>
                  <a className="btn btn-primary btn-sm" href="home.html#"><i className="ti ti-plus"></i></a>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4">
              <div className="card product-card">
                <div className="card-body">
                  <span className="badge rounded-pill badge-success">New</span>
                  <a className="wishlist-btn" href="home.html#"><i className="ti ti-heart">                       </i></a>
                  <a className="product-thumbnail d-block" href="single-product.html"><img className="mb-2" src="img/product/5.png" alt=""></img></a>
                  <a className="product-title" href="single-product.html">Wooden Sofa</a>
                  <p className="sale-price">$74<span>$99</span></p>
                  <div className="product-rating"><i className="ti ti-star-filled"></i><i className="ti ti-star-filled"></i><i className="ti ti-star-filled"></i><i className="ti ti-star-filled"></i><i className="ti ti-star-filled"></i></div>
                  <a className="btn btn-primary btn-sm" href="home.html#"><i className="ti ti-plus"></i></a>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4">
              <div className="card product-card">
                <div className="card-body">
                  <span className="badge rounded-pill badge-success">Sale</span>
                  <a className="wishlist-btn" href="home.html#"><i className="ti ti-heart">                       </i></a>
                  <a className="product-thumbnail d-block" href="single-product.html"><img className="mb-2" src="img/product/6.png" alt=""></img></a>
                  <a className="product-title" href="single-product.html">Roof Lamp</a>
                  <p className="sale-price">$99<span>$113</span></p>
                  <div className="product-rating"><i className="ti ti-star-filled"></i><i className="ti ti-star-filled"></i><i className="ti ti-star-filled"></i><i className="ti ti-star-filled"></i><i className="ti ti-star-filled"></i></div>
                  <a className="btn btn-primary btn-sm" href="home.html#"><i className="ti ti-plus"></i></a>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4">
              <div className="card product-card">
                <div className="card-body">
                  <span className="badge rounded-pill badge-danger">-18%</span>
                  <a className="wishlist-btn" href="home.html#"><i className="ti ti-heart">                       </i></a>
                  <a className="product-thumbnail d-block" href="single-product.html"><img className="mb-2" src="img/product/9.png" alt=""></img>
                    <ul className="offer-countdown-timer d-flex align-items-center shadow-sm" data-countdown="2024/12/23 00:21:29">
                      <li><span className="days">0</span>d</li>
                      <li><span className="hours">0</span>h</li>
                      <li><span className="minutes">0</span>m</li>
                      <li><span className="seconds">0</span>s</li>
                    </ul></a>
                  <a className="product-title" href="single-product.html">Sneaker Shoes</a>
                  <p className="sale-price">$87<span>$92</span></p>
                  <div className="product-rating"><i className="ti ti-star-filled"></i><i className="ti ti-star-filled"></i><i className="ti ti-star-filled"></i><i className="ti ti-star-filled"></i><i className="ti ti-star-filled"></i></div>
                  <a className="btn btn-primary btn-sm" href="home.html#"><i className="ti ti-plus"></i></a>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4">
              <div className="card product-card">
                <div className="card-body">
                  <span className="badge rounded-pill badge-danger">-11%</span>
                  <a className="wishlist-btn" href="home.html#"><i className="ti ti-heart"></i></a>
                  <a className="product-thumbnail d-block" href="single-product.html"><img className="mb-2" src="img/product/8.png" alt=""></img></a>
                  <a className="product-title" href="single-product.html">Wooden Chair</a>
                  <p className="sale-price">$21<span>$25</span></p>
                  <div className="product-rating"><i className="ti ti-star-filled"></i><i className="ti ti-star-filled"></i><i className="ti ti-star-filled"></i><i className="ti ti-star-filled"></i><i className="ti ti-star-filled"></i></div>
                  <a className="btn btn-primary btn-sm" href="home.html#"><i className="ti ti-plus"></i></a>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4">
              <div className="card product-card">
                <div className="card-body">
                  <span className="badge rounded-pill badge-warning">On Sale</span>
                  <a className="wishlist-btn" href="home.html#"><i className="ti ti-heart"></i></a>
                  <a className="product-thumbnail d-block" href="single-product.html"><img className="mb-2" src="img/product/4.png" alt=""></img></a>
                  <a className="product-title" href="single-product.html">Polo Shirts</a>
                  <p className="sale-price">$38<span>$41</span></p>
                  <div className="product-rating"><i className="ti ti-star-filled"></i><i className="ti ti-star-filled"></i><i className="ti ti-star-filled"></i><i className="ti ti-star-filled"></i><i className="ti ti-star-filled"></i></div>
                  <a className="btn btn-primary btn-sm" href="home.html#"><i className="ti ti-plus"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="cta-text dir-rtl p-4 p-lg-5">
          <div className="row">
            <div className="col-9">
              <h5 className="text-white">20% discount on women's care items.</h5><a className="btn btn-primary" href="home.html#">Grab this offer</a>
            </div>
          </div><img src="img/bg-img/make-up.png" alt=""></img>
        </div>
      </div>
      <div className="weekly-best-seller-area py-3">
        <div className="container">
          <div className="section-heading d-flex align-items-center justify-content-between dir-rtl">
            <h6>Weekly Best Sellers</h6><a className="btn btn-sm btn-light" href="shop-list.html">
               View all<i className="ms-1 ti ti-arrow-right"></i></a>
          </div>
          <div className="row g-2">
            <div className="col-12">
              <div className="card horizontal-product-card">
                <div className="d-flex align-items-center">
                  <div className="product-thumbnail-side">
                    <a className="product-thumbnail d-block" href="single-product.html"><img src="img/product/18.png" alt=""></img></a>
                    <a className="wishlist-btn" href="home.html#"><i className="ti ti-heart"></i></a>
                  </div>
                  <div className="product-description">
                    <a className="product-title d-block" href="single-product.html">Nescafe Coffee Jar</a>
                    <p className="sale-price"><i className="ti ti-currency-dollar"></i>$64<span>$89</span></p>
                    <div className="product-rating"><i className="ti ti-star-filled"></i>4.88 <span className="ms-1">(39 review)</span></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="card horizontal-product-card">
                <div className="d-flex align-items-center">
                  <div className="product-thumbnail-side">
                   <a className="product-thumbnail d-block" href="single-product.html"><img src="img/product/7.png" alt=""></img></a>
                    <a className="wishlist-btn" href="home.html#"><i className="ti ti-heart"></i></a>
                  </div>
                  <div className="product-description">
                    <a className="product-title d-block" href="single-product.html">Modern Office Chair</a>
                    <p className="sale-price"><i className="ti ti-currency-dollar"></i>$99<span>$159</span></p>
                    <div className="product-rating"><i className="ti ti-star-filled"></i>4.82 <span className="ms-1">(125 review)</span></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="card horizontal-product-card">
                <div className="d-flex align-items-center">
                  <div className="product-thumbnail-side">
                    <a className="product-thumbnail d-block" href="single-product.html"><img src="img/product/12.png" alt=""></img></a>
                    <a className="wishlist-btn" href="home.html#"><i className="ti ti-heart"></i></a>
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
                    <a className="product-thumbnail d-block" href="single-product.html"><img src="img/product/17.png" alt=""></img></a>
                    <a className="wishlist-btn" href="home.html#"><i className="ti ti-heart"></i></a>
                  </div>
                  <div className="product-description">
                    <a className="product-title d-block" href="single-product.html">Meow Mix Cat Food</a>
                    <p className="sale-price"><i className="ti ti-currency-dollar"></i>$11.49<span>$13</span></p>
                    <div className="product-rating"><i className="ti ti-star-filled"></i>4.78 <span className="ms-1">(7 review)</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="discount-coupon-card p-4 p-lg-5 dir-rtl">
          <div className="d-flex align-items-center">
            <div className="discountIcon"><img className="w-100" src="img/core-img/discount.png" alt=""></img></div>
            <div className="text-content">
              <h5 className="text-white mb-2">Get 20% discount!</h5>
              <p className="text-white mb-0">To get discount, enter the<span className="px-1 fw-bold">GET20</span>code on the checkout page.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="featured-products-wrapper py-3">
        <div className="container">
          <div className="section-heading d-flex align-items-center justify-content-between dir-rtl">
            <h6>Featured Products</h6><a className="btn btn-sm btn-light" href="featured-products.html">View all<i className="ms-1 ti ti-arrow-right"></i></a>
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
                    <a className="product-title d-block" href="single-product.html">Blue Skateboard</a>
                    <p className="sale-price">$39<span>$89</span></p>
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
      <div className="pb-3">
        <div className="container">
          <div className="section-heading d-flex align-items-center justify-content-between dir-rtl">
            <h6>Collections</h6><a className="btn btn-sm btn-light" href="home.html#">
               View all<i className="ms-1 ti ti-arrow-right"></i></a>
          </div>
          <div className="collection-slide owl-carousel">
            <div className="card collection-card"><a href="single-product.html"><img src="img/product/17.jpg" alt=""></img></a>
              <div className="collection-title"><span>Women</span><span className="badge bg-danger">9</span></div>
            </div>
            <div className="card collection-card"><a href="single-product.html"><img src="img/product/19.jpg" alt=""></img></a>
              <div className="collection-title"><span>Men</span><span className="badge bg-danger">29</span></div>
            </div>
            <div className="card collection-card"><a href="single-product.html"><img src="img/product/21.jpg" alt=""></img></a>
              <div className="collection-title"><span>Kids</span><span className="badge bg-danger">4</span></div>
            </div>
            <div className="card collection-card"><a href="single-product.html"><img src="img/product/22.jpg" alt=""></img></a>
              <div className="collection-title"><span>Gadget</span><span className="badge bg-danger">11</span></div>
            </div>
            <div className="card collection-card"><a href="single-product.html"><img src="img/product/23.jpg" alt=""></img></a>
              <div className="collection-title"><span>Foods</span><span className="badge bg-danger">2</span></div>
            </div>
            <div className="card collection-card"><a href="single-product.html"><img src="img/product/24.jpg" alt=""></img></a>
              <div className="collection-title"><span>Sports</span><span className="badge bg-danger">5</span></div>
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
