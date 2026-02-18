import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../services/api";

function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "customer"
  });

  const signupUser = async () => {
    try {
      await api.post("/auth/signup", form);
      alert("Signup successful! Please login.");
      navigate("/login"); // AUTO REDIRECT
    } catch {
      alert("Signup failed");
    }
  };

  return (
    <div className="container">
      <h2 className="neon">Signup</h2>

      <input placeholder="Name" onChange={e => setForm({...form, name: e.target.value})} />
      <input placeholder="Email" onChange={e => setForm({...form, email: e.target.value})} />
      <input type="password" placeholder="Password" onChange={e => setForm({...form, password: e.target.value})} />

      <select onChange={e => setForm({...form, role: e.target.value})}>
        <option value="customer">Customer</option>
        <option value="seller">Seller</option>
      </select>

      <button onClick={signupUser}>Create Account</button>

      <p style={{ marginTop: "15px", color: "#fff", textAlign: "center" }}>
        Already have an account? <Link to="/login" style={{ color: "#00f2fe" }}>Login</Link>
      </p>
    </div>
  );
}

export default Signup;

