import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Circulos = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div class="text-center p-5">
        <h1 class="display-5 fw-bold text-dark  text-center py-5 justify-content-center">
          Perfil
        </h1>
        <div class="row">
          <div class="col-lg-12">
            <img className="bd-placeholder-img rounded-circle" src={user.picture} alt="img"></img>
            <h1 class="fw-bold">{user.name}</h1>
            <br/>
            <p className="fw-bold">Correo: {user.email}</p>
            <p className="fw-bold">Nombre Corto: {user.nickname}</p>
          </div>
        </div>
      </div>
    )
  );
};

export default Circulos;
