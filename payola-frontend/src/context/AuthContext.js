// src/context/AuthContext.js
import React, { createContext, useState } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const register = async (data) => {
    const response = await axios.post('http://localhost:5000/api/users/register', data);
    setUser(response.data.user);
    localStorage.setItem('token', response.data.token);
  };

  const login = async (data) => {
    const response = await axios.post('/api/users/login', data);
    setUser(response.data.user);
    localStorage.setItem('token', response.data.token);
  };

  return (
    <AuthContext.Provider value={{ user, login, register }}>
      {children}
    </AuthContext.Provider>
  );
};
