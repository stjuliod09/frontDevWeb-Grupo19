import React from 'react';
import { useParams, Link } from 'react-router-dom';
import '../styles/CatDetail.css';
import SideMenu from './SideMenu';

const cats = [
  {
    id: 1,
    name: 'Mittens',
    photo: 'data:image/jpeg;base64,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',
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
    description: 'Disfruta de la tranquilidad y el sol.',
    status:"disponible"
  }
];


function CatDetail() {
  const { id } = useParams();
  const cat = cats.find((c) => c.id === Number(id));

  

  if (!cat) {
    return (
      <div className="cat-detail-container">
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
          <img
            src={cat.photo}
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
  <Link to="/cats">¡Adoptar!</Link>
</div>

      </div>
    </div>
  );
}

export default CatDetail;
