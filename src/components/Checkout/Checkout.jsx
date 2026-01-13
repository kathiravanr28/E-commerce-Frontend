import React, { useState } from "react";
import { useSelector } from "react-redux";

const Checkout = () => {
  const items = useSelector((state) => state.cart.items);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    payment: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order placed successfully!");
  };

  return (
    <div className="container my-4">
      <h2 className="mb-4">Checkout</h2>
      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="row">
          <div className="col-md-6">
            <h4>Order Summary</h4>
            <ul className="list-group mb-3">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  {item.name} x {item.quantity}
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </li>
              ))}
              <li className="list-group-item d-flex justify-content-between">
                <strong>Total</strong>
                <strong>${total.toFixed(2)}</strong>
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <h4>Billing Details</h4>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Address</label>
                <textarea
                  name="address"
                  className="form-control"
                  value={formData.address}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="mb-3">
                <label className="form-label">Payment Method</label>
                <select
                  name="payment"
                  className="form-select"
                  value={formData.payment}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select</option>
                  <option value="card">Credit Card</option>
                  <option value="paypal">PayPal</option>
                </select>
              </div>
              <button type="submit" className="btn btn-success">
                Place Order
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
