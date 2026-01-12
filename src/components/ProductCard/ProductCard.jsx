import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/cartSlice';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="border p-4 rounded shadow">
      <img src={product.image} className="h-40 w-full object-cover" />
      <h3 className="font-semibold mt-2">{product.name}</h3>
      <p>${product.price}</p>

      <div className="flex justify-between mt-2">
        <Link to={`/product/${product.id}`} className="text-blue-600">
          View
        </Link>
        <button
          onClick={() => dispatch(addToCart(product))}
          className="bg-green-600 text-white px-3 py-1 rounded"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
