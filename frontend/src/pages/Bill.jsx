import { useLocation } from "react-router-dom";

function Bill() {
  const { state } = useLocation();
  const { product } = state;

  return (
    <div>
      <h2>Milk Bill</h2>
      <p>Milk Name: {product.milkName}</p>
      <p>Source: {product.source}</p>
      <p>Price: ₹{product.price}</p>
      <h3>Total Amount: ₹{product.price}</h3>
    </div>
  );
}

export default Bill;
