import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/SideMenu.css';

/**
 * Ejemplo de uso:
 * <SideMenu userRole="admin" />
 */

const menuItemsAdmin = [
  { text: 'Solicitudes de Adopción', url: '/adoption-requests' },
  { text: 'Registrar gato', url: '/cats' },

];

const menuItemsUser = [
  // { text: 'Perfil', url: '/profile' },
  { text: 'Lista de gatos', url: '/cats' },
  { text: 'Solicitar un michi', url: '/adoption' },
  { text: 'Donaciones', url: '/donations' },
  
];

function SideMenu() {
  const userRole=localStorage.getItem('userRole')
  // Determinar los ítems del menú según el rol del usuario
  const menuItems = userRole === 'admin' ? [...menuItemsUser, ...menuItemsAdmin] : menuItemsUser;

  return (
    <div className="side-menu">
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link to={item.url}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideMenu;
