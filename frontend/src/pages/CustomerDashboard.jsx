import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function CustomerDashboard() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    api.get("/products").then(res => setProducts(res.data));
  }, []);

  return (
    <div>
      <h2>Available Milk</h2>

      {products.map((p) => (
        <div key={p._id}>
          <h3>{p.milkName}</h3>
          <p>{p.description}</p>
          <p>₹{p.price}</p>
          <button onClick={() => navigate("/bill", { state: { product: p } })}>
            Order
          </button>
        </div>
      ))}
    </div>
  );
}

export default CustomerDashboard;
