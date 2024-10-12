import React, { useState } from 'react';
import { auth } from '../firebase'; // Importamos la configuración de Firebase
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'; // Importamos las funciones de autenticación

const LoginRegister = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isRegistering) {
      // Registro de usuario
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Usuario registrado con éxito");
      } catch (error) {
        alert(error.message);
      }
    } else {
      // Inicio de sesión
      try {
        await signInWithEmailAndPassword(auth, email, password);
        alert("Inicio de sesión exitoso");
      } catch (error) {
        alert(error.message);
      }
    }
  };

  return (
    <div>
      <h1>{isRegistering ? 'Registrar' : 'Iniciar Sesión'}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">
          {isRegistering ? 'Registrar' : 'Iniciar Sesión'}
        </button>
      </form>
      <button onClick={() => setIsRegistering(!isRegistering)}>
        {isRegistering ? '¿Ya tienes una cuenta? Inicia sesión' : '¿No tienes cuenta? Regístrate'}
      </button>
    </div>
  );
};

export default LoginRegister;
