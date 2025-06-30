import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Catalogo from './pages/Catalogo'
import Login from './pages/Login'
import Register from './pages/Register'
import Pasteles from './pages/Pasteles';
import Galletas from './pages/Galletas';
import Quesillo from './pages/Quesillo';
import Ponques from './pages/Ponques';
import TartaFrutas from './pages/TartaFrutas';
import Cupcakes from './pages/Cupcakes';
import { Link } from 'react-router-dom'
import './Navbar.css';

function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Catalogo" element={<Catalogo />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/producto/pasteles" element={<Pasteles />} />
          <Route path="/producto/galletas" element={<Galletas />} />
          <Route path="/producto/quesillo" element={<Quesillo />} />
          <Route path="/producto/ponques" element={<Ponques />} />
          <Route path="/producto/tarta-frutas" element={<TartaFrutas />} />
          <Route path="/producto/cupcakes" element={<Cupcakes />} />
        </Routes>
      </>
    </BrowserRouter>
  )
}

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Dulce Encanto</h2>
      <ul className="nav-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/Catalogo">Catálogo</Link></li>
        <li><Link to="/login">Iniciar Sesión</Link></li>
        <li><Link to="/register">Registrarse</Link></li>
        <li>
          <button className="cart-btn" title="Carrito de compras">
            <span role="img" aria-label="carrito" style={{fontSize: '1.5rem'}}>🛒</span>
          </button>
        </li>
      </ul>
    </nav>
  );
}



export default App
