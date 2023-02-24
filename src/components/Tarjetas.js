import React from "react";

const Tarjetas = ({ characters =[] }) => {
  return (

     characters.map((item, index) =>( 
    <div key={index} class="col">
      <div class="card border-dark ">
        <img
          src={item.image}
          class="card-img-top p-2"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">{item.name}</h5>
          <p class="card-text"> Genero: {item.gender} </p>
          <p class="card-text"> Vive: {item.location.name} </p>
          <p class="card-text"> Status: {item.status} </p>
        </div>
        <div class="card-footer">
          <small class="text-muted">Especie: {item.species}</small>
        </div>
      </div>
    </div>
      ))
  );
};

export default Tarjetas;
