import { useNavigate } from "react-router-dom";

export default function Cart() {
  const navigate = useNavigate();

  return (
    <div style={box}>
      <h2>🛒 Cart Page</h2>
      <p>Product: Perfume</p>
      <p>Price: ₹500</p>

      <button onClick={() => navigate("/payment")}>
        Proceed to Payment
      </button>
    </div>
  );
}

const box = {
  padding: "40px",
  textAlign: "center"
};
