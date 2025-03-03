import React from 'react';
import '../styles/AdoptionRequests.css';

const requests = [
  {
    id: 1,
    fullName: 'Juan Pérez',
    email: 'juan@example.com',
    phone: '123456789',
    catName: 'Mittens',
    message: 'Quiero darle un hogar a este gatito porque me han dicho que es muy cariñoso.'
  },
  {
    id: 2,
    fullName: 'María Gómez',
    email: 'maria@example.com',
    phone: '987654321',
    catName: 'Whiskers',
    message: 'Siempre he querido adoptar un gato y este me enamoró con su ternura.'
  }
];

function AdoptionRequests() {
  const handleAccept = (id) => {
    console.log(`Solicitud ${id} aceptada`);
    // Lógica para aceptar la solicitud
  };

  const handleReject = (id) => {
    console.log(`Solicitud ${id} rechazada`);
    // Lógica para rechazar la solicitud
  };

  return (
    <div className="adoption-requests-page">
      <div className="adoption-requests-container">
        <h2>Solicitudes de Adopción</h2>
        {requests.length === 0 ? (
          <p>No hay solicitudes de adopción.</p>
        ) : (
          <ul className="requests-list">
            {requests.map((request) => (
              <li key={request.id} className="request-item">
                <h3>{request.fullName}</h3>
                <p><strong>Correo:</strong> {request.email}</p>
                <p><strong>Teléfono:</strong> {request.phone}</p>
                <p><strong>Gato:</strong> {request.catName}</p>
                <p><strong>Mensaje:</strong> {request.message}</p>
                <div className="request-buttons">
                  <button className="accept-btn" onClick={() => handleAccept(request.id)}>Aceptar</button>
                  <button className="reject-btn" onClick={() => handleReject(request.id)}>Rechazar</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default AdoptionRequests;
