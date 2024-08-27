import React, { useState } from "react";
import { NavLink, Link } from 'react-router-dom';

const Mesa = ({nombre, total, libre}) => {
  return <>
    <div className="card featured-product-card">
      <div className="card-body">
        <div className="product-description">
          <p className="product-title d-block">{nombre}</p>
            <span className={`badge rounded-pill ${libre === "0" ? "badge-warning" : "badge-success"}`}>{libre === "0" ? "Libre" : "Ocupada"} </span>
          <p className="sale-price">$ {new Intl.NumberFormat("COP").format(total)}</p>
        </div>
      </div>
    </div>
  </>
}

export default Mesa;