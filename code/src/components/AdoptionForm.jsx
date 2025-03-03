import React, { useState } from 'react';
import '../styles/AdoptionForm.css';

function AdoptionForm() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [catName, setCatName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar la solicitud a tu backend
    console.log('Solicitud de adopción:', { fullName, email, phone, catName, message });
  };

  return (
    <div className="adoption-form-page">
      <div className="adoption-form-container">
        <h2>Solicitud de Adopción</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Nombre completo:</label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Ingresa tu nombre completo"
              required
            />
          </div>
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
            <label htmlFor="phone">Teléfono:</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Ingresa tu número de teléfono"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="catName">Nombre del gato:</label>
            <input
              type="text"
              id="catName"
              value={catName}
              onChange={(e) => setCatName(e.target.value)}
              placeholder="¿Qué gato deseas adoptar?"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensaje:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Cuéntanos por qué deseas adoptar a este gato"
              rows="4"
              required
            />
          </div>
          <button type="submit">Enviar Solicitud</button>
        </form>
      </div>
    </div>
  );
}

export default AdoptionForm;
