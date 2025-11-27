import { createContext, useState, useEffect, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const savedUser = localStorage.getItem("username");
    if (token && savedUser) {
      setUser({ username: savedUser });
    }
    setLoading(false);
  }, []);

  const register = async (username, password) => {
    try {
      const response = await fetch("http://localhost:8082/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.text();
      if (!response.ok) throw new Error(data || "Registration failed");
      return true;
    } catch (error) {
      console.error("Registration error:", error);
      throw error;
    }
  };

  const login = async (username, password) => {
    try {
      const response = await fetch("http://localhost:8082/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Invalid username or password");
      }

      const data = await response.json();
      localStorage.setItem("token", data.token);
      localStorage.setItem("username", username);
      setUser({ username });
      return true;
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
export default AuthContext;