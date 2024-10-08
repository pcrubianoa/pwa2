import React, { useState, useEffect } from "react";
import { NavLink, Link } from 'react-router-dom';
import { crud } from "../db/crud";

const Producto = ({nombre, precio_venta, onClick}) => {

  return <>
    <div className="col-12 card p-1 mt-1 item-familia disable-select" style={{ fontSize: '10px', fontWeight: '900' }} data-id_familia="${item.id}" onClick={onClick}>
      {nombre}
      <span>$ {new Intl.NumberFormat("COP").format(precio_venta)}</span>
    </div>
  </>
}

export default Producto;