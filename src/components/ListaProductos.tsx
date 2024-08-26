import React, { useState, useEffect } from "react";
import { NavLink, Link } from 'react-router-dom';
import { crud } from "../db/crud";
import Familia from '../components/Familia';
import Producto from '../components/Producto';

const ListaProducto = () => {
  const [familias, setFamilias] = useState(null);
  const [productos, setProductos] = useState(null);

  useEffect(() => {
    const getFamilias = async () => {
      const familias = await crud.getAll('familias');
      return familias;
    };

    getFamilias().then((familias) => {
      setFamilias(familias);
    });

    const getProductos = async () => {
      const productos = await crud.getAll('productos');
      return productos;
    };

    getProductos().then((productos) => {
      setProductos(productos);
    });
  }, []);

  return <>
  <div className="section fixed-footer height-footer-up pr-0" style={{ height: '40vh', display: 'block', boxShadow: '0px -5px 20px rgba(50, 50, 50, 0.3)', background: '#e9e9e9', position: 'fixed', bottom: 0, width: '100%'}}>
  <div className="row justify-content-between py-2 px-2 font-weight-bold">
      <h6 className="mb-0">LISTA DE PRODUCTOS - MENÚ</h6>
      <div id="action-button" className="action-button toggle-searchbox">
          <span className="text-primary" style={{ fontSize:'12px' }}>BUSCAR</span><i className="las la-search-plus la-lg text-primary"></i>
      </div>
  </div>
  <div className="row">
      <div className="col-4" id="listaFamilias" style={{  paddingBottom: '80px', overflow: 'scroll', height: '40vh'}}>
      {familias ? (
        <div>
        {familias.map(familia => (
          <Familia
            key={familia.id}
            nombre={familia.nombre}
          />
        ))}
        </div>
        ) : (
          <p>Cargando...</p>
        )}
        

      </div>
      <div className="col-8 row" id="listaProductosFamilias" style={{  paddingBottom: '80px', overflow: 'scroll', height: '40vh', alignContent: 'flex-start'}}>
      {productos ? (
        <div>
        {productos.map(producto => (
          <Producto
            key={producto.id}
            nombre={producto.nombre}
            precio_venta={producto.precio_venta}
          />
        ))}
        </div>
        ) : (
          <p>Cargando...</p>
        )}
      </div>
  </div>
  </div>
  </>
}

export default ListaProducto;