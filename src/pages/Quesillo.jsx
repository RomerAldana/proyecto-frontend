import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Quesillo() {
const navigate = useNavigate();
return (
<div style={{ padding: '2rem' }}>
    <h1 className="paginas-tittle">Quesillo</h1>
    <div className="catalogo-grid">
        <div className="producto-card">
            <img src="/src/assets/img/producto2.jpg" alt="Pastel de Chocolate" className="producto-img" />
            <h2>ponque de vainilla</h2>
            <p>Deliciosos pasteles con diferentes sabores y coberturas.</p>
        </div>

        <div className="producto-card">
            <img src="/src/assets/img/producto.jpg" alt="Tarta de Queso" className="producto-img" />
            <h2>ponque de chocolate</h2>
            <p>Galletas de gran variedad en sabores, formas y colores.</p>
        </div>

        <div className="producto-card">
            <img src="/src/assets/img/producto3.avif" alt="Flan Casero" className="producto-img" />
            <h2>ponque de choco-chips</h2>
            <p>Quesillo tradicional.</p>
        </div>
        
        <div className="producto-card">
            <img src="/src/assets/img/producto.jpg" alt="Brownie de Nuez" className="producto-img" />
            <h2>Ponques con crema pastelera</h2>
            <p>Ponques con y sin cobertura de vainilla y chocolate.</p>
        </div>
    </div>
    <div style={{ height: '40px' }}></div>
    <button className="btn-atras" onClick={() => navigate('/Catalogo')}>Regresar</button>
</div>
);
}
