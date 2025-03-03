import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/SideMenu.css';

function SideMenu({ userRole }) {
  return (
    <div className="side-menu">
      <ul>
        <li>
          <Link to="/donations">Donaciones</Link>
        </li>
        {userRole === 'admin' && (
          <li>
            <Link to="/adoption-requests">Solicitudes de Adopción</Link>
          </li>
        )}
      </ul>
    </div>
  );
}

export default SideMenu;
