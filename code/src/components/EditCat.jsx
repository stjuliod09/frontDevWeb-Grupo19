import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/EditCat.css';
import SideMenu from './SideMenu';
import CatService from '../services/Cats';

function EditCat() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Estado para controlar la carga y errores
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Estados para la información del gato
  const [originalName, setOriginalName] = useState(''); // ← Nuevo estado para el nombre original
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState('');
  const [age, setAge] = useState('');
  const [health, setHealth] = useState('');
  const [personality, setPersonality] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    async function fetchCat() {
      try {
        const response = await CatService.getId(id);
        if (response && response.status === 200) {
          const catData = response.data;

          // Guardamos el nombre original en un estado separado
          setOriginalName(catData.name || '');

          // El resto de estados para edición
          setName(catData.name || '');
          setPhoto(catData.photo || (catData.images && catData.images[[catData.images.length - 1]]) || '');
          setAge(catData.age || '');
          setHealth(catData.health || '');
          setPersonality(catData.personality || '');
          setDescription(catData.description || '');
        } else {
          setError('Error al cargar la información del gato.');
        }
      } catch (e) {
        setError('Error al cargar la información del gato.');
      } finally {
        setLoading(false);
      }
    }
    fetchCat();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Datos para actualizar la info principal
    const updatedInfo = {
      name,
      age,
      health,
      personality,
      description,
    };

    try {
      // Actualizar la información principal
      console.log('Datos a enviar:', updatedInfo);
      const updateResponse = await CatService.update(id, JSON.stringify(updatedInfo));
      console.log('Respuesta update:', updateResponse);

      // Actualizar la imagen si es necesario
      const imgResponse = await CatService.updateImg(id, JSON.stringify({ urlImg: photo }));
      console.log('Respuesta updateImg:', imgResponse);

      // Redirige al detalle del gato
      navigate(`/cats/${id}`);
    } catch (err) {
      console.error('Error al actualizar el gato:', err);
      setError('Error al actualizar el gato.');
    }
  };

  if (loading) {
    return (
      <div className="page-container">
        <SideMenu />
        <div className="edit-cat-page">
          <div className="edit-cat-container">
            <h2>Cargando...</h2>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="page-container">
        <SideMenu />
        <div className="edit-cat-page">
          <div className="edit-cat-container">
            <h2>{error}</h2>
            <button onClick={() => navigate('/')}>Volver</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <SideMenu />
      <div className="edit-cat-page">
        <div className="edit-cat-container">
          {/* Usamos originalName para el título, así no cambia cuando se edita el campo Nombre */}
          <h2>Editar Información de {originalName}</h2>
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
