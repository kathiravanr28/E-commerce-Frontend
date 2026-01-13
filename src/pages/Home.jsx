import "./Home.css"
const Home = () => {
  return (
    <div className="text-center py-5">
      <h2 className="display-5 mb-3">Welcome to E-commerce Store</h2>
      <p className="text-muted mx-auto" style={{ maxWidth: '600px' }}>
        Shop the best products at the best price. Explore our wide range of products
        and enjoy a seamless shopping experience.
      </p>
      <a href="/products" className="btn btn-primary mt-3">
        Browse Products
      </a>
    </div>
  );
};

export default Home;
