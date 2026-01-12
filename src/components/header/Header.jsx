import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const cartCount = useSelector(state => state.cart.items.length);

  return (
    <header className="navbar navbar-expand-lg navbar-dark bg-primary px-3">
      <span className="navbar-brand mb-0 h1">E-commerce Frontend</span>

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/products" className="nav-link">Products</Link>
          </li>
          <li className="nav-item">
            <Link to="/cart" className="nav-link">Cart ({cartCount})</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
