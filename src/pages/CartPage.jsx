import Cart from '../components/Cart/Cart';
import Checkout from '../components/Checkout/Checkout';
import "./CartPage.css"

const CartPage = () => {
  return (
    <>
    <div className="content">
      <h2 className="mb-4">Your Cart</h2>

      <div className="row g-3">
        <div className="col-md-6">
          <Cart />
        </div>
        <div className="col-md-6">
          <Checkout />
        </div>
      </div>
    </div>
    </>
  );
};

export default CartPage;
