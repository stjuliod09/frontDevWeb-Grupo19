import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/SideMenu.css';

/**
 * Ejemplo de uso:
 * const menuItems = [
 *   { text: 'Donaciones', url: '/donations', roles: ['admin', 'user'] },
 *   { text: 'Solicitudes de Adopción', url: '/adoption-requests', roles: ['admin'] },
 *   { text: 'Perfil', url: '/profile', roles: ['user'] }
 * ];
 *
 * <SideMenu userRole="admin" menuItems={menuItems} />
 */

function SideMenu({ userRole, menuItems = [] }) {
  return (
    <div className="side-menu">
      <ul>
        {menuItems.map((item, index) => {

          const hasAccess =
            !item.roles || item.roles.includes(userRole);

          if (!hasAccess) return null;

          return (
            <li key={index}>
              <Link to={item.url}>{item.text}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SideMenu;
