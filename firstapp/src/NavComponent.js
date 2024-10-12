import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './NavComponent.css'; // Para agregar estilos

const NavComponent = () => {
  return (
    <nav className="nav-bar">
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="active">
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" activeClassName="active">
            Perfil
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard" activeClassName="active">
            Dashboard
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavComponent;
