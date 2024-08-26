import React, { useState } from "react";
import { NavLink, Link } from 'react-router-dom';

const Mesa = ({nombre, total, libre}) => {
  return <>
    <div className="card featured-product-card">
      <div className="card-body">
        <div className="product-description">
          <p className="product-title d-block">{nombre}</p>
          <span className="badge rounded-pill badge-warning">{libre === "0" ? "Libre" : "Ocupada"}</span>
          <p className="sale-price">$ {total}</p>
        </div>
      </div>
    </div>
  </>
}

export default Mesa;