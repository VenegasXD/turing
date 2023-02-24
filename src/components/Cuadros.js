import React from "react";
import "./style.css";

const Cuadros = ({ txt,titulo }) => {
  return (
    <div class="col ">
      <div class="card card-cover m-2 p-2 overflow-hidden text-bg-dark rounded-4 shadow-lg fondoCuadro">
        <div class=" text-white text-center">
          <h3 class="lh-1 fw-bold">{titulo}</h3>
          <p class="pt-1 mt-2 mb-3 lh-1">{txt}</p>
        </div>
      </div>
    </div>
  );
};

export default Cuadros;
