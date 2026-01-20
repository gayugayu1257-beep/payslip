import { useLocation } from "react-router-dom";
import { generatePDF } from "../components/InvoicePDF";

export default function Success() {
  const { state } = useLocation();

  const data = {
    name: "Demo User",
    email: "demo@gmail.com",
    amount: 500
  };

  return (
    <div style={box}>
      <h2>✅ Payment Successful</h2>
      <p>Payment ID: {state?.paymentId}</p>

      <button onClick={() => generatePDF(data)}>
        Download Invoice PDF
      </button>
    </div>
  );
}

const box = {
  padding: "40px",
  textAlign: "center"
};
