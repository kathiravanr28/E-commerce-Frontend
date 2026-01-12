import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../../store/cartSlice';

const Cart = () => {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <div className="p-6">
      {items.length === 0 && <p>Cart is empty</p>}

      {items.map(item => (
        <div key={item.id} className="flex justify-between mb-4">
          <span>{item.name}</span>
          <input
            type="number"
            min="1"
            value={item.quantity}
            onChange={e =>
              dispatch(updateQuantity({ id: item.id, quantity: +e.target.value }))
            }
            className="w-16 border"
          />
          <button
            onClick={() => dispatch(removeFromCart(item.id))}
            className="text-red-600"
          >
            Remove
          </button>
        </div>
      ))}

      <h3 className="font-bold">Total: ${total.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;
