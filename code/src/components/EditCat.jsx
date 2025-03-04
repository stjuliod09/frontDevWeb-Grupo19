import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/EditCat.css';
import SideMenu from './SideMenu';

function EditCat() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Datos de ejemplo
  const cats = [
    {
      id: 1,
      name: 'Mittens',
      photo: 'https://source.unsplash.com/featured/?cat',
      age: '2 años',
      health: 'Buena',
      personality: 'Juguetón y cariñoso',
      description: 'Le encanta jugar y es muy amigable.'
    },
    {
      id: 2,
      name: 'Whiskers',
      photo: 'https://source.unsplash.com/featured/?kitten',
      age: '3 años',
      health: 'Excelente',
      personality: 'Tranquilo y relajado',
      description: 'Disfruta de la tranquilidad y el sol.'
    }
  ];

  const cat = cats.find(c => c.id === Number(id));
  if (!cat) {
    return <div>Gato no encontrado</div>;
  }

  const [name, setName] = useState(cat.name);
  const [photo, setPhoto] = useState(cat.photo);
  const [age, setAge] = useState(cat.age);
  const [health, setHealth] = useState(cat.health);
  const [personality, setPersonality] = useState(cat.personality);
  const [description, setDescription] = useState(cat.description);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Información actualizada:', { name, photo, age, health, personality, description });
    navigate(`/cats/${cat.id}`);
  };

  return (
    <div className="page-container">
      <SideMenu />
      <div className="edit-cat-page">
        <div className="edit-cat-container">
          <h2>Editar Información de {cat.name}</h2>
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
            <button type="submit">Guardar Cambios</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditCat;
