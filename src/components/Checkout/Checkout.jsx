import './Checkout.css';

const Checkout = () => {
  return (
    <div className="card checkout-card mb-3">
      <h2 className="h5 mb-3">Checkout</h2>

      <input className="form-control checkout-input" placeholder="Full Name" />
      <input className="form-control checkout-input" placeholder="Address" />

      <button className="btn btn-place-order mt-2">Place Order</button>
    </div>
  );
};

export default Checkout;
