import { useState } from "react";
import "../styles/auth.css";
import { registerUser } from "../services/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

 async function handleSubmit(e) {
  e.preventDefault();

  try {
    await registerUser({
      username,
      email,
      password,
    });

    toast.success("Registration Successful!");

    navigate("/login");

  } catch (error) {

    console.error(error);

    toast.error("Registration failed.");

  }
}

  return (
    <div className="auth-page">
      <div className="auth-container">

        <h1>Create Account 🚀</h1>

        <p>Join RetroLens today.</p>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">
            Register
          </button>

        </form>

      </div>
    </div>
  );
}

export default Register;