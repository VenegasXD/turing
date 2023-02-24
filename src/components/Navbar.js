import React from 'react'
import { MdLogin } from "react-icons/md";
import "./style.css"

const Navbar = ({title}) => {
  return (
    <header class="d-flex flex-wrap justify-content-center py-3 ">
            <a href="/" class="d-flex align-items-center  mb-md-0 me-md-auto text-dark text-decoration-none">
                <h2 class="fs-3 p-2 m-2 Bg-azul text-white">{title}</h2>
            </a>
            <ul class="nav nav-pills mt-4 ">
                <li class="nav-item"><a href="#" class=" Bg-verde  nav-link">Inicio</a></li>
                <li class="nav-item"><a href="#" class="nav-link Bg-verde ">Personajes</a></li>
                <li class="nav-item"><a href="#" class="nav-link Bg-verde ">Acerca</a></li>
                <li class="nav-item"><a href="/public/session.html" class="nav-link Bg-verde " > <MdLogin/> Inicia Session</a></li>
            </ul>
        </header>
  )
}

export default Navbar
