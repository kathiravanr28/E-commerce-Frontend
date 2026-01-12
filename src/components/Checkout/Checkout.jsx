import './Checkout.css';

const Checkout = () => {
  return (
    <div className="card p-3 mb-3">
      <h2 className="h5 mb-3">Checkout</h2>

      <input className="form-control mb-3 checkout-input" placeholder="Full Name" />
      <input className="form-control mb-3 checkout-input" placeholder="Address" />

      <button className="btn btn-primary w-100">
        Place Order
      </button>
    </div>
  );
};

export default Checkout;
