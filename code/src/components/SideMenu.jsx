import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/SideMenu.css';
import { useNavigate } from "react-router-dom";

/**
 * Ejemplo de uso:
 * <SideMenu userRole="admin" />
 */

const menuItemsAdmin = [
  { text: 'Solicitudes de Adopción', url: '/adoption-requests' },
  { text: 'Registrar gato', url: '/' },

];

const menuItemsUser = [
  // { text: 'Perfil', url: '/profile' },
  { text: 'Lista de gatos', url: '/' },
  { text: 'Solicitar un michi', url: '/adoption' },
  { text: 'Donaciones', url: '/donations' },
  
];

function SideMenu() {
  const userRole=localStorage.getItem('userRole')
  // Determinar los ítems del menú según el rol del usuario
  const menuItems = userRole === 'admin' ? [...menuItemsUser, ...menuItemsAdmin] : menuItemsUser;
  const navigate = useNavigate();

  const handleAdminLogin = () => {
    navigate('/login-admin'); // Redirige a la página del administrador
  };
  const handleAdminLogout = () => {
    localStorage.clear();
    navigate('/'); // Redirige a la página del administrador
  };

  return (
    <div className="side-menu">
    <div className="logo-container">
      <img
        src="https://img.freepik.com/vector-premium/cabeza-gato-lindo-logo-dibujos-animados-cabeza-gato-bueno-productos-relacionados-cuidado-gatos_487414-292.jpg?w=740"
        alt="Logo Adopta tu michi"
        className="cat-logo"
      />
    </div>
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link to={item.url}>{item.text}</Link>
          </li>
        ))}
      </ul>
      <button className="admin-button" onClick={userRole === 'admin' ? handleAdminLogout : handleAdminLogin}>
        {userRole === 'admin' ? 'Cerrar sesión como Administrador' : 'Iniciar como Administrador'}
      </button>
    </div>
  );
}

export default SideMenu;
