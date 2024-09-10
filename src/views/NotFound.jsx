import React from "react";
import error404 from "../img/404.jpg"
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
      <div className="d-flex flex-column align-items-center mt-4">
        <h1>404 - Página no encontrada</h1>
        <img
          src={error404}
          alt="Página no encontrada"
          className="not-found-image"
          style={{ maxWidth: "44%", height: "auto" }}
        />
        <p>Lo sentimos, la página que buscas no existe.</p>
        <Link to="/">
          <button className="btn btn-outline-primary me-2">Regresar a la página principal</button>
        </Link>
      </div>
    );
  };
  
  export default NotFound;