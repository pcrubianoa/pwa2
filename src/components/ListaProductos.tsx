import React, { useState, useEffect } from "react";
import { crud } from "../db/crud";
import Familia from '../components/Familia';
import Producto from '../components/Producto';

const ListaProducto = () => {
  const [familias, setFamilias] = useState(null);
  const [productos, setProductos] = useState(null);
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  const [documentosDetalle, setDocumentosDetalle] = useState([]);
  const [familiaSeleccionada, setFamiliaSeleccionada] = useState(null);
  const [productoSeleccionada, setProductoSeleccionada] = useState(null);

  useEffect(() => {
    const getFamilias = async () => {
      const familias = await crud.getAll('familias');
      return familias;
    };

    const getProductos = async () => {
      const productos = await crud.getAll('productos');
      return productos;
    };

    const fetchData = async () => {
      const [familias, productos] = await Promise.all([getFamilias(), getProductos()]);
      setFamilias(familias);
      setProductos(productos);

      // Seleccionar la primera familia automáticamente
      if (familias.length > 0) {
        setFamiliaSeleccionada(familias[0]);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (familiaSeleccionada && productos) {
      const productosFiltrados = productos.filter(producto => producto.id_familia === familiaSeleccionada.id);
      setProductosFiltrados(productosFiltrados);
    }
  }, [familiaSeleccionada, productos]);

  const handleFamiliaClick = (familia) => {
    setFamiliaSeleccionada(familia);
  };

  const addPedidoDetalle = async (data) => {
    await crud.add('documentos_detalle', data);
  };

  const handleProductoClick = (producto) => {
    console.log('producto: ', producto);
    const pedido = {
      id_mesa: 4,
      nombre: producto.nombre,
      precio_venta: producto.precio_venta
    }
    addPedidoDetalle(pedido);
    setProductoSeleccionada(producto);
  };

  return (
    <div className="section fixed-footer height-footer-up pr-0" style={{ height: '40vh', display: 'block', boxShadow: '0px -5px 20px rgba(50, 50, 50, 0.3)', background: '#e9e9e9', position: 'fixed', bottom: 0, width: '100%', zIndex: '999' }}>
      <div className="row justify-content-between py-2 px-2 font-weight-bold">
        <h6 className="mb-0">LISTA DE PRODUCTOS - MENÚ</h6>
        <div id="action-button" className="action-button toggle-searchbox">
          <span className="text-primary" style={{ fontSize: '12px' }}>BUSCAR</span><i className="las la-search-plus la-lg text-primary"></i>
        </div>
      </div>
      <div className="row">
        <div className="col-4" id="listaFamilias" style={{ paddingBottom: '80px', overflow: 'scroll', height: '40vh' }}>
          {familias ? (
            <div>
              {familias.map(familia => (
                <Familia
                  key={familia.id}
                  nombre={familia.nombre}
                  onClick={() => handleFamiliaClick(familia)}
                  isSelected={familiaSeleccionada && familiaSeleccionada.id === familia.id}
                />
              ))}
            </div>
          ) : (
            <p>Cargando...</p>
          )}
        </div>
        <div className="col-8 row" id="listaProductosFamilias" style={{ paddingBottom: '80px', overflow: 'scroll', height: '40vh', alignContent: 'flex-start' }}>
          {familiaSeleccionada ? (
            productosFiltrados.length > 0 ? (
              productosFiltrados.map(producto => (
                <Producto
                  key={producto.id}
                  nombre={producto.nombre}
                  onClick={() => handleProductoClick(producto)}
                  precio_venta={producto.precio_venta}
                />
              ))
            ) : (
              <p>No hay productos para esta familia.</p>
            )
          ) : (
            <p>Selecciona una familia para ver los productos.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListaProducto;