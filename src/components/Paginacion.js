import React from "react";

const Paginacion = ({ prev, next, onPrevious, onNext }) => {
  const handlePrevious = () => {
    onPrevious();
  };

  const handleNext = () => {
    onNext();
  };

  return (
    <nav aria-label="Page navigation ">
      <ul class="pagination justify-content-center align-item-center">
        {prev ? (
          <li class="page-item">
            <button class="page-link" onClick={handlePrevious}>
              Previous
            </button>
          </li>
        ) : null}

        {next ? (
          <li class="page-item">
            <button class="page-link" onClick={handleNext}>
              Next
            </button>
          </li>
        ) : null}
      </ul>
    </nav>
  );
};

export default Paginacion;
