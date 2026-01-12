import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProductDetail = () => {
  const { id } = useParams();
  const product = useSelector(state =>
    state.products.list.find(p => p.id === Number(id))
  );

  if (!product) return <p>Product not found</p>;

  return (
    <div className="card mx-auto" style={{ maxWidth: '500px' }}>
      <img src={product.image} alt={product.name} className="card-img-top" style={{ height: '300px', objectFit: 'cover' }} />
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        <p className="card-text">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
