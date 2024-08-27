import { useNavigate } from "react-router-dom";
import { useAuth } from "../provider/authProvider";
import { useApi } from "../hooks/useApi";
import React, { useState, useEffect } from "react";
import FooterNav from "../components/FooterNav";
import SideNav from "../components/SideNav";
import { Link } from 'react-router-dom';

import { db } from "../db/db";
import { crud } from "../db/crud";
import Mesa from "../components/Mesa";

const Mesas = () => {
  const [configuracion, setConfiguracion] = useState([]);
  const [mesas, setMesas] = useState([]);

  useEffect(() => {
    db.open().catch((err) => {
      console.error('Error al abrir la base de datos en App:', err);
    });

    const getConfiguracion = async () => {
      const allConfiguracion = await crud.getAll('configuracion');
      setConfiguracion(allConfiguracion);
    };

    getConfiguracion();

    const fetchMesas = async () => {
      const allMesas = await crud.getAll('documentos');
      setMesas(allMesas);
    };

    fetchMesas().then(() => {
      console.log('mesas: ', mesas);
    });
  }, []);
  return <>
    <div className="header-area" id="headerArea">
      <div className="container h-100 d-flex align-items-center justify-content-between d-flex rtl-flex-d-row-r">
      <div className="back-button me-2"><a href="checkout.html"><i className="ti ti-arrow-left"></i></a></div>
        <div className="page-heading">
          <h6 className="mb-0">Lista de Mesas</h6>
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
            <h6>{configuracion.length > 0 ? configuracion[0].establecimiento : 'Cargando configuración...'}</h6>
          </div>
          <div className="row g-2">

            {mesas.map(mesa => (
              <Link key={mesa.id} to={`/mesa/${mesa.id}`} className="col-4">
              <Mesa
                key={mesa.id}
                nombre={mesa.nombre}
                libre={mesa.libre}
                total={mesa.total}
              />
              </Link>
            ))}

          </div>
        </div>
      </div>
    </div>
    <div className="internet-connection-status" id="internetStatus"></div>
    <FooterNav/>
</>;
};

export default Mesas;
