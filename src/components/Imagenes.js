import React from "react";
import "./style.css";

const imagenes = ({img}) => {
  return (
    <div class="col">
      <div class="card text-bg-dark">
        <img src={img} class="card-img" alt="..." width="100px" />
      </div>
    </div>
  );
};

export default imagenes;
