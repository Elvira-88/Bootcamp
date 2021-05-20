import React from 'react'
import {NavLink} from 'react-router-dom';

export default function Navbar() {
    return (
        <div>
            <NavLink to="/pages/team">Nuestro equipo</NavLink>
            <NavLink to="/pages/courses">Cursos</NavLink>           
        </div>
    )
}
