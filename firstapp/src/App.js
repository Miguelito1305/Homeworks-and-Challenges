import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react'; // Importamos useState para manejar el estado de login
import Home from './components/Home';
import About from './components/About';
import Profile from './components/Profile';
import Dashboard from './components/Dashboard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para manejar el login falso

  // Función para simular el login
  const fakeLogin = () => setIsLoggedIn(true);
  // Función para simular el logout
  const fakeLogout = () => setIsLoggedIn(false);

  return (
    <Router>
      <div>
        {/* Botones para simular el login/logout */}
        <button onClick={fakeLogin}>Iniciar Sesión Falsa</button>
        <button onClick={fakeLogout}>Cerrar Sesión Falsa</button>

        <p>{isLoggedIn ? 'Estás logueado' : 'No estás logueado'}</p> {/* Indicador del estado de login */}

        <Routes>
          {/* Rutas públicas */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          {/* Rutas privadas (requiere login) */}
          <Route
            path="/profile"
            element={isLoggedIn ? <Profile /> : <Navigate to="/" />} // Redirige a Home si no está logueado
          />
          <Route
            path="/dashboard"
            element={isLoggedIn ? <Dashboard /> : <Navigate to="/" />} // Redirige a Home si no está logueado
          />

          {/* Ruta de redirección */}
          <Route path="/redirect" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
