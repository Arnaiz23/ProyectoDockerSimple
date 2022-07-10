import React, { useState } from "react";

export default function Form({ handleSubmit, handleChange }) {

  return (
    <form onSubmit={handleSubmit}>
      <div className="container-input">
        <label htmlFor="name">Nombre</label>
        <input type="text" name="name" id="name" placeholder="Escribe un nombre" onChange={handleChange} />
      </div>
      <div className="container-input">
        <label htmlFor="age">Edad</label>
        <input type="number" name="age" id="age" placeholder="Escribe una edad" onChange={handleChange} />
      </div>
      <input type="submit" value="Enviar" />
    </form>
  );
}
