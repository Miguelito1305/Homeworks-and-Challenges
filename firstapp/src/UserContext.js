import React, { createContext, useState, useContext } from 'react';

// Crear el contexto
const UserContext = createContext();

// Hook para usar el contexto fácilmente
export const useUser = () => useContext(UserContext);

// Proveedor para envolver la app y compartir el estado del usuario
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Estado del usuario

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};


