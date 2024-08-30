import React, { useState, useEffect } from "react";
import { crud } from "../db/crud";
import Familia from '../components/Familia';
import Producto from '../components/Producto';

const ListaProducto = ({ agregarProducto }) => {
  const [familias, setFamilias] = useState([]);
  const [productos, setProductos] = useState([]);
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  const [familiaSeleccionada, setFamiliaSeleccionada] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getFamilias = async () => {
      const familias = await crud.getAll('familias');
      console.log('Familias:', familias);
      setFamilias(familias);
      if (familias.length > 0) {
        setFamiliaSeleccionada(familias[0]);
      }
    };

    const getProductos = async () => {
      const productos = await crud.getAll('productos');
      console.log('Productos:', productos);
      setProductos(productos);
    };

    const fetchData = async () => {
      await Promise.all([getFamilias(), getProductos()]);
      setLoading(false);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (familiaSeleccionada) {
      const productosFiltrados = productos.filter(producto => producto.id_familia === familiaSeleccionada.id);
      console.log('Productos Filtrados:', productosFiltrados);
      setProductosFiltrados(productosFiltrados);
    }
  }, [familiaSeleccionada, productos]);

  const handleFamiliaClick = (familia) => {
    setFamiliaSeleccionada(familia);
  };

  const handleProductoClick = (producto) => {
    console.log('Producto seleccionado:', producto);
    agregarProducto(producto);
  };

  if (loading) {
    return <p>Cargando...</p>;
  }

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
          {familias.length > 0 ? (
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
            <p>No se encontraron familias.</p>
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
