import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../../store/cartSlice';
import './Cart.css';

const Cart = () => {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="card cart-card mb-3">
      <h2 className="h5 mb-3">Shopping Cart</h2>

      {items.length === 0 && <p className="text-muted">Your cart is empty</p>}

      {items.map(item => (
        <div key={item.id} className="d-flex justify-content-between align-items-center mb-3">
          <span>{item.name}</span>

          <input
            type="number"
            min="1"
            value={item.quantity}
            onChange={e =>
              dispatch(updateQuantity({ id: item.id, quantity: Number(e.target.value) }))
            }
            className="form-control cart-input"
          />

          <button
            onClick={() => dispatch(removeFromCart(item.id))}
            className="btn btn-remove btn-sm"
          >
            Remove
          </button>
        </div>
      ))}

      <h3 className="fw-semibold mt-3">Total: ${total.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;
