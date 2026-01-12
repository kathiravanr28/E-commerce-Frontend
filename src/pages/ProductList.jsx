import { useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard/ProductCard';

const ProductList = () => {
  const products = useSelector(state => state.products.list);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {products.map(p => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
};

export default ProductList;
