import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "wouter";

export default function Home() {

  const [people, setPeople] = useState([])
  const setLocation = useLocation()[1]

  useEffect(() => {
    fetch("http://localhost:3000/people")
    .then(res => res.json())
    .then(setPeople)
  }, [setPeople])

  const handleLocation = e => {
    setLocation(`/update/${e.target.id}`)
  }
  
  return (
    <section className="home">
      <h1>Todas las personas</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Modificar</th>
          </tr>
        </thead>
        <tbody>
          {people && people.map(person => 
            <tr key={person._id} onClick={handleLocation}>
              <td>{person.name}</td>
              <td>{person.age}</td>
              <td id={person._id}>X</td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  );
}
