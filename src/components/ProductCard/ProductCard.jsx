import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/cartSlice';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="card product-card h-100">
      <img
        src={product.image}
        alt={product.name}
        className="card-img-top"
      />

      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">${product.price}</p>

        <div className="mt-auto d-flex justify-content-between align-items-center">
          <Link to={`/product/${product.id}`} className="btn-view">
            View
          </Link>
          <button
            onClick={() => dispatch(addToCart(product))}
            className="btn-add"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
