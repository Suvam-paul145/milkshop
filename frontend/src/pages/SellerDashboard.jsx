import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function SellerDashboard() {
  const navigate = useNavigate();
  const [milk, setMilk] = useState({
    milkName: "",
    description: "",
    price: "",
    source: ""
  });

  const addMilk = async () => {
    try {
      await api.post("/products", milk);
      alert("Milk added successfully");
    } catch (error) {
      alert("Failed to add milk");
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <div className="container">
      <h2 className="neon">Seller Dashboard</h2>

      <input placeholder="Milk Name" onChange={e => setMilk({...milk, milkName: e.target.value})} />
      <input placeholder="Description" onChange={e => setMilk({...milk, description: e.target.value})} />
      <input placeholder="Price" onChange={e => setMilk({...milk, price: e.target.value})} />
      <input placeholder="Source" onChange={e => setMilk({...milk, source: e.target.value})} />

      <button onClick={addMilk}>Add Milk</button>
      <button onClick={logout} style={{ marginTop: "10px", background: "linear-gradient(135deg, #ff006e, #ef476f)" }}>Logout</button>
    </div>
  );
}

export default SellerDashboard;
