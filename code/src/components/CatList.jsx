import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/CatList.css";
import SideMenu from "./SideMenu";
import CatService from "../services/Cats";

function CatList() {
  const [cats, setCats] = useState([]);
  const [error, setError] = useState(null);
  const userRole = localStorage.getItem("userRole");

  useEffect(() => {
    async function fetchCats() {
      const response = await CatService.getAll();
      if (response && response.status === 200) {
        setCats(response.data);
      } else {
        setError("Error al cargar los gatos");
      }
    }
    fetchCats();
  }, []);

  return (
    <div className="page-container">
      <SideMenu />
      <div className="cat-list-container">
        <div className="cat-list">
          <h2>Gatos Para adoptar</h2>
          {error && <p className="error">{error}</p>}
          <ul>
            {cats.map((cat) => (
              <li key={cat.id} className="cat-item">

                <img
                  src={cat.images[0]}
                  alt={cat.name}
                  className="cat-photo"
                />
                <div className="cat-info">
                  <h3>{cat.name}</h3>
                  <Link to={`/cats/${cat.id}`} className="edit-link">
                    Ver Detalles
                  </Link>
                  {userRole === "admin" && (
                    <Link to={`/edit-cat/${cat.id}`} className="edit-link">
                      Editar
                    </Link>
                  )}
                </div>
              </li>
            ))}
          </ul>
          {/* Botón solo visible para administradores */}
          {userRole === "admin" && (
            <Link to="/cats/create" className="post-cat-button">
              Postear un michi
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default CatList;
