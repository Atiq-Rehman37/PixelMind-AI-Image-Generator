import { createContext, useEffect, useState } from "react";
import authApi from "../api/authApi";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);

  const [token, setToken] = useState(
    localStorage.getItem("token") || null
  );

  const [loading, setLoading] = useState(true);

  // ======================
  // Load User on Refresh
  // ======================

  useEffect(() => {

    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    setLoading(false);

  }, []);

  // ======================
  // Register
  // ======================

  const register = async (formData) => {

    const response = await authApi.post(
      "/register",
      formData
    );

    const { token, user } = response.data;

    localStorage.setItem("token", token);

    localStorage.setItem(
      "user",
      JSON.stringify(user)
    );

    setToken(token);

    setUser(user);

    return response.data;

  };

  // ======================
  // Login
  // ======================

  const login = async (formData) => {

    const response = await authApi.post(
      "/login",
      formData
    );

    const { token, user } = response.data;

    localStorage.setItem("token", token);

    localStorage.setItem(
      "user",
      JSON.stringify(user)
    );

    setToken(token);

    setUser(user);

    return response.data;

  };

  // ======================
  // Logout
  // ======================

  const logout = () => {

    localStorage.removeItem("token");

    localStorage.removeItem("user");

    setUser(null);

    setToken(null);

  };

  return (

    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        login,
        register,
        logout,
      }}
    >

      {children}

    </AuthContext.Provider>

  );

};

export default AuthProvider;