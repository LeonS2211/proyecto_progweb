import React from 'react';
import Chip from '../../components/ChipG/ChipG.jsx'

const University = ({ textBusqueda1, setTextBusqueda1, textBusqueda2, setTextBusqueda2, textBusqueda3, setTextBusqueda3, arr1, arr2, arr3 }) => {
  const handleUniversidadChange = (e) => {
    setTextBusqueda1(e.target.value);
  };

  const handleCarreraChange = (e) => {
    setTextBusqueda2(e.target.value);
  };

  const handleCursoChange = (e) => {
    setTextBusqueda3(e.target.value);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          id="universidad"
          value={textBusqueda1}
          onChange={handleUniversidadChange}
        />
        <ul className="nobullets">
          {arr1
            .filter((f) => f.includes(textBusqueda1))
            .map((universidad) => {
              return (
                <li key={universidad}>
                  <Chip text={universidad} />
                </li>
              );
            })}
        </ul>
      </div>

      <div>
        <input
          type="text"
          id="universidad"
          value={textBusqueda2}
          onChange={handleCarreraChange}
        />
        <ul className="nobullets">
          {arr2
            .filter((f) => f.includes(textBusqueda2))
            .map((carrera) => {
              return (
                <li key={carrera}>
                  <Chip text={carrera} />
                </li>
              );
            })}
        </ul>
      </div>

      <div>
        <input
          type="text"
          id="universidad"
          value={textBusqueda3}
          onChange={handleCursoChange}
        />
        <ul className="nobullets">
          {arr3
            .filter((f) => f.includes(textBusqueda3))
            .map((curso) => {
              return (
                <li key={curso}>
                  <Chip text={curso} />
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default University;
