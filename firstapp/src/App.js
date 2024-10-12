import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useUser, UserProvider } from './UserContext'; // Contexto para el usuario
import Home from './components/Home';
import Profile from './components/Profile';
import Dashboard from './components/Dashboard';
import LoginRegister from './components/LoginRegister'; // Componente para el login y registro

function App() {
  const { user } = useUser(); // Accedemos al usuario registrado desde el contexto

  return (
    <Router>
      <Routes>
        {/* Ruta pública: Home */}
        <Route path="/" element={<Home />} />

        {/* Ruta para el login/registro */}
        <Route path="/login" element={<LoginRegister />} />

        {/* Rutas protegidas: Profile y Dashboard */}
        <Route path="/profile" element={user ? <Profile /> : <Navigate to="/login" />} />
        <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" />} />

        {/* Redirecciona a Home si se intenta acceder a una ruta inválida */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default function MainApp() {
  return (
    <UserProvider>
      <App />
    </UserProvider>
  );
}
