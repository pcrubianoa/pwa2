import { useNavigate } from "react-router-dom";
import { useAuth } from "../provider/authProvider";
import { useApi } from "../hooks/useApi";
import React, { useState, useEffect } from "react";
import FooterNav from "../components/FooterNav";
import SideNav from "../components/SideNav";
import StorageUsage from "../components/StorageUsage";
import { vibrate } from "../utils/vibrate";

import { db } from "../db/db";
import { crud } from "../db/crud";

const Sincronizacion = () => {

  const [configuracion, setConfiguracion] = useState([]);
  const [sincronizacion, setSincronizacion] = useState([]);
  
  const [isActiveFamilia, setIsActiveFamilias] = useState(false);
  const [isActiveCategoria, setIsActiveCategorias] = useState(false);
  const [isActiveMesa, setIsActiveMesas] = useState(false);
  const [isActiveProducto, setIsActiveProductos] = useState(false);

  const [isActiveFooterNav, setIsActiveFooterNav] = useState(false);
  
  const api = useApi();

  useEffect(() => {
    //db.open();

    const fetchSincronizacion = async () => {
      const allSincronizacion = await crud.getAll('sincronizacion');
      return allSincronizacion;
    };

    fetchSincronizacion().then(data => {
      if(data.length == 4) {
        setIsActiveFooterNav(true);
      }

      for (var i in data) {
        let item = data[i];
        switch(item.tabla) {
          case "Familias":
            setIsActiveFamilias(true);
            break;
          case "Categorias":
            setIsActiveCategorias(true);
            break;
          case "Mesas":
            setIsActiveMesas(true);
            break;
          case "Productos":
            setIsActiveProductos(true);
            break;
        }
      }
    });
  }, []);

  const handleSincronizar = async () => {

    const addSincronizacion = async (data) => {
      await crud.add('sincronizacion', data);
    };

    const clearAll = async () => {
      try {
        await crud.clear("documentos");
        await crud.clear("productos");
        await crud.clear("familias");
        await crud.clear("categorias");
        await crud.clear("sincronizacion");
        console.log("Todas las tablas han sido truncadas.");
      } catch (error) {
        console.error("Error al truncar las tablas: ", error);
      }
    };
    clearAll();

    const getConfiguracion = async () => {
      const allConfiguracion = await crud.getAll('configuracion');
      setConfiguracion(allConfiguracion);
      return allConfiguracion;
    };

    getConfiguracion().then(configuracion => {
      const queryMesas = async (apiKey) => {
        const res = await api.queryMesas({
          'apiKey': apiKey,
        });
        crud.bulkAdd('documentos', res.data);
        await addSincronizacion({
          tabla: 'Mesas',
          no_registros: res.no_regs,
          created_at: new Date().toLocaleString("es-CO", { timeZone: "America/Bogota" })
        });
        setIsActiveMesas(true);
      };
    
      const queryFamilias = async (apiKey) => {
        const res = await api.queryFamilias({
          'apiKey': apiKey,
          'where': 'ver:1'
        });
        crud.bulkAdd('familias', res.data);
        await addSincronizacion({
          tabla: 'Familias',
          no_registros: res.no_regs,
          created_at: new Date().toLocaleString("es-CO", { timeZone: "America/Bogota" })
        });
        setIsActiveFamilias(true);
      };
    
      const queryCategorias = async (apiKey) => {
        const res = await api.queryCategorias({
          'apiKey': apiKey,
        });
        crud.bulkAdd('categorias', res.data);
        await addSincronizacion({
          tabla: 'Categorias',
          no_registros: res.no_regs,
          created_at: new Date().toLocaleString("es-CO", { timeZone: "America/Bogota" })
        });
        setIsActiveCategorias(true);
      };
    
      const queryProductos = async (apiKey) => {
        const res = await api.queryProductos({
          'apiKey': apiKey,
          'fields': 'precio_venta, familia, marca, imagen, categoria, actual',
          'filters': 'estado:1',
          'group': 'id',
          'options': (configuracion[0].inventario == 1) ? 'inventario' : ''
        });
        crud.bulkAdd('productos', res.data);
        await addSincronizacion({
          tabla: 'Productos',
          no_registros: res.no_regs,
          created_at: new Date().toLocaleString("es-CO", { timeZone: "America/Bogota" })
        });
        setIsActiveProductos(true);
      };
    
      console.log('configuracion: ', configuracion);
      const apiKey = configuracion[0].apiKey;
      
      const runAllQueries = async () => {
        await Promise.all([
          queryMesas(apiKey),
          queryFamilias(apiKey),
          queryCategorias(apiKey),
          queryProductos(apiKey)
        ]);
      }

      runAllQueries();

    
      ejecutarFuncionFinal();
    });

  };
  
  const ejecutarFuncionFinal = () => {
    setIsActiveFooterNav(true);
    vibrate();
  };
  

  return <>
    <div className="header-area" id="headerArea">
      <div className="container h-100 d-flex align-items-center justify-content-between rtl-flex-d-row-r">
        <div className="suha-navbar-toggler ms-2" data-bs-toggle="offcanvas" data-bs-target="#suhaOffcanvas" aria-controls="suhaOffcanvas">
          <div><span></span><span></span><span></span></div>
        </div>
        <div className="page-heading">
          <h6 className="mb-0">Sincronización</h6>
        </div>
        <div className="back-button me-2">

        </div>
      </div>
    </div>
    <SideNav/>
    <div className="toast pwa-install-alert shadow bg-white" role="alert" aria-live="assertive" aria-atomic="true" data-bs-delay="5000" data-bs-autohide="true">
      <div className="toast-body">
        <div className="content d-flex align-items-center mb-2"><img src="../../suha-3.2.0/img/icons/icon-72x72.png" alt=""></img>
          <h6 className="mb-0">Add to Home Screen</h6>
          <button className="btn-close ms-auto" type="button" data-bs-dismiss="toast" aria-label="Close"></button>
        </div><span className="mb-0 d-block">Click the<strong className="mx-1">Add to Home Screen</strong>button &amp; enjoy it like a regular app.</span>
      </div>
    </div>
    <div className="page-content-wrapper py-3">
      <div className="container">
      <div className="card coupon-card p-4 p-lg-5 dir-rtl">
          <div className="d-flex align-items-center">
            <div className="text-content">
              <h5 className="mb-2">Aviso importante!</h5>
              <p className="mb-0">Esta operación puede borrar datos no enviados. Envíe o regístre una copia de seguridad antes de realizar este proceso.</p>
            </div>
          </div>
        </div>
        <div className="text-center mt-2">
          <button className="btn btn-primary" onClick={handleSincronizar}>Sincronizar</button>
        </div>
        <div className="card mt-3">
          <div className="card-body p-4">
            <div className={`single-order-status ${isActiveFamilia ? 'active' : ''}`}>
              <div className="order-icon"><i className="ti ti-basket"></i></div>
              <div className="order-text">
                <h6>Familias</h6><span>2 Feb 2024 - 12:38 PM</span>
              </div>
              <div className="order-status"><i className="ti ti-circle-check"></i></div>
            </div>
            <div className={`single-order-status ${isActiveMesa ? 'active' : ''}`}>
              <div className="order-icon"><i className="ti ti-trolley"></i></div>
              <div className="order-text">
                <h6>Mesas</h6><span>3 Feb 2024</span>
              </div>
              <div className="order-status"><i className="ti ti-circle-check"></i></div>
            </div>
            <div className={`single-order-status ${isActiveCategoria ? 'active' : ''}`}>
              <div className="order-icon"><i className="ti ti-building-store"></i></div>
              <div className="order-text">
                <h6>Categorias</h6><span>Estimate: 6 Feb 2024</span>
              </div>
              <div className="order-status"><i className="ti ti-circle-check"></i></div>
            </div>
            <div className={`single-order-status ${isActiveProducto ? 'active' : ''}`}>
              <div className="order-icon"><i className="ti ti-truck-delivery"></i></div>
              <div className="order-text">
                <h6>Productos</h6><span>Estimate: 4 Feb 2024</span>
              </div>
              <div className="order-status"><i className="ti ti-circle-check"></i></div>
            </div>
          </div>
        </div>
        <div className="card coupon-card mb-3 mt-3">
            <div className="card-body">
              <div className="apply-coupon">
                <h6 className="mb-0 text-center">Almacenamiento disponible en tu dispositivo</h6>
                <div className="coupon-form">
                  <StorageUsage/>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
    <div className="internet-connection-status" id="internetStatus"></div>
    {isActiveFooterNav && <FooterNav />}
    </>;
};

export default Sincronizacion;
