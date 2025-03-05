import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/CatDetail.css";
import SideMenu from "./SideMenu";
import CatService from "../services/Cats";

function CatDetail() {
  const { id } = useParams();
  const [cat, setCat] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCat() {
      const response = await CatService.getId(id);
      if (response && response.status === 200) {
        setCat(response.data);
      } else {
        setError("Error al cargar el gato");
      }
      setLoading(false);
    }
    fetchCat();
  }, [id]);

  if (loading) {
    return (
      <div className="cat-detail-container-loading">
        <SideMenu />
        <div className="cat-detail">
          <h2>Cargando...</h2>
        </div>
      </div>
    );
  }

  if (error || !cat) {
    return (
      <div className="cat-detail-container-not-found">
        <SideMenu />
        <div className="cat-detail">
          <h2>Gato no encontrado</h2>
          <Link to="/cats">Volver a la lista</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cat-detail-container">
      <SideMenu />
      <div className="cat-detail">
        <h2>{cat.name}</h2>
        <div className="cat-photo-wrapper">
          {/* Se muestra la primera imagen del array 'images', si existe, o se usa una foto por defecto */}
          <img
            src={
              cat.images && cat.images.length > 0
                ? cat.images[[cat.images.length - 1]]
                : cat.profilePhoto
            }
            alt={cat.name}
            className="cat-photo-detail"
          />
        </div>
        <p>
          <strong>Edad:</strong> {cat.age}
        </p>
        <p>
          <strong>Condición de salud:</strong> {cat.health}
        </p>
        <p>
          <strong>Personalidad:</strong> {cat.personality}
        </p>
        <p>
          <strong>Descripción:</strong> {cat.description}
        </p>
        <div className="cat-detail-buttons">
          <Link to="/cats">Volver a la lista</Link>
          <Link to="/adoption">¡Adoptar!</Link>
          {localStorage.getItem("userRole") === "admin" && (
            <Link to={`/edit-cat/${cat.id}`} className="edit-link">
              Editar
            </Link>
          )} 
        </div>
      </div>
    </div>
  );
}

export default CatDetail;
