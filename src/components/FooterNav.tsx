import React, { useState } from "react";
import { NavLink, Link } from 'react-router-dom';

const FooterNav = () => {
  return <>
    <div className="footer-nav-area" id="footerNav">
    <div className="suha-footer-nav">
      <ul className="h-100 d-flex align-items-center justify-content-between ps-0 d-flex rtl-flex-d-row-r">
        <li>
          <Link to="/mesas">
            <i className="ti ti-home"></i> Mesas
          </Link>
        </li>
        <li>
          <Link to="/productos">
            <i className="ti ti-tags"></i> Productos
          </Link>
        </li>
        <li>
          <Link to="/perfil">
            <i className="ti ti-user"></i> Perfil
          </Link>
        </li>
        <li>
          <Link to="/configuracion">
            <i className="ti ti-settings"></i> Configuración
          </Link>
        </li>
      </ul>
    </div>
    </div>
  </>
}

export default FooterNav;