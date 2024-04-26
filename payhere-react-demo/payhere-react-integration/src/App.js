import logo from "./logo.svg";
import PaymentModal from "./models/paymentmodel";
import "./App.css";

function App() {
  return (
    <div className="App">
      <PaymentModal
        // Use a unique value for the orderId
        orderId={45896588}
        name="Just For You Mom Ribbon Cake"
        amount="4500"
      />
    </div>
  );
}

export default App;
