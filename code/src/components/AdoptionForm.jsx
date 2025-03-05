import React, { useState, useEffect } from 'react';
import SideMenu from './SideMenu';
import AdoptionService from '../services/Adoption';
import CatService from '../services/Cats';
import '../styles/AdoptionForm.css';

function AdoptionForm() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedCatId, setSelectedCatId] = useState('');
  const [message, setMessage] = useState('');
  const [cats, setCats] = useState([]);
  const [isSuccessModalOpen, setSuccessModalOpen] = useState(false);
  const [isErrorModalOpen, setErrorModalOpen] = useState(false);

  useEffect(() => {
    async function fetchCats() {
      const data = await CatService.getAll();
      if (data) {
        setCats(data.data);
      } else {
        console.log('No se pudieron obtener los gatos disponibles');
      }
    }
    fetchCats();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      full_name: fullName,
      email,
      phone,
      cat_id: selectedCatId,
      message
    };

    try {
      const rawData = JSON.stringify(data);
      const response = await AdoptionService.create(rawData);
      console.log("Respuesta de la solicitud:", response);
      if (response.status === 201) {
        setSuccessModalOpen(true);
        // Limpiar el formulario
        setFullName('');
        setEmail('');
        setPhone('');
        setSelectedCatId('');
        setMessage('');
      } else {
        setErrorModalOpen(true);
      }
    } catch (error) {
      console.log('Error al enviar la solicitud:', error);
      setErrorModalOpen(true);
    }
  };

  const closeSuccessModal = () => {
    setSuccessModalOpen(false);
  };

  const closeErrorModal = () => {
    setErrorModalOpen(false);
  };

  return (
    <div className="page-container">
      <SideMenu />
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
              <label htmlFor="catId">Selecciona el gato:</label>
              <select
                id="catId"
                value={selectedCatId}
                onChange={(e) => setSelectedCatId(e.target.value)}
                required
              >
                <option value="">Seleccione un gato</option>
                {cats.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
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

      {/* Modal de éxito */}
      {isSuccessModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>¡Solicitud enviada con éxito!</h3>
            <p>Tu solicitud de adopción ha sido enviada correctamente.</p>
            <button onClick={closeSuccessModal}>Cerrar</button>
          </div>
        </div>
      )}

      {/* Modal de error */}
      {isErrorModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>Error</h3>
            <p>Hubo un problema al enviar tu solicitud. Por favor, intenta nuevamente.</p>
            <button onClick={closeErrorModal}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdoptionForm;
