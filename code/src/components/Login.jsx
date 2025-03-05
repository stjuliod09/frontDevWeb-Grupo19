import React, { useState } from 'react';
import AuthService from '../services/login'; // Importa el servicio de autenticación
import { useNavigate } from "react-router-dom";

import '../styles/Login.css';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorModal, setErrorModal] = useState(false); // Estado para mostrar el modal

  const handleSubmit = async (e) => {
    e.preventDefault();

    const raw = JSON.stringify({ email, password });

    const response = await AuthService.auth(raw);

    if (response && response.status === 200) {
      localStorage.setItem('userRole', 'admin');
      localStorage.setItem('tokenAdmin',response.jwtToken);

      navigate('/'); // Redirige a la página principal

    } else {
      setErrorModal(true); 
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <img
          src="https://img.freepik.com/vector-premium/cabeza-gato-lindo-logo-dibujos-animados-cabeza-gato-bueno-productos-relacionados-cuidado-gatos_487414-292.jpg?w=740"
          alt="Logo Adopta tu michi"
          className="cat-logo"
        />
        <h2>Bienvenido a Adopta tu michi</h2>
        <p className="tagline">
          Inicia sesión para ayudar a los gatitos a encontrar un hogar
        </p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Correo electrónico:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ingresa tu correo"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Ingresa tu contraseña"
              required
            />
          </div>
          <button type="submit">Iniciar Sesión</button>
        </form>

        {/* Modal de error */}
        {errorModal && (
          <div className="modal">
            <div className="modal-content">
              <p>❌ Credenciales incorrectas. Intenta de nuevo.</p>
              <button onClick={() => setErrorModal(false)}>Cerrar</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
