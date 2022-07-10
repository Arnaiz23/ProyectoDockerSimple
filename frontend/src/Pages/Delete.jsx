import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "wouter";

const STATE_OPTIONS = {
    DISABLED : 0,
    ENABLED : 1
}

export default function Delete () {

    const [people, setPeople] = useState([])
    const [option, setOption] = useState(STATE_OPTIONS.DISABLED)
    const [id, setId] = useState()
    const setLocation = useLocation()[1]

    const isButtonDisabled = option === STATE_OPTIONS.DISABLED

    useEffect(() => {
        fetch("http://localhost:3000/people")
            .then(res => res.json())
            .then(setPeople)
    }, [setPeople])

    const handleSubmit = e => {
        e.preventDefault()
        fetch(`http://localhost:3000/people/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if(data.status === 201){
                    alert("Persona eliminada")
                    return setLocation("/")
                }
            })
    }

    const handleChange = e => {
        setId(e.target.value)
        setOption(STATE_OPTIONS.ENABLED)
    }
    
    return (
        <section className="container-delete">
            <h2>Eliminar persona</h2>
            <form onSubmit={handleSubmit}>
                <select name="" id="" defaultValue="0" onChange={handleChange}>
                    <option value="0" disabled>Elige una opcion</option>
                    {
                        people.map(person => <option 
                            value={person._id} 
                            key={person._id}
                            >
                                {person.name}
                            </option>)
                    }
                </select>
                <button disabled={isButtonDisabled} >Enviar</button>
            </form>
        </section>
    )
}