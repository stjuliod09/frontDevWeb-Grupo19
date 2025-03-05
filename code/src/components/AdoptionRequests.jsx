import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SideMenu from "./SideMenu"; 
import "../styles/AdoptionRequests.css";
import adoptionService from "../services/Adoption";

function AdoptionRequests() {
  const [requests, setRequests] = useState([]);

  // Función para obtener las solicitudes
  const fetchAdoptions = async () => {
    const response = await adoptionService.getAll();
    if (response && response.status === 200) {
      setRequests(response.data);
    }
  };

  // Cargar solicitudes al montar el componente
  useEffect(() => {
    fetchAdoptions();
  }, []);

  // Función para aceptar o rechazar una solicitud
  const handleAction = async (id, status) => {
    try {
      const body=JSON.stringify(status)
      const response = await adoptionService.updateAdoption(id, body);
      if (response && response.status === 200) {
        fetchAdoptions();
      }
    } catch (error) {
      console.error("Error al actualizar la solicitud:", error);
    }
  };

  return (
    <div className="page-container">
      <SideMenu />
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
                    <button
                      className="accept-btn"
                      onClick={() => handleAction(request.id, {status:"Adoptado"})}
                    >
                      Aceptar
                    </button>
                    <button
                      className="reject-btn"
                      onClick={() => handleAction(request.id, {status:"Rechazado"})}
                    >
                      Rechazar
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdoptionRequests;
