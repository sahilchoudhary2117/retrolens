import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthContext";
import "../styles/auth.css";
import { loginUser } from "../services/auth";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { login } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const data = await loginUser({
        username,
        password,
      });

      // Save tokens and load user profile
      await login(data);

      toast.success("Login Successful!");

      navigate("/");
    } catch (error) {
       console.error(error);

       console.log("Response:", error.response);

       toast.error("Login failed");
       }
  }

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h1>Welcome Back 👋</h1>

        <p>Login to continue using RetroLens.</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;