import { createContext, useContext, useEffect, useState } from "react";
import { getProfile } from "../services/auth";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  async function loadUser() {
    const token = localStorage.getItem("access");

    if (!token) {
      setLoading(false);
      return;
    }

    try {
      const profile = await getProfile();

      setUser(profile);
    } catch (error) {
      console.error(error);

      localStorage.removeItem("access");
      localStorage.removeItem("refresh");

      setUser(null);
    }

    setLoading(false);
  }

  useEffect(() => {
    loadUser();
  }, []);

  async function login(data) {
    localStorage.setItem("access", data.access);
    localStorage.setItem("refresh", data.refresh);

    await loadUser();
  }

  function logout() {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");

    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}