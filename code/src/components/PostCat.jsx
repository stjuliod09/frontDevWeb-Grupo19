import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/PostCat.css";
import SideMenu from "./SideMenu";
import CatService from "../services/Cats";

function PostCat() {
  const navigate = useNavigate();

  // Estados para los datos del nuevo gato
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [age, setAge] = useState("");
  const [health, setHealth] = useState("");
  const [personality, setPersonality] = useState("");
  const [description, setDescription] = useState("");

  // Estados para controlar los modales
  const [isSuccessModalOpen, setSuccessModalOpen] = useState(false);
  const [isErrorModalOpen, setErrorModalOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newCat = {
      name,
      photo,
      age,
      health,
      personality,
      description,
      status: "Disponible",
    };

    try {
      const rawData = JSON.stringify(newCat);
      const response = await CatService.create(rawData);
      // Actualizar la imagen si es necesario
      const imgResponse = await CatService.updateImg(response.data.id, JSON.stringify({ urlImg: photo }));
      console.log('Respuesta updateImg:', imgResponse);

      if (response.status === 201) {
        // Si la respuesta es exitosa, abrimos el modal de éxito y limpiamos el formulario
        setSuccessModalOpen(true);
        setName("");
        setPhoto("");
        setAge("");
        setHealth("");
        setPersonality("");
        setDescription("");
      } else {
        // En caso de error, mostramos el modal de error
        setErrorModalOpen(true);
      }
    } catch (error) {
      console.error("Error al publicar gato:", error);
      setErrorModalOpen(true);
    }
  };

  const closeSuccessModal = () => {
    setSuccessModalOpen(false);
    navigate("/"); // Redirige a la lista de gatos tras cerrar el modal
  };

  const closeErrorModal = () => {
    setErrorModalOpen(false);
  };

  return (
    <div className="page-container">
      {/* Menú lateral */}
      <SideMenu />

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
            <button type="submit" >Publicar Gato</button>
            </form>
        </div>
      </div>

      {/* Modal de éxito */}
      {isSuccessModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>¡Gato publicado exitosamente!</h3>
            <p>El nuevo gato ha sido publicado correctamente.</p>
            <button onClick={closeSuccessModal}>Cerrar</button>
          </div>
        </div>
      )}

      {/* Modal de error */}
      {isErrorModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>Error al publicar gato</h3>
            <p>
              Ha ocurrido un error al intentar publicar el gato. Intenta
              nuevamente.
            </p>
            <button onClick={closeErrorModal}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PostCat;
