import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function CustomerDashboard() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    api.get("/products").then(res => setProducts(res.data)).catch(() => {});
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <div className="container">
      <h2 className="neon">Available Milk</h2>

      {products.map((p) => (
        <div className="card" key={p._id}>
          <h3>{p.milkName}</h3>
          <p>{p.description}</p>
          <p className="price">₹{p.price}</p>
          <button onClick={() => navigate("/bill", { state: { product: p } })}>
            Order
          </button>
        </div>
      ))}

      <button onClick={logout} style={{ marginTop: "10px", background: "linear-gradient(135deg, #ff006e, #ef476f)" }}>Logout</button>
    </div>
  );
}

export default CustomerDashboard;
