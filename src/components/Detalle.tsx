import React, { useState } from "react";
import { NavLink, Link } from 'react-router-dom';

const Detalle = ({nombre, precio_venta}) => {
  return <>
  <tr>
    <th scope="row"><a className="remove-product" href="cart.html#"><i className="ti ti-x"></i></a></th>
    <td><img className="rounded" src="../../suha-3.2.0/img/product/11.png" alt=""></img></td>
    <td><a className="product-title" href="single-product.html">{nombre}<span className="mt-1">$ {precio_venta}</span></a></td>
    <td>
      <div className="quantity">
        <input className="qty-text" type="number" min="1" max="99"></input>
      </div>
    </td>
  </tr>
  </>
}

export default Detalle;