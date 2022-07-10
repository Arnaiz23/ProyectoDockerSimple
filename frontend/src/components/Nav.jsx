import React from "react";
import { Link } from "wouter";

export default function Nav () {
    return (
        <>
            <ul className="nav">
                <li>
                    <Link to="/">Ver todos</Link>
                </li>
                <li>
                    <Link to="/create">Crear</Link>
                </li>
                <li>
                    <Link to="/delete">Eliminar</Link>
                </li>
            </ul>
        </>
    )
}