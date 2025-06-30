import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Cupcakes() {
const navigate = useNavigate();
return (
    <div style={{ padding: '2rem' }}>
        <h1>Pasapalos salados</h1>
        <p>Cupcakes decorados con diferentes sabores y colores.</p>
        <img src="/src/assets/img/producto.jpg" alt="Cupcakes" style={{maxWidth: '300px', borderRadius: '12px'}} />
        <div style={{ height: '40px' }}></div>
    <button className="btn-atras" onClick={() => navigate('/Catalogo')}>Regresar</button>
    </div>
);
}
