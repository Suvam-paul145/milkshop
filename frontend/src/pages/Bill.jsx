import { useLocation, useNavigate } from "react-router-dom";

function Bill() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const product = state?.product;

  if (!product) {
    return (
      <div className="container bill">
        <h2 className="neon">No product selected</h2>
        <button onClick={() => navigate("/customer")}>Go Back</button>
      </div>
    );
  }

  return (
    <div className="container bill">
      <h2 className="neon">Milk Bill</h2>
      <p>Milk Name: {product.milkName}</p>
      <p>Source: {product.source}</p>
      <p>Price: ₹{product.price}</p>
      <h3 className="total">Total Amount: ₹{product.price}</h3>
      <button onClick={() => navigate("/customer")} style={{ marginTop: "15px" }}>Go Back</button>
    </div>
  );
}

export default Bill;
