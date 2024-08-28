import { Link, useParams } from 'react-router-dom';
import { crud } from '../db/crud';
import { useEffect, useState } from 'react';
import ListaProducto from '../components/ListaProductos';
import SideNav from '../components/SideNav';
import DetalleDocumento from '../components/Detalle';
import Detalle from '../components/Detalle';

function MesaDetalle() {
  const { id } = useParams();
  const [mesa, setMesa] = useState(null);
  const [pedido, setPedido] = useState([]);

  useEffect(() => {

    const getMesa = async (id) => {
      const mesa = await crud.getById('documentos', id);
      return mesa;
    };

    getMesa(id).then((mesa) => {
      console.log('mesa: ', mesa);
      setMesa(mesa);
    });

    const getDetalles = async (id) => {
      console.log("getDetalles->id", id);
      const detalles = await crud.getAllByField('documentos_detalle', 'id_mesa', id);
      return detalles;
    };

    getDetalles(id).then((detalles) => {
      console.log('detalle: --->', detalles);
      setPedido(detalles);
    });
  }, [id]);

  return (
    <>
    <div className="header-area" id="headerArea">
      <div className="container h-100 d-flex align-items-center justify-content-between d-flex rtl-flex-d-row-r">
      <div className="back-button me-2">
        <Link to="/mesas"><i className="ti ti-arrow-left"></i></Link>
        </div>
        <div className="page-heading">
          <h6 className="mb-0">{mesa ? mesa.nombre : ''}</h6>
        </div>
        <div className="suha-navbar-toggler ms-2" data-bs-toggle="offcanvas" data-bs-target="#suhaOffcanvas" aria-controls="suhaOffcanvas">
          <div><span></span><span></span><span></span></div>
        </div>
      </div>
    </div>
    <SideNav/>
    <div className="page-content-wrapper">
      <div className="featured-products-wrapper py-3">
        <div className="container">
          <div className="section-heading d-flex align-items-center justify-content-between dir-rtl">
          { mesa ? (
          <div>
            <p>Total: $ {new Intl.NumberFormat("COP").format(mesa.total)}</p>
          </div>
          ) : (
            <p>Cargando...</p>
          )
          }
          </div>

          <div className="cart-wrapper-area py-3">
          <div className="cart-table card mb-3">
            <div className="table-responsive card-body">
              <table className="table mb-0">
                <tbody>
                {
                pedido.length > 0 ? (
                  pedido.map(detalle => (
                    <Detalle
                      key={detalle.id}
                      nombre={detalle.nombre}
                      precio_venta={detalle.precio_venta}
                    />
                  ))
                ) : (
                  <tr>Agrega productos a la mesa.</tr>
                )
                }
                </tbody>
              </table>
            </div>
          </div>
        </div>


        </div>
      </div>
    </div>
    <ListaProducto/>
    <div className="internet-connection-status" id="internetStatus"></div>
    </>
  );
}

export default MesaDetalle;
