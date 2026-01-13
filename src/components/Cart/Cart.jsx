import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../../store/cartSlice";

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container my-4">
      <h2 className="mb-4">Shopping Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <table className="table table-bordered align-middle">
          <thead className="table-light">
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>${item.price.toFixed(2)}</td>
                <td>
                  <div className="d-flex align-items-center justify-content-center">
                    <button
                      className="btn btn-sm btn-secondary me-2"
                      onClick={() =>
                        dispatch(updateQuantity({ id: item.id, amount: -1 }))
                      }
                    >
                      -
                    </button>
                    {item.quantity}
                    <button
                      className="btn btn-sm btn-secondary ms-2"
                      onClick={() =>
                        dispatch(updateQuantity({ id: item.id, amount: 1 }))
                      }
                    >
                      +
                    </button>
                  </div>
                </td>
                <td>${(item.price * item.quantity).toFixed(2)}</td>
                <td>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {items.length > 0 && (
        <h4 className="text-end">Total: ${total.toFixed(2)}</h4>
      )}
    </div>
  );
};

export default Cart;
