import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../services/api";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginUser = async () => {
    try {
      const res = await api.post("/auth/login", { email, password });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);

      if (res.data.role === "seller") {
        navigate("/seller");
      } else {
        navigate("/customer");
      }
    } catch {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="container">
      <h2 className="neon">Login</h2>

      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />

      <button onClick={loginUser}>Login</button>

      <p style={{ marginTop: "15px", color: "#fff", textAlign: "center" }}>
        New user? <Link to="/signup" style={{ color: "#00f2fe" }}>Signup</Link>
      </p>
    </div>
  );
}

export default Login;

