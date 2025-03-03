import React, { useState } from 'react';
import '../styles/Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el login, por ejemplo, enviando los datos a tu API
    console.log('Correo electrónico:', email);
    console.log('Contraseña:', password);
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
      </div>
    </div>
  );
}

export default Login;
