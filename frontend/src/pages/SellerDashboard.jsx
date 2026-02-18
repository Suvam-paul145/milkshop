import { useState } from "react";
import api from "../services/api";

function SellerDashboard() {
  const [milk, setMilk] = useState({
    milkName: "",
    description: "",
    price: "",
    source: ""
  });

  const addMilk = async () => {
    await api.post("/products/add", milk);
    alert("Milk added successfully");
  };

  return (
    <div>
      <h2>Seller Dashboard</h2>

      <input placeholder="Milk Name" onChange={e => setMilk({...milk, milkName: e.target.value})} />
      <input placeholder="Description" onChange={e => setMilk({...milk, description: e.target.value})} />
      <input placeholder="Price" onChange={e => setMilk({...milk, price: e.target.value})} />
      <input placeholder="Source" onChange={e => setMilk({...milk, source: e.target.value})} />

      <button onClick={addMilk}>Add Milk</button>
    </div>
  );
}

export default SellerDashboard;
