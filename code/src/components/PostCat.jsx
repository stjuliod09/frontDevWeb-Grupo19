import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/PostCat.css';
import SideMenu from './SideMenu';

function PostCat() {
  const navigate = useNavigate();

  // Estados para los datos del nuevo gato
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState('');
  const [age, setAge] = useState('');
  const [health, setHealth] = useState('');
  const [personality, setPersonality] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCat = { name, photo, age, health, personality, description };
    
    console.log('Nuevo gato publicado:', newCat);
    
    // Aquí enviarías la información al backend
    // fetch('/api/cats', { method: 'POST', body: JSON.stringify(newCat) })

    // Redirige a la lista de gatos tras la publicación
    navigate('/cats');
  };

  return (
    <div className="page-container">
      {/* Menú lateral */}
      <SideMenu 
        userRole="admin" 
        menuItems={[
          { text: 'Donaciones', url: '/donations', roles: ['admin', 'user'] },
          { text: 'Lista de michis', url: '/cats', roles: ['admin', 'user'] }
        ]}
      />

      {/* Contenido principal */}
      <div className="post-cat-page">
        <div className="post-cat-container">
          <h2>Publicar Nuevo Gato</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nombre:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="photo">URL de la foto:</label>
              <input
                type="text"
                id="photo"
                value={photo}
                onChange={(e) => setPhoto(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="age">Edad:</label>
              <input
                type="text"
                id="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="health">Condición de salud:</label>
              <input
                type="text"
                id="health"
                value={health}
                onChange={(e) => setHealth(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="personality">Personalidad:</label>
              <input
                type="text"
                id="personality"
                value={personality}
                onChange={(e) => setPersonality(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Descripción:</label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>
            <button type="submit">Publicar Gato</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PostCat;
