import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function TartaFrutas() {
const navigate = useNavigate();
return (
    <div style={{ padding: '2rem' }}>
        <h1>Pasapalos dulces</h1>
        <p>Tarta fresca con frutas de temporada y crema pastelera.</p>
        <img src="/src/assets/img/producto.jpg" alt="Tarta de Frutas" style={{maxWidth: '300px', borderRadius: '12px'}} />
        <div style={{ height: '40px' }}></div>
    <button className="btn-atras" onClick={() => navigate('/Catalogo')}>Regresar</button>
    </div>
);
}
