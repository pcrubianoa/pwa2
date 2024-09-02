import { Link, useParams } from 'react-router-dom';
import { crud } from '../db/crud';
import { useEffect, useState } from 'react';
import ListaProducto from '../components/ListaProductos';
import SideNav from '../components/SideNav';
import Detalle from '../components/Detalle';

function MesaDetalle() {
  const { id } = useParams();
  const [mesa, setMesa] = useState(null);
  const [pedido, setPedido] = useState([]);
  const [detallesCargados, setDetallesCargados] = useState(false);

  useEffect(() => {
    const getMesa = async (id) => {
      const mesa = await crud.getById('documentos', id);
      return mesa;
    };

    getMesa(id).then((mesa) => {
      setMesa(mesa);
    });

    const getDetalles = async (id) => {
      const detalles = await crud.getAllByField('documentos_detalle', 'id_mesa', id);
      return detalles;
    };

    getDetalles(id).then((detalles) => {
      setPedido(detalles);
      setDetallesCargados(true);
      calcularTotal(detalles);
    });
  }, [id]);

  const calcularTotal = (detalles) => {
    const total = detalles.reduce((sum, detalle) => sum + parseFloat(detalle.precio_venta), 0);
    setMesa((prevMesa) => ({ ...prevMesa, total }));
    crud.updateById('documentos', id, { total });
  };

  const borrarProducto = async (idProducto) => {
    await crud.deleteById('documentos_detalle', idProducto);
    const nuevosDetalles = pedido.filter(detalle => detalle.id !== idProducto);
    setPedido(nuevosDetalles);
    calcularTotal(nuevosDetalles);
  };

  const agregarProducto = async (producto) => {
    const nuevoProducto = {
      id_mesa: Number(id),
      nombre: producto.nombre,
      precio_venta: producto.precio_venta
    };
    await crud.add('documentos_detalle', nuevoProducto);
    const nuevosDetalles = [...pedido, nuevoProducto];
    setPedido(nuevosDetalles);
    calcularTotal(nuevosDetalles);
  };

  const cartWrapperStyle = {
    height: '50vh',
    overflowY: 'scroll',
    scrollbarWidth: 'none', /* Firefox */
    msOverflowStyle: 'none'  /* Internet Explorer y Edge */
  };

  return (
    <>
      <div className="header-area" id="headerArea">
        <div className="container h-100 d-flex align-items-center justify-content-between d-flex rtl-flex-d-row-r">
          <div className="suha-navbar-toggler ms-2" data-bs-toggle="offcanvas" data-bs-target="#suhaOffcanvas" aria-controls="suhaOffcanvas">
            <div><span></span><span></span><span></span></div>
          </div>
          <div className="page-heading">
            <h6 className="mb-0">{mesa ? mesa.nombre : ''}</h6>
          </div>
          <div className="back-button me-2">
            <Link to="/mesas"><i className="ti ti-arrow-left"></i></Link>
          </div>
        </div>
      </div>
      <SideNav />
      <div className="page-content-wrapper">
        <div className="featured-products-wrapper py-3">
          <div className="container">
            <div className="section-heading d-flex align-items-center justify-content-end dir-rtl">
              {mesa ? (
                <div>
                  <h6>Total: $ {new Intl.NumberFormat("COP").format(mesa.total)}</h6>
                </div>
              ) : (
                <p>Cargando...</p>
              )}
            </div>

            <div className="cart-wrapper-area py-3" style={cartWrapperStyle}>
              <div className="cart-table card mb-3">
                <div className="table-responsive card-body">
                  <table className="table mb-0">
                    <tbody>
                      {detallesCargados ? (
                        pedido.length > 0 ? (
                          pedido.map(detalle => (
                            <Detalle
                              key={detalle.id}
                              id={detalle.id}
                              nombre={detalle.nombre}
                              precio_venta={detalle.precio_venta}
                              borrarProducto={borrarProducto}
                            />
                          ))
                        ) : (
                          <tr>
                            <th scope="row"></th>
                            <td></td>
                            <td><a className="product-title" href="single-product.html">Agrega productos a la mesa.</a></td>
                            <td></td>
                          </tr>
                        )
                      ) : (
                        <tr>
                          <th scope="row"></th>
                          <td></td>
                          <td><a className="product-title" href="single-product.html">Cargando productos...</a></td>
                          <td></td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ListaProducto agregarProducto={agregarProducto} />
      <div className="internet-connection-status" id="internetStatus"></div>
    </>
  );
}

export default MesaDetalle;
