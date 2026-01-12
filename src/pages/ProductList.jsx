import { useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard/ProductCard';

const ProductList = () => {
  const products = useSelector(state => state.products.list);

  return (
    <div>
      <h2 className="mb-4">Products</h2>

      <div className="row g-3">
        {products.map(product => (
          <div key={product.id} className="col-12 col-sm-6 col-md-4">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
