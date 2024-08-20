import React, { useState, useEffect } from "react";
import { NavLink, Link } from 'react-router-dom';

const SideNav = () => {
  useEffect(() => {
    const offcanvasElement = document.querySelector('.offcanvas-backdrop');
    if (offcanvasElement) {
      offcanvasElement.classList.remove('show');
      offcanvasElement.classList.add('hide');
    }
  }, []);
  return <>
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
          <li>
            <Link to="/mesas">
              <i className="ti ti-brand-airtable"></i> Mesas
            </Link>
          </li>
          <li>
            <Link to="/productos">
              <i className="ti ti-brand-airtable"></i> Productos
            </Link>
          </li>
          <li>
            <Link to="/perfil">
              <i className="ti ti-brand-airtable"></i> Perfil
            </Link>
          </li>
          <li>
            <Link to="/sincronizacion">
              <i className="ti ti-brand-airtable"></i> Sincronización
            </Link>
          </li>
          <li>
            <Link to="/terminos">
              <i className="ti ti-brand-airtable"></i> Terminos del servicio
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </>
}

export default SideNav;