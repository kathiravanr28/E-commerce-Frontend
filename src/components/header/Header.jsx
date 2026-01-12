import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Header.css';

const Header = () => {
  const cartCount = useSelector(state => state.cart.items.length);

  return (
    <header className="header-navbar navbar navbar-expand-lg mb-4">
      <span className="navbar-brand">E-commerce Frontend</span>

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/products" className="nav-link">Products</Link>
          </li>
          <li className="nav-item">
            <Link to="/cart" className="nav-link">
              Cart <span className="cart-count">{cartCount}</span>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
