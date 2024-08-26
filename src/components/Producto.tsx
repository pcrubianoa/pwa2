import React, { useState, useEffect } from "react";
import { NavLink, Link } from 'react-router-dom';
import { crud } from "../db/crud";

const Producto = ({nombre, precio_venta}) => {

  return <>
    <div className="col-12 card p-1 mt-1 item-familia disable-select" style={{ fontSize: '10px', fontWeight: '900' }} data-id_familia="${item.id}">
      <p>{nombre}</p>
      <p>$ {new Intl.NumberFormat("COP").format(precio_venta)}</p>
    </div>
  </>
}

export default Producto;