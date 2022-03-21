import React from "react";
import "./loading.css";
function Loading() {
  return (
    <React.Fragment>
      <div className="upp" id="contenedor_carga">
        <div className="col-md-12 carga" id="carga"></div>
        <div className="col-md-12 cargando centrar">CARGANDO</div>
      </div>
    </React.Fragment>
  );
}
export default Loading;
