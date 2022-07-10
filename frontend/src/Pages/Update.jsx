import React from "react";
import { useState } from "react";
import { useLocation } from "wouter";
import Form from "../components/Form";

export default function Update ({ params }) {
    const [person, setPerson] = useState({
        "name" : "",
        "age" : ""
    })
    const setLocation = useLocation()[1]

    const handleChange = e => {
        setPerson({
            ...person,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        if(person.name === "") return alert("El nombre no puede estar vacio")
        if(person.age === "") return alert("La edad no puede estar vacia")
        
        fetch(`http://localhost:3000/people/${params.id}`, {
            method: "PUT",
            headers: new Headers({
                "Content-type" : "application/json"
            }),
            body: JSON.stringify(person)
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === 201) {
                    alert("Persona actualizada")
                    return setLocation("/")
                }
            })
    }

    return (
        <section className="container-update">
            <h2>Update</h2>
            <Form 
                handleSubmit={handleSubmit} 
                handleChange={handleChange}
            />
        </section>
    )
}