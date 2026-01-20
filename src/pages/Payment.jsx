import { useNavigate } from "react-router-dom";

export default function Payment() {
  const navigate = useNavigate();

  const handlePayment = () => {
    if (!window.Razorpay) {
      alert("Razorpay SDK not loaded");
      return;
    }

    const options = {
      key: "rzp_test_1DP5mmOlF5G5ag", // official Razorpay public test key
      amount: 500 * 100,
      currency: "INR",
      name: "MyShop",
      description: "Dummy Test Payment",

      handler: function (response) {
        // SUCCESS FLOW ✅
        navigate("/success", {
          state: {
            paymentId: response.razorpay_payment_id
          }
        });
      },

      modal: {
        ondismiss: function () {
          alert("Payment cancelled by user");
        }
      },

      theme: {
        color: "#0f172a"
      }
    };

    const rzp = new window.Razorpay(options);

    rzp.on("payment.failed", function () {
      alert("Oops! Something went wrong.\nPayment Failed");
    });

    rzp.open();
  };

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h2>💳 Payment Page</h2>
      <p>Total Amount: ₹500</p>
      <button onClick={handlePayment}>Pay with Razorpay</button>
    </div>
  );
}
