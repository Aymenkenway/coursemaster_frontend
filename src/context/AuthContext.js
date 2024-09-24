import React, { createContext, useState } from 'react'
import apiService from '../services/apiService'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  const login = async (email, password) => {
    const userData = await apiService.login(email, password)
    setUser(userData)
  }

  const signup = async (name, email, password) => {
    const userData = await apiService.signup(name, email, password)
    setUser(userData)
  }

  return (
    <AuthContext.Provider value={{ user, login, signup }}>
      {children}
    </AuthContext.Provider>
  )
}
