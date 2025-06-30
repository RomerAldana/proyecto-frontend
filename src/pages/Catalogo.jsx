import { Link } from 'react-router-dom';

export default function Catalogo() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1 className="catalogo-tittle">Catálogo de Postres</h1>
      <div className="catalogo-grid">
        <div className="producto-card">
          <img src="/src/assets/img/producto2.jpg" alt="Pastel de Chocolate" className="producto-img" />
          <h2>Pasteles</h2>
          <p>Deliciosos pasteles con diferentes sabores y coberturas.</p>
          <Link to="/producto/pasteles" className="ver-mas-link">Ver más</Link>
        </div>
        <div className="producto-card">
          <img src="/src/assets/img/producto.jpg" alt="Tarta de Queso" className="producto-img" />
          <h2>Galletas</h2>
          <p>Galletas de gran variedad en sabores, formas y colores.</p>
          <Link to="/producto/galletas" className="ver-mas-link">Ver más</Link>
        </div>
        <div className="producto-card">
          <img src="/src/assets/img/producto3.avif" alt="Flan Casero" className="producto-img" />
          <h2>Quesillo</h2>
          <p>Quesillo tradicional.</p>
          <Link to="/producto/quesillo" className="ver-mas-link">Ver más</Link>
        </div>
        <div className="producto-card">
          <img src="/src/assets/img/producto1.jpg" alt="Brownie de Nuez" className="producto-img" />
          <h2>Ponques</h2>
          <p>Ponques con y sin cobertura de vainilla y chocolate.</p>
          <Link to="/producto/ponques" className="ver-mas-link">Ver más</Link>
        </div>
        <div className="producto-card">
          <img src="/src/assets/img/producto.jpg" alt="Pasapalos dulces" className="producto-img" />
          <h2>Pasapalos dulces</h2>
          <p>Tarta fresca con frutas de temporada y crema pastelera.</p>
          <Link to="/producto/tarta-frutas" className="ver-mas-link">Ver más</Link>
        </div>
        <div className="producto-card">
          <img src="/src/assets/img/producto.jpg" alt="Pasapalos salados" className="producto-img" />
          <h2>Pasapalos salados</h2>
          <p>Todo tipo de pasapalos salados.</p>
          <Link to="/producto/cupcakes" className="ver-mas-link">Ver más</Link>
        </div>
      </div>
    </div>
  )
}
