import React from "react";
import { MdLogin, MdLogout } from "react-icons/md";
import "./style.css";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = ({ title }) => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <header class="d-flex flex-wrap justify-content-center py-3 border border-secondary ">
      <a
        href="/"
        class="d-flex align-items-center  mb-md-0 me-md-auto text-dark text-decoration-none "
      >
        <h2 class="fs-3 p-2 m-2 Bg-azul rounded-4 text-white">{title}</h2>
      </a>
      <ul class="nav nav-pills mt-4 fw-bold">
        <li class="nav-item">
          <a href="/" class=" Bg-verde  nav-link">
            Inicio
          </a>
        </li>
        <li class="nav-item">
          <a href="#Personajes" class="nav-link Bg-verde ">
            Personajes
          </a>
        </li>
        <li class="nav-item">
          <a href="#Acerca" class="nav-link Bg-verde ">
            Acerca
          </a>
        </li>
        {!isAuthenticated ? (
          <li class="nav-item">
            <button
              class="btn Bg-verde  "
              onClick={() => loginWithRedirect()}
            >
              <MdLogin /> Iniciar Session
            </button>
          </li>
        ) : (
          <li class="nav-item">
            <button class="btn Bg-verde" onClick={() => logout()}>
              <MdLogout /> Cerrar Session
            </button>
          </li>
        )}
      </ul>
    </header>
  );
};

export default Navbar;
