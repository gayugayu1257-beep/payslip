export default function Navbar() {
  return (
    <nav style={nav}>
      <h3>MyShop</h3>
      <div>Cart | Payment</div>
    </nav>
  );
}

const nav = {
  display: "flex",
  justifyContent: "space-between",
  padding: "15px 30px",
  background: "#111",
  color: "#fff"
};

