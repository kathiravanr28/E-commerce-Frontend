import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProductDetail = () => {
  const { id } = useParams();
  const product = useSelector(state =>
    state.products.list.find(p => p.id === Number(id))
  );

  if (!product) return <p>Product not found</p>;

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold">{product.name}</h2>
      <p>${product.price}</p>
    </div>
  );
};

export default ProductDetail;
