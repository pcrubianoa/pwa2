import React, { useState, useEffect } from "react";
import { NavLink, Link } from 'react-router-dom';
import { crud } from "../db/crud";

const Familia = ({nombre}) => {

  return <>
    <div className="col-12 card p-2 mt-2 item-familia disable-select"
    style={{ fontSize: '10px', fontWeight: '900' }} data-id_familia="${item.id}">{nombre}</div>
  </>
}

export default Familia;